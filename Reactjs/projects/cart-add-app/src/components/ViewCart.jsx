import React,{useState,useEffect} from "react";
import axios from "axios";
import { Heart } from "lucide-react";
import HeaderApp from "./HeaderApp";
import { useNavigate, Link, useParams } from "react-router-dom";
export default function ViewCart() {
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

<h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>

<div className="grid grid-cols-1 gap-8">

{/* Cart Items */}
<div className="space-y-6">


{/* Cart Item */}
<div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-center border border-gray-200 rounded-xl p-4 shadow-sm">
{cart && cart.map((items)=>{
return(<>
{/* Image */}
<div className="md:col-span-1">
<img
src={items.productimage}
alt="Product"
className="w-18 rounded-lg"
/>
</div>

{/* Product Info */}
<div className="md:col-span-2 space-y-1">
<h3 className="font-semibold text-lg">{items.productname}</h3>
<p className="text-sm text-gray-500">{items.categoryname}</p>
</div>

{/* Price */}
<div className="md:col-span-1 text-gray-700 font-medium">
Rs.{items.price}
</div>

{/* Quantity */}
<div className="md:col-span-1">
<div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-fit">
<button className="px-3 py-1 bg-gray-100 hover:bg-gray-200">-</button>
<input
type="number"
defaultValue="1"
min="1"
className="w-12 text-center outline-none"
/>
<button className="px-3 py-1 bg-gray-100 hover:bg-gray-200">+</button>
</div>
</div>

{/* Subtotal */}
<div className="md:col-span-1 flex justify-between md:block items-center">
<span className="md:hidden font-medium">Subtotal:</span>
<span className="font-semibold text-indigo-600">Rs. {items.price}</span>
</div>

{/* Remove */}
<div className="md:col-span-6 flex justify-end">
<button type="button" onClick={()=>navigate(`/view-cart/${items.id}`)} className="text-red-500 hover:underline text-sm">
Remove
</button>
</div>

</>) 
})}

</div>

{/* Duplicate above block for more products */}

</div>

{/* Cart Summary */}
<div className="border border-gray-200 rounded-xl p-6 shadow-sm md:w-1/3 ml-auto">

<h3 className="text-xl font-semibold mb-4">Cart Summary</h3>

<div className="flex justify-between mb-2">
<span>Subtotal</span>
<span>Rs.{cart.reduce((acc,cart)=>acc + Number(cart.price || 0),0).toFixed(2)}</span>
</div>
<div className="border-t border-gray-300 my-3"></div>

<Link to='/checkout-here'><button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition">
Proceed to Checkout
</button></Link>

</div>

</div>
</div>
</>
);
}
