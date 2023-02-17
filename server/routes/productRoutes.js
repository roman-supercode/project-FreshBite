import express from "express";
const router = express.Router();

import {
  getAllProducts,
  addProduct,
  getOneProduct,
  toggleFavorite,
  filterWishlist,
} from "../controller/productController.js";

router.route("/").get(getAllProducts).post(addProduct);
router.route("/item/:id").get(getOneProduct);

// Favorite
router.route("/item/:id/fav").post(toggleFavorite);

// Wishlist
router.route("/wishlist").get(filterWishlist);

export default router;
