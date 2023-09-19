import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
        default: 0
    }
},
    {
        timestamps: true
    }
)

const Product = mongoose.model("Product", productSchema)

export default Product;