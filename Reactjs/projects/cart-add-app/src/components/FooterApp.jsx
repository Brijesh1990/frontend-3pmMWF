import { Home, Heart, Percent } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        fixed bottom-0 left-0 right-0
        w-full z-50
        bg-white dark:bg-gray-900
         dark:border-gray-700
      "
    >
      {/* Inner container */}
      <div
        className="
          max-w-md mx-auto
          px-6 py-3
          flex items-center justify-between
          relative
        "
      >
        {/* Left Icon */}
        <button className="text-gray-400 hover:text-orange-400 transition active:scale-95">
          <Percent size={26} />
        </button>

        {/* Center Floating Home */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-6">
          <button
            className="
              w-16 h-16 rounded-full
              bg-orange-400
              flex items-center justify-center
              shadow-xl
              ring-4 ring-white dark:ring-gray-900
              active:scale-95 transition
            "
          >
            <Home size={30} className="text-white" />
          </button>
        </div>

        {/* Right Icon */}
        <button className="text-gray-400 hover:text-orange-400 transition active:scale-95">
          <Heart size={26} />
        </button>
      </div>
    </footer>
  );
}
