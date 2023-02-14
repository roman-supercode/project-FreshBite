import mongoose from "mongoose";

// Product-Modell
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
    },
    category: {
      type: String,
      required: [true, "Please provide category"],
    },
    price: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: [true, "Please provide a valid Rating"],
    },
    url: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    fav: {
      type: Boolean,
      default: false,
    },
    sale: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
