import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: String,
  image: String,
  deliveryTime: String,
  rating: Number
}, { timestamps: true });

export default mongoose.model("Restaurant", restaurantSchema);
