import React,{useEffect,useState} from 'react'
import axios from 'axios';
export default function Content() {
// fetch category data from api
const[category,setCat]=useState("");
useEffect(()=>{
axios.get(`http://localhost:8000/categories`).then((response)=>{
setCat(response.data);
})

},[category]);
return (
<>
{/* STAT CARDS */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

{/* Card 1 */}
<div className="bg-white shadow-sm rounded-xl p-5">
<div className="flex justify-between items-center">
<div>
<h6 className="text-gray-500 text-sm">Total Category</h6>
<h4 className="text-2xl font-bold">{category.length}</h4>
</div>
<i className="bi bi-currency-dollar text-blue-600 text-3xl" />
</div>
</div>

{/* Card 2 */}
<div className="bg-white shadow-sm rounded-xl p-5">
<div className="flex justify-between items-center">
<div>
<h6 className="text-gray-500 text-sm">Orders</h6>
<h4 className="text-2xl font-bold">320</h4>
</div>
<i className="bi bi-cart-check text-green-600 text-3xl" />
</div>
</div>

{/* Card 3 */}
<div className="bg-white shadow-sm rounded-xl p-5">
<div className="flex justify-between items-center">
<div>
<h6 className="text-gray-500 text-sm">Customers</h6>
<h4 className="text-2xl font-bold">1,250</h4>
</div>
<i className="bi bi-people text-yellow-500 text-3xl" />
</div>
</div>

{/* Card 4 */}
<div className="bg-white shadow-sm rounded-xl p-5">
<div className="flex justify-between items-center">
<div>
<h6 className="text-gray-500 text-sm">Products</h6>
<h4 className="text-2xl font-bold">85</h4>
</div>
<i className="bi bi-box text-red-600 text-3xl" />
</div>
</div>

</div>


{/* ORDERS TABLE */}
<div className="bg-white shadow-sm rounded-xl mb-6">

{/* Header */}
<div className="px-6 py-4 border-b font-semibold text-gray-800">
Recent Orders
</div>

{/* Table */}
<div className="overflow-x-auto">
<table className="min-w-full text-left text-sm">

<thead className="bg-gray-100 text-gray-600 uppercase text-xs">
<tr>
<th className="px-6 py-3">#</th>
<th className="px-6 py-3">Customer</th>
<th className="px-6 py-3">Product</th>
<th className="px-6 py-3">Status</th>
<th className="px-6 py-3">Total</th>
</tr>
</thead>

<tbody className="divide-y">
<tr className="hover:bg-gray-50">
<td className="px-6 py-4">1</td>
<td className="px-6 py-4">John Doe</td>
<td className="px-6 py-4">Smart Watch</td>
<td className="px-6 py-4">
<span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
Completed
</span>
</td>
<td className="px-6 py-4">$120</td>
</tr>

<tr className="hover:bg-gray-50">
<td className="px-6 py-4">2</td>
<td className="px-6 py-4">Sarah Lee</td>
<td className="px-6 py-4">Headphones</td>
<td className="px-6 py-4">
<span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full">
Pending
</span>
</td>
<td className="px-6 py-4">$80</td>
</tr>

<tr className="hover:bg-gray-50">
<td className="px-6 py-4">3</td>
<td className="px-6 py-4">David Miller</td>
<td className="px-6 py-4">Sneakers</td>
<td className="px-6 py-4">
<span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">
Cancelled
</span>
</td>
<td className="px-6 py-4">$150</td>
</tr>
</tbody>

</table>
</div>
</div>

</>

)
}
