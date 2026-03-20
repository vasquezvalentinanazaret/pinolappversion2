"use client";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify({
        action: "register",
        email,
        password,
      }),
    });

    alert("Usuario creado");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Register</h2>

      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <br />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
