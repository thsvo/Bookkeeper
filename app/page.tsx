import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PainPointSection } from "@/components/pain-point-section"
import { ServicesSection } from "@/components/services-section"
import { PartnershipSection } from "@/components/partnership-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PainPointSection />
      <ServicesSection />
      <PartnershipSection />
      <SocialProofSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
