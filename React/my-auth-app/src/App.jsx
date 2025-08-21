import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <Routes>
     
      <Route
        path="/"
        element={token ? <Navigate to="/dashboard" /> : <Login setToken={setToken} />}
      />

      
      <Route
        path="/dashboard"
        element={token ? <Dashboard setToken={setToken} /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
