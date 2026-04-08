import React, { useEffect, useState } from 'react';
import { ShoppingBag, Clock, CheckCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({ total: 0, pending: 0, completed: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const q = query(collection(db, 'orders'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        
        let total = 0;
        let pending = 0;
        let completed = 0;

        querySnapshot.forEach((doc) => {
          total++;
          const data = doc.data();
          if (data.status === 'Completed') completed++;
          else pending++;
        });

        setStats({ total, pending, completed });
      } catch (error) {
        console.error("Failed to fetch stats", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [user]);

  const statCards = [
    { name: 'Total Orders', stat: stats.total, icon: ShoppingBag, color: 'text-blue-600', bg: 'bg-blue-100' },
    { name: 'Pending Orders', stat: stats.pending, icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-100' },
    { name: 'Completed Orders', stat: stats.completed, icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate mb-6">Overview</h2>
      
      {loading ? (
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-24 bg-gray-200 rounded w-full"></div>
            <div className="h-24 bg-gray-200 rounded w-full"></div>
            <div className="h-24 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
          {statCards.map((item) => (
            <div key={item.name} className="bg-white overflow-hidden shadow rounded-lg border border-gray-100">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className={`p-3 rounded-md ${item.bg}`}>
                      <item.icon className={`h-6 w-6 ${item.color}`} aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                      <dd>
                        <div className="text-2xl font-bold text-gray-900">{item.stat}</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Promotional or Recent Activity Area */}
      <div className="bg-blue-600 rounded-lg shadow-lg overflow-hidden relative mb-8">
        <div className="px-6 py-8 sm:p-10 text-white relative z-10">
          <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Need your laundry done fast?</h3>
          <p className="mt-4 max-w-3xl text-lg text-blue-100">
            Schedule a pickup today and get 20% off your first premium wash & fold order!
          </p>
          <div className="mt-8">
            <a href="/order/new" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
              Place an Order Now
            </a>
          </div>
        </div>
        {/* Decorative background blocks */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-blue-500 opacity-20 transform -skew-x-12 z-0"></div>
      </div>
    </div>
  );
};

export default Dashboard;
