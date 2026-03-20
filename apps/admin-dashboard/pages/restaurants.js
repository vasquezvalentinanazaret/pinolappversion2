"use client";

import { useEffect, useState } from "react";
import API from "../services/api";

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    API.get("/restaurants").then(res => setRestaurants(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Restaurantes</h2>

      {restaurants.map(r => (
        <div key={r._id}>
          {r.name}
        </div>
      ))}
    </div>
  );
}
