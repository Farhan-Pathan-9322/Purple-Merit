import React, { useEffect, useState } from "react";
import { fetchLatestSimulation } from "../api";
import KPIcard from "../components/KPIcard";
import ChartOnTimeLate from "../components/ChartOnTimeLate";
import FuelBreakdownChart from "../components/FuelBreakdownChart";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchLatestSimulation()
      .then((res) => {
        if (res.data && res.data.KPIs) {
          setData(res.data);
        } else {
          setError("No simulation data received from backend.");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch simulation data.");
      });
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <div className="flex gap-4 mb-6">
        <KPIcard
          title="Total Profit"
          value={`₹${data.KPIs.totalProfit || 0}`}
        />
        <KPIcard
          title="Efficiency"
          value={`${data.KPIs.efficiencyScore || 0}%`}
        />
        <KPIcard title="On Time Deliveries" value={data.KPIs.onTime || 0} />
        <KPIcard title="Late Deliveries" value={data.KPIs.late || 0} />
      </div>
      <div className="flex gap-8">
        <div className="w-1/2">
          <ChartOnTimeLate
            onTime={data.KPIs.onTime || 0}
            late={data.KPIs.late || 0}
          />
        </div>
        <div className="w-1/2">
          <FuelBreakdownChart fuelData={data.KPIs.fuelCostBreakdown || {}} />
        </div>
      </div>
    </div>
  );
}
