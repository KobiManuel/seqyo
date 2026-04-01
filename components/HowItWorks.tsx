'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Plug, Cpu, Bell, UserCheck } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    icon: Plug,
    title: 'Connect in minutes',
    description: 'Integrate SEQYO with your existing stack — cloud providers, identity systems, endpoints, and SaaS apps — through 200+ native connectors. No rip-and-replace required.',
    visual: 'integration',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'AI analyzes everything',
    description: 'Our AI engine continuously monitors your environment, correlating signals across your entire attack surface to identify risks, misconfigurations, and active threats in real-time.',
    visual: 'analysis',
  },
  {
    number: '03',
    icon: Bell,
    title: 'Get prioritized alerts',
    description: 'No more alert fatigue. SEQYO surfaces only what matters, with full context, severity scoring, and recommended actions so your team acts on the right things first.',
    visual: 'alerts',
  },
  {
    number: '04',
    icon: UserCheck,
    title: 'Experts close the gap',
    description: 'Need a human? Tap into our network of 500+ certified security professionals for incident response, penetration testing, compliance review, or strategic advisory.',
    visual: 'experts',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: '.hiw-title',
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo('.hiw-title .animate-in',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out' }
          )
        },
        once: true,
      })

      const steps = document.querySelectorAll('.step-item')
      steps.forEach((step, i) => {
        ScrollTrigger.create({
          trigger: step,
          start: 'top 80%',
          onEnter: () => {
            gsap.fromTo(step,
              { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
              { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
            )
          },
          once: true,
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-green-deep py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="hiw-title text-center mb-20">
          <span className="animate-in inline-block bg-green-accent/15 border border-green-accent/30 text-green-bright text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            How SEQYO Works
          </span>
          <h2 className="animate-in font-display text-4xl md:text-6xl font-bold text-white mb-5">
            Security, simplified.
          </h2>
          <p className="animate-in text-white/50 text-lg max-w-xl mx-auto">
            From integration to resolution — SEQYO covers every step of your security journey.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map(({ number, icon: Icon, title, description, visual }, i) => (
            <div
              key={number}
              className={`step-item grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              style={{ direction: i % 2 === 1 ? 'rtl' : 'ltr' }}
            >
              <div style={{ direction: 'ltr' }}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-display text-7xl font-bold text-green-bright/15 leading-none">{number}</span>
                  <div className="w-12 h-12 bg-green-accent/15 border border-green-accent/30 rounded-xl flex items-center justify-center">
                    <Icon size={22} className="text-green-bright"/>
                  </div>
                </div>
                <h3 className="font-display text-3xl font-bold text-white mb-4">{title}</h3>
                <p className="text-white/50 text-base leading-relaxed max-w-md">{description}</p>
              </div>

              {/* Visual placeholder */}
              <div
                style={{ direction: 'ltr' }}
                className="relative h-52 md:h-64 rounded-2xl overflow-hidden border border-white/8"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${
                      ['#1a3a2a', '#0f2419', '#2d5a3d', '#1a3a2a'][i]
                    } 0%, ${
                      ['#2d5a3d', '#1a3a2a', '#3a7d52', '#2d5a3d'][i]
                    } 100%)`,
                  }}
                />
                {/* Decorative content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center opacity-40">
                    <Icon size={48} className="text-green-bright mx-auto mb-3"/>
                    <p className="text-white/60 text-sm font-body">
                      {['Connect your stack', 'AI analysis engine', 'Smart alert center', 'Expert marketplace'][i]}
                    </p>
                  </div>
                </div>
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(95,184,122,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(95,184,122,0.3) 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-green-bright/50 text-xs font-body tracking-wider">
                    [Replace with real screenshot]
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
