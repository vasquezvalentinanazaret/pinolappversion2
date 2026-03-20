"use client";

import { useEffect, useState } from "react";
import API from "../services/api";

export default function Foods() {
  const [foods, setFoods] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const restaurantId = "ID_DEL_RESTAURANTE"; // cambiar luego

  const fetchFoods = () => {
    API.get(`/foods/${restaurantId}`).then(res => setFoods(res.data));
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const createFood = async () => {
    await API.post("/foods", {
      name,
      price,
      restaurantId
    });

    fetchFoods();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Menú</h2>

      <input placeholder="Nombre" onChange={e => setName(e.target.value)} />
      <input placeholder="Precio" onChange={e => setPrice(e.target.value)} />

      <button onClick={createFood}>Agregar</button>

      {foods.map(food => (
        <div key={food._id}>
          {food.name} - C${food.price}
        </div>
      ))}
    </div>
  );
}
