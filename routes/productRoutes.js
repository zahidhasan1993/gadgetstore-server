import express from "express";
import Product from "../models/productModel.js";
import { ObjectId } from "mongodb";
const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});
router.get("/:id", async (req, res) => {
  const id = new ObjectId(req.params.id);
  const singleProduct = await Product.findById(id);

  res.send(singleProduct);
});

export default router;
