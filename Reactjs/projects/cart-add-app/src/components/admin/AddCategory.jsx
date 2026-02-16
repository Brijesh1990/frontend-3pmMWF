import React,{useRef,useState} from "react";
// import Swal from "sweetalert2";
import axios from "axios";
import FlashMessage from 'react-flash-message';
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Logout from "./Logout";
export default function AddCategory() {
  //flash messages
  const [showMessage, setShowMessage] = useState(false);
  // create to UeRef to stored data 
  const categoryname=useRef("");
  const status=useRef("");
  const description=useRef("");
  const imgUrl=useRef("");
  const navigate=useNavigate("");
  // create a form Handeling method 
  const addCategoryData=(event)=>{
    event.preventDefault();
    var insertData={
      categoryname:categoryname.current.value,
      status:status.current.value,
      description:description.current.value,
      imgUrl:imgUrl.current.value,
     
    }
    // call api to add data 
    axios.post(`http://localhost:8000/categories`,insertData).then(()=>{
  // pass message 
  
  // Swal.fire({
  // title: "",
  // text: "Your category added successfully!",
  // icon: "success"
  // });

    // pass flash message 
     setShowMessage(true);
    // Optional: hide automatically after a delay
    setTimeout(() => setShowMessage(false), 5000); // Hide after 5 seconds     
    })
    navigate('/admin-login/addcategory');
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
                Add New Category
              </div>

              {/* Card Body */}
              <div className="p-6">
              
                <form onSubmit={addCategoryData}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Category Name */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Category Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter category name" ref={categoryname}
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
                        <option  value="Inactive">Inactive</option>
                      </select>
                    </div>

                    {/* Description (Full Width) */}
                    <div className="md:col-span-2">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Category Description
                      </label>
                      <textarea
                        rows="3"  ref={description}
                        placeholder="Enter category description"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      ></textarea>
                    </div>

                    {/* Optional Image */}
                    <div className="md:col-span-2">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Category Image
                      </label>
                      <input
                        type="url" ref={imgUrl} placeholder="Enter category Image URL"
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
                      Add Category
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
