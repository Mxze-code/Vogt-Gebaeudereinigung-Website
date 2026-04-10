import Navbar           from '@/components/Navbar'
import Hero             from '@/components/Hero'
import StatsBar         from '@/components/StatsBar'
import Leistungen       from '@/components/Leistungen'
import UberUns          from '@/components/UberUns'
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
        <UberUns />
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
