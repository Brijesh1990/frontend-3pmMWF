import { useState } from "react";

export default function Logout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger Button (Example) */}
    
      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          ></div>

          {/* Modal Box */}
          <div className="relative bg-white w-full max-w-md rounded-xl shadow-xl p-6 animate-fadeIn">
            
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-3">
              <h5 className="text-lg font-semibold">
                Logout Confirmation
              </h5>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="py-4 text-gray-600">
              Are you sure you want to logout?
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 border-t pt-4">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
              >
                Cancel
              </button>

              <a
                href="/login"
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
              >
                Logout
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
