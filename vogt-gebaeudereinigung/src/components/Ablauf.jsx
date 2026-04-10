'use client'

import ScrollReveal from '@/components/ScrollReveal'
import { Send, MessageSquare, CalendarDays, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: Send,
    num: '01',
    title: 'Anfrage senden',
    desc: 'Kurze Nachricht per WhatsApp, E-Mail oder Formular – unkompliziert und ohne Wartezeit.',
  },
  {
    icon: MessageSquare,
    num: '02',
    title: 'Abstimmung',
    desc: 'Wir melden uns innerhalb 24h, besprechen Ihre Wünsche und erstellen ein individuelles Angebot.',
  },
  {
    icon: CalendarDays,
    num: '03',
    title: 'Termin',
    desc: 'Wir vereinbaren einen passenden Termin – flexibel nach Ihrem Zeitplan.',
  },
  {
    icon: Sparkles,
    num: '04',
    title: 'Durchführung',
    desc: 'Pünktlich, gründlich, zuverlässig. Nach der Reinigung können Sie sich direkt überzeugen.',
  },
]

export default function Ablauf() {
  return (
    <section id="ablauf" className="py-20 bg-brand-black section-atmosphere section-glow-left">
      <div className="section-padding">
        {/* Header */}
        <ScrollReveal
          yFrom={24}
          duration={0.6}
          className="text-center mb-16"
        >
          <p className="text-brand-blueLight text-sm font-medium tracking-widest uppercase mb-3">
            Einfach &amp; klar
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
            So läuft es ab
          </h2>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <ScrollReveal
                  key={step.title}
                  yFrom={24}
                  staggerIndex={i}
                  staggerStep={0.12}
                  duration={0.5}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon box with number badge */}
                  <div className="relative mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blueMid flex items-center justify-center shadow-lg shadow-brand-blue/30">
                      <Icon size={26} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-deep border border-brand-blue/40 flex items-center justify-center">
                      <span className="text-brand-blueLight text-xs font-bold">{i + 1}</span>
                    </div>
                  </div>
                  <h3 className="font-montserrat font-semibold text-brand-silverLL text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{step.desc}</p>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal
          yFrom={24}
          extraDelay={0.4}
          duration={0.5}
          className="text-center mt-14"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-blue hover:bg-brand-blueMid text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/30"
          >
            Jetzt Schritt 1 starten →
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
