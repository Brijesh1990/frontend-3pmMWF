import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderApp from "./HeaderApp";
import jsPDF from "jspdf";
export default function ManageOrders() {
const [orders, setOrders] = useState([]);
useEffect(() => {
axios.get(`http://localhost:8000/orders`).then((res) => {
setOrders(res.data);
});
}, []);

//   print invoice

const handlePrint = (order) => {
// const printWindow = window.open("", "_blank");
const doc = new jsPDF();

  let y = 10;

  // Title
  doc.setFontSize(18);
  doc.text("Invoice", 90, y);
  y += 10;

  // Customer Details
  doc.setFontSize(12);
  doc.text(`Name: ${order.fname} ${order.lname}`, 10, y); y += 7;
  doc.text(`Email: ${order.email}`, 10, y); y += 7;
  doc.text(`Phone: ${order.phone}`, 10, y); y += 7;
  doc.text(
    `Address: ${order.address}, ${order.city}, ${order.state}, ${order.zip}, ${order.country}`,
    10,
    y
  );
  y += 10;

  // Table Header
  doc.setFontSize(13);
  doc.text("Products:", 10, y);
  y += 8;

  doc.setFontSize(11);
  doc.text("Name", 10, y);
  doc.text("Category", 80, y);
  doc.text("Price", 150, y);
  y += 5;

  // Line
  doc.line(10, y, 200, y);
  y += 5;

  // Products
  order.products.forEach((item) => {
    doc.text(item.productname, 10, y);
    doc.text(item.categoryname, 80, y);
    doc.text(`Rs.${item.price}`, 150, y);
    y += 7;
  });

  y += 5;

  // Total
  doc.setFontSize(13);
  doc.text(`Total: Rs.${order.subtotal}`, 140, y);
  // Save PDF
  doc.save(`Invoice_${order.id}.pdf`);

// const invoiceHTML = `
// <html>
// <head>
// <title>Invoice</title>
// <style>
// body {
// font-family: Arial;
// padding: 20px;
// }
// h2 {
// text-align: center;
// }
// .section {
// margin-bottom: 20px;
// }
// table {
// width: 100%;
// border-collapse: collapse;
// }
// table, th, td {
// border: 1px solid #ddd;
// }
// th, td {
// padding: 10px;
// text-align: left;
// }
// .total {
// text-align: right;
// font-size: 18px;
// font-weight: bold;
// }
// </style>
// </head>
// <body>

// <h2>Invoice</h2>

// <div class="section">
// <strong>Name:</strong> ${order.fname} ${order.lname}<br/>
// <strong>Email:</strong> ${order.email}<br/>
// <strong>Phone:</strong> ${order.phone}<br/>
// <strong>Address:</strong> ${order.address}, ${order.city}, ${order.state}, ${order.zip}, ${order.country}
// </div>

// <div class="section">
// <table>
// <thead>
// <tr>
// <th>Product</th>
// <th>Category</th>
// <th>Price</th>
// </tr>
// </thead>
// <tbody>
// ${order.products.map(item => `
// <tr>
// <td>${item.productname}</td>
// <td>${item.categoryname}</td>
// <td>Rs.${item.price}</td>
// </tr>
// `).join("")}
// </tbody>
// </table>
// </div>

// <div class="total">
// Total: Rs.${order.subtotal}
// </div>

// </body>
// </html>`;
// ✅ WRITE FIRST
// printWindow.document.open();
// printWindow.document.write(invoiceHTML);
// printWindow.document.close();

// // ✅ THEN PRINT
// printWindow.onload = () => {
// printWindow.focus();
// printWindow.print();
// printWindow.close();
// };
// };

}

return (
<>
<HeaderApp />
<div className="max-w-6xl mx-auto px-4 py-8">
<h2 className="text-3xl font-bold mb-6">Manage Orders</h2>

{orders.length === 0 ? (
<p className="text-gray-500">No orders found.</p>
) : (
orders.map((order, index) => (
<div
key={order.id}
className="border rounded-xl p-6 mb-6 shadow-sm bg-white"
>
{/* CUSTOMER INFO */}
<div className="mb-4 border-b pb-4">
<h3 className="text-xl font-semibold mb-2">
Order #{index + 1}
</h3>

<p><strong>Name:</strong> {order.fname} {order.lname}</p>
<p><strong>Email:</strong> {order.email}</p>
<p><strong>Phone:</strong> {order.phone}</p>
<p>
<strong>Address:</strong> {order.address}, {order.city},{" "}
{order.state} - {order.zip}, {order.country}
</p>
</div>

{/* PRODUCTS */}
<div>
<h4 className="font-semibold mb-3">Products</h4>

{order.products?.map((item, i) => (
<div
key={i}
className="flex items-center gap-4 border-b pb-3 mb-3"
>
<img
src={item.productimage}
alt={item.productname}
className="w-16 h-16 rounded-lg object-cover"
/>

<div className="flex-1">
<h5 className="font-medium">{item.productname}</h5>
<p className="text-sm text-gray-500">
{item.categoryname}
</p>
</div>

<div className="font-semibold text-indigo-600">
Rs.{item.price}
</div>
</div>
))}
</div>

{/* TOTAL */}
<div className="flex justify-between mt-4 pt-4 border-t font-semibold text-lg">
<span>Total</span>
<span className="text-indigo-600">
Rs.{order.subtotal}
</span>
</div>
<button type="button" className="bg-green-700 p-2" onClick={() => handlePrint(order)}>
Print Invoice
</button>
</div>

))

)}

</div>
</>
);
}