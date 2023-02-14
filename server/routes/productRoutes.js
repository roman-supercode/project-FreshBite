import express from "express";
const router = express.Router();

import {
  getAllProducts,
  addProduct,
  getOneProduct,
} from "../controller/productController.js";

router.route("/").post(addProduct).get(getAllProducts);
router.route("/item/:id").get(getOneProduct);

export default router;
