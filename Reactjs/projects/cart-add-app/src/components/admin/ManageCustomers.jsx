import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Logout from "./Logout";

export default function ManageCustomers() {
  // Dummy customer data
  const customers = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", status: "Active" },
    { id: 2, name: "Sarah Lee", email: "sarah@example.com", phone: "987-654-3210", status: "Inactive" },
    { id: 3, name: "David Miller", email: "david@example.com", phone: "555-666-7777", status: "Active" },
  ];

  // Function to export table to Excel
  const exportToExcel = () => {
    const csvContent = [
      ["ID", "Name", "Email", "Phone", "Status"],
      ...customers.map(c => [c.id, c.name, c.email, c.phone, c.status])
    ]
      .map(e => e.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "customers.csv");
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
              <h2 className="text-xl font-semibold text-gray-800">Manage Customers</h2>
              <button
                onClick={exportToExcel}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Export to Excel
              </button>
            </div>

            {/* Customer Table */}
            <div className="bg-white shadow-sm rounded-xl overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">ID</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Phone</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {customers.map(customer => (
                    <tr key={customer.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{customer.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{customer.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{customer.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{customer.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-white text-xs ${customer.status === "Active" ? "bg-green-600" : "bg-red-600"}`}>
                          {customer.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mr-2">
                          Edit
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
