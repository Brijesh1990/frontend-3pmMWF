import React from 'react'
import HeaderApp from '../includes/HeaderApp'
import FooterApp from '../includes/FooterApp'

export default function AddExpenseApp() {
  return (
    <>
         <HeaderApp />

    <main className="flex-1 max-w-4xl mx-auto w-full px-6 pt-12 pb-32">
  {/* Editorial Header Section */}
  <div className="mb-12">
    <span className="text-label-sm font-semibold text-primary/60 tracking-[0.2em] uppercase mb-2 block">
      New Transaction
    </span>
    <h2 className="font-headline text-[3.5rem] leading-none font-bold text-primary tracking-tight mb-4">
      Add Entry
    </h2>
    <p className="text-on-surface-variant max-w-md">
      Record a new expense to maintain the architectural integrity of your
      financial ledger.
    </p>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
    {/* Form Card */}
    <div className="lg:col-span-8 bg-surface-container-lowest rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_32px_0_rgba(25,28,30,0.04)]">
      <form className="space-y-8">
        {/* Amount Input (The Hero) */}
        <div className="space-y-2">
          <label className="text-label-sm font-semibold text-on-surface-variant uppercase tracking-widest block">
            Amount (USD)
          </label>
          <div className="relative group">
            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl font-headline font-bold text-primary/30">
              $
            </span>
            <input
              className="w-full bg-surface-container-low border-none rounded-2xl py-6 pl-14 pr-6 text-[3rem] font-headline font-bold text-primary placeholder:text-surface-variant focus:ring-4 focus:ring-primary-fixed/30 transition-all outline-none"
              placeholder={0.0}
              step="0.01"
              type="number"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Category Select */}
          <div className="space-y-2">
            <label className="text-label-sm font-semibold text-on-surface-variant uppercase tracking-widest block">
              Category
            </label>
            <div className="relative">
              <select className="w-full bg-surface-container-low border-none rounded-xl py-4 px-6 appearance-none font-medium text-on-surface focus:ring-2 focus:ring-primary transition-all cursor-pointer">
                <option>Select category</option>
                <option>Architectural Fees</option>
                <option>Operational Assets</option>
                <option>Travel &amp; Logistics</option>
                <option>Strategic Marketing</option>
                <option>Client Relations</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                expand_more
              </span>
            </div>
          </div>
          {/* Date Input */}
          <div className="space-y-2">
            <label className="text-label-sm font-semibold text-on-surface-variant uppercase tracking-widest block">
              Date
            </label>
            <div className="relative">
              <input
                className="w-full bg-surface-container-low border-none rounded-xl py-4 px-6 font-medium text-on-surface focus:ring-2 focus:ring-primary transition-all"
                type="date"
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                calendar_today
              </span>
            </div>
          </div>
        </div>
        {/* Note / Description */}
        <div className="space-y-2">
          <label className="text-label-sm font-semibold text-on-surface-variant uppercase tracking-widest block">
            Reference Note
          </label>
          <textarea
            className="w-full bg-surface-container-low border-none rounded-xl py-4 px-6 font-medium text-on-surface focus:ring-2 focus:ring-primary transition-all resize-none"
            placeholder="Brief description of the transaction..."
            rows={3}
            defaultValue={""}
          />
        </div>
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            className="flex-1 bg-primary text-white font-headline font-bold text-lg py-5 px-8 rounded-2xl hover:scale-[0.98] active:scale-[0.96] transition-all duration-300 shadow-xl shadow-primary/10"
            type="submit"
          >
            Save Entry
          </button>
          <button
            className="flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container font-semibold py-5 px-8 rounded-2xl hover:bg-secondary-container/80 transition-all"
            type="button"
          >
            <span className="material-symbols-outlined">print</span>
            Print Receipt
          </button>
        </div>
      </form>
    </div>
    {/* Contextual Helper / Sidebar */}
    <div className="lg:col-span-4 space-y-6">
      {/* Visual Summary Card */}
      <div className="bg-primary text-white rounded-[2rem] p-8 overflow-hidden relative group">
        <div className="relative z-10">
          <h3 className="text-label-sm font-semibold uppercase tracking-widest opacity-60 mb-8">
            Daily Limit
          </h3>
          <div className="mb-8">
            <span className="text-4xl font-headline font-bold">$2,450.00</span>
            <p className="text-white/60 text-sm mt-1">Remaining availability</p>
          </div>
          <div className="h-[2px] bg-white/10 w-full mb-2">
            <div className="h-full bg-primary-fixed w-[65%]" />
          </div>
          <p className="text-xs font-medium text-primary-fixed">
            65% of daily budget consumed
          </p>
        </div>
        {/* Decorative Background Gradient */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-container rounded-full blur-3xl opacity-50" />
      </div>
      {/* Guidance Tip */}
      <div className="bg-surface-container-low rounded-[2rem] p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-primary">info</span>
          <h4 className="font-bold text-primary">Sovereign Tip</h4>
        </div>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Entries with valid receipt prints are processed 24% faster during
          end-of-month reconciliations. Ensure all fields are precise.
        </p>
      </div>
    </div>
  </div>
</main>
<FooterApp />
</>

  )
}
