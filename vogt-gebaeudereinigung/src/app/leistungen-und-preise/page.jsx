'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import Leistungen from '@/components/Leistungen'
import VorherNachher from '@/components/VorherNachher'
import Ablauf from '@/components/Ablauf'
import Preise from '@/components/Preise'
import ScrollReveal from '@/components/ScrollReveal'

const leistungenResults = [
  {
    src: '/images/before-after/corporate_office_vorher_nachher.png',
    label: 'Gewerbereinigung',
    caption: 'Großraumbüro — streifenfrei glänzender Boden nach Unterhaltsreinigung',
  },
  {
    src: '/images/before-after/treppenhaus_vorher_nachher_v2.png',
    label: 'Grundreinigung',
    caption: 'Treppenhaus — Intensivreinigung mit sichtbarer Glanzwirkung',
  },
  {
    src: '/images/before-after/wohnzimmer_endreinigung_vorher_nachher_v2.png',
    label: 'Bauendreinigung',
    caption: 'Wohnung besenrein übergeben — staub- und spurenfrei',
  },
  {
    src: '/images/before-after/einfahrt_pflasterreinigung_vorher_nachher.png',
    label: 'Pflasterreinigung',
    caption: 'Einfahrt ohne Moos & Grünbelag — bis in jede Fuge gereinigt',
  },
]

export default function LeistungenUndPreisePage() {
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
              Preise &amp; Leistungen
            </h1>
            <p className="section-copy max-w-2xl mx-auto">
              Professionelle Reinigung zu fairen, transparenten Preisen
            </p>
          </div>
        </header>

        <div className="border-t border-white/[0.04]">
          <Leistungen />
        </div>

        <div className="border-t border-white/[0.04]">
          <VorherNachher
            id="ergebnisse"
            eyebrow="Ergebnisse je Leistung"
            title="Sichtbare Resultate aus realen Einsätzen"
            copy="Gleiche Perspektive, gleiche Fläche — einmal vor, einmal nach der Reinigung. Je Leistung ein Beispiel."
            items={leistungenResults}
            columns={2}
            surfaceClass="surface-texture-deep"
            showCta={false}
          />
        </div>

        <div className="border-t border-white/[0.04]">
          <Ablauf />
        </div>

        <div className="border-t border-white/[0.04]">
          <Preise />
        </div>

        <div className="section-padding pt-2 pb-6 bg-brand-deep">
          <ScrollReveal yFrom={24} duration={0.55} className="max-w-2xl mx-auto text-center">
            <h2 className="font-montserrat font-semibold text-brand-silverLL text-xl mb-2">
              Individuelles Angebot gewünscht?
            </h2>
            <p className="text-brand-gray text-sm mb-5">
              Jedes Objekt ist anders — kontaktieren Sie uns für ein maßgeschneidertes Angebot.
            </p>
            <Link
              href="/kontakt#kontakt"
              className="btn-primary"
            >
              Jetzt Angebot anfragen
            </Link>
            <p className="text-brand-gray/70 text-xs mt-6 max-w-md mx-auto leading-relaxed">
              Alle Preise zzgl. gesetzlicher MwSt.
            </p>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
