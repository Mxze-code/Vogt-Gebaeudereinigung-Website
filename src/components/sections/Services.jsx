'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const ROWS = [
  {
    title: 'Büroreinigung',
    line:
      'Arbeitsplätze, Sanitär, Küche, Böden — täglich oder nach Plan, damit Ihr Betrieb läuft.',
  },
  {
    title: 'Gewerbe- & Firmenreinigung',
    line: 'Hallen, Büros, Eingänge und Außenbereiche — skalierbar für Objekte jeder Größe.',
  },
  {
    title: 'Privathaushalte',
    line: 'Haushaltsreinigung zuverlässig und diskret — Termine, die zu Ihrem Alltag passen.',
  },
  {
    title: 'Fensterreinigung',
    line: 'Scheiben und Rahmen streifenfrei — innen und außen, auch für größere Glasflächen.',
  },
  {
    title: 'Unterhaltsreinigung',
    line: 'Treppenhäuser, Objekte, Intervalle nach Vereinbarung — planbar und verlässlich.',
  },
  {
    title: 'Baureinigung',
    line: 'Nach Bau oder Sanierung: grob bis fein, bis die Flächen übergeben werden können.',
  },
]

/**
 * Leistungen als dichte Textliste — ohne Icon-Kacheln.
 */
export default function Services() {
  return (
    <section
      id="leistungen"
      className="scroll-mt-20 w-full bg-[#0a0e1a] py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16"
        >
          <header className="lg:col-span-5">
            <p className="text-[11px] font-normal uppercase tracking-[0.2em] text-slate-500">
              Leistungen
            </p>
            <h2
              id="services-heading"
              className="mt-3 font-montserrat text-4xl font-semibold tracking-tight text-white md:text-5xl"
            >
              Was wir reinigen
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-300">
              Wir arbeiten für Gewerbe und Privat — mit festen Abläufen, klaren Zuständigkeiten und
              Qualität, die man sieht. Kein Schnellservice von der Stange: Wir stimmen Umfang und
              Rhythmus auf Ihr Objekt ab.
            </p>
            <Link
              href="/leistungen-und-preise#leistungen"
              className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-[#60a5fa] transition-colors hover:text-[#93c5fd] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0e1a]"
            >
              Vollständiges Leistungsverzeichnis
              <span aria-hidden="true"> →</span>
            </Link>
          </header>

          <div className="lg:col-span-7">
            <div className="border-t border-white/5">
              {ROWS.map((row, i) => (
                <div
                  key={row.title}
                  className="group border-b border-white/5 py-5 transition-colors last:border-b-0 hover:bg-white/[0.02] md:py-6"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:gap-6">
                    <span className="shrink-0 font-mono text-sm text-slate-600 md:pt-1 md:w-10">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="grid min-w-0 flex-1 grid-cols-1 gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_auto] md:items-baseline md:gap-6 lg:gap-8">
                      <h3 className="text-xl font-medium text-white">{row.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-400">{row.line}</p>
                      <span
                        className="hidden text-slate-500 opacity-0 transition-opacity md:block md:justify-self-end md:group-hover:opacity-100"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
