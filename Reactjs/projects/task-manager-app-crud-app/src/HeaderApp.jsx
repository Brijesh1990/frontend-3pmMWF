import React from 'react'
import { Link } from 'react-router-dom';
import CountApp from '../CountApp';
export default function HeaderApp() {
// Humergberg toggler
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    sidebar.classList.toggle("-translate-x-full");
    overlay.classList.toggle("hidden");
}

  return (
   <div>
  {/* Sidebar */}
  <aside
    id="sidebar"
    className="fixed top-0 left-0 z-40 h-full w-64 bg-slate-800 text-white
     transform -translate-x-full transition-transform duration-300 ease-in-out"
  >
    <div className="p-4 flex justify-between items-center border-b border-slate-700">
      <h2 className="text-lg font-semibold">Menu</h2>
      <button
        onClick={toggleSidebar}
        className="text-gray-300 hover:text-white"
      >
        ✕
      </button>
    </div>
    <nav className="p-4 space-y-3">
      <a href="#" className="block rounded px-3 py-2 hover:bg-slate-700">
        Dashboard
      </a>
      <Link to="/" className="block rounded px-3 py-2 hover:bg-slate-700">
       Add Task
      </Link>
      <Link to="/" className="block rounded px-3 py-2 hover:bg-slate-700">
        Total Task <span className='bg-red-600 text-white p-1 rounded-full'><CountApp /></span>
      </Link>
      <Link to="/" className="block rounded px-3 py-2 hover:bg-slate-700">
       Logout ?
      </Link>
    </nav>
  </aside>
  {/* Overlay */}
  <div
    id="overlay"
    onClick="toggleSidebar"
    className="fixed inset-0 bg-black/40 z-30 hidden"
  />
  {/* Header */}
  <header className="flex items-center gap-4 bg-slate-600 text-white px-4 py-3 shadow">
    {/* Hamburger Button */}
    <button
      onClick={toggleSidebar}
      className="bg-lime-400 text-black p-2 rounded-md hover:bg-lime-300"
    >
      ☰
    </button>
    {/* Title */}
    <div className="flex items-center gap-2 text-xl font-semibold">
      📋 <span>Task Manager</span>
    </div>
  </header>
  {/* Main Content */}
  <main className="p-6">
    <h1 className="text-2xl font-bold">Welcome 👋</h1>
    <p className="text-gray-600 mt-2">
      Select an option from the menu to get started.
    </p>
  </main>
</div>


  )
}
