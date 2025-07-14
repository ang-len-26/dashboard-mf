import React, { useState } from "react";
import { loginUser } from "../services/authService";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await loginUser({ username, password });
    alert(success ? "Login exitoso" : "Credenciales incorrectas");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default AuthForm;
