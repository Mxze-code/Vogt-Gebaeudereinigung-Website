'use client'

import ScrollReveal from '@/components/ScrollReveal'

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
    title: 'Büros & Kanzleien — umsichtig',
    text: 'Ihre Ablage bleibt unverändert. Wir reinigen sorgfältig drumherum, ohne Akten, Ordner oder Dokumente zu verschieben.',
  },
]

export default function SoArbeitenWir() {
  return (
    <section
      id="wie-wir-arbeiten"
      className="scroll-mt-20 border-t border-white/[0.06] surface-texture-black py-12 md:py-14"
    >
      <div className="section-padding">
        <ScrollReveal yFrom={20} duration={0.55} className="mx-auto mb-8 max-w-3xl text-center">
          <p className="section-eyebrow mb-3">Diskretion &amp; Sorgfalt</p>
          <h2 className="section-title-md text-silver-gradient">So arbeiten wir</h2>
          <div className="surface-wave-underline" aria-hidden />
          <p className="section-copy-sm mt-4">
            Sauberkeit mit Respekt — für Ihr Zuhause, Ihr Büro und Ihre Privatsphäre.
          </p>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {karten.map((item, i) => (
            <ScrollReveal
              key={item.title}
              yFrom={24}
              staggerIndex={i}
              staggerStep={0.08}
              duration={0.45}
              className="card-base flex gap-4 p-6"
            >
              <div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-brand-blue/30 bg-brand-blue/20 pt-0.5 text-xl leading-none"
                aria-hidden
              >
                {item.emoji}
              </div>
              <div>
                <h3 className="mb-1 font-montserrat text-base font-semibold text-brand-silverLL">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-gray">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal
          yFrom={24}
          extraDelay={0.15}
          duration={0.5}
          className="relative mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl border border-brand-blue/30 bg-gradient-to-br from-brand-blue/20 via-brand-navy/50 to-brand-blue/10 px-5 py-6 text-center md:px-8"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-90"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(19,88,160,0.14) 0%, transparent 65%)',
            }}
            aria-hidden
          />
          <p className="relative mx-auto max-w-3xl text-base italic leading-relaxed text-brand-silverL md:text-lg">
            Jeder Wunsch wird vorab geklärt, damit Sie exakt die Reinigung erhalten, die Sie
            brauchen. So arbeiten wir — transparent, verlässlich und in Ihrem Sinne.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
