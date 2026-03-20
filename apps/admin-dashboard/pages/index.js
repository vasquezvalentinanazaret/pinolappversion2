export default function Admin() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Panel 👑</h1>

      <a href="/users">Usuarios</a><br />
      <a href="/restaurants">Restaurantes</a><br />
      <a href="/orders">Pedidos</a>
    </div>
  );
}
