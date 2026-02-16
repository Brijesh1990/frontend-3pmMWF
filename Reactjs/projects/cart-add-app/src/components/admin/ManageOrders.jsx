import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Logout from "./Logout";

export default function ManageOrders() {
  // Dummy order data
  const orders = [
    { id: 101, customer: "John Doe", product: "Smart Watch", quantity: 2, total: "$240", status: "Completed" },
    { id: 102, customer: "Sarah Lee", product: "Headphones", quantity: 1, total: "$80", status: "Pending" },
    { id: 103, customer: "David Miller", product: "Sneakers", quantity: 3, total: "$450", status: "Cancelled" },
  ];

  // Function to export orders to Excel (CSV)
  const exportToExcel = () => {
    const csvContent = [
      ["Order ID", "Customer", "Product", "Quantity", "Total", "Status"],
      ...orders.map(o => [o.id, o.customer, o.product, o.quantity, o.total, o.status])
    ]
      .map(e => e.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "orders.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="flex min-h-screen bg-gray-50">

        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <div className="flex-1 flex flex-col">

          {/* HEADER */}
          <Header />

          {/* PAGE CONTENT */}
          <main className="p-6">

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Manage Orders</h2>
              <button
                onClick={exportToExcel}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Export to Excel
              </button>
            </div>

            {/* Orders Table */}
            <div className="bg-white shadow-sm rounded-xl overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Order ID</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Customer</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Product</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Quantity</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Total</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {orders.map(order => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.customer}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.product}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.quantity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.total}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-white text-xs ${
                          order.status === "Completed"
                            ? "bg-green-600"
                            : order.status === "Pending"
                            ? "bg-yellow-500"
                            : "bg-red-600"
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mr-2">
                          View
                        </button>
                        <button className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </main>
        </div>
      </div>

      {/* LOGOUT MODAL */}
      <Logout />
    </>
  );
}
