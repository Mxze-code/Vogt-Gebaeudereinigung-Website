'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import { MapPin, Navigation, ExternalLink } from 'lucide-react'

const staedte = [
  {
    name: 'Bretten',
    main: true,
    desc: 'Hauptstandort',
    mapsUrl: 'https://maps.google.com/maps?q=Bretten+Gebäudereinigung+VOGT',
    embedUrl: 'https://maps.google.com/maps?q=Weißhoferstraße+62,+75015+Bretten&t=&z=14&ie=UTF8&iwloc=&output=embed',
  },
  {
    name: 'Pforzheim',
    main: false,
    mapsUrl: 'https://maps.google.com/maps?q=Pforzheim',
    embedUrl: 'https://maps.google.com/maps?q=Pforzheim,+Germany&t=&z=13&ie=UTF8&iwloc=&output=embed',
  },
  {
    name: 'Karlsruhe',
    main: false,
    mapsUrl: 'https://maps.google.com/maps?q=Karlsruhe',
    embedUrl: 'https://maps.google.com/maps?q=Karlsruhe,+Germany&t=&z=12&ie=UTF8&iwloc=&output=embed',
  },
  {
    name: 'Enzkreis',
    main: false,
    mapsUrl: 'https://maps.google.com/maps?q=Enzkreis+Baden-Württemberg',
    embedUrl: 'https://maps.google.com/maps?q=Enzkreis,+Baden-Württemberg&t=&z=11&ie=UTF8&iwloc=&output=embed',
  },
  {
    name: 'Kraichgau',
    main: false,
    mapsUrl: 'https://maps.google.com/maps?q=Kraichgau',
    embedUrl: 'https://maps.google.com/maps?q=Kraichgau,+Germany&t=&z=11&ie=UTF8&iwloc=&output=embed',
  },
  {
    name: '+ Umgebung',
    main: false,
    mapsUrl: null,
    embedUrl: 'https://maps.google.com/maps?q=Bretten,+Germany&t=&z=10&ie=UTF8&iwloc=&output=embed',
  },
]

export default function Einsatzgebiet() {
  const [active, setActive] = useState(staedte[0])

  return (
    <section id="einsatzgebiet" className="py-20 bg-brand-black section-atmosphere section-glow-right">
      <div className="section-padding">
        {/* Header */}
        <ScrollReveal
          yFrom={24}
          duration={0.6}
          className="text-center mb-14"
        >
          <p className="text-brand-blueLight text-sm font-medium tracking-widest uppercase mb-3">
            Wo wir aktiv sind
          </p>
          <h2
            className="font-montserrat font-bold text-3xl md:text-4xl"
            style={{
              background: 'linear-gradient(160deg, #edf0f5 0%, #c2c8d4 60%, #9aaabb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Unser Einsatzgebiet
          </h2>
          <p className="text-brand-gray text-sm mt-3">
            Klicken Sie auf eine Stadt, um sie auf der Karte zu sehen
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <ScrollReveal
            axis="x"
            xFrom={-24}
            duration={0.6}
            className="rounded-2xl overflow-hidden border border-white/[0.06] h-96 lg:h-[440px] relative"
          >
            <iframe
              key={active.name}
              src={active.embedUrl}
              className="w-full h-full border-0"
              style={{
                filter: 'invert(92%) hue-rotate(180deg) saturate(0.7) brightness(0.85)',
              }}
              title={`Karte: ${active.name}`}
              loading="lazy"
            />
            {/* Map label */}
            <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-brand-deep/90 border border-brand-blue/30 text-brand-silverLL text-sm font-medium flex items-center gap-2">
              <MapPin size={14} className="text-brand-blueLight" />
              {active.name}
            </div>
            {/* Open in Maps button */}
            {active.mapsUrl && (
              <a
                href={active.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-deep/90 border border-brand-blue/30 text-brand-blueLight text-xs font-medium hover:bg-brand-blue/20 transition-colors"
              >
                In Maps öffnen
                <ExternalLink size={12} />
              </a>
            )}
          </ScrollReveal>

          {/* Right column */}
          <ScrollReveal
            axis="x"
            xFrom={24}
            extraDelay={0.1}
            duration={0.6}
            className="flex flex-col gap-6"
          >
            {/* City Grid */}
            <div className="grid grid-cols-2 gap-3">
              {staedte.map((stadt) => {
                const isActive = active.name === stadt.name
                return (
                  <button
                    key={stadt.name}
                    onClick={() => setActive(stadt)}
                    className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-brand-blue/20 border-brand-blue/60 shadow-lg shadow-brand-blue/10'
                        : stadt.main
                        ? 'bg-brand-blue/10 border-brand-blue/30 hover:bg-brand-blue/15 hover:border-brand-blue/50'
                        : 'bg-brand-navy/50 border-white/5 hover:border-brand-blue/20 hover:bg-brand-navy/70'
                    }`}
                  >
                    <MapPin
                      size={16}
                      className={isActive ? 'text-brand-blueLight' : stadt.main ? 'text-brand-blueLight' : 'text-brand-gray'}
                    />
                    <div>
                      <p className={`text-sm font-medium ${isActive || stadt.main ? 'text-brand-silverLL' : 'text-brand-silverL'}`}>
                        {stadt.name}
                      </p>
                      {stadt.desc && (
                        <p className="text-brand-blueLight text-xs">{stadt.desc}</p>
                      )}
                      {isActive && !stadt.desc && (
                        <p className="text-brand-blueLight text-xs">Karte aktiv</p>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Anfahrtskosten */}
            <div className="p-5 rounded-2xl bg-brand-navy/60 border border-brand-blue/20">
              <div className="flex items-center gap-2 mb-4">
                <Navigation size={18} className="text-brand-blueLight" />
                <h3 className="font-montserrat font-semibold text-brand-silverLL">
                  Anfahrtskosten
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-brand-blue/10 border border-brand-blue/20">
                  <span className="text-brand-silverL text-sm">Bis 10 km (um Bretten)</span>
                  <span className="font-montserrat font-bold text-brand-blueLight">KOSTENLOS</span>
                </div>
                <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-brand-navy2/50 border border-white/5">
                  <span className="text-brand-silverL text-sm">Jeder weitere km</span>
                  <span className="font-montserrat font-bold text-brand-silverLL">0,50 €</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#kontakt"
              className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-brand-blue hover:bg-brand-blueMid text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/30"
            >
              Jetzt anfragen – wir kommen zu Ihnen →
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
