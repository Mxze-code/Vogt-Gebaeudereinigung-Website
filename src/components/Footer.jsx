import Image from 'next/image'
import Link from 'next/link'
import { Mail, MessageCircle, Phone, MapPin } from 'lucide-react'
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  PHONE_CALL_DISPLAY,
  PHONE_CALL_TEL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '@/constants/contact'

const navLinks = [
  { href: '/', label: 'Das Wichtigste im Überblick' },
  { href: '/leistungen-und-preise', label: 'Preise & Leistungen' },
  { href: '/kontakt', label: 'Kontakt / Über uns' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-brand-deep border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="block h-10 w-fit shrink-0" aria-label="Zur Startseite">
              <Image
                src="/logo.png"
                alt="VOGT Gebäudereinigung"
                width={180}
                height={60}
                className="h-full w-auto max-w-none object-contain object-left"
              />
            </Link>
            <p className="text-brand-gray text-sm leading-relaxed max-w-xs">
              Professionelle Gebäudereinigung für Gewerbe und Privat – zuverlässig, gründlich, regional.
            </p>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-brand-silverL text-sm mb-4 uppercase tracking-wider">
              Seiten
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-gray hover:text-brand-silverL text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-brand-silverL text-sm mb-4 uppercase tracking-wider">
              Kontakt
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-brand-gray text-sm">
                <Mail size={14} className="mt-0.5 flex-shrink-0 text-brand-gray" />
                <a href={CONTACT_MAILTO} className="hover:text-brand-silverL transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <p className="text-brand-gray text-xs uppercase tracking-wider mb-0.5">Telefon · Anrufe</p>
                <a
                  href={PHONE_CALL_TEL}
                  className="flex items-center gap-2 text-brand-silverL text-sm hover:text-white transition-colors"
                >
                  <Phone size={14} className="flex-shrink-0 text-brand-blueLight" />
                  {PHONE_CALL_DISPLAY}
                </a>
              </li>
              <li>
                <p className="text-brand-gray text-xs uppercase tracking-wider mb-0.5">WhatsApp · Nachrichten</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#25d366] text-sm hover:underline"
                >
                  <MessageCircle size={14} className="flex-shrink-0" />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2 text-brand-gray text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>Weißhoferstraße 62/1, 75015 Bretten</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.04] py-5 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-brand-gray text-xs">
          <p>© {year} VOGT Gebäudereinigung – Alle Rechte vorbehalten</p>
          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-brand-silverL transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-brand-silverL transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
