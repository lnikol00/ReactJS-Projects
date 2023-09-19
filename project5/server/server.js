import express from "express";
import products from "./data/Products.js";
import dotenv from "dotenv"
import connectDatabase from "./config/MongoDb.js";

dotenv.config();
connectDatabase();
const app = express();

//LOAD PRODUCT FROM SERVER
app.get("/api/products", (req, res) => {
    res.json(products)
});

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on port ${PORT}`));