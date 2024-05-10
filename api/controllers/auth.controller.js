import { errorHandler } from "../Utils/error.js";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  //salt
  const hashedPassword = bcryptjs.hashSync(password, 10); //hashsyc isliye use kiye kyko await use na karna pade
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save(); //it can take time therefore we have used await so that the code stays in this line until this operation finishes
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "Invalid Credentials!"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
    
  } catch (error) {
    next(error);
  }
};
