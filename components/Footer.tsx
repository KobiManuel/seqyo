'use client'
import Link from 'next/link'
import { Twitter, Linkedin, Github, Shield } from 'lucide-react'

const footerLinks = {
  Platform: ['Security Dashboard', 'Threat Detection', 'Vulnerability Scanner', 'Compliance Reports', 'API Access'],
  Solutions: ['Enterprise Security', 'SMB Protection', 'Cloud Security', 'Incident Response', 'Penetration Testing'],
  Company: ['About Us', 'Careers', 'Blog', 'Press', 'Partners'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security Policy'],
}

export default function Footer() {
  return (
    <footer className="bg-green-deep border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-green-accent rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L14 5.5V12.5L9 16L4 12.5V5.5L9 2Z" stroke="white" strokeWidth="1.5" fill="none"/>
                  <circle cx="9" cy="9" r="2.5" fill="white"/>
                </svg>
              </div>
              <span className="font-display text-xl font-bold tracking-widest text-white">SEQYO</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Intelligent cybersecurity platform that protects, detects, and connects your organization with elite security professionals.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-green-accent/50 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wider">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-white/80 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2025 SEQYO Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/30 text-sm">
            <Shield size={14} className="text-green-accent" />
            <span>SOC 2 Type II Certified · ISO 27001 · GDPR Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
