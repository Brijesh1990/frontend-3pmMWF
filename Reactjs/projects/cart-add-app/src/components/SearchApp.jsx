import React from 'react'
export default function SearchApp() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
  <div className="relative">
    {/* Input */}
    <input
      type="text"
      placeholder="Search places"
      className="w-full h-14 pl-6 pr-14 rounded-full border border-white text-gray-700 placeholder-gray-400 bg-white
       focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400
       transition"
    />
    {/* Search Icon */}
    <button className="absolute right-5 top-1/2 -translate-y-1/2 text-orange-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
        />
      </svg>
    </button>
  </div>
</div>

  )
}
