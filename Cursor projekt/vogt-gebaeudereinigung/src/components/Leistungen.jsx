'use client'

import { motion } from 'framer-motion'
import { Briefcase, Building2, Sparkles, Building, CalendarCheck, Home, ArrowRight } from 'lucide-react'

const leistungen = [
  {
    icon: Briefcase,
    title: 'Büroreinigung',
    slug: 'buero',
    desc: 'Saubere Arbeitsumgebung für maximale Produktivität. Böden, Oberflächen, Sanitär und Küche – wir sorgen täglich für Ordnung.',
    tags: ['Böden', 'Oberflächen', 'Sanitär', 'Küche'],
  },
  {
    icon: Building2,
    title: 'Firmenreinigung',
    slug: 'firma',
    desc: 'Professionelle Reinigung für Gewerbeobjekte jeder Größe – von Hallen bis zu repräsentativen Eingangsbereichen.',
    tags: ['Hallen', 'Eingangsbereiche', 'Glasflächen', 'Außen'],
  },
  {
    icon: Home,
    title: 'Privathaushalt',
    slug: 'privat',
    desc: 'Professionelle Haushaltsreinigung für Ihr Zuhause – zuverlässig, diskret und nach Ihrem Wunschtermin.',
    tags: ['Küche', 'Bad', 'Böden', 'Oberflächen'],
  },
  {
    icon: Sparkles,
    title: 'Sonderreinigung',
    slug: 'sonder',
    desc: 'Wenn normale Reinigung nicht reicht – Baureinigung, Tiefenreinigung, Grundreinigung und Notfalleinsätze.',
    tags: ['Baureinigung', 'Tiefenreinigung', 'Grundreinigung', 'Notfall'],
  },
  {
    icon: Building,
    title: 'Treppenhausreinigung',
    slug: 'treppenhaus',
    desc: 'Regelmäßige Wischpflege, Desinfektion und Aufzugpflege – Ihr Treppenhaus glänzt immer.',
    tags: ['Wischpflege', 'Desinfektion', 'Aufzug', 'Briefkästen'],
  },
  {
    icon: CalendarCheck,
    title: 'Regelmäßige Reinigung',
    slug: 'sonstiges',
    desc: 'Feste Intervalle nach Ihrem Wunsch – wöchentlich, zweiwöchentlich oder monatlich, mit Schlüsselübergabe.',
    tags: ['Feste Intervalle', 'Schlüsselübergabe', 'Flexibel'],
  },
]

/**
 * Navigate to the contact section and pre-select a service in the dropdown.
 * Uses URL hash + a query param that Kontakt.jsx reads on mount.
 */
function scrollToKontakt(slug) {
  // Store the selected service so the contact form can read it
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('vogt_preselect_leistung', slug)
  }
  const el = document.getElementById('kontakt')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Leistungen() {
  return (
    <section id="leistungen" className="py-20 bg-brand-black section-atmosphere section-glow-left">
      <div className="section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brand-blueLight text-sm font-medium tracking-widest uppercase mb-3">
            Was wir tun
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
            Unsere Leistungen
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leistungen.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-base p-6 flex flex-col gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center group-hover:bg-brand-blue/30 transition-colors">
                  <Icon size={22} className="text-brand-blueLight" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-brand-silverLL text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-brand-navy2/80 border border-white/5 text-brand-silverDark text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Per-card CTA */}
                <button
                  onClick={() => scrollToKontakt(item.slug)}
                  className="mt-auto flex items-center gap-1.5 text-brand-blueLight text-sm font-medium hover:gap-2.5 transition-all duration-200 group/btn"
                >
                  Anfrage für {item.title}
                  <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-blue hover:bg-brand-blueMid text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/30"
          >
            Kostenlos anfragen →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
