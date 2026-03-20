"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import API from "../../../lib/api";
import { useCart } from "../../../hooks/useCart";

export default function RestaurantDetail() {
  const { id } = useParams();
  const [foods, setFoods] = useState([]);
  const { addItem } = useCart();

  useEffect(() => {
    API.get(`/foods/${id}`).then(res => setFoods(res.data));
  }, [id]);

  return (
    <div className="container">
      <h2>Menú</h2>

      {foods.map((item) => (
        <div key={item._id} className="card">
          <h4>{item.name}</h4>
          <p>C${item.price}</p>

          <button
            className="button"
            onClick={() => addItem({ ...item, qty: 1 })}
          >
            Agregar
          </button>
        </div>
      ))}
    </div>
  );
}
