'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { X } from 'lucide-react'
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

export function VorherNachherCard({ src, label, caption, staggerIndex = 0, onOpen }) {
  return (
    <ScrollReveal
      yFrom={20}
      staggerIndex={staggerIndex}
      staggerStep={0.08}
      duration={0.5}
      className="card-base overflow-hidden"
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`${label} — Vorher / Nachher in groß ansehen`}
        className="group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blueLight/60"
      >
        <div className="relative aspect-[3/2] w-full overflow-hidden">
          <Image
            src={src}
            alt={`${label} — Vorher / Nachher`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
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
          {/* Hover-Hinweis: vergrößern */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <span className="mb-3 rounded-full border border-white/25 bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-brand-silverLL backdrop-blur-sm">
              Klicken zum Vergrößern
            </span>
          </div>
        </div>
        <div className="px-5 py-4 md:px-6 md:py-5">
          <p className="text-[11px] uppercase tracking-[0.22em] text-brand-blueLight/80">
            {label}
          </p>
          <p className="mt-2 text-sm leading-6 text-brand-silverDark">{caption}</p>
        </div>
      </button>
    </ScrollReveal>
  )
}

function Lightbox({ item, onClose }) {
  const onKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (!item) return
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [item, onKey])

  if (!item) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.label} — Vorher / Nachher`}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-sm md:px-8 md:py-10"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Schließen"
          className="absolute -top-3 right-0 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/70 text-brand-silverLL backdrop-blur-sm transition-colors hover:border-brand-blueLight/50 hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blueLight/60 md:-top-4 md:-right-4"
        >
          <X size={18} />
        </button>

        <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src={item.src}
              alt={`${item.label} — Vorher / Nachher`}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-contain"
              preload
            />
            {/* Labels auch im Lightbox */}
            <div className="pointer-events-none absolute inset-x-0 top-3 flex justify-between px-3 md:top-5 md:px-5">
              <span className="rounded-full border border-white/25 bg-black/65 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-brand-silverLL backdrop-blur-sm md:text-xs">
                Vorher
              </span>
              <span className="rounded-full border border-brand-blueLight/50 bg-brand-blue/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm md:text-xs">
                Nachher
              </span>
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/30 to-transparent"
            />
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-brand-blueLight/85 md:text-xs">
            {item.label}
          </p>
          <p className="mt-2 text-sm text-brand-silverL md:text-base">{item.caption}</p>
        </div>
      </div>
    </div>
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
  const [activeIndex, setActiveIndex] = useState(null)
  const activeItem = activeIndex !== null ? items[activeIndex] : null

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
              onOpen={() => setActiveIndex(i)}
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

      {activeItem && (
        <Lightbox item={activeItem} onClose={() => setActiveIndex(null)} />
      )}
    </section>
  )
}
