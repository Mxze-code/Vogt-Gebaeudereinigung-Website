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
      'text-[13px] tracking-[0.005em] transition-colors duration-200 whitespace-nowrap shrink-0 rounded px-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blueLight/40',
      active
        ? 'text-brand-silverLL'
        : 'text-brand-silver/80 hover:text-brand-silverLL',
    ].join(' ')
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        navSolid
          ? 'border-b border-white/[0.04] bg-brand-black/65 py-3 backdrop-blur-[10px]'
          : 'border-b border-transparent bg-transparent py-5'
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-6 px-4 md:px-8">
        <Link
          href="/"
          className="flex h-10 w-fit shrink-0 items-center md:h-11"
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

        <nav className="hidden items-center justify-center gap-9 lg:flex xl:gap-12">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Link
            href="/kontakt#kontakt"
            className="inline-flex items-center justify-center rounded-lg bg-brand-blue px-4 py-2 text-[0.8rem] font-semibold tracking-[0.005em] text-white shadow-[0_6px_18px_-12px_rgba(19,88,160,0.75)] transition-colors duration-200 hover:bg-brand-blueMid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blueLight/40"
          >
            Jetzt anfragen
          </Link>
        </div>

        <button
          className="justify-self-end text-brand-silverL transition-colors hover:text-brand-silverLL lg:hidden"
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
