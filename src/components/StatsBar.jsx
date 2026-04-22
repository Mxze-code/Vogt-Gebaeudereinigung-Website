'use client'

import ScrollReveal from '@/components/ScrollReveal'

const stats = [
  { value: '100%', label: 'Zufriedenheitsgarantie' },
  { value: '6', label: 'Leistungsbereiche' },
  { value: '10km', label: 'Kostenlose Anfahrt' },
  { value: '24h', label: 'Antwortzeit' },
]

export default function StatsBar() {
  return (
    <section className="relative surface-texture-stats border-b border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-8 md:py-7">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-0">
          {stats.map((stat, i) => (
            <ScrollReveal
              key={stat.label}
              yFrom={20}
              staggerIndex={i}
              staggerStep={0.1}
              duration={0.5}
              className="relative flex flex-col items-center text-center"
            >
              {/* Divider (desktop only) */}
              {i > 0 && (
                <div className="absolute left-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-white/10 md:block" />
              )}
              <span className="font-montserrat text-3xl font-extrabold text-silver-gradient md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-brand-gray">{stat.label}</span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
