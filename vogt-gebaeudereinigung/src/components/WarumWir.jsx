'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Star, Clock, Euro, ThumbsUp, MapPin } from 'lucide-react'

const gruende = [
  { icon: CheckCircle, title: 'Zuverlässigkeit',     desc: 'Pünktliche Termine, konsequente Ausführung – Sie können sich auf uns verlassen, jedes Mal.' },
  { icon: Star,        title: 'Gründliche Arbeit',   desc: 'Wir reinigen nicht nur oberflächlich – wir sorgen für echte Sauberkeit bis in jede Ecke.' },
  { icon: Clock,       title: 'Flexible Termine',    desc: 'Früh, spät, am Wochenende – wir passen uns Ihrem Zeitplan an, nicht umgekehrt.' },
  { icon: Euro,        title: 'Faire Preise',         desc: 'Transparente Angebote ohne versteckte Kosten. Qualität muss kein Vermögen kosten.' },
  { icon: ThumbsUp,    title: 'Persönlicher Service', desc: 'Direkte Kommunikation, feste Ansprechpartner – kein Callcenter, kein Anonymität.' },
  { icon: MapPin,      title: 'Regionale Nähe',       desc: 'Wir kommen aus Bretten und kennen die Region. Kurze Wege, schnelle Reaktionszeiten.' },
]

export default function WarumWir() {
  return (
    <section id="warum-wir" className="py-20 bg-brand-deep section-atmosphere section-glow-right">
      <div className="section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brand-blueLight text-sm font-medium tracking-widest uppercase mb-3">
            Unser Versprechen
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
            Warum VOGT?
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gruende.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-base p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={18} className="text-brand-blueLight" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-brand-silverLL text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Review Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 p-6 md:p-8 rounded-2xl bg-brand-navy/60 border border-brand-blue/20 text-center"
        >
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <blockquote className="text-brand-silverL text-base md:text-lg italic leading-relaxed max-w-2xl mx-auto mb-4">
            „Sehr zuverlässig und gründlich. Büro glänzt nach jedem Besuch – kann ich nur empfehlen!"
          </blockquote>
          <p className="text-brand-gray text-sm">– Zufriedener Kunde aus Bretten</p>
          <p className="text-brand-gray/50 text-xs mt-3">Google Reviews kommen bald</p>
        </motion.div>
      </div>
    </section>
  )
}
