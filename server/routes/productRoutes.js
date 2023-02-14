import express from "express";
const router = express.Router();

import { getAllProducts, addProduct } from "../controller/productController.js";

router.route("/").post(addProduct).get(getAllProducts);

export default router;
