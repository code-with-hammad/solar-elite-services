import { Sun, Hammer, ArrowRight, Zap, Home, Building, Factory, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

const WA_BASE = 'https://wa.me/923027635720?text='
const WA_SOLAR = encodeURIComponent("Hi, I'm interested in a solar energy system quote. Please guide me.")
const WA_FAB = encodeURIComponent("Hi, I'm interested in metal fabrication / custom steel work. Please guide me.")

export function ServicesOverview() {
  return (
    <section className="section-py bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="eyebrow text-brand-blue mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            What We Do
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black text-charcoal mb-4 leading-tight"
            style={{ fontFamily: "'Big Shoulders Display', sans-serif" }}
          >
            Two Specialities,<br />One Trusted Team
          </h2>
          <p className="text-[#555] max-w-xl mx-auto text-base leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Most solar companies outsource structure fabrication. We don't — we design, build, and install everything in-house.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Solar Card */}
          <div className="bg-charcoal rounded-xl p-8 relative overflow-hidden group hover:scale-[1.01] transition-transform">
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(ellipse 60% 60% at 30% 30%, rgba(255,182,39,0.08) 0%, transparent 70%)'
              }}
            />
            <div className="relative z-10">
              <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-[rgba(255,182,39,0.12)] border border-[rgba(255,182,39,0.2)] mb-6 group-hover:border-[rgba(255,182,39,0.5)] transition-colors">
                <Sun className="w-7 h-7 text-solar-gold" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3" style={{ fontFamily: "'Big Shoulders Display', sans-serif" }}>
                Solar Energy Systems
              </h3>
              <p className="text-muted-grey text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                On-grid, off-grid, and hybrid solar systems designed for Karachi's power challenges. From load audit to net metering to ongoing maintenance.
              </p>

              <ul className="space-y-2.5 mb-8">
                {[
                  { icon: Home, text: 'Residential — homes & apartments' },
                  { icon: Building, text: 'Commercial — offices & plazas' },
                  { icon: Factory, text: 'Industrial — factories & sheds' },
                  { icon: Shield, text: 'Warranty-backed installations' },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2.5">
                    <Icon className="w-3.5 h-3.5 text-solar-gold shrink-0" />
                    <span className="text-sm text-muted-grey" style={{ fontFamily: "'Inter', sans-serif" }}>{text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`${WA_BASE}${WA_SOLAR}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold flex items-center gap-2 px-5 py-2.5 rounded-md text-sm"
                >
                  Get Solar Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/services" className="btn-outline-gold flex items-center gap-2 px-5 py-2.5 rounded-md text-sm">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Fabrication Card */}
          <div className="bg-charcoal rounded-xl p-8 relative overflow-hidden group hover:scale-[1.01] transition-transform">
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(ellipse 60% 60% at 70% 30%, rgba(30,95,168,0.1) 0%, transparent 70%)'
              }}
            />
            <div className="relative z-10">
              <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-[rgba(30,95,168,0.15)] border border-[rgba(30,95,168,0.25)] mb-6 group-hover:border-[rgba(59,130,196,0.5)] transition-colors">
                <Hammer className="w-7 h-7 text-brand-blue" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3" style={{ fontFamily: "'Big Shoulders Display', sans-serif" }}>
                Metal Fabrication
              </h3>
              <p className="text-muted-grey text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                Custom steel structures built in our own Karachi workshop. Solar mounts, gates, grills, industrial sheds — precision fabricated, site-installed.
              </p>

              <ul className="space-y-2.5 mb-8">
                {[
                  { icon: Sun, text: 'Solar mounting structures' },
                  { icon: Zap, text: 'Custom gates & security grills' },
                  { icon: Factory, text: 'Industrial sheds & steel frames' },
                  { icon: Shield, text: 'On-site welding & installation' },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2.5">
                    <Icon className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                    <span className="text-sm text-muted-grey" style={{ fontFamily: "'Inter', sans-serif" }}>{text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`${WA_BASE}${WA_FAB}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-blue flex items-center gap-2 px-5 py-2.5 rounded-md text-sm text-white"
                  style={{ background: 'linear-gradient(135deg, #1E5FA8, #3B82C4)', fontWeight: 700, transition: 'transform 0.2s, box-shadow 0.2s' }}
                >
                  Get Fab Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/services" className="flex items-center gap-2 px-5 py-2.5 rounded-md text-sm border-2 border-brand-blue text-brand-blue hover:bg-[rgba(30,95,168,0.1)] transition-colors font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
