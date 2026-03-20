"use client";

import { useCart } from "../../hooks/useCart";
import API from "../../lib/api";

export default function Cart() {
  const { items, clearCart } = useCart();

  const total = items.reduce((acc, item) => acc + item.price, 0);

  const createOrder = async () => {
    await API.post("/orders", {
      items,
      total
    });

    clearCart();
    alert("Pedido enviado 🚀");
  };

  return (
    <div className="container">
      <h2>Tu pedido</h2>

      {items.map((item, i) => (
        <div key={i} className="card">
          {item.name} - C${item.price}
        </div>
      ))}

      <h3>Total: C${total}</h3>

      <button className="button" onClick={createOrder}>
        Confirmar Pedido
      </button>
    </div>
  );
}
