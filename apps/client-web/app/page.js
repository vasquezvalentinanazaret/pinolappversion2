"use client";

import { useEffect, useState } from "react";
import API from "../lib/api";
import RestaurantCard from "../components/RestaurantCard";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    API.get("/restaurants")
      .then(res => setRestaurants(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Hola 👋</h2>
      <h3>¿Qué te gustaría pedir hoy?</h3>

      <input
        placeholder="Buscar..."
        style={{
          width: "100%",
          padding: 10,
          borderRadius: 10,
          border: "1px solid #ccc"
        }}
      />

      <h3 style={{ marginTop: 20 }}>Restaurantes</h3>

      {restaurants.map(r => (
        <RestaurantCard key={r._id} restaurant={r} />
      ))}
    </div>
  );
}
