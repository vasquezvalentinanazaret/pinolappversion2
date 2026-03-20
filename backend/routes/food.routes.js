import express from "express";
import {
  createFood,
  getFoodsByRestaurant
} from "../controllers/food.controller.js";

const router = express.Router();

router.post("/", createFood);
router.get("/:restaurantId", getFoodsByRestaurant);

export default router;
