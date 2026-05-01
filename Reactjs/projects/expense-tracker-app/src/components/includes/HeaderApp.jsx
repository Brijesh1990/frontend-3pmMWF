import React from 'react'
import { Link } from 'react-router-dom'
export default function HeaderApp() {
  return (
    
    <header className="bg-white/80 dark:bg-emerald-950/80 backdrop-blur-xl sticky top-0 z-50 shadow-[0_8px_32px_0_rgba(25,28,30,0.04)] flex justify-between items-center px-6 py-4 w-full">
  <div className="flex items-center gap-4">
    <button className="text-emerald-900 dark:text-emerald-50 hover:bg-emerald-50 dark:hover:bg-emerald-900/40 transition-colors p-2 rounded-xl">
      <span className="material-symbols-outlined" data-icon="menu">
        menu
      </span>
    </button>
    <span className="text-xl font-bold text-emerald-900 dark:text-emerald-50 tracking-tighter font-manrope">
      Sovereign
    </span>
  </div>
  <div className="hidden md:flex items-center gap-8">
    <a
      className="text-emerald-900 dark:text-emerald-50 font-semibold font-manrope"
      href="#"
    >
      Ledger
    </a>
    <Link 
      className="text-emerald-700/50 dark:text-emerald-400/50 font-manrope hover:text-emerald-900 transition-colors"
      to="/manage-expense"
    >
      Records
    </Link>
    <Link 
      className="text-emerald-700/50 dark:text-emerald-400/50 font-manrope hover:text-emerald-900 transition-colors"
      to="/support"
    >
      Support
    </Link>

     <Link 
      className="text-emerald-700/50 dark:text-emerald-400/50 font-manrope hover:text-emerald-900 transition-colors"
      to="/contact-us"
    >
      Contact
    </Link>
  </div>
  <div className="flex items-center">
    <img
      alt="User Profile"
      className="w-10 h-10 rounded-full object-cover border-2 border-primary-fixed"
      data-alt="Close-up professional headshot of a person with a warm expression against a soft-focus studio background with emerald lighting accents"
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZKp7QSUkcG2RBDzwLkQajE_aGyHwwPAxolHVIWqS3aoxqTjaK-CGNBd3NBLJcrhdANV3xSZPOy5TM4O9sFi-U_dLQZvs_CV5W5Vb3wG6O7gS_g2XLAQon5iXBu9SfLqK46rT_7369bmy5RVWJigi0X5VJxK96_-87Dxcmg8nebKv0BFC6QGHvcxHxCGnvbgJUSP8WCG1EiaoRof9Fid0HrHG3PkMwWBMPATd86Ocas25llK_yeJqDLcBbDC5LCtRZ6W6ns55SIm3X"
    />
  </div>
</header>

  )
}
