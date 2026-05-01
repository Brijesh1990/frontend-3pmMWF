
import React from 'react'
import HeaderApp from './includes/HeaderApp'
import FooterApp from './includes/FooterApp'
export default function Dashboard() {
  return (
 <>
 <HeaderApp />

 <main className="max-w-7xl mx-auto px-6 py-8 pb-32">
  {/* Hero Section: Total Spending */}
  <section className="mb-12">
    <div className="flex flex-col gap-1 mb-8">
      <span className="text-label-sm font-semibold uppercase tracking-widest text-on-surface-variant font-label">
        TOTAL SPENDING
      </span>
      <h1 className="text-[3.5rem] font-bold text-primary tracking-tight leading-none font-headline">
        $12,482.<span className="text-primary/60">50</span>
      </h1>
    </div>
    {/* Bento Grid of Summaries */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Food & Dining */}
      <div className="bg-surface-container-lowest p-8 rounded-[1.5rem] flex flex-col justify-between min-h-[160px] group hover:bg-surface-bright transition-all">
        <div className="flex justify-between items-start">
          <div className="bg-secondary-container p-3 rounded-xl">
            <span
              className="material-symbols-outlined text-on-secondary-container"
              data-icon="restaurant"
            >
              restaurant
            </span>
          </div>
          <span className="text-tertiary font-bold">+12%</span>
        </div>
        <div>
          <p className="text-sm text-on-surface-variant font-medium">
            Food &amp; Dining
          </p>
          <p className="text-2xl font-bold text-on-surface">$2,450.00</p>
        </div>
      </div>
      {/* Travel */}
      <div className="bg-surface-container-lowest p-8 rounded-[1.5rem] flex flex-col justify-between min-h-[160px] group hover:bg-surface-bright transition-all">
        <div className="flex justify-between items-start">
          <div className="bg-primary-container p-3 rounded-xl">
            <span
              className="material-symbols-outlined text-on-primary-container"
              data-icon="flight"
            >
              flight
            </span>
          </div>
          <span className="text-emerald-600 font-bold">-4%</span>
        </div>
        <div>
          <p className="text-sm text-on-surface-variant font-medium">
            Travel &amp; Leisure
          </p>
          <p className="text-2xl font-bold text-on-surface">$4,120.00</p>
        </div>
      </div>
      {/* Visualization Card */}
      <div className="bg-primary-container text-white p-8 rounded-[1.5rem] md:row-span-1 flex flex-col justify-center relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-2">Budget Target</h3>
          <p className="text-emerald-100/60 text-sm mb-4">
            You have reached 82% of your monthly limit.
          </p>
          <div className="w-full h-1.5 bg-white/10 overflow-hidden mb-2">
            <div className="h-full bg-primary-fixed w-[82%]" />
          </div>
          <div className="flex justify-between text-[10px] font-bold tracking-widest uppercase">
            <span>Progress</span>
            <span>$15,000 Cap</span>
          </div>
        </div>
        {/* Decorative Background Element */}
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      </div>
    </div>
  </section>
  {/* Filters & Records */}
  <section className="bg-surface-container-low rounded-[2rem] p-4 md:p-8">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
      <h2 className="text-2xl font-bold text-on-surface tracking-tight font-headline">
        Recent Records
      </h2>
      <div className="flex flex-wrap gap-2">
        <button className="px-5 py-2.5 bg-surface-container-lowest text-on-surface-variant font-semibold rounded-xl text-sm transition-all hover:bg-primary hover:text-white">
          All Time
        </button>
        <button className="px-5 py-2.5 bg-primary text-white font-semibold rounded-xl text-sm transition-all shadow-lg shadow-primary/10">
          This Month
        </button>
        <button className="px-5 py-2.5 bg-surface-container-lowest text-on-surface-variant font-semibold rounded-xl text-sm transition-all hover:bg-primary hover:text-white">
          Travel
        </button>
        <button className="px-5 py-2.5 bg-surface-container-lowest text-on-surface-variant font-semibold rounded-xl text-sm transition-all hover:bg-primary hover:text-white flex items-center gap-2">
          <span
            className="material-symbols-outlined text-base"
            data-icon="filter_list"
          >
            filter_list
          </span>
          More
        </button>
      </div>
    </div>
    {/* Transaction List (No Lines, Tonal Layering) */}
    <div className="flex flex-col gap-3">
      {/* Transaction Item */}
      <div className="bg-surface-container-lowest p-5 rounded-2xl flex items-center justify-between group hover:shadow-xl hover:shadow-black/[0.02] transition-all">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 bg-surface-container-low rounded-xl flex items-center justify-center text-primary group-hover:bg-primary-fixed transition-colors">
            <span
              className="material-symbols-outlined"
              data-icon="shopping_bag"
            >
              shopping_bag
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-lg font-semibold text-on-surface">
              Luxury Apparel Boutique
            </h4>
            <span className="text-xs font-semibold text-on-surface-variant/60 uppercase tracking-wider font-label">
              AUG 24 • SHOPPING
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-on-surface">-$1,240.00</p>
          <p className="text-xs text-emerald-600 font-medium italic">Pending</p>
        </div>
      </div>
      {/* Transaction Item */}
      <div className="bg-surface-container-lowest p-5 rounded-2xl flex items-center justify-between group hover:shadow-xl hover:shadow-black/[0.02] transition-all">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 bg-surface-container-low rounded-xl flex items-center justify-center text-primary group-hover:bg-primary-fixed transition-colors">
            <span
              className="material-symbols-outlined"
              data-icon="local_gas_station"
            >
              local_gas_station
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-lg font-semibold text-on-surface">
              Premium Shell Station
            </h4>
            <span className="text-xs font-semibold text-on-surface-variant/60 uppercase tracking-wider font-label">
              AUG 23 • TRANSPORT
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-on-surface">-$85.20</p>
          <p className="text-xs text-on-surface-variant/40 font-medium uppercase tracking-tighter">
            Completed
          </p>
        </div>
      </div>
      {/* Transaction Item */}
      <div className="bg-surface-container-lowest p-5 rounded-2xl flex items-center justify-between group hover:shadow-xl hover:shadow-black/[0.02] transition-all">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 bg-surface-container-low rounded-xl flex items-center justify-center text-primary group-hover:bg-primary-fixed transition-colors">
            <span className="material-symbols-outlined" data-icon="fastfood">
              fastfood
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-lg font-semibold text-on-surface">
              Artisan Coffee House
            </h4>
            <span className="text-xs font-semibold text-on-surface-variant/60 uppercase tracking-wider font-label">
              AUG 22 • FOOD
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-on-surface">-$12.50</p>
          <p className="text-xs text-on-surface-variant/40 font-medium uppercase tracking-tighter">
            Completed
          </p>
        </div>
      </div>
      {/* Transaction Item */}
      <div className="bg-surface-container-lowest p-5 rounded-2xl flex items-center justify-between group hover:shadow-xl hover:shadow-black/[0.02] transition-all">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 bg-surface-container-low rounded-xl flex items-center justify-center text-primary group-hover:bg-primary-fixed transition-colors">
            <span className="material-symbols-outlined" data-icon="payments">
              payments
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-lg font-semibold text-on-surface">
              Dividend Payout
            </h4>
            <span className="text-xs font-semibold text-on-surface-variant/60 uppercase tracking-wider font-label">
              AUG 21 • INCOME
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-emerald-600">+$450.00</p>
          <p className="text-xs text-on-surface-variant/40 font-medium uppercase tracking-tighter">
            Completed
          </p>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center">
      <button className="px-8 py-3 text-primary font-bold font-manrope hover:bg-primary-fixed/20 transition-all rounded-full">
        VIEW COMPLETE STATEMENT
      </button>
    </div>
  </section>
</main>
<FooterApp />
</>

  )
}
