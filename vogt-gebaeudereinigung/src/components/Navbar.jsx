'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Das Wichtigste im Überblick' },
  { href: '/leistungen-und-preise', label: 'Preise & Leistungen' },
  { href: '/kontakt', label: 'Kontakt / Über uns' },
]

export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!isHome) return
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [isHome])

  const navSolid = !isHome || scrolled

  const linkClass = (href) => {
    const active =
      href === '/'
        ? pathname === '/'
        : pathname === href || pathname.startsWith(`${href}/`)
    return [
      'text-sm transition-colors duration-200 whitespace-nowrap shrink-0 rounded px-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blueLight/50',
      active
        ? 'text-brand-silverLL font-semibold'
        : 'text-brand-silverDark hover:text-brand-silverLL',
    ].join(' ')
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        navSolid
          ? 'bg-brand-black/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
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

        <nav className="hidden lg:flex items-center gap-3 xl:gap-4">
          <div className="flex items-center gap-4 xl:gap-6 rounded-full border border-white/[0.08] bg-brand-black/55 px-4 py-2 shadow-sm backdrop-blur-md">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/kontakt#kontakt"
            className="btn-primary px-5 py-2.5"
          >
            Jetzt anfragen
          </Link>
        </nav>

        <button
          className="lg:hidden text-brand-silverL"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-brand-deep/98 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClass(link.href)}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt#kontakt"
            className="btn-primary mt-2 text-base"
            onClick={() => setMenuOpen(false)}
          >
            Jetzt anfragen
          </Link>
        </div>
      )}
    </header>
  )
}
