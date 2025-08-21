// src/Login.jsx
import { useState } from "react";
import { loginUser, saveToken } from "./auth";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { token } = await loginUser({ username });
    saveToken(token);

    onLogin(); // 👈 this triggers setIsLoggedIn(true) in App.jsx
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Page 🔑</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
export default Login;
