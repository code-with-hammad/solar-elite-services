const steps = [
  {
    num: '01',
    title: 'Site Visit & Load Audit',
    body: 'We come to your property, assess your energy consumption, roof structure, and electrical setup — at no charge.',
    accent: '#FFB627',
  },
  {
    num: '02',
    title: 'Custom Design & Quote',
    body: 'Our engineers design a system sized for your exact load. You get a transparent, itemised quote — no hidden costs.',
    accent: '#3B82C4',
  },
  {
    num: '03',
    title: 'Fabrication & Installation',
    body: 'We fabricate your mounting structure in our workshop, then install panels, inverter, and wiring to code.',
    accent: '#FFB627',
  },
  {
    num: '04',
    title: 'Testing, Handover & Support',
    body: 'Full commissioning, net metering paperwork, and a walkthrough so you understand your system. We stay reachable after handover.',
    accent: '#3B82C4',
  },
]

export function Process() {
  return (
    <section className="section-py bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="eyebrow text-brand-blue mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            How It Works
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black text-charcoal mb-4 leading-tight"
            style={{ fontFamily: "'Big Shoulders Display', sans-serif" }}
          >
            From Inquiry<br />to Powered Up
          </h2>
          <p className="text-[#666] max-w-lg mx-auto text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            Our end-to-end process handles every detail — from the first site visit to flipping the switch.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-[calc(100%-8px)] w-full h-px z-0"
                  style={{ background: `linear-gradient(90deg, ${step.accent}40, transparent)` }}
                />
              )}
              <div className="bg-charcoal rounded-xl p-6 relative z-10 hover:scale-[1.02] transition-transform">
                <div
                  className="text-5xl font-black mb-4 leading-none"
                  style={{
                    fontFamily: "'Big Shoulders Display', sans-serif",
                    color: step.accent,
                    opacity: 0.85,
                  }}
                >
                  {step.num}
                </div>
                <h3 className="text-white font-bold text-base mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-muted-grey text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
