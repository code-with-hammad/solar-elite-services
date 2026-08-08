import { ShieldCheck, Wrench, MapPin, Zap } from 'lucide-react'

const items = [
  { icon: ShieldCheck, label: 'Certified Engineers', sub: 'Licensed & qualified' },
  { icon: Wrench, label: 'In-House Workshop', sub: 'No subcontracting' },
  { icon: Zap, label: 'Net Metering Support', sub: 'LESCO approved' },
  { icon: MapPin, label: 'Karachi-Wide Coverage', sub: 'All areas served' },
]

export function TrustBar() {
  return (
    <section className="relative z-10" style={{ background: '#1E2530' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-md bg-[#2A3341] shrink-0">
                <Icon className="w-4 h-4 text-solar-gold" />
              </div>
              <div>
                <div className="text-white text-sm font-semibold leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {label}
                </div>
                <div className="text-muted-grey text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#FFB627] to-transparent opacity-30" />
    </section>
  )
}
