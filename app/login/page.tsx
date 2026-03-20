"use client";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify({
        action: "login",
        email,
        password,
      }),
    });

    const data = await res.json();
    localStorage.setItem("token", data.token);

    alert("Login OK");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>

      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
