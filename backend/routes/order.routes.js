import express from "express";
import {
  createOrder,
  getOrders
} from "../controllers/order.controller.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);

export default router;
router.put("/:id", async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(order);
});
