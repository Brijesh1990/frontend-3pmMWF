import React from 'react'
export default function ContentApp() {
  return (
    <>

  <main className="max-w-6xl mx-auto px-6 py-10">
  {/* Header */}
  <h1 className="text-3xl font-semibold mb-8">
    Dashboard Overview
  </h1>

  {/* Dashboard Cards */}
  <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* Total Students Card */}
    <div className="rounded-xl bg-white shadow-md p-6 hover:shadow-lg transition">
      <div className="flex items-center justify-between">
        <h2 className="text-gray-600 text-sm font-medium">
          Total Students
        </h2>
        <span className="text-blue-500 text-2xl">👨‍🎓</span>
      </div>
      <p className="mt-4 text-3xl font-bold text-gray-900">
        120
      </p>
    </div>

    {/* Total Attendance Card */}
    <div className="rounded-xl bg-white shadow-md p-6 hover:shadow-lg transition">
      <div className="flex items-center justify-between">
        <h2 className="text-gray-600 text-sm font-medium">
          Total Attendance
        </h2>
        <span className="text-green-500 text-2xl">📊</span>
      </div>
      <p className="mt-4 text-3xl font-bold text-gray-900">
        95%
      </p>
    </div>

    {/* Total Tasks Card */}
    <div className="rounded-xl bg-white shadow-md p-6 hover:shadow-lg transition">
      <div className="flex items-center justify-between">
        <h2 className="text-gray-600 text-sm font-medium">
          Total Tasks
        </h2>
        <span className="text-purple-500 text-2xl">📝</span>
      </div>
      <p className="mt-4 text-3xl font-bold text-gray-900">
        32
      </p>
    </div>

  </section>

 
</main>

    </>
  )
}
