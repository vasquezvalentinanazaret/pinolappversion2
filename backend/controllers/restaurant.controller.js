import Restaurant from "../models/Restaurant.js";

export const getRestaurants = async (req, res) => {
  const data = await Restaurant.find();
  res.json(data);
};

export const createRestaurant = async (req, res) => {
  const newRestaurant = await Restaurant.create(req.body);
  res.json(newRestaurant);
};
