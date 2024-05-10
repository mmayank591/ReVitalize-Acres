import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res,next) => {
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
