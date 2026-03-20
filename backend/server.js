import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Supabase config
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Ruta de prueba
app.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date() });
});

// Obtener usuarios
app.get("/usuarios", async (req, res) => {
  const { data, error } = await supabase.from("usuarios").select("*");

  if (error) return res.status(500).json(error);
  res.json(data);
});

// Crear usuario
app.post("/usuarios", async (req, res) => {
  const { nombre, edad } = req.body;

  const { data, error } = await supabase
    .from("usuarios")
    .insert([{ nombre, edad }]);

  if (error) return res.status(500).json(error);
  res.json(data);
});

// Eliminar usuario
app.delete("/usuarios/:id", async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from("usuarios")
    .delete()
    .eq("id", id);

  if (error) return res.status(500).json(error);
  res.json({ success: true });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto", PORT);
});
