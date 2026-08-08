import { Link } from 'react-router-dom'
import { Zap, Phone, Mail, MapPin, Clock, Camera, Globe, Play, MessageCircle } from 'lucide-react'

const WA_BASE = 'https://wa.me/923027635720?text='
const WA_MSG = encodeURIComponent("Hi, I'm interested in a solar/fabrication quote from Solar Elite Services.")

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-[#2A3341]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <div className="flex items-center justify-center w-9 h-9 rounded-sm bg-solar-gold">
              <Zap className="w-5 h-5 text-charcoal" strokeWidth={2.5} />
            </div>
            <div>
              <div className="font-bold text-white text-base leading-none" style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 800 }}>
                Solar Elite
              </div>
              <div className="text-[10px] text-solar-gold tracking-widest uppercase font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                Services
              </div>
            </div>
          </Link>
          <p className="text-muted-grey text-sm leading-relaxed mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
            Karachi's trusted solar installation and metal fabrication specialists — engineering excellence, built in-house.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://instagram.com/solar_elite_services" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-md bg-[#2A3341] text-muted-grey hover:text-solar-gold hover:bg-[#333d4f] transition-colors">
              <Camera className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-md bg-[#2A3341] text-muted-grey hover:text-solar-gold hover:bg-[#333d4f] transition-colors">
              <Globe className="w-4 h-4" />
            </a>
            <a href="https://youtube.com/SolarEliteServices" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-md bg-[#2A3341] text-muted-grey hover:text-solar-gold hover:bg-[#333d4f] transition-colors">
              <Play className="w-4 h-4" />
            </a>
            <a href={`${WA_BASE}${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-md bg-[#2A3341] text-muted-grey hover:text-[#25D366] hover:bg-[#333d4f] transition-colors">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest" style={{ fontFamily: "'Inter', sans-serif" }}>Quick Links</h3>
          <ul className="space-y-2.5">
            {[
              { label: 'Home', path: '/' },
              { label: 'About Us', path: '/about' },
              { label: 'Services', path: '/services' },
              { label: 'Gallery', path: '/gallery' },
              { label: 'Contact', path: '/contact' },
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-muted-grey hover:text-solar-gold text-sm transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest" style={{ fontFamily: "'Inter', sans-serif" }}>Services</h3>
          <ul className="space-y-2.5">
            {[
              'Residential Solar',
              'Commercial Solar',
              'Industrial Solar',
              'Battery / Hybrid Systems',
              'Solar Mounting Structures',
              'Custom Gates & Grills',
              'Industrial Steel Work',
              'Maintenance & Cleaning',
            ].map((s) => (
              <li key={s}>
                <Link to="/services" className="text-muted-grey hover:text-solar-gold text-sm transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest" style={{ fontFamily: "'Inter', sans-serif" }}>Contact</h3>
          <ul className="space-y-3.5">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-solar-gold mt-0.5 shrink-0" />
              <span className="text-muted-grey text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                X373+XJR, Sector 10, North Karachi, Karachi, Pakistan
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-solar-gold shrink-0" />
              <a href="tel:+923027635720" className="text-muted-grey hover:text-solar-gold text-sm transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                +92 302 7635720
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-solar-gold shrink-0" />
              <a href="mailto:solareliteservices@gmail.com" className="text-muted-grey hover:text-solar-gold text-sm transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                solareliteservices@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-solar-gold mt-0.5 shrink-0" />
              <div className="text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                <div className="text-muted-grey">11:00 AM – 8:00 PM</div>
                <div className="text-muted-grey">Daily</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2A3341] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-muted-grey text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
            © {new Date().getFullYear()} Solar Elite Services. All rights reserved.
          </p>
          <p className="text-muted-grey text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
            Karachi, Pakistan · Sector 10, North Karachi
          </p>
        </div>
      </div>
    </footer>
  )
}
