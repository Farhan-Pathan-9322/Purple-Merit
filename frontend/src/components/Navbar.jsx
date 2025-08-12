import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 bg-green-700 text-white flex gap-4">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/simulation">Run Simulation</Link>
      <Link to="/drivers">Drivers</Link>
      <Link to="/routes">Routes</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/history">History</Link>
    </nav>
  );
}
