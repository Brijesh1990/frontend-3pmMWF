import React, { useEffect, useState } from 'react';
import { collection, query, getDocs, updateDoc, doc, orderBy } from 'firebase/firestore';
import { db } from '../../firebase/config';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const q = query(collection(db, 'orders'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      data.sort((a, b) => b.createdAt?.toMillis() - a.createdAt?.toMillis());
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const orderRef = doc(db, 'orders', orderId);
      await updateDoc(orderRef, { status: newStatus });
      toast.success(`Order status updated to ${newStatus}`);
      fetchOrders(); // Refresh the list
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Manage Orders</h2>
            <button onClick={fetchOrders} className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md font-medium text-gray-700">Refresh</button>
          </div>
          
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            {loading ? (
              <div className="flex justify-center p-10">
                <Loader2 className="animate-spin text-indigo-500 w-10 h-10" />
              </div>
            ) : orders.length === 0 ? (
               <div className="text-center p-10 bg-white">
                  <p className="text-gray-500">No orders found.</p>
               </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order / User
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Pickup Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                       Status Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                         <div className="text-sm font-medium text-gray-900">#{order.id.substring(0, 8)}</div>
                         <div className="text-xs text-gray-500">{order.userName}</div>
                         <div className="text-xs text-gray-400">{order.userEmail}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.serviceName} ({order.quantity})
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                         ${order.totalPrice}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                         {order.pickupDate || new Date(order.createdAt?.toMillis()).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                         <select
                           value={order.status}
                           onChange={(e) => handleStatusChange(order.id, e.target.value)}
                           className={`mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm 
                             ${order.status === 'Completed' ? 'text-green-700 font-semibold' : ''}
                             ${order.status === 'Pending' ? 'text-yellow-600 font-semibold' : ''}
                             ${order.status === 'Processing' ? 'text-blue-600 font-semibold' : ''}
                             ${order.status === 'Cancelled' ? 'text-red-600 font-semibold' : ''}
                           `}
                         >
                           <option value="Pending">Pending</option>
                           <option value="Processing">Processing</option>
                           <option value="Completed">Completed</option>
                           <option value="Cancelled">Cancelled</option>
                         </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
