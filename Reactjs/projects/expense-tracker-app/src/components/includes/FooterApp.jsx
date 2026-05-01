import React from 'react'
import { Link } from 'react-router-dom'
export default function FooterApp() {
  return (
   <>
  {/* Floating Action Button (FAB) */}
  <div className="fixed bottom-28 right-8 z-50">
    <Link to="/add-expense"><button className="w-16 h-16 bg-primary text-white rounded-2xl shadow-[0_16px_48px_rgba(0,53,39,0.3)] flex items-center justify-center scale-95 active:scale-90 transition-transform duration-300">
      <span className="material-symbols-outlined text-3xl" data-icon="add">
        add
      </span>
    </button>
    </Link>
  </div>
  {/* BottomNavBar */}
  <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/70 dark:bg-emerald-950/70 backdrop-blur-2xl shadow-[0_-8px_32px_0_rgba(25,28,30,0.04)] z-50 rounded-t-[2rem]">
    <div className="flex flex-col items-center justify-center bg-emerald-900 dark:bg-emerald-100 text-white dark:text-emerald-900 rounded-2xl px-5 py-2 scale-95 active:scale-90 transition-transform duration-300">
      <span
        className="material-symbols-outlined"
        data-icon="dashboard_customize"
      >
        dashboard_customize
      </span>
      <span className="font-inter text-[10px] font-semibold uppercase tracking-widest mt-1">
        Ledger
      </span>
    </div>
    <div className="flex flex-col items-center justify-center text-emerald-900/40 dark:text-emerald-50/40 px-5 py-2 hover:bg-emerald-50 dark:hover:bg-emerald-800/20 transition-all scale-95 active:scale-90 duration-300">
      <span className="material-symbols-outlined" data-icon="add_circle">
        add_circle
      </span>
      <span className="font-inter text-[10px] font-semibold uppercase tracking-widest mt-1">
        Entry
      </span>
    </div>
    <div className="flex flex-col items-center justify-center text-emerald-900/40 dark:text-emerald-50/40 px-5 py-2 hover:bg-emerald-50 dark:hover:bg-emerald-800/20 transition-all scale-95 active:scale-90 duration-300">
      <span className="material-symbols-outlined" data-icon="receipt_long">
        receipt_long
      </span>
      <span className="font-inter text-[10px] font-semibold uppercase tracking-widest mt-1">
        Records
      </span>
    </div>
    <div className="flex flex-col items-center justify-center text-emerald-900/40 dark:text-emerald-50/40 px-5 py-2 hover:bg-emerald-50 dark:hover:bg-emerald-800/20 transition-all scale-95 active:scale-90 duration-300">
      <span className="material-symbols-outlined" data-icon="contact_support">
        contact_support
      </span>
      <span className="font-inter text-[10px] font-semibold uppercase tracking-widest mt-1">
        Support
      </span>
    </div>
  </nav>
</>

  )
}
