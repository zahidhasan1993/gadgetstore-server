import express from "express";
import User from "../models/userModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const allUser = await User.find();

  res.send(allUser);
});


export default router;