import { useState, useEffect } from 'react'
import { Phone, MessageCircle } from 'lucide-react'

const WA_BASE = 'https://wa.me/923027635720?text='
const WA_MSG = encodeURIComponent("Hi, I'm interested in a solar/fabrication quote from Solar Elite Services.")

export function MobileBottomBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex border-t border-[#2A3341] shadow-2xl" style={{ background: '#0F1318' }}>
        <a
          href="tel:+923027635720"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white hover:bg-[#1E2530] transition-colors border-r border-[#2A3341]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <Phone className="w-4 h-4 text-solar-gold" />
          Call Now
        </a>
        <a
          href={`${WA_BASE}${WA_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-charcoal"
          style={{ background: 'linear-gradient(135deg, #FFB627, #B8841C)', fontFamily: "'Inter', sans-serif" }}
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
