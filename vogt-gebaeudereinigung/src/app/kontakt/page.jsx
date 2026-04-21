'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import UberUns from '@/components/UberUns'
import Einsatzgebiet from '@/components/Einsatzgebiet'
import Kontakt from '@/components/Kontakt'
import ScrollReveal from '@/components/ScrollReveal'

export default function KontaktPage() {
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return
    const id = decodeURIComponent(hash.slice(1))
    requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [])

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-black pb-10">
        <header className="bg-[#0A1628] border-b border-white/5 pt-20 md:pt-24 pb-6 md:pb-8">
          <div className="section-padding max-w-4xl mx-auto text-center">
            <p className="section-eyebrow mb-3">
              VOGT Gebäudereinigung
            </p>
            <h1 className="section-title-lg text-silver-gradient mb-4">
              Kontakt / Über uns
            </h1>
            <p className="section-copy max-w-2xl mx-auto">
              Persönlich, regional, erreichbar — wir melden uns zeitnah zurück.
            </p>
          </div>
        </header>

        <UberUns brief />

        <Einsatzgebiet />

        <div className="scroll-mt-20 border-t border-white/[0.04]">
          <Kontakt />
        </div>

        <div className="section-padding pt-2 pb-6 bg-brand-deep">
          <ScrollReveal yFrom={24} duration={0.55} className="max-w-2xl mx-auto text-center">
            <h2 className="font-montserrat font-semibold text-brand-silverLL text-xl mb-2">
              Lieber direkt ins Gespräch kommen?
            </h2>
            <p className="text-brand-gray text-sm mb-5">
              Schreiben Sie uns per WhatsApp oder senden Sie direkt eine unverbindliche Anfrage.
            </p>
            <Link href="/kontakt#kontakt" className="btn-primary">
              Jetzt Angebot anfragen
            </Link>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
