import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import MissionSection from '@/components/MissionSection'
import PortfolioSection from '@/components/PortfolioSection'
import ApproachSection from '@/components/ApproachSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <PortfolioSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
