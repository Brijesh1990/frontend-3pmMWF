import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative">
      
      {/* Optional Animated GIF Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://media.giphy.com/media/l0HlOvJ7yaacpuSas/giphy.gif" // replace with your gif
          alt="Background Animation"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Login Card */}
      <div className="relative z-10 bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-6">
          <img
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" // optional logo gif
            alt="Logo"
            className="mx-auto h-24 w-24 object-contain"
          />
          <h1 className="text-3xl font-bold text-gray-800 mt-4">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Login to your account</p>
        </div>

        {/* Login Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-500">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              Remember me
            </label>
            <a href="#" className="hover:text-blue-600">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mt-2"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9L8oZDgyjAcoRM3jbfk81NC5Y9-TCVHOnQ&s"
              alt="Google Logo"
              className="h-5 w-5"
            />
            <span>Login with Google</span>
          </button>

          <button className="w-full flex items-center justify-center gap-3 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition bg-blue-600 text-white hover:bg-blue-700">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg"
              alt="Facebook Logo"
              className="h-5 w-5"
            />
            <span>Login with Facebook</span>
          </button>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
