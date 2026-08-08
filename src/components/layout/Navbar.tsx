import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle, Zap } from 'lucide-react'

const WA_BASE = 'https://wa.me/923027635720?text='
const WA_MSG = encodeURIComponent("Hi, I'm interested in a solar/fabrication quote from Solar Elite Services.")

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  const isHome = location.pathname === '/'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome || menuOpen
            ? 'bg-charcoal border-b border-[#2A3341] shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-sm bg-solar-gold group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5 text-charcoal" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-display text-white font-bold text-base leading-none tracking-wide" style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 800 }}>
                  Solar Elite
                </div>
                <div className="text-[10px] text-solar-gold tracking-widest uppercase font-semibold leading-none" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Services
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-solar-gold bg-[rgba(255,182,39,0.08)]'
                      : 'text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.06)]'
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+923027635720"
                className="flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <Phone className="w-3.5 h-3.5 text-solar-gold" />
                +92 302 7635720
              </a>
              <a
                href={`${WA_BASE}${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center gap-2 px-4 py-2 rounded-md text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-white p-2 rounded-md hover:bg-[rgba(255,255,255,0.08)] transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden bg-charcoal border-t border-[#2A3341] transition-all duration-300 overflow-hidden ${
            menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? 'text-solar-gold bg-[rgba(255,182,39,0.08)]'
                    : 'text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1 border-t border-[#2A3341] mt-2 flex flex-col gap-2">
              <a
                href="tel:+923027635720"
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-300 hover:text-white rounded-md hover:bg-[rgba(255,255,255,0.05)] transition-colors"
              >
                <Phone className="w-4 h-4 text-solar-gold" />
                Call: +92 302 7635720
              </a>
              <a
                href={`${WA_BASE}${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center justify-center gap-2 mx-4 py-3 rounded-md text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
