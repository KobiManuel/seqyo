'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { CheckCircle, X, Zap } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 49,
    annualPrice: 39,
    description: 'For small teams beginning their security journey.',
    color: 'from-green-dark to-green-mid',
    accent: '#5cb87a',
    popular: false,
    features: [
      'Up to 50 endpoints monitored',
      'Real-time threat detection',
      'Vulnerability scanning (weekly)',
      'Basic compliance reports',
      '5 expert consultations / month',
      'Email & chat support',
      '99.9% uptime SLA',
      null,
      null,
    ],
  },
  {
    name: 'Professional',
    monthlyPrice: 149,
    annualPrice: 119,
    description: 'For growing companies that need full-stack security coverage.',
    color: 'from-green-mid to-green-brand',
    accent: '#6fd68f',
    popular: true,
    features: [
      'Up to 500 endpoints monitored',
      'Real-time threat detection',
      'Continuous vulnerability scanning',
      'Full compliance automation',
      'Unlimited expert consultations',
      'Priority 24/7 support',
      '99.95% uptime SLA',
      'Incident response playbooks',
      'API access & integrations',
    ],
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    annualPrice: null,
    description: 'Custom solutions for large-scale, complex security environments.',
    color: 'from-green-dark to-green-mid',
    accent: '#4fa068',
    popular: false,
    features: [
      'Unlimited endpoints',
      'Advanced AI threat modeling',
      'Dedicated security engineer',
      'Custom compliance frameworks',
      'Dedicated expert team',
      '24/7 phone + dedicated CSM',
      '99.99% uptime SLA',
      'Custom incident response',
      'White-label options',
    ],
  },
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo('.price-card',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out', delay: 0.4 }
    )
  }, [])

  return (
    <>
      <Navbar />
      <div ref={pageRef} className="bg-green-deep min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block bg-green-accent/15 border border-green-accent/30 text-green-bright text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              Simple pricing
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-5">
              Security without
              <br /><span className="text-green-bright">surprises.</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
              No hidden fees, no per-alert charges. Pay for what you need and scale with confidence.
            </p>

            {/* Toggle */}
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-2 py-2">
              <button
                onClick={() => setAnnual(false)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${!annual ? 'bg-green-accent text-white' : 'text-white/50 hover:text-white'}`}
              >Monthly</button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${annual ? 'bg-green-accent text-white' : 'text-white/50 hover:text-white'}`}
              >
                Annual
                <span className="bg-green-bright/20 text-green-bright text-xs px-2 py-0.5 rounded-full">Save 20%</span>
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map(({ name, monthlyPrice, annualPrice, description, color, accent, popular, features }) => (
              <div
                key={name}
                className={`price-card relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  popular ? 'ring-2 ring-green-bright shadow-xl shadow-green-bright/10' : ''
                }`}
              >
                {popular && (
                  <div className="absolute top-0 left-0 right-0 bg-green-bright text-green-deep text-xs font-bold text-center py-1.5 tracking-widest">
                    ✦ MOST POPULAR
                  </div>
                )}
                <div className={`bg-gradient-to-br ${color} p-8 ${popular ? 'pt-10' : ''}`}>
                  <h3 className="text-white font-display text-2xl font-bold mb-1">{name}</h3>
                  <p className="text-white/50 text-sm mb-6">{description}</p>

                  <div className="mb-8">
                    {monthlyPrice ? (
                      <>
                        <span className="font-display text-5xl font-bold text-white">
                          ${annual ? annualPrice : monthlyPrice}
                        </span>
                        <span className="text-white/40 ml-1 text-sm">/mo</span>
                        {annual && (
                          <div className="text-green-bright text-xs mt-1">
                            Billed annually · Save ${((monthlyPrice! - annualPrice!) * 12).toLocaleString()}/yr
                          </div>
                        )}
                      </>
                    ) : (
                      <span className="font-display text-4xl font-bold text-white">Custom</span>
                    )}
                  </div>

                  <button
                    className="w-full py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      backgroundColor: popular ? accent : 'transparent',
                      color: popular ? '#0f2419' : 'white',
                      border: popular ? 'none' : `1.5px solid ${accent}50`,
                    }}
                  >
                    {monthlyPrice ? 'Start free trial' : 'Contact sales'}
                  </button>
                </div>

                <div className="bg-green-dark/60 p-8 space-y-3">
                  {features.map((feat, i) =>
                    feat ? (
                      <div key={i} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: accent }}/>
                        <span className="text-white/70">{feat}</span>
                      </div>
                    ) : (
                      <div key={i} className="flex items-start gap-2.5 text-sm">
                        <X size={15} className="flex-shrink-0 mt-0.5 text-white/15"/>
                        <span className="text-white/20">—</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ teaser */}
          <div className="mt-20 text-center">
            <p className="text-white/40 text-sm">
              Questions? <a href="/contact" className="text-green-bright hover:underline">Talk to our team</a> · All plans include a 14-day free trial
            </p>
          </div>
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  )
}
