import express from "express";
import { authUser, getAllUser, userProfile } from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
//get apis
router.route("/").get(getAllUser);
router.route("/profile").get(protect, userProfile);
//auth user POST

router.post("/login", authUser);



export default router;