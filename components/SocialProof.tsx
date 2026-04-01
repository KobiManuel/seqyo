'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '10M+', label: 'Threats blocked monthly' },
  { value: '99.98%', label: 'Platform uptime SLA' },
  { value: '<60s', label: 'Incident response time' },
  { value: '500+', label: 'Certified security experts' },
]

const testimonials = [
  {
    quote: "SEQYO caught a sophisticated supply-chain attack that our previous SIEM completely missed. The expert network connected us with a specialist within 4 minutes.",
    name: "Sarah Chen",
    role: "CISO, FinTech Unicorn",
    initials: "SC",
    color: "bg-blue-500",
  },
  {
    quote: "We replaced three separate tools with SEQYO. Our security posture improved dramatically while our team's workload dropped by 60%. The ROI was instant.",
    name: "Marcus Williams",
    role: "Head of Security, SaaS Enterprise",
    initials: "MW",
    color: "bg-purple-500",
  },
  {
    quote: "The compliance automation alone saved us 200+ hours per quarter. SEQYO makes our SOC 2 audits feel effortless now.",
    name: "Priya Mehta",
    role: "VP Engineering, HealthTech Startup",
    initials: "PM",
    color: "bg-orange-500",
  },
]

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stats on scroll
      ScrollTrigger.create({
        trigger: '.stats-row',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.stat-item',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out' }
          )
        },
        once: true,
      })

      // Animate testimonials
      ScrollTrigger.create({
        trigger: '.testimonials-row',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.testimonial-card',
            { opacity: 0, y: 50, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out' }
          )
        },
        once: true,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-green-dark py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Trusted logos strip */}
        <div className="text-center mb-14">
          <p className="text-white/30 text-sm font-body tracking-widest uppercase mb-8">
            Trusted by security teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {['Axiom Corp', 'DataVault', 'NexaHealth', 'CloudPeak', 'TradeFlow', 'Orbital SaaS'].map((name) => (
              <span key={name} className="text-white/25 font-display text-xl font-bold tracking-wide hover:text-white/50 transition-colors">
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="stats-row grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map(({ value, label }) => (
            <div key={label} className="stat-item text-center">
              <div className="font-display text-5xl md:text-6xl font-bold text-green-bright mb-2">{value}</div>
              <div className="text-white/40 text-sm font-body">{label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="testimonials-row grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role, initials, color }) => (
            <div
              key={name}
              className="testimonial-card glass rounded-2xl p-7 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#5cb87a">
                    <path d="M7 1l1.5 3.5 3.5.5-2.5 2.5.5 3.5L7 9.5l-3 1.5.5-3.5L2 5l3.5-.5z"/>
                  </svg>
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6 flex-1">"{quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{name}</div>
                  <div className="text-white/40 text-xs">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
