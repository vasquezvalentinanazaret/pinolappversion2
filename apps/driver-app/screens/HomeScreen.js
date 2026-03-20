import React, { useEffect, useState } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import API from "../services/api";

export default function HomeScreen() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/orders").then(res => setOrders(res.data));
  }, []);

  const takeOrder = async (id) => {
    await API.put(`/orders/${id}`, { status: "onway" });
    alert("Pedido aceptado 🚗");
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Pedidos disponibles</Text>

      {orders.map(order => (
        <View key={order._id} style={{ marginTop: 10 }}>
          <Text>Total: C${order.total}</Text>
          <Text>Estado: {order.status}</Text>

          <Button
            title="Tomar pedido"
            onPress={() => takeOrder(order._id)}
          />
        </View>
      ))}
    </ScrollView>
  );
}
