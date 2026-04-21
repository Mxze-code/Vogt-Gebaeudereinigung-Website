'use client'

import ScrollReveal from '@/components/ScrollReveal'
import { CheckCircle, Star, Clock, Euro, ThumbsUp, MapPin } from 'lucide-react'

const gruende = [
  { icon: CheckCircle, title: 'Zuverlässigkeit',     desc: 'Pünktliche Termine, konsequente Ausführung – Sie können sich auf uns verlassen, jedes Mal.' },
  { icon: Star,        title: 'Gründliche Arbeit',   desc: 'Wir reinigen nicht nur oberflächlich – wir sorgen für echte Sauberkeit bis in jede Ecke.' },
  { icon: Clock,       title: 'Flexible Termine',    desc: 'Früh, spät, am Wochenende – wir passen uns Ihrem Zeitplan an, nicht umgekehrt.' },
  { icon: Euro,        title: 'Faire Preise',         desc: 'Transparente Angebote ohne versteckte Kosten. Qualität muss kein Vermögen kosten.' },
  { icon: ThumbsUp,    title: 'Persönlicher Service', desc: 'Direkte Kommunikation, feste Ansprechpartner – kein Callcenter, kein Anonymität.' },
  { icon: MapPin,      title: 'Regionale Nähe',       desc: 'Wir kommen aus Bretten und kennen die Region. Kurze Wege, schnelle Reaktionszeiten.' },
]

const karten = [
  {
    emoji: '🪴',
    title: 'Ihre Dinge bleiben, wo sie sind',
    text: 'Wir reinigen Ihre Oberflächen sorgfältig, ohne Ihre Dekoration oder persönlichen Gegenstände ohne Absprache zu bewegen.',
  },
  {
    emoji: '🍽️',
    title: 'Küche & Schränke nach Wunsch',
    text: 'In der Küche kümmern wir uns um alle äußeren Flächen. Eine Innenreinigung der Schränke stimmen wir individuell mit Ihnen ab.',
  },
  {
    emoji: '📂',
    title: 'Büros & Kanzleien – umsichtig',
    text: 'Ihre Ablage bleibt unverändert. Wir reinigen sorgfältig drumherum, ohne Akten, Ordner oder Dokumente zu verschieben.',
  },
]

export default function UberUns({ brief = false }) {
  if (brief) {
    return (
      <section
        id="uber-uns"
        className="scroll-mt-20 border-t border-white/[0.06] py-12 md:py-14 bg-brand-deep"
      >
        <div className="section-padding max-w-3xl mx-auto">
          <ScrollReveal yFrom={20} duration={0.55} className="text-center md:text-left">
            <p className="section-eyebrow mb-3">
              Über uns
            </p>
            <h2 className="section-title-md text-silver-gradient mb-5">
              Regional verwurzelt
            </h2>
            <p className="section-copy-sm mb-4">
              VOGT steht für zuverlässige Gebäudereinigung in Bretten und der Region — mit festen
              Abläufen, fairen Preisen und direkter Erreichbarkeit. Kein Callcenter: Sie sprechen mit
              Menschen, die Ihr Objekt verstehen und persönlich betreuen.
            </p>
            <p className="section-copy-sm">
              Wie wir arbeiten und was uns unterscheidet, lesen Sie auf dieser Seite im Detail —
              inklusive Einsatzgebiet und Kontaktmöglichkeiten.
            </p>
          </ScrollReveal>
        </div>
      </section>
    )
  }

  return (
    <section
      id="uber-uns"
      className="py-12 md:py-16 bg-brand-deep"
    >
      <div className="section-padding">
        {/* Hauptkopf */}
        <ScrollReveal
          yFrom={24}
          duration={0.6}
          className="text-center mb-10 md:mb-12"
        >
          <p className="section-eyebrow mb-3">
            Kennenlernen
          </p>
          <h2 className="section-title-lg text-silver-gradient mb-4">
            Über uns
          </h2>
          <p className="text-brand-silverDark text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Warum VOGT die richtige Wahl ist – und wie wir bei Ihnen zu Hause oder im Büro
            respektvoll und zuverlässig arbeiten.
          </p>
        </ScrollReveal>

        {/* ── Warum VOGT ── */}
        <div id="warum-wir" className="scroll-mt-28">
          <ScrollReveal
            yFrom={20}
            duration={0.5}
            className="text-center mb-6 md:mb-8"
          >
            <p className="section-eyebrow mb-2">
              Unser Versprechen
            </p>
            <h3 className="section-title-md text-silver-gradient">
              Warum VOGT?
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {gruende.map((item, i) => {
              const Icon = item.icon
              return (
                <ScrollReveal
                  key={item.title}
                  yFrom={24}
                  staggerIndex={i}
                  staggerStep={0.08}
                  duration={0.45}
                  className="card-base p-6 flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={18} className="text-brand-blueLight" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-brand-silverLL text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal
            yFrom={24}
            extraDelay={0.15}
            duration={0.5}
            className="mt-8 p-5 md:p-6 rounded-2xl bg-brand-navy/60 border border-brand-blue/20 text-center"
          >
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <blockquote className="text-brand-silverL text-base md:text-lg italic leading-relaxed max-w-2xl mx-auto mb-4">
              Sehr zuverlässig und gründlich. Büro glänzt nach jedem Besuch – kann ich nur
              empfehlen!
            </blockquote>
            <p className="text-brand-gray text-sm">– Zufriedener Kunde aus Bretten</p>
          </ScrollReveal>
        </div>

        <div
          className="my-10 md:my-12 h-px max-w-3xl mx-auto bg-gradient-to-r from-transparent via-white/15 to-transparent"
          aria-hidden
        />

        {/* ── So arbeiten wir ── */}
        <div id="wie-wir-arbeiten" className="scroll-mt-28">
          <ScrollReveal
            yFrom={20}
            duration={0.5}
            className="text-center mb-6 md:mb-8"
          >
            <p className="section-eyebrow mb-2">
              Diskretion & Sorgfalt
            </p>
            <h3 className="section-title-md text-silver-gradient mb-4">
              So arbeiten wir
            </h3>
            <p className="text-brand-silverDark text-base max-w-xl mx-auto leading-relaxed">
              Sauberkeit mit Respekt – für Ihr Zuhause, Ihr Büro und Ihre Privatsphäre.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {karten.map((item, i) => (
              <ScrollReveal
                key={item.title}
                yFrom={24}
                staggerIndex={i}
                staggerStep={0.08}
                duration={0.45}
                className="card-base p-6 flex gap-4"
              >
                <div
                  className="w-10 h-10 rounded-lg bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center flex-shrink-0 text-xl leading-none pt-0.5"
                  aria-hidden
                >
                  {item.emoji}
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-brand-silverLL text-base mb-1">
                    {item.title}
                  </h4>
                  <p className="text-brand-gray text-sm leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal
            yFrom={24}
            extraDelay={0.15}
            duration={0.5}
            className="mt-8 rounded-2xl border border-brand-blue/30 bg-gradient-to-br from-brand-blue/20 via-brand-navy/50 to-brand-blue/10 px-5 py-6 md:px-8 text-center relative overflow-hidden"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-90"
              style={{
                background:
                  'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(19,88,160,0.14) 0%, transparent 65%)',
              }}
            />
            <p className="text-brand-silverL text-base md:text-lg italic leading-relaxed max-w-3xl mx-auto relative">
              Jeder Wunsch wird vorab geklärt, damit Sie exakt die Reinigung erhalten, die Sie
              brauchen. So arbeiten wir – transparent, verlässlich und in Ihrem Sinne.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
