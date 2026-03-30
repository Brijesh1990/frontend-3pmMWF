import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Navbar from "../component/Navbar";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPosts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Blogs Card */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 animate-fadeIn">
        <h2 className="text-lg opacity-80">Total Blogs</h2>
        <p className="text-4xl font-bold mt-2"></p>
      </div>

      {/* Users Card */}
      <div className="bg-gradient-to-r from-green-400 to-emerald-600 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 animate-fadeIn delay-100">
        <h2 className="text-lg opacity-80">Total Customers</h2>
        <p className="text-4xl font-bold mt-2"></p>
      </div>

    </div>
    </div>
  );
};

export default Dashboard;