"use client";

import { useEffect, useState } from "react";
import API from "../lib/api";
import RestaurantCard from "../components/RestaurantCard";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    API.get("/restaurants")
      .then(res => setRestaurants(res.data));
  }, []);

  return (
    <div className="container">
      <h2>Hola 👋</h2>
      <h3>¿Qué te gustaría pedir hoy?</h3>

      <input className="input" placeholder="Buscar comida..." />

      <h3>Restaurantes Cercanos</h3>

      {restaurants.map(r => (
        <RestaurantCard key={r._id} restaurant={r} />
      ))}
    </div>
  );
}
