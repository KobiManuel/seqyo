'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, AlertTriangle, CheckCircle, Users, Lock, Eye } from 'lucide-react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const floatingCards = [
  {
    icon: CheckCircle,
    color: 'bg-green-accent',
    label: 'Threat neutralized',
    sub: 'Ransomware blocked · 2s ago',
    rotate: '-rotate-3',
    pos: 'bottom-32 left-4 md:left-10',
    delay: 0,
  },
  {
    icon: AlertTriangle,
    color: 'bg-yellow-500',
    label: 'Vulnerability detected',
    sub: 'CVE-2024-3912 · Critical',
    rotate: 'rotate-2',
    pos: 'top-28 right-4 md:right-6',
    delay: 0.15,
  },
  {
    icon: Users,
    color: 'bg-blue-500',
    label: 'Expert connected',
    sub: 'Analyst available now',
    rotate: '-rotate-1',
    pos: 'bottom-16 right-4 md:right-14',
    delay: 0.3,
  },
]

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const mockupRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge entrance
      gsap.fromTo(badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 }
      )

      // Headline word-by-word
      const words = headlineRef.current?.querySelectorAll('.word')
      if (words) {
        gsap.fromTo(words,
          { y: 60, opacity: 0, rotateX: -30 },
          { y: 0, opacity: 1, rotateX: 0, stagger: 0.1, duration: 0.9, ease: 'power4.out', delay: 0.5 }
        )
      }

      gsap.fromTo(subRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1 }
      )

      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 1.2 }
      )

      // Mockup + cards
      gsap.fromTo(mockupRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.8 }
      )

      // Floating cards
      document.querySelectorAll('.float-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, scale: 0.8, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'back.out(1.7)', delay: 1.1 + i * 0.18 }
        )
        // Float animation
        gsap.to(card, {
          y: -10,
          duration: 2.5 + i * 0.5,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: i * 0.3,
        })
      })

      // Leaf blobs float
      gsap.to('.leaf-blob', {
        y: -20,
        x: 10,
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })

      // Parallax on scroll
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(mockupRef.current, { y: self.progress * 60, ease: 'none' })
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-green-deep overflow-hidden flex flex-col items-center justify-center pt-28 pb-20 noise"
    >
      {/* Background radial gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(ellipse at center, #3a7d52 0%, transparent 70%)' }}
        />
      </div>

      {/* SVG Leaf / botanical blobs in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large leaf cluster - right side */}
        <svg
          className="leaf-blob absolute -right-24 top-10 w-[520px] opacity-30"
          viewBox="0 0 500 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="300" cy="200" rx="180" ry="260" fill="#2d5a3d" transform="rotate(-20 300 200)"/>
          <ellipse cx="240" cy="320" rx="120" ry="200" fill="#3a7d52" transform="rotate(15 240 320)"/>
          <ellipse cx="350" cy="380" rx="100" ry="160" fill="#4fa068" transform="rotate(-35 350 380)"/>
          <ellipse cx="200" cy="180" rx="80" ry="130" fill="#5cb87a" transform="rotate(10 200 180)" opacity="0.6"/>
          <ellipse cx="380" cy="260" rx="60" ry="120" fill="#6fd68f" transform="rotate(-50 380 260)" opacity="0.4"/>
          {/* Leaf veins */}
          <path d="M300 60 Q280 200 260 400" stroke="#4fa068" strokeWidth="2" opacity="0.4"/>
          <path d="M300 60 Q320 180 340 360" stroke="#4fa068" strokeWidth="1.5" opacity="0.3"/>
        </svg>

        {/* Medium leaf - left lower */}
        <svg
          className="absolute -left-16 bottom-10 w-[340px] opacity-25"
          viewBox="0 0 400 500"
          fill="none"
        >
          <ellipse cx="180" cy="280" rx="150" ry="210" fill="#2d5a3d" transform="rotate(25 180 280)"/>
          <ellipse cx="220" cy="200" rx="90" ry="150" fill="#3a7d52" transform="rotate(-10 220 200)"/>
          <path d="M180 80 Q200 240 180 450" stroke="#5cb87a" strokeWidth="2" opacity="0.4"/>
        </svg>

        {/* Small decorative circles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-green-accent/10"
            style={{
              width: `${20 + i * 12}px`,
              height: `${20 + i * 12}px`,
              top: `${10 + i * 11}%`,
              left: `${5 + i * 12}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div ref={badgeRef} className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-1.5 mb-8">
          <span className="status-dot w-2 h-2 rounded-full bg-green-bright inline-block"/>
          <span className="text-sm text-white/70 font-body">Trusted by 1,200+ security teams worldwide</span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 text-balance"
          style={{ perspective: '600px' }}
        >
          {['More', 'security,', 'less', 'chaos'].map((word) => (
            <span key={word} className="word inline-block mr-4 last:mr-0">
              {word === 'security,' ? (
                <span className="text-green-bright">{word}</span>
              ) : word === 'chaos' ? (
                <span className="relative">
                  {word}
                  <span
                    className="absolute -bottom-2 left-0 right-0 h-1 rounded-full gradient-border opacity-70"
                  />
                </span>
              ) : word}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p
          ref={subRef}
          className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-body"
        >
          SEQYO is the only platform you need to automate threat detection, manage vulnerabilities,
          and connect instantly with vetted cybersecurity experts — all in one place.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Link
            href="/contact"
            className="group relative bg-green-accent hover:bg-green-bright text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-green-accent/30 hover:-translate-y-1 text-base"
          >
            <span className="relative z-10">Start free — no credit card</span>
          </Link>
          <Link
            href="/#platform"
            className="flex items-center gap-2 text-white/60 hover:text-white text-base transition-colors group"
          >
            <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-green-accent/60 transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                <polygon points="5,3 11,7 5,11"/>
              </svg>
            </span>
            Watch 2-min demo
          </Link>
        </div>

        <p className="text-white/25 text-sm font-body">
          14-day free trial · SOC 2 certified · Cancel anytime
        </p>
      </div>

      {/* Stacked mockup + floating cards (Bonsai-style) */}
      <div ref={mockupRef} className="relative z-10 mt-16 w-full max-w-5xl mx-auto px-6">
        <div className="relative">
          {/* Main browser mockup card */}
          <div className="bg-white rounded-2xl shadow-2xl shadow-black/40 overflow-hidden border border-white/10">
            {/* Browser chrome */}
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"/>
                <div className="w-3 h-3 rounded-full bg-yellow-400"/>
                <div className="w-3 h-3 rounded-full bg-green-400"/>
              </div>
              <div className="flex-1 bg-white rounded-md mx-4 px-3 py-1 text-xs text-gray-400 flex items-center gap-1.5">
                <Lock size={10} className="text-green-500"/>
                app.seqyo.io/dashboard
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="bg-green-deep/95 p-6 min-h-[280px] md:min-h-[360px]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-white font-semibold text-lg">Security Overview</h3>
                  <p className="text-white/40 text-sm">Last 24 hours · Real-time</p>
                </div>
                <div className="flex items-center gap-2 bg-green-accent/20 text-green-bright px-3 py-1.5 rounded-full text-sm">
                  <span className="status-dot w-2 h-2 rounded-full bg-green-bright"/>
                  All systems secure
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Threats blocked', value: '1,284', change: '+12%', icon: Shield },
                  { label: 'Vulnerabilities', value: '3', change: '-89%', icon: AlertTriangle },
                  { label: 'Uptime', value: '99.98%', change: '+0.1%', icon: CheckCircle },
                  { label: 'Experts online', value: '48', change: 'Live', icon: Users },
                ].map(({ label, value, change, icon: Icon }) => (
                  <div key={label} className="bg-white/5 border border-white/8 rounded-xl p-4">
                    <Icon size={16} className="text-green-accent mb-2 opacity-80"/>
                    <div className="text-white font-bold text-xl">{value}</div>
                    <div className="text-white/40 text-xs mt-0.5">{label}</div>
                    <div className="text-green-bright text-xs mt-1 font-medium">{change}</div>
                  </div>
                ))}
              </div>

              {/* Chart area placeholder */}
              <div className="bg-white/3 border border-white/6 rounded-xl h-28 flex items-end px-4 pb-4 gap-2 overflow-hidden">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-green-accent to-green-bright rounded-t-sm opacity-60"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Floating notification cards */}
          {floatingCards.map(({ icon: Icon, color, label, sub, rotate, pos, delay }, i) => (
            <div
              key={i}
              className={`float-card absolute ${pos} ${rotate} bg-white rounded-2xl shadow-2xl shadow-black/30 px-4 py-3 flex items-center gap-3 min-w-[200px] max-w-[240px] border border-white/20`}
              style={{ animationDelay: `${delay}s` }}
            >
              <div className={`w-9 h-9 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <Icon size={16} className="text-white"/>
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-sm leading-tight">{label}</div>
                <div className="text-gray-400 text-xs mt-0.5">{sub}</div>
              </div>
            </div>
          ))}

          {/* Scan progress card */}
          <div className="float-card absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-5 py-3 min-w-[220px] border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <Eye size={15} className="text-green-600"/>
              <span className="text-gray-700 font-semibold text-sm">Deep scan in progress</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '73%' }}/>
            </div>
            <p className="text-gray-400 text-xs mt-1.5">73% complete · 847 endpoints scanned</p>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0f2419)' }}
      />
    </section>
  )
}
