"use client";

import { useEffect, useState } from "react";
import API from "../services/api";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/orders").then(res => setOrders(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Pedidos</h2>

      {orders.map(order => (
        <div key={order._id}>
          Total: C${order.total} - {order.status}
        </div>
      ))}
    </div>
  );
}
