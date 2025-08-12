import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function FuelBreakdownChart({ fuelData }) {
  const data = {
    labels: Object.keys(fuelData),
    datasets: [
      {
        label: "Fuel Cost (₹)",
        data: Object.values(fuelData),
        backgroundColor: "#2196f3",
      },
    ],
  };

  return <Bar data={data} />;
}
