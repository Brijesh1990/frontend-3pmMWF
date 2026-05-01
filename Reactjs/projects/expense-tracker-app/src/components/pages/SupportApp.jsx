import React from 'react'
import HeaderApp from '../includes/HeaderApp'
import FooterApp from '../includes/FooterApp'
export default function SupportApp() {
  return (
     <>
     <HeaderApp />
    
    <main className="max-w-6xl mx-auto px-6 pt-12 md:pt-20">
  {/* Hero Section */}
  <header className="mb-16">
    <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-primary mb-4">
      Support
    </h1>
    <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
      Refining the architectural standard of your financial experience through
      direct feedback and expert guidance.
    </p>
  </header>
  {/* Bento Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
    {/* Feedback Form Card */}
    <section className="md:col-span-7 bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_0_rgba(25,28,30,0.04)]">
      <div className="mb-8">
        <h2 className="font-headline text-2xl font-semibold mb-2">
          Service Feedback
        </h2>
        <p className="font-body text-on-surface-variant">
          Rate your experience with the Sovereign platform.
        </p>
      </div>
      <form className="space-y-8">
        {/* Rating Chips */}
        <div className="flex flex-wrap gap-3">
          <label className="cursor-pointer group">
            <input
              className="hidden peer"
              name="rating"
              type="radio"
              defaultValue={1}
            />
            <div className="px-6 py-3 rounded-xl bg-surface-container-high text-on-surface-variant peer-checked:bg-primary peer-checked:text-white transition-all duration-300 font-semibold text-sm">
              1
            </div>
          </label>
          <label className="cursor-pointer group">
            <input
              className="hidden peer"
              name="rating"
              type="radio"
              defaultValue={2}
            />
            <div className="px-6 py-3 rounded-xl bg-surface-container-high text-on-surface-variant peer-checked:bg-primary peer-checked:text-white transition-all duration-300 font-semibold text-sm">
              2
            </div>
          </label>
          <label className="cursor-pointer group">
            <input
              className="hidden peer"
              name="rating"
              type="radio"
              defaultValue={3}
            />
            <div className="px-6 py-3 rounded-xl bg-surface-container-high text-on-surface-variant peer-checked:bg-primary peer-checked:text-white transition-all duration-300 font-semibold text-sm">
              3
            </div>
          </label>
          <label className="cursor-pointer group">
            <input
              defaultChecked=""
              className="hidden peer"
              name="rating"
              type="radio"
              defaultValue={4}
            />
            <div className="px-6 py-3 rounded-xl bg-surface-container-high text-on-surface-variant peer-checked:bg-primary peer-checked:text-white transition-all duration-300 font-semibold text-sm">
              4
            </div>
          </label>
          <label className="cursor-pointer group">
            <input
              className="hidden peer"
              name="rating"
              type="radio"
              defaultValue={5}
            />
            <div className="px-6 py-3 rounded-xl bg-surface-container-high text-on-surface-variant peer-checked:bg-primary peer-checked:text-white transition-all duration-300 font-semibold text-sm">
              5
            </div>
          </label>
        </div>
        <div className="space-y-4">
          <div className="relative">
            <textarea
              className="w-full bg-surface-container-highest rounded-xl border-none p-5 focus:ring-2 focus:ring-primary/20 focus:bg-primary-fixed/30 transition-all font-body text-on-surface placeholder:text-on-surface-variant/60"
              placeholder="Describe your experience with our architectural ledger system..."
              rows={5}
              defaultValue={""}
            />
          </div>
        </div>
        <button
          className="w-full md:w-auto px-10 py-4 bg-primary text-on-primary rounded-xl font-headline font-bold scale-95 hover:scale-100 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          type="submit"
        >
          Submit Review
          <span className="material-symbols-outlined text-xl">send</span>
        </button>
      </form>
    </section>
    {/* Contact Details & Map Column */}
    <div className="md:col-span-5 space-y-6">
      {/* Map Card */}
      <div className="bg-surface-container-low rounded-3xl overflow-hidden h-64 relative group shadow-[0_8px_32px_0_rgba(25,28,30,0.02)]">
        <img
          className="w-full h-full object-cover"
          data-alt="stylized architectural map of a metropolitan city center with clean lines and soft emerald green highlights indicating landmarks"
          data-location="Zurich, Switzerland"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7k8coDB-fmIa6rT_rIM7QspHa2uwugc9ibuFQyPNgt4xVJPRkVNadSiM5JQlUP_nouBwYOgVr7q6M1VD4gInMHM3-gd1vvRBLIS7_nCQQWBMqrUJDhXpybP_GMoMhjsutz2BWhL30UcPVbglkK0gjr8mAylOMNnqnoBf91y21mw019OlwBWL3iebi2XNTlJzZOuT5-AFObGaL9VgT7Ew1rKoeX--eBiT3-D-rjqUvYMqxhjpenAtZPa2ov54LkQdReZYs1PHY-cPw"
        />
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <a
            className="bg-white text-primary px-6 py-2 rounded-full font-bold text-sm shadow-xl"
            href="#"
          >
            Open Directions
          </a>
        </div>
      </div>
      {/* Contact List */}
      <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(25,28,30,0.04)]">
        <h3 className="font-headline text-xl font-semibold mb-6">
          Concierge Channels
        </h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div>
              <span className="block font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                Email
              </span>
              <span className="font-body text-lg font-medium">
                concierge@sovereign.io
              </span>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div>
              <span className="block font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                Phone
              </span>
              <span className="font-body text-lg font-medium">
                +41 44 211 99 00
              </span>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <span className="block font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                Headquarters
              </span>
              <span className="font-body text-lg font-medium leading-tight">
                Bahnhofstrasse 45,
                <br />
                8001 Zurich, Switzerland
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* FAQ Quick Links Section */}
  <section className="mt-20 mb-50">
    <div className="flex justify-between items-end mb-8">
      <div>
        <h2 className="font-headline text-3xl font-bold tracking-tight">
          Records &amp; Inquiries
        </h2>
        <p className="font-body text-on-surface-variant mt-2">
          Instant answers for common administrative tasks.
        </p>
      </div>
      <button className="hidden md:block text-primary font-bold font-headline hover:underline">
        View Documentation
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-surface-container-low p-6 rounded-2xl hover:bg-surface-container-high transition-colors cursor-pointer group">
        <span className="material-symbols-outlined text-primary mb-4 text-3xl">
          security
        </span>
        <h4 className="font-headline font-bold text-lg mb-2">Vault Security</h4>
        <p className="font-body text-sm text-on-surface-variant">
          Learn how our multi-layer encryption protects your ledger.
        </p>
      </div>
      <div className="bg-surface-container-low p-6 rounded-2xl hover:bg-surface-container-high transition-colors cursor-pointer group">
        <span className="material-symbols-outlined text-primary mb-4 text-3xl">
          account_balance_wallet
        </span>
        <h4 className="font-headline font-bold text-lg mb-2">Asset Transfer</h4>
        <p className="font-body text-sm text-on-surface-variant">
          Guidelines for high-volume cross-border reconciliations.
        </p>
      </div>
      <div className="bg-surface-container-low p-6 rounded-2xl hover:bg-surface-container-high transition-colors cursor-pointer group">
        <span className="material-symbols-outlined text-primary mb-4 text-3xl">
          history_edu
        </span>
        <h4 className="font-headline font-bold text-lg mb-2">Compliance</h4>
        <p className="font-body text-sm text-on-surface-variant">
          Access your annual audit trails and legal declarations.
        </p>
      </div>
    </div>
  </section>
</main>
<FooterApp />
</>

  )
}
