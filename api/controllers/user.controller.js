import { errorHandler } from "../Utils/error.js";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
export const test = (req, res) => {
  res.json({
    message: "api route is working",
  });
};
export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "you can update only your own account"));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    ); //new:true   save the updated user with the new information

    const { password, ...rest } = updatedUser._doc;//updatedUser._doc is a way to get just the basic data from the updated user
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
