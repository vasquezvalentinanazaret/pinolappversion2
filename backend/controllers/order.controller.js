import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  const order = await Order.create({
    ...req.body,
    userId: req.user.id
  });

  res.json(order);
};

export const getOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user.id });
  res.json(orders);
};
