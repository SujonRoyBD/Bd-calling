import React from 'react';
import Slidebar from './Slidebar';

const Order = () => {
     const orders = [
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
        return "text-green-500";
      case "cancelled":
        return "text-red-500";
      case "on the way":
        return "text-orange-500";
      case "processing":
        return "text-yellow-500";
      default:
        return "text-gray-500";
    }
  };
    return (
        <div className='md:flex gap-6'>
        <div className='w-2/5 md:w-1/4'>
        <Slidebar/>
        </div>
        <div className='w-1/4 md:w-full px-4'>
             <div className="flex flex-col md:flex-row p-4">
      {/* Sidebar */}
      

      {/* Main Content */}
      <div className="w-full ">
        <div className="flex flex-col sm: w-[300px] items-center mb-6">
          <img
            src="/assets/client.jpg"
            alt="User"
            className="w-[100px] md:w-24 h-24 rounded-full"
          />
          <h2 className="text-xl font-bold mt-2">Dianne Russell</h2>
          <p className="text-gray-500">Customer</p>
          <button className="text-orange-500 font-semibold mt-2">Edit Profile</button>
        </div>

        <div className="flex justify-between items-center mb-2 sm: w-[300px] ">
          <h3 className="text-lg font-semibold">Recent Order History</h3>
          <a href="#" className="text-orange-500">View All</a>
        </div>

        <table className="w-full border text-left text-sm">
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
            {orders.map((order, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-2 border">{order.id}</td>
                <td className="p-2 border">{order.date}</td>
                <td className="p-2 border">{order.total}</td>
                <td className={`p-2 border font-semibold ${getStatusColor(order.status)}`}>
                  {order.status}
                </td>
                <td className="p-2 border text-red-500 cursor-pointer">View Details</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </div>

    </div>
    );
};

export default Order;