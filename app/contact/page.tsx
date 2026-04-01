"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
    interest: "demo",
  });
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ".contact-hero > *",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      },
    );
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.5 },
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    gsap.to(".submit-btn", {
      scale: 0.96,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
    });
    setTimeout(() => setSubmitted(true), 400);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email us",
      value: "hello@seqyo.io",
      href: "mailto:hello@seqyo.io",
    },
    {
      icon: Phone,
      label: "Call us",
      value: "+1 (888) 473-7961",
      href: "tel:+18884737961",
    },
    {
      icon: MapPin,
      label: "HQ",
      value: "San Francisco, CA · London, UK",
      href: "#",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-green-deep min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left col */}
            <div className="contact-hero">
              <span className="inline-block bg-green-accent/15 border border-green-accent/30 text-green-bright text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Get in touch
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Let&rsquo;s secure
                <br />
                <span className="text-green-bright">your world.</span>
              </h1>
              <p className="text-white/50 text-base leading-relaxed mb-12 max-w-md">
                Whether you want a demo, have a security emergency, or just want
                to learn how SEQYO can help — we&rsquo;re here. A real human
                will respond within 2 hours.
              </p>

              {/* Contact details */}
              <div className="space-y-5 mb-12">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 bg-green-accent/15 border border-green-accent/25 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-accent/25 transition-colors">
                      <Icon size={18} className="text-green-bright" />
                    </div>
                    <div>
                      <div className="text-white/30 text-xs mb-0.5">
                        {label}
                      </div>
                      <div className="text-white font-medium text-sm group-hover:text-green-bright transition-colors">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Trust badges */}
              <div className="glass rounded-2xl p-6">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-4">
                  Security & compliance
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "SOC 2 Type II",
                    "ISO 27001",
                    "GDPR Ready",
                    "HIPAA Compliant",
                    "PCI-DSS",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="bg-green-accent/10 border border-green-accent/20 text-green-bright/80 text-xs px-3 py-1.5 rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right col — form */}
            <div ref={formRef} className="glass rounded-3xl p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-green-accent/20 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={30} className="text-green-bright" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    Message received!
                  </h3>
                  <p className="text-white/50 text-sm">
                    A member of our team will be in touch within 2 hours. In the
                    meantime, check out our security resources.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="font-display text-2xl font-bold text-white mb-2">
                    Send us a message
                  </h2>
                  <p className="text-white/40 text-sm mb-6">
                    Fill out the form and we&rsquo;ll get right back to you.
                  </p>

                  {/* Interest toggle */}
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">
                      I&rsquo;m interested in
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { value: "demo", label: "Book a demo" },
                        { value: "trial", label: "Free trial" },
                        { value: "expert", label: "Hire an expert" },
                      ].map(({ value, label }) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setForm({ ...form, interest: value })}
                          className={`py-2.5 rounded-xl text-xs font-semibold transition-all ${
                            form.interest === value
                              ? "bg-green-accent text-white"
                              : "bg-white/5 text-white/50 hover:text-white border border-white/10"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/50 text-xs uppercase tracking-wider mb-1.5 block">
                        Full name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-green-accent/50 transition-colors"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs uppercase tracking-wider mb-1.5 block">
                        Work email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-green-accent/50 transition-colors"
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/50 text-xs uppercase tracking-wider mb-1.5 block">
                        Company
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) =>
                          setForm({ ...form, company: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-green-accent/50 transition-colors"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs uppercase tracking-wider mb-1.5 block">
                        Your role
                      </label>
                      <input
                        type="text"
                        value={form.role}
                        onChange={(e) =>
                          setForm({ ...form, role: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-green-accent/50 transition-colors"
                        placeholder="CISO, Engineer..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider mb-1.5 block">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-green-accent/50 transition-colors resize-none"
                      placeholder="Tell us about your security needs or what you'd like to see in a demo..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="submit-btn w-full bg-green-accent hover:bg-green-bright text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-green-accent/25 flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Send message
                  </button>

                  <p className="text-white/25 text-xs text-center">
                    By submitting you agree to our Privacy Policy. We never
                    share your data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
