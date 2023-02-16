import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    items: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
