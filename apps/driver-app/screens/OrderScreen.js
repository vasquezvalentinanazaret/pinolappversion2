import React from "react";
import { View, Text, Button } from "react-native";
import API from "../services/api";

export default function OrderScreen({ route }) {
  const { order } = route.params;

  const completeOrder = async () => {
    await API.put(`/orders/${order._id}`, { status: "delivered" });
    alert("Pedido entregado ✅");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Pedido en curso</Text>
      <Text>Total: C${order.total}</Text>

      <Button title="Marcar como entregado" onPress={completeOrder} />
    </View>
  );
}
