import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.routes.js";
import restaurantRoutes from "./routes/restaurant.routes.js";
import orderRoutes from "./routes/order.routes.js";
import foodRoutes from "./routes/food.routes.js";

app.use("/api/foods", foodRoutes);
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/orders", orderRoutes);

mongoose.connect(process.env.DB_URL)
  .then(() => console.log("DB conectada"))
  .catch(err => console.error(err));

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
