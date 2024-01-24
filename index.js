import express from "express";
import cors from "cors";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";


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

app.get("/api/products", (req, res) => {
  res.send(products);
});
app.get("/api/products/:id", (req, res) => {
  const singleProduct = products.find((p) => p._id === req.params.id);
  res.send(singleProduct);
});

app.listen(port, () => {
  console.log(`app running ${process.env.NODE_STS} on port ${port}`);
});
