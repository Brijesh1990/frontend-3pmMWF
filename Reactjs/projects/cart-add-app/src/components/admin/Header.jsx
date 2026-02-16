import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm my-4 rounded-lg px-6 py-3">
      <div className="flex items-center justify-between">

        {/* Left Title */}
        <span className="flex items-center text-lg font-bold text-gray-800">
          <i className="bi bi-speedometer2 mr-2 text-xl" />
          Dashboard
        </span>

        {/* Right Section */}
        <div className="flex items-center gap-6 relative">

          {/* Bell Icon */}
          <i className="bi bi-bell text-xl text-gray-600 hover:text-black cursor-pointer transition" />

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 hover:text-black transition"
            >
              <i className="bi bi-person-circle text-2xl" />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg py-2 z-50">
                
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Profile
                </a>

                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Settings
                </a>

                <hr className="my-2 border-gray-200" />

                <button
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                  onClick={() => alert("Open Logout Modal")}
                >
                  Logout
                </button>

              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}
