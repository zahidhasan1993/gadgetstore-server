import express from "express";
import Product from "../models/productModel.js";
import { ObjectId } from "mongodb";
const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find();
  if (products) {
    res.send(products);
  } else {
    res.status(404).send({ message: "no items found" });
  }
});
router.get("/:id", async (req, res) => {
  const id = new ObjectId(req.params.id);
  const singleProduct = await Product.findById(id);
if (singleProduct) {
  res.send(singleProduct);
}else{
  res.status(404).send({message: "No Product found"})
}
  
});

export default router;
