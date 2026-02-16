import React,{useState,useEffect} from "react";
import axios from "axios";
import { Heart } from "lucide-react";
export default function ContentApp() {
// fetch category data from api
 const[categorries,setCat]=useState("");
//  fetch products here
const[products,setProducts]=useState("");
 
//  category
  useEffect(()=>{
    axios.get(`http://localhost:8000/categories`).then((response)=>{
       setCat(response.data);
    })
 
 },[categorries]);


 
//  products
  useEffect(()=>{
    axios.get(`http://localhost:8000/products`).then((response)=>{
       setProducts(response.data);
    })
 
 },[products]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mb-20">
      {/* Categories */}
   
   <div className="grid grid-cols-4 gap-4 mb-10">
{categorries && categorries.map((cat,i)=>{
return (
<>
<div key={i} className="text-center">
<div
className={`${cat.bg} rounded-2xl h-20 flex items-center justify-center shadow-md`}
>
<span className="text-3xl text-white"><img src={cat.imgUrl} style={{width:"100px", height:"50px"}}/></span>
</div>
<p className="mt-2 font-medium">{cat.categoryname}</p>
</div>

</>
)
})}

</div>


      {/* Products */}
      <div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3  gap-6">
        {products && products.map((p,i)=>{
          return(
            <>
 <div
            key={i}
            className="bg-white rounded-2xl shadow-md border p-4"
          >
            {/* Image */}
            <div className="h-40 flex items-center justify-center">
              <img
                src={p.productimage}
                alt={p.productimage}
                className="h-full object-contain"
              />
            </div>

            {/* Info */}
            <h3 className="text-xl text-gray-700 mt-4">{p.productname}</h3>
            <p className="text-gray-400 text-sm">{p.qty}</p>

            <hr className="my-4 border-green-300" />

            {/* Bottom */}
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-green-500">
                ₹ {p.price}
              </span>

              <div className="flex items-center gap-3">
                <button className="border rounded-lg px-4 py-1 font-medium hover:bg-gray-100">
                  Add +
                </button>

                <Heart className="text-green-400 cursor-pointer" />
              </div>
            </div>
          </div>
          </>)
        })}
         
    
      </div>
    </div>
  );
}
