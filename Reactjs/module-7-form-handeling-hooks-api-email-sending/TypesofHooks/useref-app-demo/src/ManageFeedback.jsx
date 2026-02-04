import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CountData from "./CountData";
export default function ManageFeedback() {
//destructuring of state
const[data,setData]=useState(""); 
// fetch all feedback data inside of admin 
useEffect(()=>{

axios.get(`http://localhost:8000/addfeedback`).then((response)=>{
setData(response.data);
})

},[data])


return (
<div className="min-h-screen grid grid-cols-1 md:grid-cols-[260px_1fr] bg-gray-100">

{/* SIDEBAR */}
<aside className="hidden md:flex flex-col bg-gray-900 text-gray-100 p-5">
<h2 className="text-2xl font-bold text-indigo-400 mb-8">
AdminPanel
</h2>

<nav className="space-y-4">

<ul>
<li className="text-lg"><Link to="/admin-login/manage-feedback">Manage Users</Link></li>
<li className="mt-2 text-lg"><Link to="/admin-login/manage-feedback">Manage Feedback </Link></li>

</ul>

</nav>
</aside>

{/* MAIN CONTENT */}
<div className="flex flex-col">

{/* HEADER */}
<header className="flex items-center justify-between bg-white shadow px-6 py-4">
<h1 className="text-xl font-semibold text-gray-800">
Dashboard Overview
</h1>

<div className="flex items-center gap-4">
<span className="text-sm text-gray-600">Admin</span>
<img
src="https://i.pravatar.cc/40"
alt="admin"
className="w-10 h-10 rounded-full"
/>
</div>
</header>

{/* DASHBOARD CONTENT */}
<main className="p-6 space-y-6">


{/* SECOND GRID */}
<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

{/* ACTIVITY */}
<div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold">
Manage All Feedback
</h3>

<button className="text-sm bg-red-600 text-white px-4 py-1 rounded-full">
Total Feedback <span className="ml-1 font-bold  text-white text-xl rounded-full p-1">{<CountData />}</span>
</button>
</div>

{/* TABLE WRAPPER */}
<div className="overflow-x-auto">
<table className="min-w-full border border-gray-200 p-10 rounded-lg overflow-hidden" cellPadding={10} cellSpacing={10}>
<thead className="bg-gray-100">
<tr>
<th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
#
</th>
<th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
Name
</th>
<th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
Email
</th>
<th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
Phone
</th>
<th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
Rating
</th>
<th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
Message
</th>
<th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">
Action
</th>
</tr>
</thead>

<tbody>
{data && data.map((item,index)=>{
return(
<>
<tr key={index} className="mt-2" align="center">
<td>{index+1}</td>
<td>{item.name}</td>
<td>{item.email}</td>
<td>{item.phone}</td>
<td>{item.rating}</td>
<td>{item.comment}</td>
<td className="mt-2 p-2"><button type="button" className="bg-red-700 text-white rounded-2xl p-1">Delete</button></td>
</tr>
</>
)
})}

</tbody>

</table>
</div>
</div>


</section>
</main>
</div>
</div>
);
}

/* CARD COMPONENT */
function DashboardCard({ title, value, gif }) {
return (
<div className="bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 p-5">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-gray-500">
{title}
</h3>
<span className="text-lg font-bold text-gray-800">
{value}
</span>
</div>

<img
src={gif}
alt={title}
className="w-full h-32 object-cover rounded-lg"
/>
</div>
);
}
