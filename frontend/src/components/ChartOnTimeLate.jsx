import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartOnTimeLate({ onTime, late }) {
  const data = {
    labels: ["On Time", "Late"],
    datasets: [
      {
        data: [onTime, late],
        backgroundColor: ["#4caf50", "#f44336"],
      },
    ],
  };

  return <Pie data={data} />;
}
