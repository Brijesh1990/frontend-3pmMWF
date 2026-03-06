import React,{useState,useEffect} from "react";
import axios from "axios";
import { Heart } from "lucide-react";
import HeaderApp from "./HeaderApp";
import { useNavigate, Link, useParams } from "react-router-dom";
export default function CheckoutApp() {
// fetch cart data from api
const[cart,setCart]=useState([]);
const navigate=useNavigate();
useEffect(()=>{
axios.get(`http://localhost:8000/cart`).then((response)=>{
setCart(response.data);
})
},[cart]);

return (
<>
<HeaderApp />
<div className="max-w-6xl mx-auto px-4 py-8 mb-20 bg-white">

<h2 className="text-3xl font-bold mb-8">Checkout</h2>

{/* Main Grid */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

{/* ================= LEFT GRID : CUSTOMER DETAILS ================= */}
<div className="lg:col-span-2 border border-gray-200 rounded-xl p-6 shadow-sm">

<h3 className="text-xl font-semibold mb-6">Billing Details</h3>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<input
type="text"
placeholder="First Name"
className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
/>

<input
type="text"
placeholder="Last Name"
className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
/>

<input
type="email"
placeholder="Email Address"
className="border border-gray-300 rounded-lg p-3 md:col-span-2"
/>

<input
type="tel"
placeholder="Phone Number"
className="border border-gray-300 rounded-lg p-3 md:col-span-2"
/>

<input
type="text"
placeholder="City"
className="border border-gray-300 rounded-lg p-3"
/>

<input
type="text"
placeholder="State"
className="border border-gray-300 rounded-lg p-3"
/>

<input
type="text"
placeholder="Zip Code"
className="border border-gray-300 rounded-lg p-3"
/>

<input
type="text"
placeholder="Country"
className="border border-gray-300 rounded-lg p-3"
/>

<textarea
placeholder="Full Address"
rows="3"
className="border border-gray-300 rounded-lg p-3 md:col-span-2"
/>

</div>

</div>

{/* ================= RIGHT GRID : CART DETAILS ================= */}
<div className="border border-gray-200 rounded-xl p-6 shadow-sm h-fit">

<h3 className="text-xl font-semibold mb-4">Your Order</h3>

<div className="space-y-4">

{cart && cart.map((items) => {
return(
<div key={items.id} className="flex items-center gap-4 border-b pb-4">

<img
src={items.productimage}
alt={items.productname}
className="w-16 h-16 object-cover rounded-lg"
/>

<div className="flex-1">
<h4 className="font-medium">{items.productname}</h4>
<p className="text-sm text-gray-500">{items.categoryname}</p>
</div>

<div className="font-semibold text-indigo-600">
Rs.{items.price}
</div>

</div>
)
})}

</div>

{/* TOTAL */}
<div className="border-t mt-6 pt-4 space-y-2">

<div className="flex justify-between">
<span>Subtotal</span>
<span>
Rs.{cart.reduce((acc,cart)=>acc + Number(cart.price || 0),0).toFixed(2)}
</span>
</div>

<div className="flex justify-between font-semibold text-lg">
<span>Total</span>
<span className="text-indigo-600">
Rs.{cart.reduce((acc,cart)=>acc + Number(cart.price || 0),0).toFixed(2)}
</span>
</div>

<button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition">
Place Order
</button>

</div>

</div>

</div>

</div>
</>
);
}
