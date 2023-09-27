import express from "express"
import asyncHandler from "express-async-handler"
import * as userController from "../controllers/userController.js";
import protect from "../middleware/AuthMiddleware.js";

const userRoute = express.Router();

//LOGIN
userRoute.post("/login", asyncHandler(userController.handleLogin));

userRoute.get("/profile", protect, asyncHandler(userController.handleProfile));

export default userRoute;