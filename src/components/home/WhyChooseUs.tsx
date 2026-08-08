import { useEffect, useRef, useState } from 'react'
import { Award, Wrench, Shield, MapPin } from 'lucide-react'

function CountStat({ end, suffix = '', label, sub }: { end: number; suffix?: string; label: string; sub: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        const start = performance.now()
        const duration = 2000
        const animate = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setCount(Math.floor(eased * end))
          if (t < 1) requestAnimationFrame(animate)
          else setCount(end)
        }
        requestAnimationFrame(animate)
        observer.disconnect()
      }
    }, { threshold: 0.4 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [end])

  return (
    <div ref={ref} className="glass-card rounded-xl p-6 text-center">
      <div
        className="text-4xl sm:text-5xl font-black text-solar-gold mb-2 leading-none"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {count}{suffix}
      </div>
      <div className="text-white text-base font-bold mb-1" style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700, fontSize: '1.1rem' }}>
        {label}
      </div>
      <div className="text-muted-grey text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
        {sub}
      </div>
    </div>
  )
}

const reasonCards = [
  {
    icon: Award,
    title: 'Certified Engineers',
    body: 'All installations handled by qualified solar engineers — compliant with NEPRA standards and LESCO net metering requirements.',
  },
  {
    icon: Shield,
    title: 'Warranty-Backed Installs',
    body: 'Every system comes with warranty on panels, inverter, and workmanship. We stand behind every installation we complete.',
  },
  {
    icon: Wrench,
    title: '100% In-House Fabrication',
    body: 'We weld and build every mounting structure ourselves in our Karachi workshop. No middlemen, no subcontracted shortcuts.',
  },
  {
    icon: MapPin,
    title: 'All of Karachi Covered',
    body: 'Residential, commercial, and industrial sites across North, Central, and South Karachi — one team for the whole city.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="section-py" style={{ background: '#1E2530' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="eyebrow text-solar-gold mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Why Solar Elite</div>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight"
            style={{ fontFamily: "'Big Shoulders Display', sans-serif" }}
          >
            Built Different.<br />Installed Better.
          </h2>
          <p className="text-muted-grey max-w-xl mx-auto text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            We're not a reseller or a subcontractor chain. We're engineers with our own workshop.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <CountStat end={5} suffix="+" label="Years Active" sub="In business" />
          <CountStat end={200} suffix="+" label="Systems Installed" sub="& counting" />
          <CountStat end={500} suffix="+" label="Happy Clients" sub="Across Karachi" />
          <CountStat end={100} suffix="%" label="In-House Built" sub="No subcontracting" />
        </div>

        {/* Reason cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasonCards.map(({ icon: Icon, title, body }) => (
            <div key={title} className="glass-card rounded-xl p-6">
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-[rgba(255,182,39,0.1)] border border-[rgba(255,182,39,0.15)] mb-4">
                <Icon className="w-5 h-5 text-solar-gold" />
              </div>
              <h3 className="text-white font-bold text-base mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                {title}
              </h3>
              <p className="text-muted-grey text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
