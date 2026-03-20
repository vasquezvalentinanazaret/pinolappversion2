import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: String,
  items: Array,
  total: Number,
  status: {
    type: String,
    enum: ["pending", "preparing", "onway", "delivered"],
    default: "pending"
  }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
