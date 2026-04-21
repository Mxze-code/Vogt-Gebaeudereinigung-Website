'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { Check } from 'lucide-react'

const gewerbeKurz = ['Transparente Pakete nach m²', 'Gewerbe & Büro — Intervalle nach Bedarf', 'Extras klar ausgewiesen']
const privatKurz = ['Haushalt nach Zeitaufwand', 'Feste Termine & Ansprechpartner', 'Individuelles Angebot vor Ort']

export default function PreiseTeaser() {
  return (
    <section id="preise-teaser" className="scroll-mt-20 border-t border-white/[0.06] surface-texture-deep py-12 md:py-14">
      <div className="section-padding">
        <div className="mx-auto mb-8 grid max-w-5xl gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
          <ScrollReveal yFrom={24} duration={0.55} className="text-left">
            <p className="section-eyebrow mb-3">
              Preise
            </p>
            <h2 className="section-title-md mb-2 max-w-md text-silver-gradient">
              Klare Orientierung statt vager Schaetzungen
            </h2>
            <div className="surface-wave-underline ml-0" aria-hidden />
          </ScrollReveal>

          <ScrollReveal yFrom={24} extraDelay={0.06} duration={0.55} className="text-left">
            <p className="section-copy-sm max-w-xl">
              Wir arbeiten mit nachvollziehbaren Paketen und schriftlichen Angeboten. So wissen Sie vorab,
              was enthalten ist, welche Faktoren den Preis beeinflussen und wo optionale Extras liegen.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/[0.06] bg-brand-black/25 px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.22em] text-brand-blueLight/80">Angebot</p>
                <p className="mt-2 text-sm text-brand-silverL">Schriftlich und nachvollziehbar</p>
              </div>
              <div className="rounded-2xl border border-white/[0.06] bg-brand-black/25 px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.22em] text-brand-blueLight/80">Abrechnung</p>
                <p className="mt-2 text-sm text-brand-silverL">Passend zu Flaeche oder Aufwand</p>
              </div>
              <div className="rounded-2xl border border-white/[0.06] bg-brand-black/25 px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.22em] text-brand-blueLight/80">Extras</p>
                <p className="mt-2 text-sm text-brand-silverL">Separat ausgewiesen statt versteckt</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mx-auto mb-6 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
          <ScrollReveal yFrom={20} duration={0.45} className="card-base p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-brand-blueLight/80">Gewerbe</p>
            <h3 className="mt-3 font-montserrat text-lg font-semibold text-brand-silverLL">Planbar fuer Buero, Praxis und Flaeche</h3>
            <ul className="flex flex-col gap-3">
              {gewerbeKurz.map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm text-brand-silverDark">
                  <Check size={14} className="mt-0.5 flex-shrink-0 text-brand-blueLight" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-6 text-brand-gray">
              Die Preislogik richtet sich nach Groesse, Intervall und Leistungsumfang, damit Angebote auch
              im Alltag belastbar bleiben.
            </p>
          </ScrollReveal>
          <ScrollReveal yFrom={20} staggerIndex={1} staggerStep={0.08} duration={0.45} className="card-base p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-brand-blueLight/80">Privat</p>
            <h3 className="mt-3 font-montserrat text-lg font-semibold text-brand-silverLL">Individuell fuer Haushalt und Bedarf vor Ort</h3>
            <ul className="flex flex-col gap-3">
              {privatKurz.map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm text-brand-silverDark">
                  <Check size={14} className="mt-0.5 flex-shrink-0 text-brand-blueLight" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-6 text-brand-gray">
              Vor allem bei Privathaushalten zaehlen Aufwand, Intervalle und individuelle Wuensche. Deshalb
              kalkulieren wir transparent statt pauschal.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal yFrom={16} extraDelay={0.1} duration={0.5} className="text-left md:text-center">
          <Link
            href="/leistungen-und-preise#preise"
            className="btn-primary"
          >
            Pakete &amp; Preise im Detail
            <span aria-hidden="true"> →</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
