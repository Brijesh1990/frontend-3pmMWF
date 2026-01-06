import React from "react";
import data from "./Data";

const ProductList = () => {
  return (
    <div className="container p-12 bg-amber-50 mx-auto mt-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Product List
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
   
                    <img src={item.photo} alt={item.name} className="w-full h-48 object-cover rounded-md mb-4" />
   
                    <h2 className="text-xl font-semibold mb-2 text-center">{item.name}</h2>
                    <p className="text-gray-600 text-center">Age: {item.age}</p>
                </div>
            ))}
        </div>
    </div>
  )}

export default ProductList;