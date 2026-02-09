import React from 'react'

export default function HeaderApp() {
    // toggler sidebar
function toggleSidebar() {
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

sidebar.classList.toggle('-translate-x-full');
overlay.classList.toggle('hidden');
}

  return (
    <>
  {/* Overlay */}
  <div
    id="overlay"
    className="fixed inset-0 bg-black/40 hidden z-40"
    onclick="toggleSidebar()"
  />
  {/* Sidebar */}
  <aside
    id="sidebar"
    className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform -translate-x-full transition-transform duration-300 z-50"
  >
    <div className="p-4 flex items-center justify-between">
      <span className="text-lg font-semibold">Menu</span>
      <button onClick={toggleSidebar} className="text-2xl">
        ×
      </button>
    </div>
    <nav className="p-4 space-y-4">
      <a href="#" className="block text-gray-700 hover:text-black">
        Home
      </a>
      <a href="#" className="block text-gray-700 hover:text-black">
        Shop
      </a>
      <a href="#" className="block text-gray-700 hover:text-black">
        Categories
      </a>
      <a href="#" className="block text-gray-700 hover:text-black">
        About
      </a>
      <a href="#" className="block text-gray-700 hover:text-black">
        Contact
      </a>
    </nav>
  </aside>
  {/* Navbar */}
  <header className="w-full">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Hamburger */}
        <button onClick={toggleSidebar} className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-orange-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Logo */}
   <div className="flex items-center gap-2">
  <span className="text-4xl">🌱</span>

  <span
    className="
      text-3xl md:text-4xl font-extrabold tracking-wide
      bg-gradient-to-r
      from-green-400 via-lime-300 to-orange-400
      dark:from-green-300 dark:via-lime-200 dark:to-orange-300
      bg-clip-text text-transparent
    "
  >
    Organic Ecommerce
  </span>
</div>


      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-gray-600">
        <a href="#" className="hover:text-black">
          Home
        </a>
        <a href="#" className="hover:text-black">
          Shop
        </a>
        <a href="#" className="hover:text-black">
          Categories
        </a>
        <a href="#" className="hover:text-black">
          Contact
        </a>
      </nav>
      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Cart */}
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6M17 13l1.5 6M6 21h12"
            />
          </svg>
        </button>
        {/* Avatar */}
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-9 h-9 rounded-full object-cover"
        />
      </div>
    </div>
  </header>
  
</>

  )
}
