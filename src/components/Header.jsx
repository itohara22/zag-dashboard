import React from "react";

const Header = () => {
  return (
    <div className="py-6 mx-8 border-gray-300 border-b-2 flex justify-between">
      <div className="text-3xl font-bold ">Order</div>
      <button className="font-semibold bg-blue-500 hover:bg-green-500 text-white px-4 py-2 rounded cursor-pointer">
        +Add Order
      </button>
    </div>
  );
};

export default Header;
