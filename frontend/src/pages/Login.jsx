import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting login with form data:", form);
      const response = await API.post("/auth/login", form);
      console.log("Response received:", response);

      // Check if login was successful based on response data
      if (response.data.success) {
        console.log("Login successful, navigating to dashboard");
        navigate("/dashboard");
      } else {
        console.log("Login failed - invalid credentials");
        alert("Login failed: Invalid username or password");
      }
    } catch (err) {
      console.error("Login error:", err.response || err.message || err);
      alert("Login failed: Server error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="block mb-2 border p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="block mb-2 border p-2"
        />
        <button type="submit" className="bg-green-700 text-white p-2 w-full">
          Login
        </button>
      </form>
    </div>
  );
}
