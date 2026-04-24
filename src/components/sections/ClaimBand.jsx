'use client'

import { motion } from 'framer-motion'

/**
 * Typografisches Statement direkt unter dem Hero — volle Breite, ohne Icons/CTAs.
 */
export default function ClaimBand() {
  return (
    <section
      className="w-full bg-[#0f1420] py-24 md:py-32"
      aria-labelledby="claim-band-heading"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="claim-band-heading"
            className="font-serif text-5xl font-normal leading-[1.15] text-white md:text-6xl lg:text-7xl"
          >
            Saubere Räume sind kein Luxus —
            <br />
            sondern die Grundlage für alles andere.
          </h2>
          <p className="mt-10 text-[11px] font-normal uppercase tracking-[0.2em] text-slate-500 md:mt-12">
            Vogt Gebäudereinigung · Bretten · seit 2023
          </p>
        </motion.div>
      </div>
    </section>
  )
}
