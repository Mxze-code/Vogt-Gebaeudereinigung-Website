'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function LandingKontaktTeaser() {
  return (
    <section className="scroll-mt-20 border-t border-white/[0.06] surface-texture-black py-12 md:py-14">
      <div className="section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal yFrom={20} duration={0.5}>
            <p className="section-eyebrow mb-3">
              Kontakt &amp; Über uns
            </p>
            <h2 className="section-title-md text-silver-gradient">
              Direkt mit uns sprechen
            </h2>
            <div className="surface-wave-underline" aria-hidden />
            <p className="section-copy mt-4 max-w-2xl mx-auto">
              Wir sind in Bretten verwurzelt und für die Region da — persönlich, ohne Callcenter.
              Auf der Kontaktseite finden Sie Formular, Telefon, WhatsApp und unser Einsatzgebiet mit
              Karte.
            </p>
          </ScrollReveal>
          <ScrollReveal yFrom={16} extraDelay={0.08} duration={0.45} className="mt-5">
            <Link
              href="/kontakt"
              className="btn-secondary"
            >
              Zu Kontakt &amp; Über uns
              <span aria-hidden="true"> →</span>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
