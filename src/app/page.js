import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import LandingLeistungenTeaser from '@/components/LandingLeistungenTeaser'
import VorherNachher from '@/components/VorherNachher'
import PreiseTeaser from '@/components/PreiseTeaser'
import LandingAblaufTeaser from '@/components/LandingAblaufTeaser'
import LandingKontaktTeaser from '@/components/LandingKontaktTeaser'
import Einsatzgebiet from '@/components/Einsatzgebiet'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-black">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <LandingLeistungenTeaser />
        <VorherNachher />
        <PreiseTeaser />
        <LandingAblaufTeaser />
        <LandingKontaktTeaser />
        <Einsatzgebiet compact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
