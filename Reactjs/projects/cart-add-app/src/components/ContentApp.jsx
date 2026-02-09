import { Heart } from "lucide-react";

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

export default function ContentApp() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mb-20">

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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md border p-4"
          >
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
  );
}
