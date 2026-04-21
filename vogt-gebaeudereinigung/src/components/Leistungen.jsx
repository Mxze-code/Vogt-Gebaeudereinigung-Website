'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import {
  Building2,
  Home,
  Grid3X3,
  Sparkles,
  ShieldPlus,
  Hammer,
  Blinds,
  Sofa,
  Trees,
  Blocks,
} from 'lucide-react'

const coreLeistungen = [
  {
    icon: Building2,
    title: 'Gewerbereinigung',
    desc: 'Reinigung von Büros, Praxen & Gewerbeflächen — flexibel & professionell.',
  },
  {
    icon: Home,
    title: 'Haushaltsreinigung',
    desc: 'Zuverlässige Reinigung von Wohnungen & Häusern — regelmäßig oder einmalig.',
  },
  {
    icon: Grid3X3,
    title: 'Fensterreinigung',
    desc: 'Streifenfreie Reinigung von Fenstern & Glasflächen.',
  },
  {
    icon: Sparkles,
    title: 'Grundreinigung (Standard & All-Inclusive)',
    desc: 'Intensive Grundreinigung mit Standard- oder All-Inclusive-Paket. Perfekt für Ein- und Auszug oder bei hohem Verschmutzungsgrad.',
  },
]

const spezialLeistungen = [
  {
    icon: ShieldPlus,
    title: 'Desinfektionsreinigung',
    desc: 'Professionelle Desinfektionsreinigung für hygienische Sauberkeit. Wir reduzieren gezielt Keime und Bakterien — für ein sicheres und sauberes Umfeld.',
  },
  {
    icon: Hammer,
    title: 'Bauendreinigung',
    desc: 'Gründliche Bauendreinigung nach Neubau oder Renovierung. Entfernung von Staub, Schmutz und Bauresten — alles bezugsfertig und sauber.',
  },
  {
    icon: Blinds,
    title: 'Jalousienreinigung',
    desc: 'Gründliche Reinigung von Jalousien aller Art — egal ob Lamellen- oder klassische Modelle, schonend und streifenfrei.',
  },
  {
    icon: Sofa,
    title: 'Polsterreinigung',
    desc: 'Tiefenreinigung von Sofas & Polstern — entfernt Schmutz, Flecken und Gerüche zuverlässig.',
  },
  {
    icon: Trees,
    title: 'Terrassenreinigung',
    desc: 'Gründliche Reinigung von Terrassen, Stein- & Außenflächen — entfernt Moos, Schmutz und Verfärbungen.',
  },
  {
    icon: Blocks,
    title: 'Pflasterreinigung',
    desc: 'Professionelle Reinigung von Einfahrten & Pflastersteinen — für ein sauberes und gepflegtes Erscheinungsbild.',
  },
]

function ServiceCard({ service, index }) {
  const Icon = service.icon
  return (
    <ScrollReveal
      yFrom={24}
      staggerIndex={index}
      staggerStep={0.08}
      duration={0.5}
      className="card-base p-6 flex items-start gap-4"
    >
      <div className="w-11 h-11 rounded-xl bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center flex-shrink-0">
        <Icon size={20} className="text-brand-blueLight" />
      </div>
      <div>
        <h3 className="font-montserrat font-semibold text-brand-silverLL text-lg mb-2">
          {service.title}
        </h3>
        <p className="text-brand-gray text-sm leading-relaxed">{service.desc}</p>
      </div>
    </ScrollReveal>
  )
}

export default function Leistungen() {
  return (
    <section id="leistungen" className="scroll-mt-20 py-12 md:py-14 bg-brand-black">
      <div className="section-padding">
        {/* Header */}
        <ScrollReveal
          yFrom={24}
          duration={0.6}
          className="text-center mb-8"
        >
          <p className="section-eyebrow mb-3">
            Was wir tun
          </p>
          <h2 className="section-title-lg text-silver-gradient">
            Unsere Leistungen
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {coreLeistungen.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <div className="py-14 md:py-16">
          <ScrollReveal yFrom={20} duration={0.5} className="text-center mb-7">
            <h3 className="section-title-md text-silver-gradient">
              Spezialgebiete
            </h3>
            <p className="section-copy-sm mt-3 max-w-2xl mx-auto">
              Über die Standardreinigung hinaus — spezielle Lösungen für besondere Anforderungen.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {spezialLeistungen.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal
          yFrom={24}
          extraDelay={0.3}
          duration={0.5}
          className="text-center mt-8"
        >
          <div className="mx-auto max-w-2xl rounded-2xl border border-white/[0.06] bg-brand-navy/40 px-6 py-8 md:px-8">
            <h3 className="font-montserrat font-semibold text-brand-silverLL text-xl mb-4">
              Interesse an unseren Leistungen?
            </h3>
            <Link
              href="/kontakt#kontakt"
              className="btn-primary"
            >
              Jetzt Angebot anfragen
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
