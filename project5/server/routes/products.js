import express from "express"
import asyncHandler from "express-async-handler"
import * as productController from "../controllers/productController.js";

const productRoute = express.Router();

productRoute.get("/", asyncHandler(productController.getAllProducts));

productRoute.get("/:id", asyncHandler(productController.getSingleProduct));

export default productRoute;