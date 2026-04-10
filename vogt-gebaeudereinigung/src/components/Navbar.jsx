'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navSections = [
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'uber-uns', label: 'Über uns' },
  { id: 'ablauf', label: 'Ablauf' },
  { id: 'preise', label: 'Preise' },
  { id: 'einsatzgebiet', label: 'Einsatzgebiet' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  /** Auf der Startseite: Anker; sonst: Startseite + Anker (z. B. von /impressum) */
  const sectionHref = (id) => (pathname === '/' ? `#${id}` : `/#${id}`)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-black/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo → Startseite */}
        <Link
          href="/"
          className="flex h-12 w-fit shrink-0 items-center"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="VOGT Gebäudereinigung"
            width={180}
            height={60}
            className="h-full w-auto max-w-none object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navSections.map((link) => (
            <Link
              key={link.id}
              href={sectionHref(link.id)}
              className="text-sm text-brand-silverDark hover:text-brand-silverLL transition-colors duration-200 whitespace-nowrap shrink-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={sectionHref('kontakt')}
            className="ml-2 px-5 py-2 rounded-lg bg-brand-blue hover:bg-brand-blueMid text-white text-sm font-medium transition-colors duration-200"
          >
            Jetzt anfragen
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-brand-silverL"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-deep/98 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {navSections.map((link) => (
            <Link
              key={link.id}
              href={sectionHref(link.id)}
              className="text-brand-silverL text-base"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={sectionHref('kontakt')}
            className="mt-2 rounded-lg bg-brand-blue px-5 py-3 text-center text-base font-medium text-white transition-colors duration-200 hover:bg-brand-blueMid"
            onClick={() => setMenuOpen(false)}
          >
            Jetzt anfragen
          </Link>
        </div>
      )}
    </header>
  )
}
