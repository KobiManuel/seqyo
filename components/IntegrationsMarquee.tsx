'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const integrations = [
  'AWS', 'Azure', 'Google Cloud', 'Okta', 'CrowdStrike', 'Splunk',
  'Palo Alto', 'GitHub', 'Jira', 'Slack', 'Datadog', 'ServiceNow',
  'Salesforce', 'Cloudflare', 'HashiCorp', 'Kubernetes',
]

export default function IntegrationsMarquee() {
  const track1 = useRef<HTMLDivElement>(null)
  const track2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!track1.current || !track2.current) return

    const tween1 = gsap.to(track1.current, {
      xPercent: -50,
      duration: 25,
      ease: 'none',
      repeat: -1,
    })

    const tween2 = gsap.to(track2.current, {
      xPercent: 50,
      duration: 30,
      ease: 'none',
      repeat: -1,
    })

    return () => {
      tween1.kill()
      tween2.kill()
    }
  }, [])

  return (
    <section className="bg-green-dark py-16 overflow-hidden">
      <div className="text-center mb-8">
        <p className="text-white/25 text-xs uppercase tracking-widest font-body">
          200+ native integrations — connect your entire stack
        </p>
      </div>

      {/* Row 1 */}
      <div className="flex overflow-hidden mb-3">
        <div ref={track1} className="flex gap-4 flex-nowrap" style={{ width: '200%' }}>
          {[...integrations, ...integrations].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white/4 border border-white/8 rounded-xl px-5 py-2.5 text-white/40 text-sm font-semibold hover:text-white/70 hover:border-green-accent/30 transition-colors whitespace-nowrap"
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - reversed */}
      <div className="flex overflow-hidden">
        <div ref={track2} className="flex gap-4 flex-nowrap" style={{ width: '200%', transform: 'translateX(-50%)' }}>
          {[...integrations.reverse(), ...integrations].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white/4 border border-white/8 rounded-xl px-5 py-2.5 text-white/40 text-sm font-semibold hover:text-white/70 hover:border-green-accent/30 transition-colors whitespace-nowrap"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
