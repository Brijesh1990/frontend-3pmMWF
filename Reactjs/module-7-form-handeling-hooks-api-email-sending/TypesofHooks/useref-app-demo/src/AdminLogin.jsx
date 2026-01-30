import React from "react";
export default function AdminLogin() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-100">
      
      {/* LEFT: LOGIN FORM */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
          
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
            Admin Login
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            Sign in to manage the dashboard
          </p>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Admin Email
              </label>
              <input
                type="email"
                required
                placeholder="admin@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none
                focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none
                focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-indigo-500" />
                Remember me
              </label>
              <a href="#" className="text-indigo-500 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg
              hover:bg-indigo-700 active:scale-95 transition-all duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT: GIF PANEL */}
      <div className="hidden md:grid place-items-center bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="text-center px-8">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW5iNXF5eTdxMWNud3R6eXNmOGxsb3E1d2M5cDBzdWZlbWR1dnc3YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0MYC0LajbaPoEADu/giphy.gif"
            alt="Admin dashboard gif"
            className="w-72 mx-auto rounded-xl shadow-2xl mb-6 animate-bounce-slow"
          />
          <h3 className="text-white text-2xl font-semibold">
            Admin Control Panel
          </h3>
          <p className="text-indigo-100 mt-2">
            Secure • Fast • Powerful
          </p>
        </div>
      </div>
    </div>
  );
}
