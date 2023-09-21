import express from "express";
import dotenv from "dotenv"
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./ProductRoutes.js";

dotenv.config();
connectDatabase();
const app = express();

//API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
    res.send("API is Running....");
})

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on port ${PORT}`));