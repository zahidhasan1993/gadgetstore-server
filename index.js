import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
const port = 3000 || process.env.PORT;

const app = express();
//middlewares & DB Connection
app.use(cors());
dotenv.config();

//mongodb connections

connectDB();

// all api's

app.get("/", (req, res) => {
  res.send("GADGETSTORE SERVER IS RUNNING");
});

//product api

app.use("/api/products", productRoutes);

//user api

app.use("/api/user", userRoutes);

//server listening

app.listen(port, () => {
  console.log(`app running ${process.env.NODE_ENV} on port ${port}`);
});
