'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Building2, Rocket, Cloud, HeartPulse, Landmark, ShoppingBag, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'

gsap.registerPlugin(ScrollTrigger)

const solutions = [
  {
    icon: Building2,
    title: 'Enterprise Security',
    headline: 'Protect your entire organization at scale.',
    description: 'SEQYO integrates with your existing security stack to provide unified visibility across thousands of endpoints, cloud workloads, and third-party vendors. Replace siloed tools with one intelligent platform.',
    features: ['Unified SIEM/SOAR integration', 'Zero-trust architecture support', 'Board-level risk dashboards', 'Dedicated security engineers', 'SLA-backed incident response'],
    color: '#2d5a3d',
    accent: '#6fd68f',
  },
  {
    icon: Rocket,
    title: 'Startups & SMBs',
    headline: 'Enterprise-grade security, startup-friendly pricing.',
    description: 'You don\'t need a 20-person security team to stay protected. SEQYO automates the heavy lifting so your engineers can focus on building product, not firefighting alerts.',
    features: ['5-minute onboarding', 'Auto-remediation playbooks', 'On-demand expert access', 'Pay-as-you-grow pricing', 'No security expertise required'],
    color: '#3a7d52',
    accent: '#5cb87a',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Security',
    headline: 'Built for AWS, GCP, Azure — and everything in between.',
    description: 'As your infrastructure moves to the cloud, your security must move with it. SEQYO provides deep native integrations across all major cloud providers with continuous posture management.',
    features: ['Cloud Security Posture Management', 'Container & Kubernetes security', 'Serverless function monitoring', 'Multi-cloud unified view', 'Infrastructure-as-Code scanning'],
    color: '#1a3a2a',
    accent: '#4fa068',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & HIPAA',
    headline: 'Protect patient data with precision.',
    description: 'Healthcare organizations face unique compliance and security demands. SEQYO automates HIPAA compliance, protects EHR systems, and ensures your patient data is always secure.',
    features: ['Automated HIPAA reporting', 'EHR integration monitoring', 'Medical device security', 'PHI data loss prevention', 'HITRUST-ready controls'],
    color: '#2d5a3d',
    accent: '#6fd68f',
  },
  {
    icon: Landmark,
    title: 'Financial Services',
    headline: 'Comply. Detect. Respond. At the speed of finance.',
    description: 'Banks, fintechs, and insurers operate under intense regulatory scrutiny. SEQYO keeps you compliant with PCI-DSS, SOX, and GLBA while defending against financially-motivated attackers.',
    features: ['PCI-DSS automation', 'Fraud signal correlation', 'Swift & FedWire monitoring', 'Insider threat detection', 'Regulatory audit packages'],
    color: '#3a7d52',
    accent: '#5cb87a',
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce & Retail',
    headline: 'Protect transactions. Protect customers. Protect revenue.',
    description: 'From payment fraud to supply-chain attacks, retailers face a growing threat landscape. SEQYO watches every transaction, every endpoint, and every vendor connection in real-time.',
    features: ['Payment security monitoring', 'Bot & fraud detection', 'POS system protection', 'Customer data security', 'Peak-load threat handling'],
    color: '#1a3a2a',
    accent: '#4fa068',
  },
]

export default function SolutionsPage() {
  useEffect(() => {
    gsap.fromTo('.solutions-hero > *',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.3 }
    )

    document.querySelectorAll('.solution-card').forEach((el, i) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 82%',
        onEnter: () => gsap.fromTo(el,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: (i % 2) * 0.1 }
        ),
        once: true,
      })
    })
  }, [])

  return (
    <>
      <Navbar />
      <main className="bg-green-deep min-h-screen">
        {/* Hero */}
        <section className="pt-36 pb-20 px-6">
          <div className="max-w-4xl mx-auto solutions-hero text-center">
            <span className="inline-block bg-green-accent/15 border border-green-accent/30 text-green-bright text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Solutions
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance">
              Security for every
              <br />
              <span className="text-green-bright">industry.</span>
            </h1>
            <p className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed">
              Whether you're a two-person startup or a multinational enterprise, SEQYO adapts to your environment, your compliance requirements, and your risk appetite.
            </p>
          </div>
        </section>

        {/* Solutions grid */}
        <section className="py-10 pb-28 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-7">
            {solutions.map(({ icon: Icon, title, headline, description, features, color, accent }) => (
              <div
                key={title}
                className="solution-card rounded-2xl overflow-hidden border border-white/8 hover:border-green-accent/25 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="p-8" style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)` }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${accent}20` }}>
                    <Icon size={22} style={{ color: accent }} />
                  </div>
                  <div className="text-xs font-semibold tracking-widest mb-2" style={{ color: `${accent}99` }}>
                    {title.toUpperCase()}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3 leading-snug">{headline}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{description}</p>
                </div>

                <div className="bg-green-dark/70 px-8 py-6">
                  <ul className="space-y-2 mb-6">
                    {features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5 text-sm text-white/60">
                        <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${accent}20` }}>
                          <svg width="8" height="8" viewBox="0 0 8 8" fill={accent}>
                            <path d="M1.5 4l2 2 3-3" stroke={accent} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                          </svg>
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3"
                    style={{ color: accent }}
                  >
                    Learn more <ArrowRight size={14}/>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  )
}
