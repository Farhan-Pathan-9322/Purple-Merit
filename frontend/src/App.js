import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Simulation from './pages/Simulation';
import DriversCRUD from './pages/DriversCRUD';
import RoutesCRUD from './pages/RoutesCRUD';
import OrdersCRUD from './pages/OrdersCRUD';
import SimulationHistory from './pages/SimulationHistory';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
    
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/drivers" element={<DriversCRUD />} />
          <Route path="/routes" element={<RoutesCRUD />} />
          <Route path="/orders" element={<OrdersCRUD />} />
          <Route path="/history" element={<SimulationHistory />} />
        </Routes>
      </div>
    </Router>
  );
}
