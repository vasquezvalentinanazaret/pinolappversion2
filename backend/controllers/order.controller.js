import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
};

export const getOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};
