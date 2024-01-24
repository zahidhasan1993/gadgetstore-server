import express from "express";
import cors from "cors";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
const port = 3000 || process.env.PORT;

const app = express();
//middlewares
app.use(cors());
dotenv.config();

// DB Connection
connectDB();
app.get("/", (req, res) => {
  res.send("GADGETSTORE SERVER IS RUNNING");
});

//product api
app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`app running ${process.env.NODE_STS} on port ${port}`);
});
