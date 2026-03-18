import React, { useState } from "react";

export default function Sidebar() {
const [open, setOpen] = useState(false);

return (
<>
{/* SIDEBAR */}
<nav className="hidden md:flex md:w-1/4 lg:w-1/6 flex-col bg-gray-900 text-gray-200 min-h-screen">

{/* Logo */}
<h4 className="text-white  py-4 text-lg font-semibold border-b border-gray-800">
MyShop Admin
</h4>

{/* Links */}
<a
href="/admin-login/dashboard"
className="flex items-center px-6 py-3 hover:bg-gray-800 hover:text-white transition"
>
<i className="bi bi-speedometer2 mr-3" />
Dashboard
</a>

<div className="group">
  
  <a
    href="#"
    className="flex items-center justify-between px-6 py-3 hover:bg-gray-800 hover:text-white transition"
  >
    <div className="flex items-center">
      <i className="bi bi-bag mr-3"></i>
      Category
    </div>
    <span className="transition-transform duration-300 group-hover:rotate-180">
      ▼
    </span>
  </a>

  <div className="hidden group-hover:block bg-gray-900">
    <a
      href="/admin-login/addcategory"
      className="block pl-14 pr-6 py-2 text-sm hover:bg-gray-700 hover:text-white transition"
    >
      ➕ Add Category
    </a>

    <a
      href="/admin-login/manage-category"
      className="block pl-14 pr-6 py-2 text-sm hover:bg-gray-700 hover:text-white transition"
    >
      ⚙️ Manage Category
    </a>
  </div>

</div>

<div className="group">
  
  <a
    href="#"
    className="flex items-center justify-between px-6 py-3 hover:bg-gray-800 hover:text-white transition"
  >
    <div className="flex items-center">
      <i className="bi bi-bag mr-3"></i>
      Products
    </div>
    <span className="transition-transform duration-300 group-hover:rotate-180">
      ▼
    </span>
  </a>

  <div className="hidden group-hover:block bg-gray-900">
    <a
      href="/admin-login/addproducts"
      className="block pl-14 pr-6 py-2 text-sm hover:bg-gray-700 hover:text-white transition"
    >
      ➕ Add Products
    </a>

    <a
      href="/admin-login/manageproducts"
      className="block pl-14 pr-6 py-2 text-sm hover:bg-gray-700 hover:text-white transition"
    >
      ⚙️ Manage Products
    </a>
  </div>

</div>


<a
href="/admin-login/manage-orders"
className="flex items-center px-6 py-3 hover:bg-gray-800 hover:text-white transition"
>
<i className="bi bi-cart mr-3" />
Orders
</a>

<a
href="/admin-login/manage-customers"
className="flex items-center px-6 py-3 hover:bg-gray-800 hover:text-white transition"
>
<i className="bi bi-people mr-3" />
Customers
</a>

<a
href="#"
className="flex items-center px-6 py-3 hover:bg-gray-800 hover:text-white transition"
>
<i className="bi bi-bar-chart mr-3" />
Reports
</a>

<a
href="#"
className="flex items-center px-6 py-3 hover:bg-gray-800 hover:text-white transition"
>
<i className="bi bi-gear mr-3" />
Settings
</a>

{/* Logout Button */}
<div className="mt-auto p-6">
<button
onClick={() => setOpen(true)}
className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
>
Logout
</button>
</div>
</nav>

{/* LOGOUT MODAL */}
{open && (
<div className="fixed inset-0 z-50 flex items-center justify-center">

{/* Overlay */}
<div
className="absolute inset-0 bg-black/50"
onClick={() => setOpen(false)}
></div>

{/* Modal */}
<div className="relative bg-white w-full max-w-md rounded-xl shadow-xl p-6">

{/* Header */}
<div className="flex justify-between items-center border-b pb-3">
<h5 className="text-lg font-semibold">
Logout Confirmation
</h5>
<button
onClick={() => setOpen(false)}
className="text-gray-400 hover:text-gray-700 text-xl"
>
✕
</button>
</div>

{/* Body */}
<div className="py-4 text-gray-600">
Are you sure you want to logout?
</div>

{/* Footer */}
<div className="flex justify-end gap-3 border-t pt-4">
<button
onClick={() => setOpen(false)}
className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
>
Cancel
</button>

<a
href="/login"
className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
>
Logout
</a>
</div>

</div>
</div>
)}
</>
);
}
