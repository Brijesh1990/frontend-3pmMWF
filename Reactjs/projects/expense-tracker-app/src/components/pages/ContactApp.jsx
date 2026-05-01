import React from 'react'
import HeaderApp from '../includes/HeaderApp'
import FooterApp from '../includes/FooterApp'
export default function ContactApp() {
  return (
   <>
    <HeaderApp />
    <main className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
  {/* Hero Section */}
  <section className="mb-16">
    <div className="mb-4">
      <span className="font-label text-label-sm text-primary font-semibold uppercase tracking-[0.2em]">
        Concierge Services
      </span>
    </div>
    <h2 className="font-headline text-5xl md:text-6xl font-bold text-on-surface tracking-tight mb-6">
      Get in Touch
    </h2>
    <p className="font-body text-lg text-on-surface-variant max-w-2xl leading-relaxed">
      Experience world-class financial support. Our dedicated concierge team is
      available around the clock to assist with your architectural wealth
      management.
    </p>
  </section>
  {/* Bento Grid Channels */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
    {/* Email Card */}
    <div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between min-h-[220px] transition-all hover:scale-[1.02] duration-300">
      <div>
        <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center mb-6">
          <span
            className="material-symbols-outlined text-primary-fixed"
            data-icon="mail"
          >
            mail
          </span>
        </div>
        <h3 className="font-headline text-xl font-semibold mb-2">
          Email Support
        </h3>
        <p className="text-on-surface-variant text-sm font-medium">
          concierge@sovereign.io
        </p>
      </div>
      <div className="mt-4">
        <div className="progress-rail">
          <div className="progress-fill w-full" />
        </div>
      </div>
    </div>
    {/* Phone Card */}
    <div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between min-h-[220px] transition-all hover:scale-[1.02] duration-300">
      <div>
        <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-6">
          <span
            className="material-symbols-outlined text-on-secondary-container"
            data-icon="call"
          >
            call
          </span>
        </div>
        <h3 className="font-headline text-xl font-semibold mb-2">
          Direct Line
        </h3>
        <p className="text-on-surface-variant text-sm font-medium">
          +41 44 211 99 00
        </p>
      </div>
      <div className="mt-4">
        <div className="progress-rail">
          <div className="progress-fill w-[40%]" />
        </div>
      </div>
    </div>
    {/* HQ Card */}
    <div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between min-h-[220px] transition-all hover:scale-[1.02] duration-300 md:col-span-1">
      <div>
        <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-6">
          <span
            className="material-symbols-outlined text-primary"
            data-icon="location_on"
          >
            location_on
          </span>
        </div>
        <h3 className="font-headline text-xl font-semibold mb-2">
          Headquarters
        </h3>
        <p className="text-on-surface-variant text-sm leading-snug">
          Bahnhofstrasse 45, 8001 Zurich, Switzerland
        </p>
      </div>
    </div>
  </div>
  {/* Contact Form & Map Section */}
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
    {/* Form */}
    <div className="lg:col-span-3">
      <div className="bg-surface-container-low rounded-[2rem] p-8 md:p-12">
        <h4 className="font-headline text-2xl font-bold mb-8">
          Secure Inquiry
        </h4>
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="font-label text-label-sm text-on-surface-variant uppercase tracking-widest px-1">
              Subject
            </label>
            <input
              className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary-fixed/30 text-on-surface placeholder:text-outline-variant transition-all"
              placeholder="e.g., Wealth Portfolio Inquiry"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label className="font-label text-label-sm text-on-surface-variant uppercase tracking-widest px-1">
              Message
            </label>
            <textarea
              className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary-fixed/30 text-on-surface placeholder:text-outline-variant transition-all resize-none"
              placeholder="Details of your request..."
              rows={5}
              defaultValue={""}
            />
          </div>
          <button
            className="w-full bg-primary text-on-primary font-headline font-bold py-5 rounded-full hover:bg-primary-container transition-all active:scale-[0.96] flex items-center justify-center gap-2 group"
            type="submit"
          >
            Send Secure Message
            <span
              className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform"
              data-icon="send"
            >
              send
            </span>
          </button>
        </form>
      </div>
    </div>
    {/* Visual/Map Placeholder */}
    <div className="lg:col-span-2 space-y-6">
      <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl shadow-primary/5">
        <img
          className="w-full h-full object-cover"
          data-alt="Modern architectural financial building in Zurich with glass facade reflecting the morning sky and clean stone textures"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ1NVu1dWH1Y8e4mtOCYEvTMqe7yJ85WyqlsNa00fSGG5C4uPlK60eqAydT6mExlYXrKm1xiVePdoOMposNGA4GiYfwhlBd54NiYvLT3MN4qt4-znl5z0CZQPKRW52RXodg79j23cc9QG7Sl49Dkw1wpdm7LdGNqUxSAM2OvEywU56o2U204Ox_p8JGs0nK98bZBu41c7nCKa5eYADx0NmFsmSBf5uqJ4RRGDDpPnwzC0A8YyI-a9D_LVncawnzfxqteG_O8rrKspp"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <p className="text-white font-headline font-bold text-xl mb-2">
            Our Zurich Office
          </p>
          <p className="text-white/80 text-sm">
            Experience Swiss precision in every transaction.
          </p>
        </div>
      </div>
      <div className="bg-surface-container-lowest p-6 rounded-xl ghost-border flex items-center gap-4">
        <div className="p-3 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full">
          <span className="material-symbols-outlined" data-icon="verified_user">
            verified_user
          </span>
        </div>
        <div>
          <p className="font-headline font-semibold text-sm">
            Bank-Grade Encryption
          </p>
          <p className="text-xs text-on-surface-variant">
            All communications are end-to-end encrypted.
          </p>
        </div>
      </div>
    </div>
  </div>
</main>
<FooterApp />
   </>
  )
}
