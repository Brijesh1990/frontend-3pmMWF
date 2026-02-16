import React from 'react'
import { Heart } from "lucide-react";
import HeaderApp from './HeaderApp';
import Footer from './FooterApp';
export default function ShopNow() {
    
const categories = [
  { name: "Veg", bg: "bg-green-400", icon: "🥕" },
  { name: "Fruits", bg: "bg-yellow-400", icon: "🍍" },
  { name: "Packed", bg: "bg-orange-400", icon: "📦" },
  { name: "Milk", bg: "bg-lime-400", icon: "🥛" },
];

const products = [
  {
    name: "Tomato",
    qty: "12 pcs · 500 to 900 gm",
    price: 35,
    image: "https://png.pngtree.com/png-clipart/20230129/original/pngtree-red-fresh-tomato-with-green-leaf-png-image_8933861.png",
  },
  {
    name: "Lady finger",
    qty: "1 Kg · 500 to 1000 gm",
    price: 25,
    image: "https://png.pngtree.com/png-clipart/20250203/original/pngtree-lady-finger-png-image_20347561.png",
  },
 //   add 10 more products in category
 {
    name: "Lady finger",
    qty: "1 Kg · 500 to 1000 gm",
    price: 25,
    image: "https://png.pngtree.com/png-clipart/20250203/original/pngtree-lady-finger-png-image_20347561.png",
  },
  {
    name: "Lady finger",
    qty: "1 Kg · 500 to 1000 gm",
    price: 25,
    image: "https://png.pngtree.com/png-clipart/20250203/original/pngtree-lady-finger-png-image_20347561.png",
  },
  {
    name: "Lady finger",
    qty: "1 Kg · 500 to 1000 gm",
    price: 25,
    image: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-eggplant-fresh-vegetable-brinjal-food-png-image_8538501.png",
  },
  {
    name: "Lady finger",
    qty: "1 Kg · 500 to 1000 gm",
    price: 25,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc4AdyeeNmwbKCuA_tugt3ldfqRyixrJSayw&s",
  },
  {
    name: "Lady finger",
    qty: "1 Kg · 500 to 1000 gm",
    price: 25,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDiiH3jptE_pZKuC8Zu2yxWoncHBc_Ti4UA&s",
  },
  {
    name: "Lady finger",
    qty: "1 Kg · 500 to 1000 gm",
    price: 25,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO2HNY0z-e84FSOoRBeZUgddlhHbK-HYL1kA&s",
  },

];
  return (

  <>
     <HeaderApp />
  <div className="max-w-6xl mx-auto px-4 py-8 mb-20">
  {/* PAGE BANNER */}
  <div className="relative bg-green-600 rounded-2xl mb-10 overflow-hidden">
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:py-16">
      
      {/* Text */}
      <div className="text-center md:text-left md:max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Welcome to MyShop
        </h1>
        <p className="text-lg text-green-100 mb-6">
          Explore the best products in electronics, fashion, and more!
        </p>
        <a
          href="/shop"
          className="inline-block px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Shop Now
        </a>
      </div>

      {/* Optional Banner Image */}
      <div className="mt-6 md:mt-0 md:ml-10 flex-1 flex justify-center">
        <img
          src="https://png.pngtree.com/png-clipart/20241016/original/pngtree-fruit-and-vegetable-png-image_16343587.png" // replace with your banner image path
          alt="Shop Banner"
          className="h-48 md:h-64 object-contain"
        />
      </div>

    </div>
  </div>

  {/* Categories */}
  <div className="grid grid-cols-4 gap-4 mb-10">
    {categories.map((cat, i) => (
      <div key={i} className="text-center">
        <div
          className={`${cat.bg} rounded-2xl h-20 flex items-center justify-center shadow-md`}
        >
          <span className="text-3xl text-white">{cat.icon}</span>
        </div>
        <p className="mt-2 font-medium">{cat.name}</p>
      </div>
    ))}
  </div>

  {/* Products */}
  <div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
    {products.map((p, i) => (
      <div key={i} className="bg-white rounded-2xl shadow-md border p-4">
        {/* Image */}
        <div className="h-40 flex items-center justify-center">
          <img
            src={p.image}
            alt={p.name}
            className="h-full object-contain"
          />
        </div>

        {/* Info */}
        <h3 className="text-xl text-gray-700 mt-4">{p.name}</h3>
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
    ))}
  </div>
</div>
<Footer />
  </>

  )
}
