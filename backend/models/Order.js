import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  items: [
    {
      foodId: String,
      name: String,
      price: Number,
      qty: Number
    }
  ],
  total: Number,
  status: {
    type: String,
    enum: ["pending", "preparing", "onway", "delivered"],
    default: "pending"
  }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
