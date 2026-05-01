import React from 'react'

export default function AccountApp() {
  return (
  <>
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-fixed/20 rounded-full blur-[120px]" />
    <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-secondary-fixed/10 rounded-full blur-[140px]" />
  </div>
  <main className="relative z-10 w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 p-6 md:p-12 lg:p-16">
    <div className="flex flex-col justify-center space-y-8">
      <header className="space-y-4">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/10">
            <span
              className="material-symbols-outlined text-white text-3xl"
              data-icon="account_balance_wallet"
            >
              account_balance_wallet
            </span>
          </div>
          <h1 className="font-headline font-bold text-2xl text-primary tracking-tighter">
            Sovereign
          </h1>
        </div>
        <h2 className="text-5xl md:text-6xl font-headline font-bold text-on-surface leading-tight tracking-tight">
          Meet expense <span className="text-primary/40">App</span>
        </h2>
        <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
          Transform expense tracking into a curated, editorial experience. Start
          your journey towards financial authority today.
        </p>
      </header>
      <div className="hidden lg:block relative group h-64 rounded-3xl overflow-hidden shadow-2xl">
        <img
          alt="Financial Management"
          className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          data-alt="Modern abstract minimalist office with soft morning sunlight casting long architectural shadows on clean white walls and emerald accents"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8a6R-egrv0QwjXWI0NJZtgGmY3Yy6BCXP9QL5Jxx_hNaSn92QyAlfM7m8lBM8NOuPmnSN8fX90ei-zF_EowjtK2awcNz2tJV8fSSjKJ8ODeCGJV857f22X0DJDfveb3dccdDohs4mhQIfN_qfIc-xBZKmk_7jBE5CEjlQ1SrMl5RaYVovxcw4OCIxtbpmn8fV2w2YgnSuKgd8Myk0nf4kO0qwTFNssC0ghixcQchRJ3OZLuZq1CKq7Tl8S-942pfPLLTC2Nb82bs9"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
      </div>
    </div>
    <div className="flex flex-col justify-center">
      <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(25,28,30,0.04)] border border-white/20">
        <div className="mb-10">
          <h3 className="text-3xl font-headline font-bold text-primary mb-2">
            Create Account
          </h3>
          <p className="text-on-surface-variant font-medium">
            Step into a higher standard of wealth curation.
          </p>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 px-1">
              Full Name
            </label>
            <div className="relative">
              <span
                className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/40"
                data-icon="person"
              >
                person
              </span>
              <input
                className="w-full bg-surface-container-highest border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-on-surface-variant/30 transition-all duration-300"
                placeholder="Johnathan Sterling"
                type="text"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 px-1">
              Email Address
            </label>
            <div className="relative">
              <span
                className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/40"
                data-icon="alternate_email"
              >
                alternate_email
              </span>
              <input
                className="w-full bg-surface-container-highest border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-on-surface-variant/30 transition-all duration-300"
                placeholder="sterling@sovereign.com"
                type="email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 px-1">
              Secure Password
            </label>
            <div className="relative">
              <span
                className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/40"
                data-icon="lock"
              >
                lock
              </span>
              <input
                className="w-full bg-surface-container-highest border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-on-surface-variant/30 transition-all duration-300"
                placeholder="••••••••••••"
                type="password"
              />
            </div>
          </div>
          <div className="pt-4">
            <button
              className="w-full bg-primary hover:bg-primary-container text-white font-headline font-semibold py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.96] transition-all duration-300 flex items-center justify-center space-x-2"
              type="submit"
            >
              <span>Sign Up</span>
              <span
                className="material-symbols-outlined text-xl"
                data-icon="arrow_forward"
              >
                arrow_forward
              </span>
            </button>
          </div>
        </form>
        <div className="mt-10 flex flex-col space-y-6">
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-outline-variant/15" />
            <span className="flex-shrink mx-4 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/40">
              Or continue with
            </span>
            <div className="flex-grow border-t border-outline-variant/15" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-3 py-3 px-4 bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-colors duration-300">
              <img
                alt="Google Logo"
                className="w-5 h-5"
                data-alt="Official Google G icon with original brand colors on a clean background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKxXzdoNyX7Jumn_LSahLB0mM48A89RRZ5fQ3oMc7kC2Y8NP3KLwIpLyMxs6K0PFlM_RRQMFqlhEGnjgTwweFw_Vw8FKt7LSPF_yOLbHHn0Mv0OtYZ84bdBpDJAegdz09xVAGRbGaivjUVw3W6gp3lX4X98UHFjronNvlOJD5Abst4EHVTeGfUU7nZiIwLGfGXDx0ec76VAd9JdC_4LlxTf_ZsE_VQSIsxl8h1I6ItN0yoVwy90dVW1S4KEjmZOscZBHNFhGn56Rgu"
              />
              <span className="text-sm font-semibold text-on-surface-variant">
                Google
              </span>
            </button>
            <button className="flex items-center justify-center space-x-3 py-3 px-4 bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-colors duration-300">
              <img
                alt="Apple Logo"
                className="w-5 h-5"
                data-alt="Classic minimalist black Apple logo icon for sign-in functionality"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0jc0vKJ9nx1fbrTvZUsWIq-KDKQFP_K5JFNUGiKeemuWqpHOWh2RN7pgkZR2-fk7oQBaze9beeg9M_BJ0u-HiXHmT2WbFd8jsDdPuISou5RbFAOaTVGkVIFahiJxVm2Lb_sGvWrufjygKlNo_NccChTCNMcG8eQtbQScK88dcbRUQhr7xiil67CeGaonVk67FYBu7aTDd4bWVlr4MrSuHRNYBz8iUhpFT6arLklnMwlOTZHbfe6sUn8gCyHxRSl9Zelux2ID26q7r"
              />
              <span className="text-sm font-semibold text-on-surface-variant">
                Apple
              </span>
            </button>
          </div>
          <p className="text-center text-sm text-on-surface-variant/60">
            Already part of the heritage?
            <a className="text-primary font-bold hover:underline ml-1" href="#">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  </main>
</>

  )
}
