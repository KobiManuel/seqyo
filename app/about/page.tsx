'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, Heart, Globe, Zap } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'

gsap.registerPlugin(ScrollTrigger)

const values = [
  { icon: Shield, title: 'Security-first', desc: 'We build what we preach. SEQYO itself undergoes continuous third-party penetration testing, holding SOC 2 Type II and ISO 27001 certifications.' },
  { icon: Heart, title: 'Human-centered', desc: 'Technology amplifies human judgment — it never replaces it. Every feature is designed to make security professionals more effective, not obsolete.' },
  { icon: Globe, title: 'Radically transparent', desc: 'No black boxes. We explain every alert, every decision, and every recommendation in plain language your whole team can understand.' },
  { icon: Zap, title: 'Relentlessly fast', desc: 'In security, speed is survival. Our entire platform is engineered for sub-second detection, instant alerting, and 60-second expert dispatch.' },
]

const team = [
  { name: 'Dr. Rachel Kim', role: 'CEO & Co-Founder', bg: '#2d5a3d', bio: 'Former NSA Cybersecurity Director. 18 years securing critical infrastructure.' },
  { name: 'Marco Deluca', role: 'CTO & Co-Founder', bg: '#3a7d52', bio: 'Previously led security engineering at two Fortune 500 cloud providers.' },
  { name: 'Amara Osei', role: 'Chief Security Officer', bg: '#1a3a2a', bio: 'CISSP, ex-Mandiant IR lead. Has responded to 200+ major breaches.' },
  { name: 'Yuki Tanaka', role: 'Head of AI Research', bg: '#2d5a3d', bio: 'PhD in adversarial ML. Published 14 papers on AI-driven threat detection.' },
]

export default function AboutPage() {
  useEffect(() => {
    gsap.fromTo('.about-hero > *',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out', delay: 0.3 }
    )

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 82%',
        onEnter: () => gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }),
        once: true,
      })
    })
  }, [])

  return (
    <>
      <Navbar />
      <main className="bg-green-deep min-h-screen">
        {/* Hero */}
        <section className="pt-36 pb-24 px-6">
          <div className="max-w-4xl mx-auto about-hero text-center">
            <span className="inline-block bg-green-accent/15 border border-green-accent/30 text-green-bright text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Our story
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-7 leading-tight">
              We built SEQYO after
              <br />
              <span className="text-green-bright">getting breached.</span>
            </h1>
            <p className="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto">
              Our founders experienced firsthand how fragmented, expensive, and slow traditional security tools are. SEQYO was born from that frustration — a platform that's fast, unified, and puts expert humans at its core.
            </p>
          </div>
        </section>

        {/* Story block */}
        <section className="py-20 px-6 bg-green-dark">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center scroll-reveal">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
                The problem we set out to solve
              </h2>
              <div className="space-y-4 text-white/55 text-base leading-relaxed">
                <p>
                  The average company uses 76 different security tools. They don't talk to each other, they generate thousands of false positives, and when something real happens — it takes days to figure out what.
                </p>
                <p>
                  Meanwhile, cybercriminals operate with startling efficiency. They share tools, sell exploits, and collaborate in ways the enterprise world struggles to match.
                </p>
                <p>
                  SEQYO changes that equation. We give companies a unified intelligence layer — powered by AI, backed by experts — that's as fast and collaborative as the threats they face.
                </p>
              </div>
            </div>
            <div className="h-72 rounded-2xl bg-gradient-to-br from-green-mid to-green-brand border border-white/8 flex items-center justify-center">
              <div className="text-center opacity-30">
                <Shield size={56} className="text-green-bright mx-auto mb-3"/>
                <p className="text-white/60 text-sm">[Replace with team photo]</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 scroll-reveal">
              <h2 className="font-display text-4xl font-bold text-white mb-4">What we stand for</h2>
              <p className="text-white/40 text-base">The principles that guide every decision we make.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="scroll-reveal glass rounded-2xl p-7">
                  <div className="w-11 h-11 bg-green-accent/15 border border-green-accent/25 rounded-xl flex items-center justify-center mb-5">
                    <Icon size={20} className="text-green-bright"/>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 px-6 bg-green-dark">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 scroll-reveal">
              <h2 className="font-display text-4xl font-bold text-white mb-4">Leadership team</h2>
              <p className="text-white/40 text-base">Decades of combined experience protecting the world's most critical systems.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {team.map(({ name, role, bg, bio }) => (
                <div key={name} className="scroll-reveal group glass rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
                  <div className="h-36 flex items-center justify-center" style={{ backgroundColor: bg }}>
                    <span className="font-display text-3xl font-bold text-white/30">
                      {name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="text-white font-semibold text-sm">{name}</div>
                    <div className="text-green-bright text-xs mb-3 mt-0.5">{role}</div>
                    <p className="text-white/40 text-xs leading-relaxed">{bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  )
}
