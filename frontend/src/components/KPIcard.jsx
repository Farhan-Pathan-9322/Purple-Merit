import React from "react";

export default function KPIcard({ title, value }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-48 text-center">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
