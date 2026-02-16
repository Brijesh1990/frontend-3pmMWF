import React,{useState,useEffect} from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Logout from "./Logout";
import axios from "axios";
export default function ManageProducts() {
  // fetch category data from api
 const[products,setProducts]=useState("");

  useEffect(()=>{
    axios.get(`http://localhost:8000/products`).then((response)=>{
       setProducts(response.data);
    })
 
 },[products]);
  // Function to export table to Excel
  const exportToExcel = () => {
    const csvContent = [
      ["ID", "CategoryName", "Status", "Descriptions", "Photo"],
      ...category.map(c => [c.id, c.categoryname, c.status, c.description, c.imgUrl])
    ]
      .map(e => e.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "categorydata.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Manage All Products</h2>
              <button
                onClick={exportToExcel}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Export to Excel
              </button>
            </div>

            {/* Customer Table */}
            <div className="bg-white shadow-sm rounded-xl overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">ID</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">CategoryName</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Price</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Qty</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">description</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Image</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                
                  {products && products.map((item,i) => {
                    
                    return(
                        <>
                      
                     <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{i+1}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.categoryname}</td>
                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.productname}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.price}</td>
                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.qty}</td>
                       <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-white text-xs ${item.status === "active" ? "bg-green-600" : "bg-red-600"}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.description}</td>
                     
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"><img src={item.productimage} alt="category photo" className="w-15" /></td>
                     
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mr-2">
                          Edit
                        </button>
                        <button className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                          Delete
                        </button>
                      </td>
                    </tr>
                     </>
                    
            
                  )})
                  }
                </tbody>
              </table>
            </div>

          </main>
        </div>
      </div>

      {/* LOGOUT MODAL */}
      <Logout />
    </>
  );
}
