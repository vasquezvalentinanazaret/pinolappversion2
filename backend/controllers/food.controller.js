import Food from "../models/Food.js";

export const createFood = async (req, res) => {
  const food = await Food.create(req.body);
  res.json(food);
};

export const getFoodsByRestaurant = async (req, res) => {
  const foods = await Food.find({
    restaurantId: req.params.restaurantId
  });

  res.json(foods);
};
