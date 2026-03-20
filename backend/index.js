const express = require('express');
const cors = require('cors');
require('dotenv').config();

const supabase = require('./supabaseClient');

const app = express();
app.use(cors());
app.use(express.json());

/* 🟢 Ruta de prueba */
app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

/* 🟢 Crear usuario */
app.post('/usuarios', async (req, res) => {
  const { nombre, edad } = req.body;

  const { data, error } = await supabase
    .from('usuarios')
    .insert([{ nombre, edad }]);

  if (error) return res.status(400).json(error);

  res.json(data);
});

/* 🟢 Obtener usuarios */
app.get('/usuarios', async (req, res) => {
  const { data, error } = await supabase
    .from('usuarios')
    .select('*');

  if (error) return res.status(400).json(error);

  res.json(data);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
