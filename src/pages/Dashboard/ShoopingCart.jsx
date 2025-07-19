import React, { useState } from "react";
import Slidebar from './Slidebar';
const allOrders = [
  { id: "#738", date: "8 Sep, 2020", total: "$135.00 (5 Products)", status: "Processing" },
  { id: "#703", date: "24 May, 2020", total: "$25.00 (1 Product)", status: "on the way" },
  { id: "#130", date: "22 Oct, 2020", total: "$250.00 (4 Products)", status: "Completed" },
  { id: "#561", date: "1 Feb, 2020", total: "$35.00 (1 Product)", status: "Completed" },
  { id: "#536", date: "21 Sep, 2020", total: "$578.00 (13 Products)", status: "Cancelled" },
  { id: "#492", date: "22 Oct, 2020", total: "$345.00 (7 Products)", status: "Completed" },
  // Repeated to simulate multiple pages
  { id: "#738", date: "8 Sep, 2020", total: "$135.00 (5 Products)", status: "Processing" },
  { id: "#703", date: "24 May, 2020", total: "$25.00 (1 Product)", status: "on the way" },
  { id: "#130", date: "22 Oct, 2020", total: "$250.00 (4 Products)", status: "Completed" },
  { id: "#561", date: "1 Feb, 2020", total: "$35.00 (1 Product)", status: "Completed" },
  { id: "#536", date: "21 Sep, 2020", total: "$578.00 (13 Products)", status: "Cancelled" },
  { id: "#492", date: "22 Oct, 2020", total: "$345.00 (7 Products)", status: "Completed" },
];

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "completed":
      return "text-green-600";
    case "cancelled":
      return "text-red-600";
    case "on the way":
      return "text-orange-500";
    case "processing":
      return "text-yellow-500";
    default:
      return "text-gray-500";
  }
};

const ShopingCart = () => {
  const itemsPerPage = 6;
  const totalPages = Math.ceil(allOrders.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedOrders = allOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  return (
      <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
            <div className='w-full md:w-1/4'>
            <Slidebar/>
            </div>
            <div className="w-full px-4">
      <h2 className="text-xl font-semibold mb-4">Order History</h2>

      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Order ID</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Total</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border"></th>
          </tr>
        </thead>
        <tbody>
          {paginatedOrders.map((order, idx) => (
            <tr key={idx}>
              <td className="p-2 border">{order.id}</td>
              <td className="p-2 border">{order.date}</td>
              <td className="p-2 border">{order.total}</td>
              <td className={`p-2 border font-semibold ${getStatusColor(order.status)}`}>
                {order.status}
              </td>
              <td className="p-2 border text-orange-500 cursor-pointer">View Details</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-8 h-8 rounded-full ${
            currentPage === 1 ? "bg-gray-200" : "hover:bg-orange-500 hover:text-white"
          }`}
        >
          ‹
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`w-8 h-8 rounded-full ${
              currentPage === i + 1
                ? "bg-orange-500 text-white"
                : "bg-gray-200 hover:bg-orange-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-8 h-8 rounded-full ${
            currentPage === totalPages ? "bg-gray-200" : "hover:bg-orange-500 hover:text-white"
          }`}
        >
          ›
        </button>
      </div>
    </div>

        </div>
  );
};

export default ShopingCart;
