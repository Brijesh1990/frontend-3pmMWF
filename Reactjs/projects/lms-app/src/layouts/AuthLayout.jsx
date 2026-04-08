import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] relative overflow-hidden flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex flex-col items-center justify-center">
          <div className="p-3 bg-white shadow-lg rounded-2xl mb-4 border border-blue-50">
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h2 className="text-center text-4xl font-black text-gray-900 tracking-tight">
            WashSwift
          </h2>
          <p className="mt-2 text-sm text-gray-500 font-medium">Laundry Management Reimagined</p>
        </div>
      </div>

      <div className="mt-8 relative sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="bg-white/80 backdrop-blur-md py-10 px-6 shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] sm:rounded-3xl sm:px-12 border border-white/50 ring-1 ring-black/5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
