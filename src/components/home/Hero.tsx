import { Phone, MessageCircle, ChevronDown } from 'lucide-react'

const WA_BASE = 'https://wa.me/923027635720?text='
const WA_VISIT = encodeURIComponent("Hi, I'd like to book a free site visit for solar installation. Please let me know available slots.")

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#0F1318' }}
    >
      {/* Gradient mesh glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 50% 60% at 70% 50%, rgba(255,182,39,0.07) 0%, transparent 65%),
            radial-gradient(ellipse 40% 50% at 10% 80%, rgba(30,95,168,0.08) 0%, transparent 60%)
          `
        }}
      />

      {/* Diagonal separator (desktop) */}
      <div
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{
          background: 'linear-gradient(105deg, #0F1318 55%, #1E2530 55.5%)'
        }}
      />
      {/* Gold seam along diagonal */}
      <div
        className="absolute inset-0 pointer-events-none hidden md:block overflow-hidden"
        style={{ zIndex: 1 }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '55%',
            width: '2px',
            background: 'linear-gradient(180deg, transparent 0%, #FFB627 25%, #FFB627 75%, transparent 100%)',
            transform: 'skewX(-8deg) translateX(-1px)',
            opacity: 0.6,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">

          {/* Left — text */}
          <div className="flex flex-col justify-center py-8">
            <div className="eyebrow text-solar-gold mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
              Karachi's Solar & Metalwork Specialists
            </div>
            <h1
              className="text-[56px] sm:text-[72px] lg:text-[88px] font-black leading-none tracking-tight text-white mb-6"
              style={{ fontFamily: "'Big Shoulders Display', sans-serif" }}
            >
              Cut Your
              <span className="block gold-gradient-text">Electricity</span>
              Bills.
              <span className="block text-[44px] sm:text-[56px] lg:text-[68px] text-muted-grey font-bold">
                Not Corners.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-muted-grey leading-relaxed mb-8 max-w-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
              We design, fabricate, and install solar power systems and custom steel structures built for Karachi's heat, dust, and loadshedding — with our own in-house engineering and welding team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={`${WA_BASE}${WA_VISIT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-base"
              >
                <MessageCircle className="w-5 h-5" />
                Get a Free Site Visit
              </a>
              <a
                href="tel:+923027635720"
                className="btn-outline-gold flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-base"
              >
                <Phone className="w-5 h-5" />
                Call +92 302 7635720
              </a>
            </div>

            {/* Stat row */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-[#2A3341]">
              {[
                { value: '5+', label: 'Years in Business' },
                { value: '200+', label: 'Systems Installed' },
                { value: '100%', label: 'In-House Fabrication' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-black text-solar-gold leading-none"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-grey mt-1 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — solar illustration */}
          <div className="flex items-center justify-center relative py-8 md:py-0">
            <div className="relative w-full max-w-[420px] aspect-square">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full animate-sun-pulse"
                style={{
                  background: 'radial-gradient(circle, rgba(255,182,39,0.06) 0%, transparent 70%)'
                }}
              />

              {/* Solar grid SVG */}
              <svg viewBox="0 0 400 400" className="w-full h-full relative z-10" aria-hidden>
                {/* Outer rotating ring */}
                <g className="animate-sun-rotate" style={{ transformOrigin: '200px 200px' }}>
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180
                    const x1 = 200 + 155 * Math.cos(angle)
                    const y1 = 200 + 155 * Math.sin(angle)
                    const x2 = 200 + 185 * Math.cos(angle)
                    const y2 = 200 + 185 * Math.sin(angle)
                    return (
                      <line
                        key={i}
                        x1={x1} y1={y1} x2={x2} y2={y2}
                        stroke="#FFB627"
                        strokeWidth={i % 3 === 0 ? 2.5 : 1.5}
                        opacity={i % 3 === 0 ? 0.7 : 0.35}
                      />
                    )
                  })}
                  <circle cx="200" cy="200" r="170" fill="none" stroke="#FFB627" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.25" />
                </g>

                {/* Mid dashed ring */}
                <circle cx="200" cy="200" r="130" fill="none" stroke="#1E5FA8" strokeWidth="1" strokeDasharray="6 10" opacity="0.4" />

                {/* Panel grid */}
                <g opacity="0.85">
                  {/* Solar panel array */}
                  {[0, 1, 2].map((row) =>
                    [0, 1, 2, 3].map((col) => (
                      <rect
                        key={`${row}-${col}`}
                        x={148 + col * 27}
                        y={148 + row * 27}
                        width="24"
                        height="24"
                        rx="2"
                        fill="#1E5FA8"
                        stroke="#3B82C4"
                        strokeWidth="0.8"
                        opacity="0.9"
                      />
                    ))
                  )}
                  {/* Panel cells */}
                  {[0, 1, 2].map((row) =>
                    [0, 1, 2, 3].map((col) => (
                      <g key={`c-${row}-${col}`}>
                        <line
                          x1={148 + col * 27 + 12}
                          y1={148 + row * 27 + 4}
                          x2={148 + col * 27 + 12}
                          y2={148 + row * 27 + 20}
                          stroke="#5BA3D8"
                          strokeWidth="0.6"
                          opacity="0.5"
                        />
                        <line
                          x1={148 + col * 27 + 4}
                          y1={148 + row * 27 + 12}
                          x2={148 + col * 27 + 20}
                          y2={148 + row * 27 + 12}
                          stroke="#5BA3D8"
                          strokeWidth="0.6"
                          opacity="0.5"
                        />
                      </g>
                    ))
                  )}
                </g>

                {/* Sun core */}
                <circle cx="200" cy="200" r="18" fill="#FFB627" opacity="0.9" className="animate-sun-pulse" />
                <circle cx="200" cy="200" r="12" fill="#FFE085" opacity="0.95" />
                <circle cx="200" cy="200" r="6" fill="white" opacity="0.9" />

                {/* Energy flow lines */}
                {[30, 90, 150, 210, 270, 330].map((deg, i) => {
                  const rad = (deg * Math.PI) / 180
                  return (
                    <line
                      key={i}
                      x1={200 + 22 * Math.cos(rad)}
                      y1={200 + 22 * Math.sin(rad)}
                      x2={200 + 125 * Math.cos(rad)}
                      y2={200 + 125 * Math.sin(rad)}
                      stroke="#FFB627"
                      strokeWidth="1"
                      strokeDasharray="4 8"
                      opacity="0.35"
                      className="animate-ray-fade"
                      style={{ animationDelay: `${i * 0.5}s` }}
                    />
                  )
                })}

                {/* House silhouette */}
                <g transform="translate(200, 295)" opacity="0.7">
                  <polygon points="-28,-20 0,-42 28,-20" fill="#2A3341" stroke="#FFB627" strokeWidth="1.5" />
                  <rect x="-22" y="-20" width="44" height="30" fill="#2A3341" stroke="#3B82C4" strokeWidth="1" />
                  <rect x="-8" y="-10" width="16" height="20" fill="#1E5FA8" opacity="0.8" />
                </g>

                {/* kW label */}
                <text x="200" y="358" textAnchor="middle" fill="#FFB627" fontSize="10" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" opacity="0.85">
                  NET METERED
                </text>

                {/* Corner brackets */}
                {[
                  [30, 30], [370, 30], [30, 370], [370, 370]
                ].map(([cx, cy], i) => (
                  <g key={i} opacity="0.4" stroke="#FFB627" strokeWidth="1.5" fill="none">
                    <path d={
                      i === 0 ? `M${cx + 12},${cy} L${cx},${cy} L${cx},${cy + 12}` :
                      i === 1 ? `M${cx - 12},${cy} L${cx},${cy} L${cx},${cy + 12}` :
                      i === 2 ? `M${cx + 12},${cy} L${cx},${cy} L${cx},${cy - 12}` :
                               `M${cx - 12},${cy} L${cx},${cy} L${cx},${cy - 12}`
                    } />
                  </g>
                ))}
              </svg>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -right-4 glass-card rounded-lg px-4 py-2.5 animate-float"
                style={{ animationDelay: '1s' }}
              >
                <div className="text-xs text-muted-grey mb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>Est. Monthly Savings</div>
                <div className="text-xl font-black text-solar-gold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Rs. 8,000+</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity">
        <span className="text-xs text-muted-grey tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Scroll</span>
        <ChevronDown className="w-4 h-4 text-muted-grey animate-bounce" />
      </div>
    </section>
  )
}
