import express from "express"
import User from "./models/UserModel.js"
import Product from "./models/ProductModel.js"
import users from "./data/Users.js"
import products from "./data/Products.js"
import asyncHandler from "express-async-handler"

const ImportData = express.Router()

ImportData.post(
    "/user",
    asyncHandler(async (req, res) => {
        await User.deleteMany({});
        const importUser = await User.insertMany(users);
        res.send({ importUser });
    })
);

ImportData.post(
    "/products",
    asyncHandler(async (req, res) => {
        await Product.deleteMany({});
        const importProducts = await Product.insertMany(products);
        res.send({ importProducts });
    })
);

export default ImportData