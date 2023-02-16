import express from "express";
const router = express.Router();

import {
  getAllProducts,
  addProduct,
  getOneProduct,
  toggleFavorite,
} from "../controller/productController.js";

router.route("/").get(getAllProducts).post(addProduct);
router.route("/item/:id").get(getOneProduct);

// Favorite
router.route("/item/:id/fav").post(toggleFavorite);

export default router;
