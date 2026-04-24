import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import LineWaves from './LineWaves'

const trustItems = [
  'Zuverlässig & pünktlich',
  'Flexible Termine',
  'Faire Preise',
  '10 km kostenlose Anfahrt',
]

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-brand-black">
      {/* Background base */}
      <div className="absolute inset-0 bg-brand-black" />

      {/* Ambient animated layer — leicht gekippt, Flow links unten → rechts oben */}
      <div className="absolute -top-[10%] -bottom-[25%] -left-[35%] w-[150%] opacity-75 blur-[1px]">
        <LineWaves
          speed={0.1}
          innerLineCount={38}
          outerLineCount={44}
          warpIntensity={0.35}
          rotation={-28}
          edgeFadeWidth={0}
          colorCycleSpeed={0.35}
          brightness={0.13}
          color1="#ffffff"
          color2="#ffffff"
          color3="#ffffff"
          enableMouseInteraction={false}
          mouseInfluence={0}
        />
      </div>

      {/* Calm reading zone — Logo-Bereich klar freigestellt */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 58% 48% at 50% 44%, rgba(6,8,14,0.82) 0%, rgba(6,8,14,0.6) 36%, rgba(6,8,14,0.3) 62%, rgba(6,8,14,0) 82%)',
        }}
      />

      {/* Sanfter Fog hinter Logo — enger Dunst */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 26% 14% at 50% 40%, rgba(6,8,14,0.6) 0%, rgba(6,8,14,0.25) 60%, rgba(6,8,14,0) 100%)',
          filter: 'blur(18px)',
        }}
      />

      {/* Sanfter Fog hinter Schrift (Lead + Trust Chips) — enger Dunst */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 32% 10% at 50% 74%, rgba(6,8,14,0.72) 0%, rgba(6,8,14,0.3) 60%, rgba(6,8,14,0) 100%)',
          filter: 'blur(16px)',
        }}
      />

      {/* Top fade for navbar legibility */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-brand-black/72 via-brand-black/30 to-transparent"
      />

      {/* Bottom fade so the next section glides in */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-brand-black/55 to-brand-black"
      />

      {/* Content: centered composition */}
      <div className="relative z-10 flex min-h-[100svh] w-full flex-1 flex-col">
        <div className="flex flex-1 items-center justify-center px-5 pb-16 pt-28 sm:px-8 md:pb-20 md:pt-32">
          <div
            className="mx-auto w-full max-w-[760px] text-center"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            {/* Logo */}
            <Image
              src="/logo.png"
              alt="VOGT Gebäudereinigung"
              width={720}
              height={258}
              preload
              className="mx-auto h-auto w-full max-w-[min(100%,460px)] md:max-w-[min(100%,560px)] lg:max-w-[min(100%,620px)]"
              style={{ filter: 'drop-shadow(0 0 40px rgba(19,88,160,0.35))' }}
              sizes="(max-width: 768px) 85vw, (max-width: 1024px) 520px, 600px"
            />

            {/* CTA row */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Link
                href="/kontakt#kontakt"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-blue px-6 py-[0.78rem] text-[0.92rem] font-semibold tracking-[0.005em] text-white shadow-[0_8px_24px_-15px_rgba(19,88,160,0.88)] transition-all duration-200 hover:bg-brand-blueMid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blueLight/40 sm:w-auto"
              >
                Kostenloses Angebot sichern
                <span aria-hidden>→</span>
              </Link>
              <a
                href="tel:+4917663356310"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-6 py-[0.78rem] text-[0.92rem] font-semibold tracking-[0.005em] text-brand-silverLL backdrop-blur-sm transition-all duration-200 hover:border-brand-blueLight/40 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blueLight/40 sm:w-auto"
              >
                <Phone size={16} className="text-brand-blueLight" />
                Direkt anrufen
              </a>
            </div>

            {/* Lead line */}
            <h1 className="mx-auto mt-10 max-w-[42rem] text-balance text-[0.95rem] font-normal leading-[1.6] tracking-[0.003em] text-brand-silverL/95 md:mt-12 md:text-[1.05rem]">
              Professionelle Gebäudereinigung für Privat &amp; Gewerbe – zuverlässig,
              gründlich und kurzfristig verfügbar in Pforzheim, Karlsruhe und dem Enzkreis.
            </h1>

            {/* Trust chips */}
            <div className="mt-5 flex flex-wrap justify-center gap-2.5 sm:gap-3 md:gap-3.5">
              {trustItems.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.035] px-3.5 py-2 text-xs text-brand-silver/90 shadow-[0_0_24px_-10px_rgba(37,121,212,0.2)] backdrop-blur-sm md:px-4 md:py-2.5 md:text-sm"
                >
                  <svg
                    className="h-3 w-3 shrink-0 text-brand-blueLight/75 md:h-3.5 md:w-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
