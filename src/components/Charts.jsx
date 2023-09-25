import React from "react";
import CircularBars from "./CircularBars";
import LineBars from "./LineBars";

const Charts = ({ customers }) => {
  const totalCustomers = customers.length;

  const activeCustomers = customers.filter(
    (customer) => customer.status === "active"
  ).length;

  const inactiveCustomers = totalCustomers - activeCustomers;

  return (
    <div className="h-60 p-6">
      <div className="mx-auto max-w-6xl h-full flex justify-between">
        <CircularBars
          totalCustomers={totalCustomers}
          activeCustomers={activeCustomers}
          inactiveCustomers={inactiveCustomers}
        />
        <LineBars
          totalCustomers={totalCustomers}
          activeCustomers={activeCustomers}
          inactiveCustomers={inactiveCustomers}
        />
      </div>
    </div>
  );
};

export default Charts;
