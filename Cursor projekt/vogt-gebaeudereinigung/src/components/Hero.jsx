import Image from 'next/image'

const trustItems = [
  'Zuverlässig & pünktlich',
  'Faire Preise',
  'Kurzfristige Termine möglich',
  '10 km kostenlose Anfahrt',
]

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/55 via-brand-black/72 to-brand-black/92" />

      {/* Hauptbereich: vertikal zentriert, luftig */}
      <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col items-center justify-center px-4 pb-6 pt-28 md:pt-32">
        <div
          className="w-full max-w-xl md:max-w-2xl"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          <div className="flex flex-col items-center text-center">
            <Image
              src="/logo.png"
              alt="VOGT Gebäudereinigung"
              width={720}
              height={258}
              priority
              className="mx-auto h-auto w-full max-w-[min(100%,500px)] md:max-w-[min(100%,600px)] lg:max-w-[min(100%,660px)]"
              style={{ filter: 'drop-shadow(0 0 40px rgba(19,88,160,0.35))' }}
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 560px, 600px"
            />

            <a
              href="#kontakt"
              className="mt-10 w-full max-w-xs rounded-lg bg-brand-blue px-7 py-3.5 text-center text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-blueMid hover:shadow-lg hover:shadow-brand-blue/30 md:mt-12 md:max-w-sm md:text-base"
            >
              Kostenloses Angebot sichern →
            </a>
          </div>
        </div>
      </div>

      {/* Untere Leiste: alles als Pills / Bubbles (kein Trennstrich) */}
      <div className="relative z-10 mt-2 w-full shrink-0 bg-gradient-to-b from-transparent to-black/25 px-4 pb-24 pt-10 md:mt-4 md:px-6 md:pb-28 md:pt-12">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 md:gap-3.5">
          <h1 className="inline-flex max-w-[min(100%,28rem)] items-center justify-center text-balance rounded-full border border-white/[0.1] bg-white/[0.035] px-3.5 py-2 text-center text-xs font-normal tracking-wide text-brand-silver/90 shadow-[0_0_24px_-10px_rgba(37,121,212,0.2)] backdrop-blur-sm md:max-w-none md:px-4 md:py-2.5 md:text-sm">
            Für Privat &amp; Gewerbe, Pforzheim, Karlsruhe &amp; Enzkreis.
          </h1>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 md:gap-3.5">
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
    </section>
  )
}
