import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";


const CreatePost = () => {
    const [title, setTitle] = useState("");
 


  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-10">
        <div className="bg-white p-6 shadow w-96">
          <h2 className="text-xl mb-4">Create Post</h2>
          <input
            placeholder="Title"
            className="w-full border p-2 mb-3"
            
          />
          <textarea
            placeholder="Content"
            className="w-full border p-2 mb-3"
            
          />
          <button
           
            className="bg-blue-500 text-white px-4 py-2 w-full"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};


export default CreatePost;