import React from "react";

import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const CircularBars = ({
  activeCustomers,
  inactiveCustomers,
  totalCustomers
}) => {
  const arcForActive = (activeCustomers / totalCustomers) * 360;
  const percForActive = Math.floor((activeCustomers / totalCustomers) * 100);
  const arcForInactive = (inactiveCustomers / totalCustomers) * 360;
  const percForInactive = Math.floor(
    (inactiveCustomers / totalCustomers) * 100
  );

  const data1 = {
    datasets: [
      {
        label: "Active cust.",
        data: [activeCustomers],
        backgroundColor: ["green"],
        borderWidth: 1
      }
    ]
  };
  const data2 = {
    datasets: [
      {
        label: "Inactive cust.",
        data: [inactiveCustomers],
        backgroundColor: ["red"],
        borderWidth: 1
      }
    ]
  };

  const options1 = {
    circumference: arcForActive
  };
  const options2 = {
    responsive: true,
    circumference: arcForInactive
  };

  return (
    <div className="bg-white rounded-lg h-full w-[60%] p-3 flex flex-col justify-center gap-4 shadow-md">
      <h2 className="text-xl font-semibold">All Customers</h2>
      <div className="grid grid-cols-2 gap-2 p-2">
        <div className="flex justify-center items-center ">
          <div className="h-[100px]">
            <Doughnut data={data1} options={options1} />
          </div>
          <div className="text-sm text-green-500">{percForActive}% Active</div>
        </div>
        <div className="flex justify-center items-center">
          <div className="h-[100px]">
            <Doughnut data={data2} options={options2} />
          </div>
          <div className="text-sm text-red-500">
            {percForInactive}% Inactive
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularBars;
