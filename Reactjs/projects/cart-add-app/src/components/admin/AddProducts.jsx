import React,{useRef,useState,useEffect} from "react";
// import Swal from "sweetalert2";
import axios from "axios";
import FlashMessage from 'react-flash-message';
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Logout from "./Logout";
export default function AddProducts() {
// fetch category data from api
const[category,setCat]=useState("");
useEffect(()=>{
axios.get(`http://localhost:8000/categories`).then((response)=>{
setCat(response.data);
})
},[category]);  
//flash messages
const [showMessage, setShowMessage] = useState(false);
// create to UeRef to stored data
const productname=useRef(""); 
const categoryname=useRef("");
const price=useRef("");
const qty=useRef("");
const status=useRef("");
const description=useRef("");
const productimage=useRef("");
const navigate=useNavigate("");
// create a form Handeling method 
const addProductsData=(event)=>{
event.preventDefault();
var insertData={
productname:productname.current.value, 
categoryname:categoryname.current.value,
price:price.current.value,
qty:qty.current.value,
status:status.current.value,
description:description.current.value,
productimage:productimage.current.value,

}
// call api to add data 
axios.post(`http://localhost:8000/products`,insertData).then(()=>{
// pass flash message 
setShowMessage(true);
// Optional: hide automatically after a delay
setTimeout(() => setShowMessage(false), 5000); // Hide after 5 seconds     
})
navigate('/admin-login/addproducts');
event.target.reset();
}

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

{/* CARD */}
<div className="bg-white shadow-sm rounded-xl mb-6">

{showMessage && (
<FlashMessage duration={5000}>
<strong className="p-3 bg-green-900 text-white">Category! Record added successfully!</strong>
</FlashMessage>
)}

{/* Card Header */}
<div className="px-6 py-4 border-b font-semibold text-gray-800">
Add New Product
</div>

{/* Card Body */}
<div className="p-6">
<form onSubmit={addProductsData}>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Product Name */}
<div className="md:col-span-1 lg:col-span-1">
<label className="block mb-2 text-sm font-medium text-gray-700">
Product Name
</label>
<input
type="text"
placeholder="Enter product name" ref={productname}
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
/>
</div>

{/* Category */}
<div>
<label className="block mb-2 text-sm font-medium text-gray-700">
Category
</label>
<select  ref={categoryname} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
<option>Select category</option>
{category && category.map((row)=>{
return(<>
<option value={row.categoryname}>{row.categoryname}</option>
</>)
})
}

</select>
</div>

{/* Price */}
<div>
<label className="block mb-2 text-sm font-medium text-gray-700">
Price ($)
</label>
<input
type="number" ref={price}
placeholder="0.00"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
/>
</div>

{/* Stock */}
<div>
<label className="block mb-2 text-sm font-medium text-gray-700">
Stock Quantity
</label>
<input
type="number" ref={qty}
placeholder="0"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
/>
</div>

{/* Status */}
<div>
<label className="block mb-2 text-sm font-medium text-gray-700">
Status
</label>
<select ref={status} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
<option value="active">Active</option>
<option value="Inactive">Inactive</option>
</select>
</div>

{/* Description (Full Width) */}
<div className="md:col-span-2 lg:col-span-3">
<label className="block mb-2 text-sm font-medium text-gray-700">
Product Description
</label>
<textarea
rows="3"
placeholder="Enter product description" ref={description}
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
></textarea>
</div>

{/* Image Upload */}
<div>
<label className="block mb-2 text-sm font-medium text-gray-700">
Product Image
</label>
<input
type="url" ref={productimage}
className="w-full border border-gray-300 rounded-lg px-4 py-2 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
/>
</div>

</div>

{/* Buttons */}
<div className="flex justify-end gap-3 mt-6">
<button
type="reset"
className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
>
Clear
</button>
<button
type="submit"
className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
>
Add Product
</button>
</div>

</form>
</div>
</div>

</main>
</div>
</div>

{/* LOGOUT MODAL */}
<Logout />
</>
);
}
