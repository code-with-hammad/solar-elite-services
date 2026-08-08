import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Muhammad Imran',
    location: 'North Karachi',
    role: 'Homeowner',
    body: 'Solar Elite installed an 8KW system for our home. Bill dropped from Rs. 22,000 to under Rs. 4,000. The mounting structure quality is exceptional — clearly in-house made.',
    rating: 5,
    initial: 'MI',
  },
  {
    name: 'Farrukh Ahmed',
    location: 'SITE Area, Karachi',
    role: 'Factory Owner',
    body: 'We needed both solar panels and custom steel sheds for our factory. One team handled everything. Installation was clean, documentation was proper, and the team was professional.',
    rating: 5,
    initial: 'FA',
  },
  {
    name: 'Saima Noor',
    location: 'Gulshan-e-Iqbal',
    role: 'Commercial Office',
    body: 'The free site visit convinced us immediately — their engineer understood our setup better than any other company we contacted. Net metering support was seamless.',
    rating: 5,
    initial: 'SN',
  },
]

export function Testimonials() {
  return (
    <section className="section-py" style={{ background: '#0F1318' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="eyebrow text-solar-gold mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            Client Feedback
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight"
            style={{ fontFamily: "'Big Shoulders Display', sans-serif" }}
          >
            Trusted Across Karachi
          </h2>
          <p className="text-muted-grey text-sm max-w-md mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Real clients, real results. More testimonials coming — these are placeholder examples of the format.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card rounded-xl p-6 flex flex-col">
              <Quote className="w-6 h-6 text-solar-gold mb-4 opacity-60" />
              <p className="text-muted-grey text-sm leading-relaxed flex-1 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                "{t.body}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-solar-gold fill-solar-gold" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(255,182,39,0.15)] border border-[rgba(255,182,39,0.25)] text-solar-gold font-bold text-sm shrink-0" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {t.initial}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {t.name}
                  </div>
                  <div className="text-muted-grey text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder note */}
        <div className="mt-8 text-center">
          <span className="inline-flex items-center gap-2 text-xs text-muted-grey border border-[#2A3341] rounded-full px-4 py-2" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-solar-gold inline-block" />
            Testimonials above are placeholder examples — replace with verified client quotes before launch
          </span>
        </div>
      </div>
    </section>
  )
}
