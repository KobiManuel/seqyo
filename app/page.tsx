import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import SocialProof from '@/components/SocialProof'
import IntegrationsMarquee from '@/components/IntegrationsMarquee'
import HowItWorks from '@/components/HowItWorks'
import Experts from '@/components/Experts'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SocialProof />
        <IntegrationsMarquee />
        <HowItWorks />
        <Experts />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
