'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const steps = [
  {
    n: '01',
    t: 'Anfrage',
    d: 'Sie schildern kurz Objekt, Bedarf und gewünschten Rahmen.',
  },
  {
    n: '02',
    t: 'Abstimmung',
    d: 'Wir klären Umfang, Turnus und sinnvolle Leistungen für Ihr Objekt.',
  },
  {
    n: '03',
    t: 'Termin',
    d: 'Sie erhalten einen planbaren Vorschlag mit klarer Abstimmung.',
  },
  {
    n: '04',
    t: 'Reinigung',
    d: 'Die Umsetzung erfolgt gründlich, zuverlässig und nachvollziehbar.',
  },
]

export default function LandingAblaufTeaser() {
  return (
    <section className="scroll-mt-20 border-t border-white/[0.06] surface-texture-deep py-12 md:py-14">
      <div className="section-padding">
        <div className="mx-auto mb-8 grid max-w-5xl gap-7 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-end">
          <ScrollReveal yFrom={20} duration={0.5} className="text-left">
            <p className="section-eyebrow mb-3">
              Ablauf
            </p>
            <h2 className="section-title-md max-w-md text-silver-gradient">
              Ein klarer Weg von der ersten Nachricht bis zum Einsatz
            </h2>
            <div className="surface-wave-underline ml-0" aria-hidden />
          </ScrollReveal>

          <ScrollReveal yFrom={18} extraDelay={0.06} duration={0.45} className="text-left">
            <p className="section-copy-sm max-w-xl">
              Der Ablauf ist bewusst einfach gehalten: kurze Abstimmung, klare Planung und dann eine
              Reinigung, die ohne Umwege umgesetzt wird.
            </p>
          </ScrollReveal>
        </div>

        <div className="mx-auto grid max-w-5xl gap-3 md:grid-cols-2 xl:grid-cols-4 xl:gap-4">
          {steps.map((s, i) => (
            <ScrollReveal
              key={s.n}
              yFrom={16}
              staggerIndex={i}
              staggerStep={0.05}
              duration={0.4}
              className="card-base flex min-h-full flex-col gap-3 px-4 py-4 text-left md:px-5 md:py-5"
            >
              <span className="font-mono text-sm text-brand-blueLight/60">{s.n}</span>
              <div>
                <span className="text-sm font-medium text-brand-silverLL md:text-base">{s.t}</span>
                <p className="mt-2 text-sm leading-6 text-brand-gray">{s.d}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal yFrom={16} extraDelay={0.1} duration={0.45} className="mt-6 text-left md:text-center">
          <Link
            href="/leistungen-und-preise#ablauf"
            className="btn-text"
          >
            Gesamten Ablauf ansehen →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
