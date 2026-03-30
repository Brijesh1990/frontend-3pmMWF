import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div className="bg-gray-900 text-white px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold cursor-pointer" onClick={()=>navigate("/")}>
        BlogApp
      </h1>
      <div>
        <button
          onClick={()=>navigate("/create")}
          className="mr-4 bg-blue-500 px-4 py-2 rounded"
        >
          Add Blogs
        </button>

         <button
          onClick={()=>navigate("/create")}
          className="mr-4 bg-blue-500 px-4 py-2 rounded"
        >
          Manage Blogs
        </button>

         <b className="mr-4  px-4 py-2 rounded text-white">
          Welcome : {auth.currentUser.email} 
        </b> 

        <button
          onClick={logout}
          className="bg-red-500 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;