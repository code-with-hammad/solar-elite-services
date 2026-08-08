import { MessageCircle, ArrowRight } from 'lucide-react'

const WA_BASE = 'https://wa.me/923027635720?text='
const WA_MSG = encodeURIComponent("Hi Solar Elite Services, I'm ready to get started. Please contact me to discuss my requirements.")

export function CTABanner() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1E2530 0%, #0F1318 100%)',
        borderTop: '1px solid #2A3341',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(255,182,39,0.06) 0%, transparent 65%)'
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-solar-gold bg-[rgba(255,182,39,0.1)] border border-[rgba(255,182,39,0.25)] rounded-full px-4 py-2 mb-6 uppercase tracking-widest" style={{ fontFamily: "'Inter', sans-serif" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-solar-gold inline-block animate-pulse" />
          Currently Booking Site Visits
        </div>
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight"
          style={{ fontFamily: "'Big Shoulders Display', sans-serif" }}
        >
          Ready to Go Solar<br />or Build Something Solid?
        </h2>
        <p className="text-muted-grey text-base mb-8 max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
          Get a free site visit and custom quote. Our engineers will assess your property and design the right solution — at no cost to you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`${WA_BASE}${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center justify-center gap-2 px-8 py-4 rounded-md text-base"
          >
            <MessageCircle className="w-5 h-5" />
            Start on WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:+923027635720"
            className="btn-outline-gold flex items-center justify-center gap-2 px-8 py-4 rounded-md text-base"
          >
            Call +92 302 7635720
          </a>
        </div>
      </div>
    </section>
  )
}
