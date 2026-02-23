import React,{useState,useEffect} from "react";
import axios from "axios";
import { Heart } from "lucide-react";
import HeaderApp from "./HeaderApp";
import { useNavigate, Link, useParams } from "react-router-dom";
export default function ViewCart() {
// fetch cart data from api
const[cart,setCart]=useState("");
   useEffect(()=>{
    axios.get(`http://localhost:8000/cart`).then((response)=>{
       setCart(response.data);
    })
 
 },[cart]);



return (
<>
 <HeaderApp />
<div className="max-w-6xl mx-auto px-4 py-8 mb-20">

  <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>

  <div className="grid grid-cols-1 gap-8">

    {/* Cart Items */}
    <div className="space-y-6">

         
      {/* Cart Item */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-center border border-gray-200 rounded-xl p-4 shadow-sm">
        {cart && cart.map(()=>{
            return(<>
    {/* Image */}
        <div className="md:col-span-1">
          <img
            src="https://via.placeholder.com/150"
            alt="Product"
            className="w-full rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="md:col-span-2 space-y-1">
          <h3 className="font-semibold text-lg">Wireless Headphones</h3>
          <p className="text-sm text-gray-500">Electronics</p>
        </div>

        {/* Price */}
        <div className="md:col-span-1 text-gray-700 font-medium">
          $199.00
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
          <span className="font-semibold text-indigo-600">$199.00</span>
        </div>

        {/* Remove */}
        <div className="md:col-span-6 flex justify-end">
          <button className="text-red-500 hover:underline text-sm">
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
        <span>$199.00</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>$10.00</span>
      </div>

      <div className="border-t border-gray-300 my-3"></div>

      <div className="flex justify-between text-lg font-bold">
        <span>Total</span>
        <span>$209.00</span>
      </div>

      <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition">
        Proceed to Checkout
      </button>

    </div>

  </div>
</div>
</>
);
}
