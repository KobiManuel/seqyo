'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, Zap, Users, Search, Lock, BarChart3, AlertTriangle, Globe } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Shield,
    title: 'Autonomous Threat Defense',
    front: 'AI-powered detection that identifies and neutralizes threats before they reach your systems.',
    back: 'Our neural threat engine analyzes 10M+ signals per second, correlating global threat intelligence with your environment to block zero-days, ransomware, and advanced persistent threats in real-time.',
    color: 'from-green-mid to-green-brand',
    accent: '#5cb87a',
  },
  {
    icon: Search,
    title: 'Vulnerability Intelligence',
    front: 'Continuous scanning across your entire attack surface — cloud, on-prem, and hybrid.',
    back: 'Prioritized CVE mapping with CVSS scoring, exploitability context, and one-click remediation playbooks. Never miss a critical exposure again.',
    color: 'from-emerald-800 to-green-brand',
    accent: '#6fd68f',
  },
  {
    icon: Users,
    title: 'Expert Network On-Demand',
    front: 'Connect instantly with vetted cybersecurity professionals for analysis and incident response.',
    back: '500+ CISSP, OSCP, and CEH-certified analysts available 24/7. Engage for a single incident or embed them in your team — flexible, trusted, fast.',
    color: 'from-teal-800 to-green-mid',
    accent: '#4fa068',
  },
  {
    icon: BarChart3,
    title: 'Compliance Automation',
    front: 'Stay compliant with SOC 2, ISO 27001, HIPAA, GDPR, and more — automatically.',
    back: 'Continuous compliance monitoring with audit-ready reports generated in seconds. Map your controls, close gaps, and demonstrate compliance to stakeholders with confidence.',
    color: 'from-green-dark to-green-mid',
    accent: '#5cb87a',
  },
  {
    icon: Zap,
    title: 'Instant Incident Response',
    front: 'Automated playbooks that contain breaches in minutes, not hours.',
    back: 'When an incident triggers, SEQYO auto-isolates compromised assets, notifies your team, captures forensic evidence, and dispatches a response expert — all within 60 seconds.',
    color: 'from-green-mid to-green-brand',
    accent: '#6fd68f',
  },
  {
    icon: Globe,
    title: 'Global Threat Intelligence',
    front: 'Real-time feeds from 120+ global threat intelligence sources, enriching every alert.',
    back: 'Aggregated from OSINT, dark web monitoring, ISACs, and proprietary honeypots. Your defenses are constantly updated against the latest TTPs from nation-state actors and criminal groups.',
    color: 'from-green-brand to-green-light',
    accent: '#4fa068',
  },
]

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: titleRef.current,
        start: 'top 85%',
        onEnter: () => {
          const elements = titleRef.current?.querySelectorAll('.animate-in')
          if (elements) {
            gsap.fromTo(elements,
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out' }
            )
          }
        },
        once: true,
      })

      // Cards stagger
      const cards = cardsRef.current?.querySelectorAll('.feature-card')
      if (cards) {
        ScrollTrigger.create({
          trigger: cardsRef.current,
          start: 'top 80%',
          onEnter: () => {
            gsap.fromTo(cards,
              { opacity: 0, y: 60, scale: 0.95 },
              { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.7, ease: 'power3.out' }
            )
          },
          once: true,
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="platform" className="bg-green-deep py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="animate-in inline-block bg-green-accent/15 border border-green-accent/30 text-green-bright text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            Platform Features
          </span>
          <h2 className="animate-in font-display text-4xl md:text-6xl font-bold text-white mb-5 text-balance">
            Everything security.
            <br />
            <span className="text-green-bright">One platform.</span>
          </h2>
          <p className="animate-in text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Hover each card to discover how SEQYO handles the full security lifecycle —
            from prevention to response.
          </p>
        </div>

        {/* Flip Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, front, back, color, accent }, i) => (
            <div
              key={i}
              className="feature-card card-flip h-64"
              style={{ height: '260px' }}
            >
              <div className="card-flip-inner">
                {/* Front */}
                <div
                  className={`card-front bg-gradient-to-br ${color} p-7 flex flex-col justify-between`}
                  style={{ border: `1px solid ${accent}22` }}
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: `${accent}25` }}
                    >
                      <Icon size={22} style={{ color: accent }} />
                    </div>
                    <h3 className="text-white font-semibold text-xl mb-3 leading-snug">{title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{front}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/30 text-xs mt-4">
                    <span>Hover to learn more</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="rotate-180">
                      <path d="M6 2l4 4-4 4"/>
                    </svg>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="card-back bg-white p-7 flex flex-col justify-between"
                  style={{ border: `1px solid ${accent}33` }}
                >
                  <div>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${accent}15` }}
                    >
                      <Icon size={18} style={{ color: accent }} />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-3">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{back}</p>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-semibold mt-4 transition-colors"
                    style={{ color: accent }}
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
