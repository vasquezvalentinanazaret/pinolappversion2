export default function RestaurantCard({ restaurant }) {
  return (
    <div style={{
      background: "#fff",
      padding: 10,
      borderRadius: 10,
      marginBottom: 10
    }}>
      <h3>{restaurant.name}</h3>
      <p>⭐ {restaurant.rating}</p>
      <p>{restaurant.deliveryTime}</p>
    </div>
  );
}
