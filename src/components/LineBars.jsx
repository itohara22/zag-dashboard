import React from "react";

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const LineBars = ({ activeCustomers, inactiveCustomers, totalCustomers }) => {
  const data = {
    labels: ["Active", "Inactive"],
    datasets: [
      {
        barThickness: 10,
        maxBarThickness: 12,
        axis: "y",
        data: [activeCustomers, inactiveCustomers],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)"],
        borderWidth: 1
      }
    ]
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        max: totalCustomers
      }
    }
  };

  return (
    <div className="p-3 bg-white rounded-lg h-full w-[38%] shadow-md">
      <h2 className="text-xl font-semibold">Stats Overview</h2>
      <Bar className="max-h-[150px]" data={data} options={options} />
    </div>
  );
};

export default LineBars;
