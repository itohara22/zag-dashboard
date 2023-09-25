import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Charts from "./components/Charts";

import { customers } from "./data/Customers";
import CustomerList from "./components/CustomerList";

const App = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Sidebar />
      <div className="ml-44">
        <Header />
        <Charts customers={customers} />
        <CustomerList customers={customers} />
      </div>
    </div>
  );
};

export default App;
