'use client'

import ScrollReveal from '@/components/ScrollReveal'
import { CheckCircle, Star, Clock, Euro, ThumbsUp, MapPin, User } from 'lucide-react'

const trustPoints = [
  'Zuverlässig & pünktlich',
  'Faire, transparente Preise',
  'Kurzfristige Termine möglich',
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="h-[18px] w-[18px]"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="h-[18px] w-[18px]"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
]

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
        className="scroll-mt-20 border-t border-white/[0.06] bg-brand-deep py-12 md:py-14"
      >
        <div className="section-padding mx-auto max-w-3xl">
          <ScrollReveal yFrom={20} duration={0.55}>
            <div className="grid gap-7 md:grid-cols-[auto_1fr] md:items-start md:gap-9">
              {/* Portrait-Platzhalter */}
              <div className="flex flex-col items-center md:items-start md:pt-1">
                <div className="relative h-36 w-36 overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-brand-navy via-brand-deep to-brand-black shadow-[0_8px_28px_-18px_rgba(19,88,160,0.6)] md:h-40 md:w-40">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <User size={48} className="text-brand-blueLight/55" aria-hidden />
                  </div>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/5"
                  />
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-brand-gray/70">
                  Portrait folgt
                </p>
              </div>

              <div className="text-center md:text-left">
                <p className="section-eyebrow mb-3">
                  Über uns
                </p>
                <h2 className="section-title-md mb-5 text-silver-gradient">
                  Regional verwurzelt
                </h2>
                <p className="section-copy-sm mb-4">
                  Vogt Gebäudereinigung steht für zuverlässige und gründliche Reinigung in Bretten sowie
                  im Raum Karlsruhe, Pforzheim und Enzkreis. Wir arbeiten strukturiert, pünktlich und
                  mit klarem Anspruch an Qualität – egal ob Privatkunde oder Gewerbe.
                </p>
                <p className="section-copy-sm">
                  Kurze Wege, schnelle Rückmeldungen und flexible Termine sind für uns
                  selbstverständlich. Sie haben einen festen Ansprechpartner und erhalten genau die
                  Leistung, die Sie wirklich brauchen – ohne unnötigen Aufwand.
                </p>
              </div>
            </div>

            <ul className="mt-7 flex flex-col gap-2.5 md:gap-3">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm text-brand-silverL md:text-[15px]"
                >
                  <CheckCircle
                    size={15}
                    className="mt-[3px] shrink-0 text-brand-blueLight"
                    aria-hidden
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col items-center gap-4 border-t border-white/[0.05] pt-7 md:flex-row md:items-center md:justify-between md:gap-6 md:text-left">
              <p className="max-w-xl text-[13px] leading-relaxed text-brand-gray md:text-sm">
                Auf unseren Social-Media-Kanälen zeigen wir echte Einblicke in unsere Arbeit und
                aktuelle Projekte.
              </p>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.025] text-brand-silver/85 transition-colors duration-200 hover:border-brand-blue/35 hover:bg-brand-blue/10 hover:text-brand-silverLL focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blueLight/40"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
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
