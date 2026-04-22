'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal, { ScrollRevealTab } from '@/components/ScrollReveal'
import { Check, Minus, Car, ChevronDown, ChevronUp } from 'lucide-react'

/* ─────────── GEWERBE DATA ─────────── */
const gewerbeFeatures = [
  { label: 'Böden reinigen',    std: true,  kom: true,  prem: true  },
  { label: 'Arbeitsflächen',    std: true,  kom: true,  prem: true  },
  { label: 'Sanitärbereiche',   std: true,  kom: true,  prem: true  },
  { label: 'Müllentsorgung',    std: true,  kom: true,  prem: true  },
  { label: 'Küche (außen)',     std: false, kom: true,  prem: true  },
  { label: 'Desinfektion',      std: false, kom: true,  prem: true  },
  { label: 'Türen & Details',   std: false, kom: false, prem: true  },
]

const gewerbePakete = [
  {
    name: 'Standard',
    price: 'ab 2,50 €/m²',
    interval: '1–3× pro Woche',
    highlighted: false,
    features: gewerbeFeatures.map(f => ({ label: f.label, included: f.std })),
  },
  {
    name: 'Komfort',
    price: 'ab 3,50 €/m²',
    interval: '2–5× pro Woche',
    highlighted: true,
    badge: 'Empfohlen',
    features: gewerbeFeatures.map(f => ({ label: f.label, included: f.kom })),
  },
  {
    name: 'Premium',
    price: 'ab 5,00 €/m²',
    interval: 'Individuell / täglich',
    highlighted: false,
    features: gewerbeFeatures.map(f => ({ label: f.label, included: f.prem })),
  },
]

const gewerbeExtras = [
  { label: 'Fenster (ohne Rahmen)',                   price: 'ab 8 € / Stück'  },
  { label: 'Fenster (inkl. Rahmen)',                  price: 'ab 10 € / Stück' },
  { label: 'Innenreinigung einzelner Schränke',       price: 'ab 29 €'          },
  { label: 'Innenreinigung Küchenbereiche',           price: 'ab 49 €'          },
  { label: 'Teppichreinigung',                        price: '3–6 €/m²'         },
  { label: 'Grundreinigung',                          price: '5–10 €/m²'        },
  { label: 'Bauendreinigung',                         price: 'auf Anfrage'      },
  { label: 'Desinfektionsreinigung',                  price: 'auf Anfrage'      },
]

/* ─────────── PRIVAT DATA ─────────── */
const privatFeatures = [
  { label: 'Böden',            std: true,  med: true,  prem: true  },
  { label: 'Küche',            std: true,  med: true,  prem: true  },
  { label: 'Bad',              std: true,  med: true,  prem: true  },
  { label: 'Oberflächen',      std: true,  med: true,  prem: true  },
  { label: 'Spiegel',         std: true,  med: true,  prem: true  },
  { label: 'Intensivreinigung',std: false, med: true,  prem: true  },
  { label: 'Türen & Rahmen',  std: false, med: false,  prem: true  },
  { label: 'Sockelleisten',   std: false, med: false,  prem: true  },
]

const privatPakete = [
  {
    name: 'Standard',
    price: 'ab 135 €',
    interval: 'ca. 3 Stunden',
    highlighted: false,
    features: privatFeatures.map(f => ({ label: f.label, included: f.std })),
  },
  {
    name: 'Medium',
    price: 'ab 157,50 €',
    interval: 'ca. 3,5 Stunden',
    highlighted: true,
    badge: 'Beliebt',
    features: privatFeatures.map(f => ({ label: f.label, included: f.med })),
  },
  {
    name: 'Premium',
    price: 'ab 180 €',
    interval: 'ca. 4–5 Stunden',
    highlighted: false,
    features: privatFeatures.map(f => ({ label: f.label, included: f.prem })),
  },
]

const privatExtras = [
  { label: 'Fenster (ohne Rahmen)',                price: 'ab 8 € / Stück'  },
  { label: 'Fenster (inkl. Rahmen)',               price: 'ab 10 € / Stück' },
  { label: 'Innenschrankreinigung (einzeln)',      price: 'ab 39 €'          },
  { label: 'Komplette Küchenschrank-Innenreinigung', price: 'ab 69 €'        },
  { label: 'Backofenreinigung',                    price: 'ab 49 €'          },
  { label: 'Kühlschrankreinigung',                 price: 'ab 29 €'          },
  { label: 'Kühlschrank inkl. Gefrierfach',        price: 'ab 49 €'          },
  { label: 'Mikrowelle',                           price: 'ab 15 €'          },
  { label: 'Dunstabzugshaube',                     price: 'ab 35 €'          },
  { label: 'Balkonreinigung',                      price: 'ab 39 €'          },
  { label: 'Fugenreinigung',                       price: 'ab 39 €'          },
  { label: 'Polsterreinigung',                     price: 'ab 59 €'          },
  { label: 'Matratzenreinigung',                   price: 'ab 49 €'          },
]

/* ─────────── COMPONENTS ─────────── */
function FeatureRow({ label, included }) {
  return (
    <li className="flex items-center gap-2 text-sm py-1.5 border-b border-white/[0.04] last:border-0">
      {included ? (
        <Check size={14} className="text-brand-blueLight flex-shrink-0" />
      ) : (
        <Minus size={14} className="text-white/20 flex-shrink-0" />
      )}
      <span className={included ? 'text-brand-silverL' : 'text-brand-gray/50'}>{label}</span>
    </li>
  )
}

function PaketCard({ paket }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
        paket.highlighted
          ? 'bg-gradient-to-b from-brand-blue/20 to-brand-navy border-brand-blue/60 shadow-xl shadow-brand-blue/10'
          : 'bg-brand-navy/70 border-white/[0.06] hover:border-brand-blue/30'
      }`}
    >
      {paket.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-blue text-white text-xs font-semibold whitespace-nowrap">
          {paket.badge}
        </div>
      )}

      <h3 className="font-montserrat font-bold text-brand-silverLL text-xl mb-1">{paket.name}</h3>
      <p className="text-brand-gray text-sm mb-4">{paket.interval}</p>

      <div className="font-montserrat font-extrabold text-3xl mb-5 text-silver-gradient">
        {paket.price}
      </div>

      <ul className="flex flex-col mb-6 flex-grow">
        {paket.features.map((f) => (
          <FeatureRow key={f.label} {...f} />
        ))}
      </ul>

      <Link
        href="/kontakt#kontakt"
        className={paket.highlighted ? 'btn-primary w-full' : 'btn-secondary w-full'}
      >
        Jetzt anfragen
      </Link>
    </div>
  )
}

function ExtrasTable({ extras }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl bg-brand-navy/50 border border-white/5 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="font-montserrat font-semibold text-brand-silverL text-sm">
          Zusatzleistungen & Einzelpreise
        </span>
        {open
          ? <ChevronUp size={16} className="text-brand-gray" />
          : <ChevronDown size={16} className="text-brand-gray" />
        }
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">
              <p className="text-brand-gray text-xs mb-3">
                * Fensterreinigung ist nicht Bestandteil der Unterhaltsreinigung und wird separat berechnet.
              </p>
              <div className="flex flex-col divide-y divide-white/[0.04]">
                {extras.map((ex) => (
                  <div key={ex.label} className="flex items-center justify-between py-2.5">
                    <span className="text-brand-silverL text-sm">{ex.label}</span>
                    <span className="font-montserrat font-semibold text-brand-blueLight text-sm whitespace-nowrap ml-4">
                      {ex.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─────────── MAIN ─────────── */
export default function Preise() {
  const [kundeTyp, setKundeTyp] = useState('gewerbe')

  const istGewerbe = kundeTyp === 'gewerbe'
  const pakete = istGewerbe ? gewerbePakete : privatPakete
  const extras = istGewerbe ? gewerbeExtras : privatExtras

  return (
    <section id="preise" className="scroll-mt-20 py-12 md:py-14 bg-brand-deep">
      <div className="section-padding">
        {/* Header */}
        <ScrollReveal
          yFrom={24}
          duration={0.6}
          className="text-center mb-5"
        >
          <p className="section-eyebrow mb-3">
            Transparent &amp; fair
          </p>
          <h2 className="section-title-lg text-silver-gradient">
            Unsere Preise
          </h2>
          <p className="section-copy-sm mt-3 max-w-lg mx-auto">
            Alle Preise verstehen sich als Orientierungswerte. Ihr individuelles Angebot erhalten Sie kostenlos und unverbindlich.
          </p>
        </ScrollReveal>

        {/* Gewerbe / Privat */}
        <div className="flex justify-center mb-6">
          <div
            className="inline-flex rounded-xl border border-white/10 bg-brand-navy/60 p-1"
            role="tablist"
            aria-label="Preise für Gewerbe oder Privat"
          >
            <button
              type="button"
              role="tab"
              aria-selected={istGewerbe}
              onClick={() => setKundeTyp('gewerbe')}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                istGewerbe
                  ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/20'
                  : 'text-brand-gray hover:text-brand-silverL'
              }`}
            >
              Gewerbe
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={!istGewerbe}
              onClick={() => setKundeTyp('privat')}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                !istGewerbe
                  ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/20'
                  : 'text-brand-gray hover:text-brand-silverL'
              }`}
            >
              Privat
            </button>
          </div>
        </div>

        {!istGewerbe && (
          <p className="text-center section-copy-sm max-w-xl mx-auto mb-5 -mt-2">
            Haushaltsreinigung nach Zeitaufwand – ideal für Wohnungen und Einfamilienhäuser. Umfang je nach Paket.
          </p>
        )}

        {/* Cards */}
        <ScrollRevealTab
          key={kundeTyp}
          tabKey={kundeTyp}
          yFrom={16}
          duration={0.35}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-6"
        >
          {pakete.map((p) => (
            <PaketCard key={`${kundeTyp}-${p.name}`} paket={p} />
          ))}
        </ScrollRevealTab>

        {/* Extras accordion */}
        <ScrollReveal
          key={`extras-${kundeTyp}`}
          yFrom={16}
          extraDelay={0.1}
          duration={0.5}
        >
          <ExtrasTable extras={extras} />
        </ScrollReveal>

        {/* Anfahrts-Info */}
        <ScrollReveal
          yFrom={24}
          extraDelay={0.25}
          duration={0.5}
          className="mt-6 p-5 rounded-2xl bg-brand-navy/50 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Car size={26} className="text-brand-blueLight flex-shrink-0" />
          <div>
            <p className="text-brand-silverLL font-medium text-sm">Kostenlose Anfahrt</p>
            <p className="text-brand-gray text-sm">
              Bis 10 km um Bretten fahren wir kostenlos zu Ihnen. Jeder weitere Kilometer wird mit 0,50 € berechnet.
            </p>
          </div>
          <Link
            href="/kontakt#kontakt"
            className="btn-primary sm:ml-auto flex-shrink-0"
          >
            Angebot anfragen →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
