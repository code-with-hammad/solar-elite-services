import { useState, useMemo } from 'react'
import { MessageCircle, TrendingDown } from 'lucide-react'

const WA_BASE = 'https://wa.me/923027635720?text='

const SAVINGS_RATE = 0.62
const AVG_PAYBACK_YEARS = 3.5

export function SavingsCalculator() {
  const [bill, setBill] = useState(15000)

  const monthlySavings = Math.round(bill * SAVINGS_RATE)
  const annualSavings = monthlySavings * 12

  const waMsg = useMemo(
    () => encodeURIComponent(
      `Hi Solar Elite Services! My current monthly electricity bill is approximately Rs. ${bill.toLocaleString()}. I'd like a detailed solar quote to potentially save Rs. ${monthlySavings.toLocaleString()}/month. Please contact me.`
    ),
    [bill, monthlySavings]
  )

  return (
    <section className="section-py" style={{ background: '#0F1318' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="eyebrow text-solar-gold mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              Savings Calculator
            </div>
            <h2
              className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight"
              style={{ fontFamily: "'Big Shoulders Display', sans-serif" }}
            >
              See What Solar<br />Could Save You
            </h2>
            <p className="text-muted-grey text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              Estimated figures based on Karachi averages. Get your exact quote on WhatsApp.
            </p>
          </div>

          <div className="glass-card rounded-xl p-8 sm:p-10">
            {/* Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-white text-sm font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Current Monthly Electricity Bill
                </label>
                <div className="text-solar-gold font-black text-xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Rs. {bill.toLocaleString()}
                </div>
              </div>
              <input
                type="range"
                min={3000}
                max={100000}
                step={1000}
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #FFB627 0%, #FFB627 ${((bill - 3000) / (100000 - 3000)) * 100}%, #2A3341 ${((bill - 3000) / (100000 - 3000)) * 100}%, #2A3341 100%)`,
                  outline: 'none',
                }}
              />
              <div className="flex justify-between mt-2">
                <span className="text-xs text-muted-grey" style={{ fontFamily: "'Inter', sans-serif" }}>Rs. 3,000</span>
                <span className="text-xs text-muted-grey" style={{ fontFamily: "'Inter', sans-serif" }}>Rs. 1,00,000</span>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-[rgba(255,182,39,0.07)] border border-[rgba(255,182,39,0.2)] rounded-lg p-5 text-center">
                <TrendingDown className="w-5 h-5 text-solar-gold mx-auto mb-2" />
                <div className="text-2xl font-black text-solar-gold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Rs. {monthlySavings.toLocaleString()}
                </div>
                <div className="text-xs text-muted-grey mt-1 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Est. Monthly Savings
                </div>
              </div>
              <div className="bg-[rgba(30,95,168,0.1)] border border-[rgba(30,95,168,0.25)] rounded-lg p-5 text-center">
                <TrendingDown className="w-5 h-5 text-brand-blue mx-auto mb-2" />
                <div className="text-2xl font-black text-[#3B82C4]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Rs. {annualSavings.toLocaleString()}
                </div>
                <div className="text-xs text-muted-grey mt-1 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Est. Annual Savings
                </div>
              </div>
              <div className="bg-[rgba(47,174,110,0.08)] border border-[rgba(47,174,110,0.2)] rounded-lg p-5 text-center">
                <TrendingDown className="w-5 h-5 text-[#2FAE6E] mx-auto mb-2" />
                <div className="text-2xl font-black text-[#2FAE6E]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  ~{AVG_PAYBACK_YEARS} Yrs
                </div>
                <div className="text-xs text-muted-grey mt-1 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Est. Payback Period
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-grey mb-5 text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
              * Estimates based on ~{Math.round(SAVINGS_RATE * 100)}% bill reduction typical in Karachi.
              Actual savings vary by usage, system size, and tariff. Get an exact quote for your property.
            </p>

            <div className="text-center">
              <a
                href={`${WA_BASE}${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-base"
              >
                <MessageCircle className="w-5 h-5" />
                Get My Exact Quote on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
