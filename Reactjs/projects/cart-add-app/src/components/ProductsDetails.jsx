import React,{useState,useEffect,useRef} from "react";
import axios from "axios";
import { Heart } from "lucide-react";
import HeaderApp from "./HeaderApp";
import { useNavigate, Link, useParams } from "react-router-dom";
export default function ProductsDetails() {
// fetch category data from api
const[data,setData]=useState("");
const[categorries,setCat]=useState("");
const navigate=useNavigate();
// stored all data 

const categoryname=useRef("");
const productname=useRef(""); 
const price=useRef("");
const qty=useRef("");
const status=useRef("");
const description=useRef("");
const productimage=useRef("");
const images=useRef("");
const{id}=useParams();

// create a api to get particular products in products details 
useEffect(()=>{
    axios.get(`http://localhost:8000/products/${id}`).then((response)=>{
    // get all data response 
  
    categoryname.current.value=response.data.categoryname;
    productname.current.value=response.data.productname;
    price.current.value=response.data.price;
    qty.current.value=response.data.qty;
    status.current.value=response.data.status;
    description.current.value=response.data.description;
    images.current.src=response.data.productimage;
    productimage.current.value=response.data.productimage;  

    })
},[]);

// add products in cart
const addCartForm=(e)=>{
    e.preventDefault();
    var insert={
    categoryname:categoryname.current.value,
    productname:productname.current.value,
    price:price.current.value,
    qty:qty.current.value,
    status:status.current.value,
    description:description.current.value,
    productimage:productimage.current.value,
    
    }
    axios.post(`http://localhost:8000/cart`,insert).then(()=>{
    alert('added')
    navigate('/view-cart');

  });
}



// add products in cart 

return (
<>
 <HeaderApp />
<div className="max-w-6xl mx-auto px-4 py-8 mb-20">
 <form onSubmit={addCartForm}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
   
    {/* Product Image */}
    <div className="w-full">
    
      <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200">
        <img
          src={images} ref={images} 
          alt="Product"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <input type="hidden" ref={productimage}  />
      </div>
    </div>

    {/* Product Details */}
    <div className="flex flex-col space-y-6">

      {/* Category */}
      <span className="text-sm text-gray-500 uppercase tracking-wide">
       <input type="text" readOnly ref={categoryname} style={{border:"none"}}  /> 
      </span>

      {/* Product Name */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          <input type="text" readOnly ref={productname} style={{border:"none"}}  /> 
      </h1>

      {/* Price */}
      <div className="text-2xl font-semibold text-indigo-600">
         <label>Price</label> Rs. <input type="text" readOnly ref={price} style={{border:"none"}}  /> 
      </div>

 <div className="text-2xl font-semibold text-indigo-600">
         <label>Select Qty</label> : <input type="text" readOnly ref={qty} style={{border:"none"}}  /> 
      </div>

       <div className="text-2xl font-semibold text-indigo-600">
          <label>Status </label>: <input type="text" readOnly ref={status} style={{border:"none"}}  /> 
      </div>
      {/* Details */}
      <p className="text-black leading-relaxed">
          <label className="text-2xl">Decsriptions :</label>
          <br /> <br />
          <textarea type="text" readOnly ref={description}  style={{border:"none"}}></textarea> 
      </p>

      {/* Quantity Selector */}
      
      {/* Add to Cart Button */}


      <div className="inline-flex space-x-3">
      <button type="button" className="w-full inline-flex md:w-fit bg-green-700 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition duration-300">
        continue shopping
      </button>

    <button type="submit" className="w-full md:w-fit inline-flex bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition duration-300">
        Add to Cart
    </button>
    </div>
      

    </div>
   
  </div>
 </form>
</div>
</>
);
}
