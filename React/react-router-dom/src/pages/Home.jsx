// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the User Dashboard</h1>
      <Link to="/users">View Users</Link>
    </div>
  );
}
