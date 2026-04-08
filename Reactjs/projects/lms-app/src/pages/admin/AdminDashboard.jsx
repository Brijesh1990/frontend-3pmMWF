import React, { useEffect, useState } from 'react';
import { Users, ShoppingBag, DollarSign, Clock, ArrowUpRight } from 'lucide-react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const [stats, setStats] = useState({ users: 0, orders: 0, revenue: 0 });
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      setLoading(true);
      // Fetch all users and orders collections
      const usersSnap = await getDocs(collection(db, 'users'));
      const ordersSnap = await getDocs(collection(db, 'orders'));
      
      let totalRevenue = 0;
      ordersSnap.forEach(doc => {
         // Summing up 'totalPrice' field from each order document
         totalRevenue += doc.data().totalPrice || 0;
      });

      setStats({
        users: usersSnap.size,
        orders: ordersSnap.size,
        revenue: totalRevenue
      });
    } catch (error) {
      console.error("Error fetching admin stats:", error);
      if (error.code === 'permission-denied') {
        toast.error("Dashboard Error: Permission Denied. Check Firestore Rules!");
      } else {
        toast.error("Failed to load dashboard statistics.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const statCards = [
    { 
      name: 'Total Registered Users', 
      stat: stats.users, 
      icon: Users, 
      color: 'text-purple-600', 
      bg: 'bg-purple-50',
      description: 'Total active user accounts'
    },
    { 
      name: 'Total Orders', 
      stat: stats.orders, 
      icon: ShoppingBag, 
      color: 'text-blue-600', 
      bg: 'bg-blue-50',
      description: 'Total orders placed till date'
    },
    { 
      name: 'Total Revenue Generated', 
      stat: `$${stats.revenue.toLocaleString()}`, 
      icon: DollarSign, 
      color: 'text-emerald-600', 
      bg: 'bg-emerald-50',
      description: 'Calculated from completed payments'
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Admin Overview</h2>
          <p className="mt-1 text-sm text-gray-500 font-medium">Real-time business performance analytics.</p>
        </div>
        <button 
          onClick={fetchStats}
          className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-all"
        >
          Refresh Data
        </button>
      </div>
      
      {loading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
           {[...Array(3)].map((_, i) => (
             <div key={i} className="h-40 bg-gray-100 animate-pulse rounded-3xl shadow-sm"></div>
           ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {statCards.map((item) => (
            <div key={item.name} className="group bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-[2.5rem] border border-gray-100">
              <div className="p-8">
                <div className="flex items-start justify-between">
                  <div className={`p-4 rounded-2xl ${item.bg} ${item.color} transition-transform group-hover:scale-110`}>
                    <item.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-300 group-hover:text-blue-500 transition-colors" />
                </div>
                <div className="mt-6">
                  <dt className="text-sm font-semibold text-gray-400 uppercase tracking-widest">{item.name}</dt>
                  <dd className="mt-1 flex items-baseline justify-between">
                    <div className="text-4xl font-black text-gray-900 tracking-tighter">
                      {item.stat}
                    </div>
                  </dd>
                  <p className="mt-2 text-xs text-gray-500 font-medium">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Decorative Placeholder for Reports */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-10 overflow-hidden relative shadow-2xl">
         <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">Grow your wash business.</h3>
            <p className="text-gray-400 max-w-md">Detailed visual reports and performance tracking charts will be available in the next system update.</p>
         </div>
         <div className="absolute top-0 right-0 p-8">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-full">
               <Clock className="text-blue-400 h-8 w-8" />
            </div>
         </div>
         {/* Abstract background flare */}
         <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>
      </div>
    </div>
  );
};

export default AdminDashboard;
