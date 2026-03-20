import express from "express";
import mongoose from "mongoose";

const app = express();

// 👇 PEGA TU URL AQUÍ
const URI = "mongodb+srv://Valentina:TU_PASSWORD@cluster0.y3mdon3.mongodb.net/test";

mongoose.connect(URI)
  .then(() => console.log("🔥 Conectado a MongoDB"))
  .catch(err => console.error("❌ Error:", err));

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
