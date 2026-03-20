"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import API from "../../../lib/api";
import { useCart } from "../../../hooks/useCart";

export default function RestaurantDetail() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    API.get("/restaurants")
      .then(res => {
        const found = res.data.find(r => r._id === id);
        setRestaurant(found);
      });
  }, [id]);

  if (!restaurant) return <p>Cargando...</p>;

  const fakeMenu = [
    { name: "Baho", price: 100 },
    { name: "Gallo Pinto", price: 50 },
    { name: "Nacatamal", price: 120 }
  ];

  return (
    <div className="container">
      <img
        src={restaurant.image || "https://via.placeholder.com/400"}
        style={{ width: "100%", borderRadius: 12 }}
      />

      <h2>{restaurant.name}</h2>
      <p>⭐ {restaurant.rating}</p>

      <h3>Menú</h3>

      {fakeMenu.map((item, i) => (
        <div key={i} className="card">
          <h4>{item.name}</h4>
          <p>C${item.price}</p>

          <button
            className="button"
            onClick={() => addItem(item)}
          >
            Agregar
          </button>
        </div>
      ))}
    </div>
  );
}
