import React from 'react'
export default function AdminLogin() {
  return (
    
<div className="w-full min-h-screen">
  <div className="flex flex-wrap min-h-screen">

    {/* LEFT SIDE (GIF) */}
    <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gray-100 animate__animated animate__fadeInLeft">
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnhyd2ZpbHhxOWxqcTJpZjdrNm1hNGt0cW03a3hsM2o5MWt2djY1NSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7btPCcdNniyf0ArS/giphy.gif"
        alt="Login Animation"
        className="max-w-md w-full"
      />
    </div>

    {/* RIGHT SIDE (LOGIN FORM) */}
    <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl animate__animated animate__fadeInUp">
        <div className="p-8">

          {/* Heading */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-blue-600">
              Admin Login
            </h3>
            <p className="text-gray-500">
              Welcome back, please login
            </p>
          </div>

          {/* Form */}
          <form>
            {/* Email */}
            <div className="mb-4 animate__animated animate__fadeInRight animate__delay-1s">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="admin@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Password */}
            <div className="mb-4 animate__animated animate__fadeInRight animate__delay-2s">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex justify-between items-center mb-4 animate__animated animate__fadeInRight animate__delay-3s">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="accent-blue-600" />
                Remember me
              </label>

              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition duration-300 animate__animated animate__pulse animate__infinite"
            >
              Login
            </button>

          </form>
        </div>
      </div>
    </div>

  </div>
</div>



  )
}
