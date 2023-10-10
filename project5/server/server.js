import express from "express";
import dotenv from "dotenv"
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./routes/products.js";
import userRoute from "./routes/users.js";
import orderRoute from "./routes/orders.js";
import { errorHandler, notFound } from "./middleware/Error.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

//API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);

//ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
    res.send("API is Running....");
})

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on port ${PORT}`));