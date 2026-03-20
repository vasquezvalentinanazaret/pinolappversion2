"use client";

import { useEffect, useState } from "react";
import API from "../services/api";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = () => {
    API.get("/orders").then(res => setOrders(res.data));
  };

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 3000); // refresco automático
    return () => clearInterval(interval);
  }, []);

  const updateStatus = async (id, status) => {
    await API.put(`/orders/${id}`, { status });
    fetchOrders();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Pedidos</h2>

      {orders.map(order => (
        <div key={order._id} style={{
          background: "#fff",
          padding: 10,
          marginBottom: 10,
          borderRadius: 10
        }}>
          <p>Total: C${order.total}</p>
          <p>Estado: {order.status}</p>

          <button onClick={() => updateStatus(order._id, "preparing")}>
            Preparando
          </button>

          <button onClick={() => updateStatus(order._id, "onway")}>
            En camino
          </button>
        </div>
      ))}
    </div>
  );
              }
