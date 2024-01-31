import express from "express";
import { getProductById, getProducts } from "../controller/productController.js";
const router = express.Router();

//get all products API
router.route('/').get(getProducts);

//getById products/ single products API

router.route('/:id').get(getProductById)

export default router;
