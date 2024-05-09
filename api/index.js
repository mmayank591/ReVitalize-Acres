import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from'./routes/user.route.js';
import authRouter from './routes/auth.route.js'
dotenv.config();
const app = express();
app.use((express.json()));
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connntected to db");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(3000, () => {
  console.log("server is running on port 3000...");
});


//routes
app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);