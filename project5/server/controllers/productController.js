import Product from "../models/ProductModel.js";

//GET ALL PRODUCTS
export const getAllProducts = async (req, res) => {
    const products = await Product.find({})
    res.json(products);
}

//GET SINGLE PRODUCT
export const getSingleProduct = async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
}