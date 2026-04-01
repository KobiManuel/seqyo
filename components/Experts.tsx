'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Clock, CheckCircle, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const experts = [
  { name: 'Dr. Alex Reeves', role: 'Threat Intelligence Lead', certs: ['CISSP', 'CEH'], rating: 4.98, jobs: 342, color: '#3a7d52', available: true },
  { name: 'Maya Torres', role: 'Penetration Testing Specialist', certs: ['OSCP', 'GPEN'], rating: 4.95, jobs: 218, color: '#2d5a3d', available: true },
  { name: 'James Okafor', role: 'Cloud Security Architect', certs: ['CCSP', 'AWS-CSA'], rating: 4.99, jobs: 184, color: '#1a3a2a', available: false },
  { name: 'Lin Wei', role: 'Incident Response Expert', certs: ['GCIH', 'GCFE'], rating: 4.97, jobs: 291, color: '#3a7d52', available: true },
  { name: 'Sofia Brandt', role: 'Compliance & GRC Advisor', certs: ['CISA', 'CRISC'], rating: 4.96, jobs: 156, color: '#2d5a3d', available: true },
  { name: 'Raj Patel', role: 'Red Team Operator', certs: ['CRTE', 'OSEP'], rating: 5.0, jobs: 98, color: '#1a3a2a', available: false },
]

export default function Experts() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: '.experts-title',
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo('.experts-title .animate-in',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out' }
          )
        },
        once: true,
      })

      ScrollTrigger.create({
        trigger: '.experts-grid',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.expert-card',
            { opacity: 0, y: 40, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out' }
          )
        },
        once: true,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-green-dark py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="experts-title grid grid-cols-1 md:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <span className="animate-in inline-block bg-green-accent/15 border border-green-accent/30 text-green-bright text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              Expert Network
            </span>
            <h2 className="animate-in font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              Human expertise,
              <br />
              <span className="text-green-bright">on demand.</span>
            </h2>
          </div>
          <div>
            <p className="animate-in text-white/50 text-base leading-relaxed mb-5">
              Every expert in our network is independently verified, background-checked, and carries active professional certifications. Engage them in minutes for any security challenge.
            </p>
            <a
              href="/solutions"
              className="animate-in inline-flex items-center gap-2 text-green-bright font-semibold hover:gap-3 transition-all"
            >
              Browse all experts <ArrowRight size={16}/>
            </a>
          </div>
        </div>

        <div className="experts-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {experts.map(({ name, role, certs, rating, jobs, color, available }) => {
            const initials = name.split(' ').map(n => n[0]).join('')
            return (
              <div
                key={name}
                className="expert-card glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 hover:border-green-accent/30 group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ backgroundColor: color }}
                    >
                      {initials}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm leading-tight">{name}</div>
                      <div className="text-white/40 text-xs mt-0.5">{role}</div>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                    available ? 'bg-green-accent/15 text-green-bright' : 'bg-white/5 text-white/30'
                  }`}>
                    <Clock size={10}/>
                    {available ? 'Available' : 'Busy'}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {certs.map((cert) => (
                    <span key={cert} className="bg-white/8 text-white/60 text-xs px-2.5 py-1 rounded-full border border-white/10">
                      {cert}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Star size={13} className="text-yellow-400 fill-yellow-400"/>
                    <span className="text-white font-semibold text-sm">{rating}</span>
                    <span className="text-white/30 text-xs">({jobs} engagements)</span>
                  </div>
                  <button className="text-green-bright text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Engage →
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
