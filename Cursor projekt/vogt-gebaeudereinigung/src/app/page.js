import Navbar           from '@/components/Navbar'
import Hero             from '@/components/Hero'
import StatsBar         from '@/components/StatsBar'
import Leistungen       from '@/components/Leistungen'
import WarumWir         from '@/components/WarumWir'
import Ablauf           from '@/components/Ablauf'
import Preise           from '@/components/Preise'
import Einsatzgebiet    from '@/components/Einsatzgebiet'
import Kontakt          from '@/components/Kontakt'
import Footer           from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Leistungen />
        <WarumWir />
        <Ablauf />
        <Preise />
        <Einsatzgebiet />
        <Kontakt />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
