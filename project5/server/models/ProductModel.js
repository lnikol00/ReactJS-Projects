import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0
    }
},
    {
        timestamps: true
    }
)

const Product = mongoose.model("Product", productSchema)

export default Product;