'use client'

import ScrollReveal from '@/components/ScrollReveal'

const stats = [
  { value: '100%', label: 'Zufriedenheitsgarantie' },
  { value: '6',    label: 'Leistungsbereiche' },
  { value: '10km', label: 'Kostenlose Anfahrt' },
  { value: '24h',  label: 'Antwortzeit' },
]

export default function StatsBar() {
  return (
    <section className="relative surface-texture-stats border-t border-white/[0.06] border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-7">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
          {stats.map((stat, i) => (
            <ScrollReveal
              key={stat.label}
              yFrom={20}
              staggerIndex={i}
              staggerStep={0.1}
              duration={0.5}
              className="flex flex-col items-center text-center relative"
            >
              {/* Divider (desktop only) */}
              {i > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/10" />
              )}
              <span className="font-montserrat font-extrabold text-3xl md:text-4xl text-silver-gradient">
                {stat.value}
              </span>
              <span className="mt-1 text-brand-gray text-sm">{stat.label}</span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
