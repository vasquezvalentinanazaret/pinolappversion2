"use client";

import { useEffect, useState } from "react";
import API from "../services/api";

export default function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    API.get("/users").then(res => setUsers(res.data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const changeRole = async (id, role) => {
    await API.put(`/users/${id}`, { role });
    fetchUsers();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Usuarios</h2>

      {users.map(user => (
        <div key={user._id} style={{
          background: "#fff",
          padding: 10,
          marginBottom: 10
        }}>
          <p>{user.email}</p>
          <p>Rol: {user.role}</p>

          <button onClick={() => changeRole(user._id, "driver")}>
            Driver
          </button>

          <button onClick={() => changeRole(user._id, "admin")}>
            Admin
          </button>
        </div>
      ))}
    </div>
  );
}
