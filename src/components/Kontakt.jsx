'use client'

import { useState, useEffect } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import { useForm } from 'react-hook-form'
import { Mail, MessageCircle, Phone, MapPin, CheckCircle, Loader2 } from 'lucide-react'
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  PHONE_CALL_DISPLAY,
  PHONE_CALL_TEL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '@/constants/contact'

const leistungLabels = {
  buero: 'Büroreinigung',
  firma: 'Firmenreinigung',
  treppenhaus: 'Treppenhausreinigung',
  sonder: 'Sonderreinigung',
  sonstiges: 'Sonstiges',
}

export default function Kontakt() {
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm()

  // Auto-select service if coming from a Leistungen card
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const preselect = sessionStorage.getItem('vogt_preselect_leistung')
      if (preselect) {
        setValue('leistung', preselect)
        sessionStorage.removeItem('vogt_preselect_leistung')
      }
    }
  }, [setValue])

  const onSubmit = (data) => {
    setStatus('sending')

    // Build a mailto: link so the user's email client opens with a pre-filled message.
    // Replace with a real API call (Resend, Formspree, etc.) once the domain is live.
    const leistungText = data.leistung ? leistungLabels[data.leistung] || data.leistung : 'Nicht angegeben'
    const body = [
      `Name: ${data.name}`,
      `E-Mail: ${data.email}`,
      `Telefon: ${data.telefon || 'Nicht angegeben'}`,
      `Gewünschte Leistung: ${leistungText}`,
      '',
      `Nachricht:`,
      data.nachricht,
    ].join('\n')

    const subject = encodeURIComponent(`Anfrage von ${data.name} – VOGT Gebäudereinigung`)
    const bodyEncoded = encodeURIComponent(body)
    const mailtoLink = `${CONTACT_MAILTO}?subject=${subject}&body=${bodyEncoded}`

    // Open the mail client
    window.open(mailtoLink, '_blank')

    // Brief delay then show success
    setTimeout(() => {
      setStatus('sent')
      reset()
    }, 800)
  }

  return (
    <section id="kontakt" className="scroll-mt-20 py-12 md:py-14 bg-brand-deep">
      <div className="section-padding">
        {/* Header */}
        <ScrollReveal
          yFrom={24}
          duration={0.6}
          className="mb-8 text-center"
        >
          <p className="section-eyebrow mb-3">
            Kontakt
          </p>
          <h2 className="section-title-lg text-silver-gradient">
            Direkt mit uns sprechen
          </h2>
          <p className="section-copy-sm mx-auto mt-3 max-w-xl">
            Sie erreichen uns telefonisch, per E-Mail oder ganz unkompliziert über das
            Kontaktformular.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Left: Contact options */}
          <ScrollReveal
            axis="x"
            xFrom={-24}
            duration={0.6}
            className="flex flex-col gap-5"
          >
            <h3 className="font-montserrat font-semibold text-brand-silverLL text-xl mb-2">
              So erreichen Sie uns
            </h3>

            {/* Telefon – nur Anrufe */}
            <a
              href={PHONE_CALL_TEL}
              className="flex items-start gap-4 p-5 rounded-2xl bg-brand-navy/60 border border-brand-blue/25 hover:border-brand-blue/50 hover:bg-brand-navy/80 transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-blue/20 border border-brand-blue/35 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue/30 transition-colors">
                <Phone size={20} className="text-brand-blueLight" />
              </div>
              <div>
                <p className="text-brand-silverLL font-semibold mb-0.5">Telefon</p>
                <p className="text-brand-gray text-xs mb-1.5">Für Anrufe</p>
                <p className="text-brand-blueLight text-base font-medium">{PHONE_CALL_DISPLAY}</p>
                <p className="text-brand-gray text-xs mt-1">Zum Wählen tippen (Handy)</p>
              </div>
            </a>

            {/* WhatsApp – nur Chat, keine Anrufnummer */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-2xl bg-[#25d366]/10 border border-[#25d366]/40 hover:bg-[#25d366]/18 hover:border-[#25d366]/70 transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#25d366]/20 border border-[#25d366]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25d366]/30 transition-colors">
                <MessageCircle size={20} className="text-[#25d366]" />
              </div>
              <div>
                <p className="text-brand-silverLL font-semibold mb-0.5">WhatsApp</p>
                <p className="text-brand-gray text-xs mb-1.5">Für Nachrichten</p>
                <p className="text-[#25d366] text-base font-medium">{WHATSAPP_DISPLAY}</p>
                <p className="text-brand-gray text-xs mt-1">Öffnet WhatsApp – nicht zum Anrufen ↗</p>
              </div>
            </a>

            {/* E-Mail */}
            <a
              href={CONTACT_MAILTO}
              className="flex items-start gap-4 p-5 rounded-2xl bg-brand-navy/60 border border-white/5 hover:border-brand-blue/30 hover:bg-brand-navy/80 transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-brand-blueLight" />
              </div>
              <div>
                <p className="text-brand-silverLL font-semibold mb-0.5">E-Mail</p>
                <p className="text-brand-blueLight text-sm">{CONTACT_EMAIL}</p>
                <p className="text-brand-gray text-xs mt-1">Antwort innerhalb von 24h</p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-brand-navy/60 border border-white/5">
              <div className="w-11 h-11 rounded-xl bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-brand-blueLight" />
              </div>
              <div>
                <p className="text-brand-silverLL font-semibold mb-0.5">Standort</p>
                <p className="text-brand-silverL text-sm">Weißhoferstraße 62/1</p>
                <p className="text-brand-silverL text-sm">75015 Bretten</p>
              </div>
            </div>

          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal
            axis="x"
            xFrom={24}
            extraDelay={0.1}
            duration={0.6}
          >
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12 rounded-2xl bg-brand-navy/50 border border-brand-blue/20">
                <CheckCircle size={52} className="text-brand-blueLight" />
                <h3 className="font-montserrat font-bold text-brand-silverLL text-xl">
                  E-Mail geöffnet!
                </h3>
                <p className="text-brand-gray text-sm max-w-xs leading-relaxed">
                  Ihr E-Mail-Programm wurde geöffnet. Bitte senden Sie die vorausgefüllte Nachricht ab, um die Anfrage zu übermitteln. Alternativ können Sie uns auch direkt per WhatsApp schreiben.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 px-5 py-2.5 rounded-lg border border-brand-blue/40 text-brand-blueLight text-sm hover:bg-brand-blue/10 transition-colors"
                >
                  Weitere Anfrage senden
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 p-6 md:p-8 rounded-2xl bg-brand-navy/60 border border-white/[0.06]"
              >
                <h3 className="font-montserrat font-semibold text-brand-silverLL text-lg mb-1">
                  Schnell-Anfrage
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-brand-silverL text-sm font-medium">
                      Name <span className="text-brand-blueLight">*</span>
                    </label>
                    <input
                      {...register('name', { required: 'Name ist Pflichtfeld' })}
                      placeholder="Max Mustermann"
                      className={`px-4 py-3 rounded-xl bg-brand-navy2/80 border text-brand-silverLL placeholder-brand-gray text-sm outline-none focus:border-brand-blue/60 transition-colors ${
                        errors.name ? 'border-red-400/50' : 'border-white/5'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-red-400 text-xs">{errors.name.message}</span>
                    )}
                  </div>
                  {/* Telefon */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-brand-silverL text-sm font-medium">Telefon</label>
                    <input
                      {...register('telefon')}
                      placeholder="+49 7232 …"
                      className="px-4 py-3 rounded-xl bg-brand-navy2/80 border border-white/5 text-brand-silverLL placeholder-brand-gray text-sm outline-none focus:border-brand-blue/60 transition-colors"
                    />
                  </div>
                </div>

                {/* E-Mail */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-brand-silverL text-sm font-medium">
                    E-Mail <span className="text-brand-blueLight">*</span>
                  </label>
                  <input
                    {...register('email', {
                      required: 'E-Mail ist Pflichtfeld',
                      pattern: { value: /^\S+@\S+\.\S+$/i, message: 'Ungültige E-Mail-Adresse' },
                    })}
                    placeholder="ihre@email.de"
                    className={`px-4 py-3 rounded-xl bg-brand-navy2/80 border text-brand-silverLL placeholder-brand-gray text-sm outline-none focus:border-brand-blue/60 transition-colors ${
                      errors.email ? 'border-red-400/50' : 'border-white/5'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs">{errors.email.message}</span>
                  )}
                </div>

                {/* Leistung */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-brand-silverL text-sm font-medium">Gewünschte Leistung</label>
                  <select
                    {...register('leistung')}
                    className="px-4 py-3 rounded-xl bg-brand-navy2/80 border border-white/5 text-brand-silverLL text-sm outline-none focus:border-brand-blue/60 transition-colors cursor-pointer"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="buero">Büroreinigung</option>
                    <option value="firma">Firmenreinigung</option>
                    <option value="treppenhaus">Treppenhausreinigung</option>
                    <option value="sonder">Sonderreinigung</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                {/* Nachricht */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-brand-silverL text-sm font-medium">
                    Nachricht <span className="text-brand-blueLight">*</span>
                  </label>
                  <textarea
                    {...register('nachricht', { required: 'Bitte beschreiben Sie Ihren Bedarf' })}
                    placeholder="Beschreiben Sie kurz Ihren Bedarf, Ihre Fläche, gewünschten Termin..."
                    rows={4}
                    className={`px-4 py-3 rounded-xl bg-brand-navy2/80 border text-brand-silverLL placeholder-brand-gray text-sm outline-none focus:border-brand-blue/60 transition-colors resize-none ${
                      errors.nachricht ? 'border-red-400/50' : 'border-white/5'
                    }`}
                  />
                  {errors.nachricht && (
                    <span className="text-red-400 text-xs">{errors.nachricht.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-brand-blue hover:bg-brand-blueMid text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Wird geöffnet...
                    </>
                  ) : (
                    'Jetzt unverbindlich anfragen →'
                  )}
                </button>

                <div className="flex items-center justify-center gap-4 mt-1">
                  <span className="text-brand-gray text-xs">Oder direkt:</span>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#25d366] text-xs font-medium hover:underline"
                  >
                    <MessageCircle size={13} />
                    WhatsApp
                  </a>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
