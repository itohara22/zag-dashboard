import React, { useState } from "react";

const CustomerList = ({ customers }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.mobile_number.includes(searchQuery) ||
      customer.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const customersPerPage = 6;

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;

  const currentCustomers = filteredCustomers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="px-4 h-[375px]">
      <div className="p-4 mx-auto max-w-6xl h-full bg-white rounded-lg shadow-md flex flex-col">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-4">Customer List</h2>
          <div>
            <input
              type="text"
              placeholder="Search customers"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border p-1 rounded w-full"
            />
          </div>
        </div>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left">Full Name</th>
              <th className="text-left">Country</th>
              <th className="text-left">Mobile Number</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {currentCustomers.map((customer, index) => (
              <tr key={index}>
                <td className="py-2">{customer.full_name}</td>
                <td className="py-2">{customer.country}</td>
                <td className="py-2">{customer.mobile_number}</td>
                <td className="py-2">
                  <span
                    className={`font-semibold ${
                      customer.status === "active"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-auto flex justify-center gap-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Previous
          </button>
          <div className="font-semibold py-2">{`${currentPage}/${totalPages}`}</div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
