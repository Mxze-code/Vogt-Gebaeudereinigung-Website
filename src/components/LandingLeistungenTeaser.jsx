'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const highlights = [
  'Gewerbereinigung — flexibel für Büros, Praxen & Gewerbeflächen',
  'Haushaltsreinigung — regelmäßig oder einmalig',
  'Fensterreinigung — streifenfrei auf Glasflächen',
  'Grundreinigung — Standard & All-Inclusive',
]

const focusAreas = ['Privat & Gewerbe', 'Planbare Intervalle', 'Saubere Abläufe']

export default function LandingLeistungenTeaser() {
  return (
    <section
      id="leistungen-teaser"
      className="scroll-mt-20 border-t border-white/[0.06] surface-texture-black py-12 md:py-14"
    >
      <div className="section-padding">
        <div className="mx-auto grid max-w-5xl gap-8 border border-white/[0.06] bg-brand-deep/35 px-6 py-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:px-8 md:py-8">
          <ScrollReveal yFrom={20} duration={0.5}>
            <p className="section-eyebrow mb-3">
              Leistungen
            </p>
            <h2 className="section-title-md max-w-md text-left text-silver-gradient">
              Reinigung, die sich an Objekt und Alltag anpasst
            </h2>
            <div className="surface-wave-underline ml-0" aria-hidden />
          </ScrollReveal>

          <ScrollReveal yFrom={20} extraDelay={0.06} duration={0.5} className="text-left">
            <p className="section-copy max-w-xl">
              Ob Büro, Praxis oder Privathaushalt: Wir arbeiten strukturiert, gründlich und mit
              Leistungen, die sich sauber in Ihren Ablauf einfügen.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {focusAreas.map((item) => (
                <span
                  key={item}
                  className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-brand-silverL"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="section-copy-sm mt-5 max-w-lg">
              Die wichtigsten Bereiche sehen Sie hier im Überblick. Alle Positionen und Pakete finden
              Sie gesammelt auf der Detailseite.
            </p>
          </ScrollReveal>
        </div>

        <ul className="mx-auto mt-8 grid max-w-5xl gap-3 md:grid-cols-2">
          {highlights.map((line, i) => (
            <ScrollReveal key={line} yFrom={16} staggerIndex={i} staggerStep={0.06} duration={0.45}>
              <li className="flex min-h-full gap-4 rounded-2xl border border-white/[0.06] bg-brand-navy/40 px-4 py-4 text-left text-sm text-brand-silverDark md:px-5 md:py-5 md:text-base">
                <span className="pt-0.5 font-mono text-xs text-brand-blueLight/80">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="leading-6 text-brand-silverL">{line}</span>
              </li>
            </ScrollReveal>
          ))}
        </ul>

        <ScrollReveal yFrom={16} extraDelay={0.1} duration={0.5} className="mt-7 text-left md:text-center">
          <Link
            href="/leistungen-und-preise#leistungen"
            className="btn-primary"
          >
            Zu allen Leistungen &amp; Preisen
            <span aria-hidden="true"> →</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
