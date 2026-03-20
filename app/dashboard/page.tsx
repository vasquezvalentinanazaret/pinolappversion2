"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [orders, setOrders] = useState<any[]>([]);
  const [earnings, setEarnings] = useState<any>(null);

  // 🔹 cargar datos
  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then(setOrders);

    fetch("/api/earnings")
      .then((res) => res.json())
      .then(setEarnings);
  }, []);

  // 🔹 crear orden
  const createOrder = async () => {
    await fetch("/api/orders", {
      method: "POST",
      body: JSON.stringify({
        customerId: 1,
        total: Math.random() * 100,
      }),
    });

    alert("Orden creada");
    location.reload();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>

      <button onClick={createOrder}>Crear Orden</button>

      <h2>Órdenes</h2>
      {orders.map((o) => (
        <div key={o.id}>
          #{o.id} - ${o.total}
        </div>
      ))}

      <h2>Ganancias</h2>
      {earnings && <div>Total: ${earnings.totalRevenue}</div>}
    </div>
  );
}
