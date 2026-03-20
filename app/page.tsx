import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>PinolApp 🚀</h1>

      <Link href="/login">Login</Link>
      <br />
      <Link href="/register">Register</Link>
      <br />
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
