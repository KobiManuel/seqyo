'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { ArrowRight, Shield } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        onEnter: () => {
          gsap.fromTo('.cta-inner > *',
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out' }
          )
        },
        once: true,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-green-deep py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className="cta-inner relative rounded-3xl overflow-hidden p-14 text-center"
          style={{
            background: 'linear-gradient(135deg, #1a3a2a 0%, #2d5a3d 50%, #1a3a2a 100%)',
            border: '1px solid rgba(95,184,122,0.2)',
          }}
        >
          {/* Background glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(95,184,122,0.15) 0%, transparent 70%)' }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-green-accent/20 border border-green-accent/30 text-green-bright px-4 py-1.5 rounded-full text-sm font-semibold mb-7">
              <Shield size={14}/>
              Start protecting your organization today
            </div>

            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-balance">
              Security that works
              <br />
              <span className="text-green-bright">while you sleep.</span>
            </h2>

            <p className="text-white/55 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Join 1,200+ companies that trust SEQYO to protect their people, data, and infrastructure. Set up in under 15 minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group bg-green-accent hover:bg-green-bright text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-green-accent/30 hover:-translate-y-1 flex items-center gap-2 text-base"
              >
                Start free trial
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
              </Link>
              <Link
                href="/contact"
                className="text-white/60 hover:text-white border border-white/15 hover:border-white/30 font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base"
              >
                Book a demo
              </Link>
            </div>

            <p className="text-white/25 text-sm mt-6">
              No credit card required · 14-day free trial · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
