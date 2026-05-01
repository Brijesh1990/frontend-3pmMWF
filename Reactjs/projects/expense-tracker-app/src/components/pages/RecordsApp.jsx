import React from 'react'
import HeaderApp from '../includes/HeaderApp'
import FooterApp from '../includes/FooterApp'
export default function RecordsApp() {
  return (
   <>
    <HeaderApp />
    <main className="max-w-4xl mx-auto px-6 py-12 pb-32">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 no-print">
    <div>
      <h1 className="font-headline text-3xl font-bold tracking-tight text-primary">
        Transaction Detail
      </h1>
      <p className="text-on-surface-variant font-medium mt-1">
        Record ID: SV-99283-TRX
      </p>
    </div>
    <div className="flex gap-4">
      <button className="flex items-center gap-2 px-6 py-3 bg-secondary-container text-on-secondary-container rounded-xl font-semibold hover:opacity-90 transition-all active:scale-95">
        <span className="material-symbols-outlined" data-icon="download">
          download
        </span>
        Download PDF
      </button>
      <button
        className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-xl font-semibold hover:opacity-90 transition-all active:scale-95"
        onclick="window.print()"
      >
        <span className="material-symbols-outlined" data-icon="print">
          print
        </span>
        Print
      </button>
    </div>
  </div>
  <div className="receipt-container bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-[0_8px_32px_0_rgba(25,28,30,0.04)] relative overflow-hidden">
    <div className="absolute top-0 right-0 p-8">
      <div className="text-right">
        <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
          Status
        </span>
        <div className="flex items-center justify-end gap-2 text-primary font-bold mt-1">
          <span
            className="material-symbols-outlined text-sm"
            data-icon="check_circle"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            check_circle
          </span>
          SETTLED
        </div>
      </div>
    </div>
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 bg-surface-container-high rounded-2xl flex items-center justify-center">
          <span
            className="material-symbols-outlined text-3xl text-primary"
            data-icon="account_balance"
          >
            account_balance
          </span>
        </div>
        <div>
          <h2 className="font-headline text-2xl font-bold text-primary">
            The Heritage Club
          </h2>
          <p className="text-on-surface-variant font-medium">
            Mayfair, London, UK
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-outline-variant/15">
        <div>
          <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
            Date
          </span>
          <p className="font-headline text-lg font-semibold text-on-surface mt-1">
            Oct 24, 2023
          </p>
        </div>
        <div>
          <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
            Time
          </span>
          <p className="font-headline text-lg font-semibold text-on-surface mt-1">
            19:42 GMT
          </p>
        </div>
        <div>
          <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
            Method
          </span>
          <p className="font-headline text-lg font-semibold text-on-surface mt-1">
            Sovereign Black
          </p>
        </div>
        <div>
          <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
            Auth Code
          </span>
          <p className="font-headline text-lg font-semibold text-on-surface mt-1">
            928174
          </p>
        </div>
      </div>
    </div>
    <div className="mb-12">
      <h3 className="font-headline text-xl font-semibold mb-6 text-primary">
        Transaction Summary
      </h3>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="font-headline text-lg font-semibold text-on-surface">
              Private Dining Experience
            </p>
            <p className="text-sm text-on-surface-variant">Tasting Menu x 2</p>
          </div>
          <p className="font-headline text-lg font-bold text-on-surface">
            £450.00
          </p>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <p className="font-headline text-lg font-semibold text-on-surface">
              Vintage Selection Pairings
            </p>
            <p className="text-sm text-on-surface-variant">
              Curated Sommelier Flight
            </p>
          </div>
          <p className="font-headline text-lg font-bold text-on-surface">
            £220.00
          </p>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <p className="font-headline text-lg font-semibold text-on-surface">
              Service Discretionary
            </p>
            <p className="text-sm text-on-surface-variant">12.5% Gratuity</p>
          </div>
          <p className="font-headline text-lg font-bold text-on-surface">
            £83.75
          </p>
        </div>
      </div>
    </div>
    <div className="bg-surface-container-low rounded-2xl p-8 mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="font-headline text-lg font-medium text-on-surface-variant">
          Subtotal
        </span>
        <span className="font-headline text-lg font-medium text-on-surface">
          £753.75
        </span>
      </div>
      <div className="flex justify-between items-center mb-6">
        <span className="font-headline text-lg font-medium text-on-surface-variant">
          VAT (20%)
        </span>
        <span className="font-headline text-lg font-medium text-on-surface">
          £150.75
        </span>
      </div>
      <div className="flex justify-between items-center pt-6 border-t border-outline-variant/30">
        <span className="font-headline text-xl font-bold text-primary">
          Total Amount
        </span>
        <span className="font-headline text-4xl font-bold text-primary tracking-tighter">
          £904.50
        </span>
      </div>
    </div>
    <div className="text-center">
      <div className="inline-block p-4 bg-white rounded-xl mb-4">
        <img
          className="h-16 w-48 object-cover opacity-20 mix-blend-multiply"
          data-alt="black and white geometric abstract barcode style pattern with high contrast lines"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYKGO99CBYlWnIMjIIbzH4Ax0enaLQHGNAYcuWZX6iNQHU0ggYBBhOZIXDwJ7TpPaH1Rq_A_kwL0WlH76tAvob-xYtmb-Q1DEo_2lE0ze-fb7M1cKjBD_iYyfZYDL5XDVa2X_Uzm81qk0_kpkj1NLnQpcFfCec0AU8czEPNurIZih8_WlspI01wPJLPTBcAqi-3UnGhYje_YAUmTyCfBDytAuiDK2ay-kcxxWrM5XOk0zHh9X3_4EHU68MpJ_Jt_A2Q0ytTli04Aqx"
        />
      </div>
      <p className="text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant">
        Authentic Digital Record • Sovereign Financial Services
      </p>
    </div>
  </div>
  <section className="mt-12 no-print">
    <h3 className="font-headline text-xl font-semibold mb-6 text-primary px-2">
      Merchant Insights
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-surface-container-low rounded-3xl p-6 flex items-center gap-6">
        <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-lg">
          <img
            className="h-full w-full object-cover"
            data-alt="elegant upscale restaurant interior with warm ambient lighting and white tablecloths"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjeLjx4_1U7IiYv3vAFm4HTRwnDfpfkUHxcI7JQgNXdE1Q9JfyXJUJOGkvL2AdK1KMQxdMEnjYyGzA7se8e2U4fJL1ni4epuxvqdinZhKTmiEcFLTPRW56I9cb2h6UuChHelhsH45C3fGnFGLoS-e2QqAM_7y3a2H4lySm6DXT193IkEkQRQfTCIVYkSJ4xwyMkXuDpkH0jlb8XrHu9ijwjxBU6T2GgpL5t4K9utKGO2699DX8J84oFSRwQI9RV2ZXAkHdnWBOBhFw"
          />
        </div>
        <div>
          <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1">
            Frequency
          </p>
          <p className="font-headline text-lg font-semibold text-primary">
            3rd Visit this month
          </p>
          <p className="text-sm text-on-surface-variant mt-1">
            Average spend £420.00
          </p>
        </div>
      </div>
      <div className="bg-surface-container-low rounded-3xl p-6 flex items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
          <span
            className="material-symbols-outlined text-primary text-2xl"
            data-icon="loyalty"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            loyalty
          </span>
        </div>
        <div>
          <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold mb-1">
            Rewards
          </p>
          <p className="font-headline text-lg font-semibold text-primary">
            +1,809 Sovereign Points
          </p>
          <p className="text-sm text-on-surface-variant mt-1">
            Elite Tier Multiplier applied
          </p>
        </div>
      </div>
    </div>
  </section>
</main>
<FooterApp />
   </>

  )
}
