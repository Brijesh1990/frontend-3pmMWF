import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const PlaceOrder = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Pricing constants (could be fetched from admin panel settings)
  const SERVICES = [
    { id: 'wash_fold', name: 'Wash & Fold', price: 15 },
    { id: 'dry_clean', name: 'Dry Cleaning', price: 25 },
    { id: 'ironing', name: 'Ironing Only', price: 10 },
  ];

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const service = SERVICES.find(s => s.id === data.serviceType);

      const orderData = {
        userId: user.uid,
        userName: user.displayName,
        userEmail: user.email,
        serviceType: data.serviceType,
        serviceName: service.name,
        quantity: parseInt(data.quantity),
        totalPrice: service.price * parseInt(data.quantity),
        address: data.address,
        pickupDate: data.pickupDate,
        status: 'Pending',
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, 'orders'), orderData);

      toast.success('Order placed successfully!');
      reset();
      navigate('/orders');
    } catch (error) {
      console.error("Order Placement Error:", error);
      if (error.code === 'permission-denied') {
        toast.error('Permission Denied! Please check your Firestore Security Rules.');
      } else {
        toast.error(error.message || 'Failed to place order. Try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 border border-gray-200">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Place New Order</h3>
            <p className="mt-1 text-sm text-gray-500">
              Provide pickup details and choose your desired service.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-6 gap-6">

                {/* Service Type */}
                <div className="col-span-6 sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700">Service Type</label>
                  <select
                    {...register('serviceType', { required: 'Please select a service' })}
                    className={`mt-1 block w-full bg-white border ${errors.serviceType ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map(service => (
                      <option key={service.id} value={service.id}>{service.name} (${service.price} / item or kg)</option>
                    ))}
                  </select>
                  {errors.serviceType && <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p>}
                </div>

                {/* Quantity */}
                <div className="col-span-6 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Est. Quantity</label>
                  <input
                    type="number"
                    min="1"
                    {...register('quantity', { required: 'Quantity is required', min: 1 })}
                    className={`mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border ${errors.quantity ? 'border-red-300' : 'border-gray-300'} rounded-md py-2 px-3`}
                  />
                  {errors.quantity && <p className="mt-1 text-sm text-red-600">{errors.quantity.message}</p>}
                </div>

                {/* Pickup Date */}
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">Pickup Date</label>
                  <input
                    type="date"
                    {...register('pickupDate', { required: 'Pickup date is required' })}
                    className={`mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border ${errors.pickupDate ? 'border-red-300' : 'border-gray-300'} rounded-md py-2 px-3`}
                  />
                  {errors.pickupDate && <p className="mt-1 text-sm text-red-600">{errors.pickupDate.message}</p>}
                </div>

                {/* Address */}
                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">Pickup Address</label>
                  <textarea
                    rows={3}
                    {...register('address', { required: 'Address is required' })}
                    className={`mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border ${errors.address ? 'border-red-300' : 'border-gray-300'} rounded-md py-2 px-3`}
                    placeholder="123 Main St, Apartment 4B..."
                  />
                  {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
                </div>

              </div>

              <div className="mt-8 text-right">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {loading ? <Loader2 className="animate-spin w-5 h-5 mr-2" /> : 'Confirm Order'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
