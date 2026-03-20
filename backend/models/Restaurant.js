import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: String,
  image: String,
  deliveryTime: String,
  rating: Number
});

export default mongoose.model("Restaurant", restaurantSchema);
