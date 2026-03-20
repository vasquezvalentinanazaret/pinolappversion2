"use client";

import { useRouter } from "next/navigation";

export default function RestaurantCard({ restaurant }) {
  const router = useRouter();

  return (
    <div
      className="card"
      onClick={() => router.push(`/restaurant/${restaurant._id}`)}
      style={{ cursor: "pointer" }}
    >
      <img
        src={restaurant.image || "https://via.placeholder.com/300"}
        style={{ width: "100%", borderRadius: 12 }}
      />

      <h3>{restaurant.name}</h3>
      <p>⭐ {restaurant.rating} • {restaurant.deliveryTime}</p>
    </div>
  );
}
