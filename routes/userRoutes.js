import express from "express";
import { authUser, getAllUser } from "../controller/userController.js";

const router = express.Router();
//get all users
router.route("/").get(getAllUser);

//auth user POST

router.post("/login", authUser)

export default router;