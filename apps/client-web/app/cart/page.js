"use client";

import { useCart } from "../../hooks/useCart";
import API from "../../lib/api";

export default function Cart() {
  const { items, clearCart } = useCart();

  const createOrder = async () => {
    await API.post("/orders", {
      items,
      total: items.length * 10
    });

    clearCart();
    alert("Pedido creado");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Carrito</h2>

      {items.map((item, i) => (
        <p key={i}>{item.name}</p>
      ))}

      <button onClick={createOrder}>Ordenar</button>
    </div>
  );
}
