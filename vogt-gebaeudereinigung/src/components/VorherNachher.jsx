'use client'

import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const defaultResults = [
  {
    src: '/images/before-after/einfahrt_pflasterreinigung_vorher_nachher.png',
    label: 'Pflasterreinigung',
    caption: 'Einfahrt — Moos & Grünbelag vollständig entfernt',
  },
  {
    src: '/images/before-after/fassade_vorher_nachher.png',
    label: 'Fassadenreinigung',
    caption: 'Algen & Verschmutzung — Fassade in Originalweiß',
  },
  {
    src: '/images/before-after/treppenhaus_vorher_nachher_v2.png',
    label: 'Grundreinigung',
    caption: 'Treppenhaus — streifenfreier Glanz nach Tiefenreinigung',
  },
]

export function VorherNachherCard({ src, label, caption, staggerIndex = 0 }) {
  return (
    <ScrollReveal
      yFrom={20}
      staggerIndex={staggerIndex}
      staggerStep={0.08}
      duration={0.5}
      className="card-base overflow-hidden"
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <Image
          src={src}
          alt={`${label} — Vorher / Nachher`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        {/* Vorher / Nachher Overlay Labels */}
        <div className="pointer-events-none absolute inset-x-0 top-3 flex justify-between px-3">
          <span className="rounded-full border border-white/20 bg-black/55 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-silverL backdrop-blur-sm">
            Vorher
          </span>
          <span className="rounded-full border border-brand-blueLight/40 bg-brand-blue/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            Nachher
          </span>
        </div>
        {/* Mittel-Trennlinie als dezenter Akzent */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/25 to-transparent"
        />
      </div>
      <div className="px-5 py-4 md:px-6 md:py-5">
        <p className="text-[11px] uppercase tracking-[0.22em] text-brand-blueLight/80">
          {label}
        </p>
        <p className="mt-2 text-sm leading-6 text-brand-silverDark">{caption}</p>
      </div>
    </ScrollReveal>
  )
}

const gridClassByColumns = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
}

export default function VorherNachher({
  id = 'ergebnisse',
  eyebrow = 'Ergebnisse',
  title = 'Vorher / Nachher — sichtbar saubere Ergebnisse',
  copy = 'Drei Beispiele aus echten Einsätzen. Gleiche Perspektive, gleiche Fläche, nur einmal mit und einmal ohne professionelle Reinigung.',
  items = defaultResults,
  showCta = true,
  columns = 3,
  surfaceClass = 'surface-texture-black',
}) {
  const gridClass = gridClassByColumns[columns] ?? gridClassByColumns[3]
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-white/[0.06] ${surfaceClass} py-12 md:py-14`}
    >
      <div className="section-padding">
        <ScrollReveal yFrom={20} duration={0.55} className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow mb-3">{eyebrow}</p>
          <h2 className="section-title-md text-silver-gradient">{title}</h2>
          <div className="surface-wave-underline" aria-hidden />
          <p className="section-copy-sm mt-4">{copy}</p>
        </ScrollReveal>

        <div className={`mx-auto mt-8 grid max-w-5xl gap-5 ${gridClass}`}>
          {items.map((item, i) => (
            <VorherNachherCard
              key={item.src}
              src={item.src}
              label={item.label}
              caption={item.caption}
              staggerIndex={i}
            />
          ))}
        </div>

        {showCta && (
          <ScrollReveal yFrom={16} extraDelay={0.1} duration={0.5} className="mt-8 text-left md:text-center">
            <Link href="/kontakt#kontakt" className="btn-primary">
              Ähnliches Ergebnis für Ihr Objekt
              <span aria-hidden="true"> →</span>
            </Link>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
