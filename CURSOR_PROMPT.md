# VOGT GEBÄUDEREINIGUNG – CURSOR BUILD PROMPT
> **Trigger:** Sobald du in Cursor „starte das bauen" tippst, führe ALLES hier aus – vollständig, ohne Rückfragen.

---

## 🚀 AUFGABE

Baue eine komplette, professionelle One-Page-Website für das Unternehmen **VOGT Gebäudereinigung**.
Alle Inhalte, Farben, Texte und Sektionen sind in diesem Prompt vollständig definiert.
Erstelle alle notwendigen Dateien und starte automatisch einen lokalen Dev-Server.

---

## 🛠 TECH STACK

- **Framework:** Next.js 14 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Animationen:** Framer Motion
- **Icons:** Lucide React
- **Formular:** React Hook Form
- **Font:** Google Fonts – `Inter` (Body) + `Montserrat` (Headlines)

---

## 📁 PROJEKT SETUP – AUSFÜHREN IN DIESER REIHENFOLGE

```bash
npx create-next-app@latest vogt-website --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes
cd vogt-website
npm install framer-motion lucide-react react-hook-form @hookform/resolvers zod
npm install -D @types/node
```

Danach alle Dateien wie unten beschrieben erstellen und `npm run dev` starten.

---

## 🎨 DESIGN SYSTEM

### Farben (in `tailwind.config.ts` eintragen)
```typescript
colors: {
  brand: {
    black:    '#07090f',   // Tiefschwarz (Logo-Hintergrund)
    navy:     '#0d1b2e',   // Dunkles Marineblau
    blue:     '#1a5fa8',   // Primärblau (Logo)
    blueLight:'#2979c8',   // Helleres Blau für Hover
    silver:   '#c8cdd6',   // Silber (Logo-Schrift)
    silverLight:'#e8ebf0', // Helles Silber
    white:    '#ffffff',
    gray:     '#8a9ab0',
    grayLight:'#f0f3f7',
  }
}
```

### Typografie
- Headlines: `font-montserrat font-bold`
- Body: `font-inter`
- Gradient-Text für Highlights: `bg-gradient-to-r from-brand-blue to-brand-silver bg-clip-text text-transparent`

### Globales Styling (`globals.css`)
```css
html { scroll-behavior: smooth; }
body { background-color: #07090f; color: #e8ebf0; font-family: 'Inter', sans-serif; }
.section-padding { @apply py-20 px-4 md:px-8 lg:px-16; }
.container-max { @apply max-w-6xl mx-auto; }
```

---

## 📂 DATEISTRUKTUR

```
vogt-website/
├── public/
│   ├── logo.png              ← Logo-Datei (aus assets/ Ordner kopieren)
│   ├── hero-bg.jpg           ← Hintergrundbild (Unsplash: modern office building)
│   └── cleaning-*.jpg        ← 3 Reinigungsbilder (Unsplash)
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Leistungen.tsx
│       ├── WarumWir.tsx
│       ├── Preise.tsx
│       ├── Ablauf.tsx
│       ├── Einsatzgebiet.tsx
│       ├── Kontakt.tsx
│       └── Footer.tsx
└── tailwind.config.ts
```

---

## 📝 VOLLSTÄNDIGER CODE ALLER KOMPONENTEN

---

### `src/app/layout.tsx`
```tsx
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: 'VOGT Gebäudereinigung – Professionelle Reinigung in Bretten, Pforzheim, Karlsruhe',
  description: 'Zuverlässige Gebäudereinigung für Gewerbe und Privathaushalt. Büroreinigung, Firmenreinigung, Haushaltsreinigung. Einsatzgebiet: Bretten, Pforzheim, Karlsruhe, Enzkreis und Umgebung.',
  keywords: 'Gebäudereinigung, Bretten, Pforzheim, Karlsruhe, Enzkreis, Büroreinigung, Firmenreinigung, Haushaltsreinigung',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-inter bg-brand-black text-brand-silverLight antialiased">
        {children}
      </body>
    </html>
  )
}
```

---

### `src/app/page.tsx`
```tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Leistungen from '@/components/Leistungen'
import WarumWir from '@/components/WarumWir'
import Ablauf from '@/components/Ablauf'
import Preise from '@/components/Preise'
import Einsatzgebiet from '@/components/Einsatzgebiet'
import Kontakt from '@/components/Kontakt'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Leistungen />
      <WarumWir />
      <Ablauf />
      <Preise />
      <Einsatzgebiet />
      <Kontakt />
      <Footer />
    </main>
  )
}
```

---

### `src/components/Navbar.tsx`
```tsx
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Warum Wir', href: '#warum-wir' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Preise', href: '#preise' },
  { label: 'Einsatzgebiet', href: '#einsatzgebiet' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-brand-black/95 backdrop-blur-md shadow-lg shadow-brand-blue/10 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container-max flex items-center justify-between px-4 md:px-8 lg:px-16">
        <Image src="/logo.png" alt="VOGT Gebäudereinigung" width={180} height={60} className="h-12 w-auto" />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              className="text-brand-silver hover:text-brand-blue transition-colors text-sm font-medium">
              {link.label}
            </a>
          ))}
          <a href="#kontakt"
            className="bg-brand-blue hover:bg-brand-blueLight text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg shadow-brand-blue/25">
            Jetzt anfragen
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-brand-silver" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-navy/98 backdrop-blur-md px-4 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="text-brand-silver hover:text-brand-blue transition-colors py-2 border-b border-white/5">
              {link.label}
            </a>
          ))}
          <a href="#kontakt" onClick={() => setMenuOpen(false)}
            className="bg-brand-blue text-white px-5 py-3 rounded-lg font-semibold text-center mt-2">
            Jetzt anfragen
          </a>
        </div>
      )}
    </nav>
  )
}
```

---

### `src/components/Hero.tsx`
```tsx
'use client'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-navy to-brand-black" />
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10" />

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'linear-gradient(#1a5fa8 1px, transparent 1px), linear-gradient(90deg, #1a5fa8 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-blue/5 rounded-full blur-2xl" />

      <div className="relative z-10 container-max text-center px-4 md:px-8 pt-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block bg-brand-blue/15 border border-brand-blue/30 text-brand-blue text-sm font-semibold px-4 py-2 rounded-full mb-6 tracking-wide uppercase">
            ✦ Professionelle Gebäudereinigung
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Sauberkeit, die
          <span className="block bg-gradient-to-r from-brand-blue via-brand-silver to-brand-blue bg-clip-text text-transparent">
            überzeugt.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="text-brand-silver text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Zuverlässige Gebäudereinigung für Gewerbe & Privat in der Region Bretten, Pforzheim, Karlsruhe und Enzkreis.
          Gründliche Arbeit. Faire Preise. Flexible Termine.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#kontakt"
            className="group bg-brand-blue hover:bg-brand-blueLight text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-xl shadow-brand-blue/30 flex items-center justify-center gap-2">
            Jetzt Anfrage senden
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="tel:+49XXXXXXXXXX"
            className="border border-brand-blue/40 hover:border-brand-blue text-brand-silverLight hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2">
            📞 Direkt anrufen
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-brand-silver">
          {['Zuverlässig & pünktlich', 'Flexible Termine', 'Faire Preise', '10 km kostenlose Anfahrt'].map(badge => (
            <span key={badge} className="flex items-center gap-2">
              <CheckCircle size={16} className="text-brand-blue" />
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-silver/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
```

---

### `src/components/Leistungen.tsx`
```tsx
'use client'
import { motion } from 'framer-motion'
import { Building2, Briefcase, Home, Sparkles, Shield, Clock } from 'lucide-react'

const leistungen = [
  {
    icon: Briefcase,
    titel: 'Büroreinigung',
    beschreibung: 'Professionelle Reinigung von Büroräumen, Konferenzräumen und Gemeinschaftsbereichen. Diskret, gründlich und auf Ihre Arbeitszeiten abgestimmt.',
    details: ['Böden & Teppiche', 'Schreibtische & Oberflächen', 'Sanitäranlagen', 'Küche & Pausenräume'],
  },
  {
    icon: Building2,
    titel: 'Firmenreinigung',
    beschreibung: 'Umfassende Reinigungslösungen für Betriebe, Produktionshallen, Lagerflächen und Gewerbeobjekte jeder Größe.',
    details: ['Hallen & Produktionsflächen', 'Eingangsbereiche & Treppenhäuser', 'Fenster & Glasflächen', 'Außenanlagen'],
  },
  {
    icon: Home,
    titel: 'Privathaushalt',
    beschreibung: 'Regelmäßige Haushaltsreinigung oder Einmalreinigungen – für Ihr Zuhause, damit Sie sich auf das Wesentliche konzentrieren können.',
    details: ['Wohnungsreinigung', 'Endreinigung / Umzugsreinigung', 'Fensterreinigung', 'Frühjahrsputz'],
  },
  {
    icon: Sparkles,
    titel: 'Sonderreinigung',
    beschreibung: 'Tiefenreinigung, Baureinigung, Grundreinigung oder spezielle Reinigungsaufgaben auf Anfrage.',
    details: ['Baureinigung nach Renovierung', 'Grundreinigung & Tiefenreinigung', 'Polsterreinigung', 'Notfallreinigung'],
  },
  {
    icon: Shield,
    titel: 'Treppenhausreinigung',
    beschreibung: 'Regelmäßige Pflege von Treppenhäusern, Fluren und Gemeinschaftsflächen in Wohn- und Geschäftshäusern.',
    details: ['Wischpflege & Desinfektion', 'Briefkästen & Türen', 'Kellergang & Aufzug', 'Wöchentlich bis monatlich'],
  },
  {
    icon: Clock,
    titel: 'Regelmäßige Reinigung',
    beschreibung: 'Legen Sie einen festen Rhythmus fest – täglich, wöchentlich oder monatlich. Wir kommen zuverlässig zum vereinbarten Termin.',
    details: ['Feste Reinigungsintervalle', 'Vertrauensvolles Personal', 'Schlüsselübergabe möglich', 'Flexible Anpassung'],
  },
]

export default function Leistungen() {
  return (
    <section id="leistungen" className="section-padding bg-brand-navy/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <span className="text-brand-blue text-sm font-semibold uppercase tracking-widest">Was wir tun</span>
          <h2 className="font-montserrat text-3xl md:text-5xl font-bold mt-3 mb-4">Unsere Leistungen</h2>
          <p className="text-brand-silver max-w-2xl mx-auto text-lg">
            Von der regelmäßigen Büroreinigung bis zur Sonderreinigung – wir haben die richtige Lösung für jeden Bedarf.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leistungen.map((item, i) => (
            <motion.div
              key={item.titel}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group bg-brand-black/60 border border-white/5 hover:border-brand-blue/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/10">
              <div className="w-12 h-12 bg-brand-blue/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-blue/25 transition-colors">
                <item.icon size={24} className="text-brand-blue" />
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-3 text-brand-silverLight">{item.titel}</h3>
              <p className="text-brand-silver text-sm leading-relaxed mb-4">{item.beschreibung}</p>
              <ul className="space-y-1">
                {item.details.map(d => (
                  <li key={d} className="text-xs text-brand-gray flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-blue rounded-full flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center mt-12">
          <a href="#kontakt"
            className="bg-brand-blue hover:bg-brand-blueLight text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 shadow-lg shadow-brand-blue/25">
            Kostenlos anfragen →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
```

---

### `src/components/WarumWir.tsx`
```tsx
'use client'
import { motion } from 'framer-motion'
import { CheckCircle2, Clock, Banknote, ThumbsUp, Star, MapPin } from 'lucide-react'

const gruende = [
  { icon: CheckCircle2, titel: 'Zuverlässigkeit', text: 'Wir erscheinen pünktlich zum vereinbarten Termin – ohne Ausreden. Auf uns können Sie sich verlassen.' },
  { icon: Star, titel: 'Gründliche Arbeit', text: 'Jedes Detail zählt. Wir reinigen so, wie wir es für uns selbst erwarten würden – kompromisslos gründlich.' },
  { icon: Clock, titel: 'Flexible Termine', text: 'Früh morgens, abends, am Wochenende – wir passen uns Ihren Zeiten an, nicht umgekehrt.' },
  { icon: Banknote, titel: 'Faire Preise', text: 'Transparente Preisgestaltung ohne versteckte Kosten. Sie wissen vorher genau, was Sie bezahlen.' },
  { icon: ThumbsUp, titel: 'Persönlicher Service', text: 'Kein Callcenter, kein Durchstellen. Sie erreichen uns direkt und bekommen schnelle Antworten.' },
  { icon: MapPin, titel: 'Regionale Nähe', text: 'Als lokales Unternehmen kennen wir die Region und sind schnell bei Ihnen – kurze Wege, schnelle Reaktion.' },
]

export default function WarumWir() {
  return (
    <section id="warum-wir" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <span className="text-brand-blue text-sm font-semibold uppercase tracking-widest">Unser Versprechen</span>
          <h2 className="font-montserrat text-3xl md:text-5xl font-bold mt-3 mb-4">Warum VOGT?</h2>
          <p className="text-brand-silver max-w-2xl mx-auto text-lg">
            Wir sind nicht einfach ein Reinigungsunternehmen. Wir sind Ihr verlässlicher Partner für Sauberkeit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {gruende.map((g, i) => (
            <motion.div
              key={g.titel}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-6 bg-gradient-to-br from-brand-navy/50 to-brand-black/80 border border-white/5 rounded-2xl hover:border-brand-blue/30 transition-all duration-300">
              <div className="w-10 h-10 bg-brand-blue/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <g.icon size={20} className="text-brand-blue" />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-brand-silverLight mb-2">{g.titel}</h3>
                <p className="text-brand-silver text-sm leading-relaxed">{g.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-blue/10 to-brand-navy/50 border border-brand-blue/20 rounded-2xl p-8 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />)}
          </div>
          <p className="text-brand-silverLight text-lg italic mb-4 max-w-2xl mx-auto">
            „Wir sind seit über einem Jahr Kunde bei VOGT Gebäudereinigung und sind rundum zufrieden.
            Pünktlich, gründlich und immer freundlich. Absolute Empfehlung!"
          </p>
          <p className="text-brand-gray text-sm">– Kunde aus Bretten</p>
          <p className="text-brand-blue/50 text-xs mt-6 italic">Weitere Bewertungen folgen in Kürze</p>
        </motion.div>
      </div>
    </section>
  )
}
```

---

### `src/components/Ablauf.tsx`
```tsx
'use client'
import { motion } from 'framer-motion'
import { Send, MessageSquare, CalendarCheck, Sparkles } from 'lucide-react'

const schritte = [
  { nummer: '01', icon: Send, titel: 'Anfrage senden', text: 'Füllen Sie das Kontaktformular aus oder schreiben Sie uns direkt per WhatsApp. Wir antworten innerhalb von 24 Stunden.' },
  { nummer: '02', icon: MessageSquare, titel: 'Persönliche Abstimmung', text: 'Wir besprechen gemeinsam Ihren genauen Bedarf, die gewünschten Leistungen und erstellen ein individuelles Angebot.' },
  { nummer: '03', icon: CalendarCheck, titel: 'Termin vereinbaren', text: 'Sie wählen einen passenden Termin – wir sind flexibel und passen uns Ihren Zeiten an.' },
  { nummer: '04', icon: Sparkles, titel: 'Professionelle Durchführung', text: 'Unser Team führt die Reinigung gründlich und zuverlässig durch. Sie bekommen immer das Ergebnis, das Sie erwarten.' },
]

export default function Ablauf() {
  return (
    <section id="ablauf" className="section-padding bg-brand-navy/20">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <span className="text-brand-blue text-sm font-semibold uppercase tracking-widest">Einfach & klar</span>
          <h2 className="font-montserrat text-3xl md:text-5xl font-bold mt-3 mb-4">So läuft es ab</h2>
          <p className="text-brand-silver max-w-2xl mx-auto text-lg">
            Von der ersten Anfrage bis zur sauberen Umgebung – in 4 einfachen Schritten.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {schritte.map((schritt, i) => (
              <motion.div
                key={schritt.nummer}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="relative text-center">
                {/* Number circle */}
                <div className="relative z-10 w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-blue/30">
                  <schritt.icon size={28} className="text-white" />
                  <span className="absolute -top-2 -right-2 bg-brand-navy text-brand-blue text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border border-brand-blue/40">
                    {schritt.nummer.slice(1)}
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-3 text-brand-silverLight">{schritt.titel}</h3>
                <p className="text-brand-silver text-sm leading-relaxed">{schritt.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center mt-14">
          <a href="#kontakt"
            className="bg-brand-blue hover:bg-brand-blueLight text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-xl shadow-brand-blue/30">
            Jetzt Schritt 1 starten →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
```

---

### `src/components/Preise.tsx`
```tsx
'use client'
import { motion } from 'framer-motion'
import { CheckCircle, HelpCircle } from 'lucide-react'

// HINWEIS: Preise werden später eingefügt – aktuell als Platzhalter
const gewerbePakete = [
  {
    name: 'Starter',
    preis: 'auf Anfrage',
    beschreibung: 'Ideal für kleine Büros & Praxen',
    features: ['bis 100 m²', 'Wöchentliche Reinigung', 'Böden & Oberflächen', 'Sanitäranlagen', 'Auf Anfrage anpassbar'],
    highlight: false,
  },
  {
    name: 'Business',
    preis: 'auf Anfrage',
    beschreibung: 'Für mittelgroße Betriebe',
    features: ['100–500 m²', '2–3x pro Woche', 'Komplettpaket', 'Fensterreinigung inklusive', 'Fester Ansprechpartner'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    preis: 'auf Anfrage',
    beschreibung: 'Für große Objekte & Unternehmen',
    features: ['ab 500 m²', 'Täglich oder nach Bedarf', 'Individuelles Konzept', 'Qualitätskontrolle', 'Langzeitvertrag mit Vorzugspreisen'],
    highlight: false,
  },
]

const privatPakete = [
  {
    name: 'Einmalig',
    preis: 'auf Anfrage',
    beschreibung: 'Frühjahrsputz, Endreinigung & Co.',
    features: ['Alle Zimmer', 'Küche & Bad intensiv', 'Fenster optional', 'Kein Abo nötig'],
    highlight: false,
  },
  {
    name: 'Regelmäßig',
    preis: 'auf Anfrage',
    beschreibung: 'Wöchentlich oder 14-tägig',
    features: ['Fester Termin', 'Vertrautes Personal', 'Flexibel pausierbar', 'Schlüsselübergabe möglich'],
    highlight: true,
  },
]

function PaketKarte({ p }: { p: typeof gewerbePakete[0] }) {
  return (
    <div className={`relative rounded-2xl p-6 border transition-all duration-300 ${
      p.highlight
        ? 'bg-brand-blue/15 border-brand-blue shadow-xl shadow-brand-blue/20'
        : 'bg-brand-black/60 border-white/5 hover:border-brand-blue/30'
    }`}>
      {p.highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-xs font-bold px-4 py-1 rounded-full">
          Empfohlen
        </span>
      )}
      <h3 className="font-montserrat font-bold text-xl mb-1">{p.name}</h3>
      <p className="text-brand-silver text-sm mb-3">{p.beschreibung}</p>
      <p className="font-montserrat font-bold text-2xl text-brand-blue mb-5">{p.preis}</p>
      <ul className="space-y-2">
        {p.features.map(f => (
          <li key={f} className="flex items-center gap-2 text-sm text-brand-silverLight">
            <CheckCircle size={15} className="text-brand-blue flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <a href="#kontakt"
        className={`mt-6 block w-full text-center py-3 rounded-xl font-semibold transition-all duration-200 text-sm ${
          p.highlight
            ? 'bg-brand-blue hover:bg-brand-blueLight text-white'
            : 'border border-brand-blue/40 hover:border-brand-blue text-brand-silverLight hover:text-white'
        }`}>
        Jetzt anfragen
      </a>
    </div>
  )
}

export default function Preise() {
  return (
    <section id="preise" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <span className="text-brand-blue text-sm font-semibold uppercase tracking-widest">Transparent & fair</span>
          <h2 className="font-montserrat text-3xl md:text-5xl font-bold mt-3 mb-4">Unsere Preise</h2>
          <p className="text-brand-silver max-w-2xl mx-auto text-lg">
            Keine versteckten Kosten. Kein Kleingedrucktes. Gerne erstellen wir Ihnen ein individuelles Angebot.
          </p>
        </motion.div>

        {/* Gewerbe */}
        <div className="mb-14">
          <h3 className="font-montserrat font-bold text-2xl mb-2 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-brand-blue" />
            Gewerbe & Unternehmen
          </h3>
          <p className="text-brand-silver mb-6 text-sm">Für Büros, Betriebe, Praxen und Gewerbeobjekte</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gewerbePakete.map(p => <PaketKarte key={p.name} p={p} />)}
          </div>
        </div>

        {/* Privathaushalt */}
        <div className="mb-10">
          <h3 className="font-montserrat font-bold text-2xl mb-2 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-brand-blue" />
            Privathaushalt
          </h3>
          <p className="text-brand-silver mb-6 text-sm">Für Wohnungen, Häuser und private Objekte</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            {privatPakete.map(p => <PaketKarte key={p.name} p={p} />)}
          </div>
        </div>

        {/* Anfahrtskosten Hinweis */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="bg-brand-navy/40 border border-brand-blue/20 rounded-2xl p-6 flex gap-4 items-start">
          <HelpCircle size={22} className="text-brand-blue flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-brand-silverLight mb-1">Anfahrtskosten</p>
            <p className="text-brand-silver text-sm">
              Innerhalb von <strong className="text-brand-silverLight">10 km rund um Bretten</strong> ist die Anfahrt für Sie <strong className="text-brand-blue">kostenlos</strong>.
              Für jeden weiteren Kilometer berechnen wir <strong className="text-brand-silverLight">0,50 €</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

---

### `src/components/Einsatzgebiet.tsx`
```tsx
'use client'
import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'

const staedte = [
  { name: 'Bretten', beschreibung: 'Hauptstandort & Zentrum', highlight: true },
  { name: 'Pforzheim', beschreibung: 'ca. 20 km entfernt', highlight: false },
  { name: 'Karlsruhe', beschreibung: 'ca. 30 km entfernt', highlight: false },
  { name: 'Enzkreis', beschreibung: 'Gesamter Landkreis', highlight: false },
  { name: 'Kraichgau', beschreibung: 'Region & Umland', highlight: false },
  { name: 'Umgebung', beschreibung: 'Auf Anfrage', highlight: false },
]

export default function Einsatzgebiet() {
  return (
    <section id="einsatzgebiet" className="section-padding bg-brand-navy/20">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <span className="text-brand-blue text-sm font-semibold uppercase tracking-widest">Wo wir aktiv sind</span>
          <h2 className="font-montserrat text-3xl md:text-5xl font-bold mt-3 mb-4">Unser Einsatzgebiet</h2>
          <p className="text-brand-silver max-w-2xl mx-auto text-lg">
            Wir sind in der gesamten Region für Sie da – schnell, zuverlässig und ohne lange Wartezeiten.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative bg-brand-navy/40 border border-brand-blue/20 rounded-2xl overflow-hidden aspect-square max-w-md mx-auto lg:max-w-none">
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
              <div className="w-24 h-24 bg-brand-blue/20 rounded-full flex items-center justify-center">
                <MapPin size={40} className="text-brand-blue" />
              </div>
              <p className="text-brand-silver text-center px-8">
                Hauptstandort: <strong className="text-brand-silverLight">Bretten</strong><br />
                <span className="text-sm">10 km Umkreis kostenlose Anfahrt</span>
              </p>
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, #1a5fa8 0%, transparent 60%)',
              }} />
            </div>
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-48 h-48 border border-brand-blue/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
              <div className="absolute w-72 h-72 border border-brand-blue/10 rounded-full" />
            </div>
            <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-brand-gray">
              Kartenansicht in finaler Version integrierbar (Google Maps API)
            </p>
          </motion.div>

          {/* Stadt-Liste */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {staedte.map((stadt, i) => (
                <motion.div
                  key={stadt.name}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className={`p-4 rounded-xl border flex items-center gap-3 transition-all ${
                    stadt.highlight
                      ? 'bg-brand-blue/15 border-brand-blue text-brand-silverLight'
                      : 'bg-brand-black/60 border-white/5 hover:border-brand-blue/30'
                  }`}>
                  <MapPin size={18} className="text-brand-blue flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">{stadt.name}</p>
                    <p className="text-xs text-brand-gray">{stadt.beschreibung}</p>
                  </div>
                  {stadt.highlight && <span className="ml-auto text-xs bg-brand-blue/30 text-brand-blue px-2 py-0.5 rounded-full">Heimatort</span>}
                </motion.div>
              ))}
            </div>

            {/* Anfahrt Info */}
            <div className="bg-gradient-to-r from-brand-blue/10 to-transparent border border-brand-blue/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Navigation size={20} className="text-brand-blue" />
                <h3 className="font-montserrat font-bold text-brand-silverLight">Anfahrtskosten</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-brand-silver">Bis 10 km um Bretten</span>
                  <span className="font-bold text-brand-blue">KOSTENLOS ✓</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-brand-silver">Jeder weitere Kilometer</span>
                  <span className="font-semibold text-brand-silverLight">0,50 € / km</span>
                </div>
              </div>
              <p className="text-xs text-brand-gray mt-3">
                Bei regelmäßigen Aufträgen entfallen häufig Anfahrtskosten. Sprechen Sie uns an!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

---

### `src/components/Kontakt.tsx`
```tsx
'use client'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Phone, MessageCircle, Mail, Send, MapPin } from 'lucide-react'

type FormData = {
  name: string
  email: string
  telefon: string
  leistung: string
  nachricht: string
}

export default function Kontakt() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // TODO: Backend / E-Mail-Integration (z.B. Resend, Nodemailer, Formspree)
    console.log('Formular-Daten:', data)
    alert('Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.')
    reset()
  }

  return (
    <section id="kontakt" className="section-padding bg-gradient-to-b from-brand-navy/30 to-brand-black">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <span className="text-brand-blue text-sm font-semibold uppercase tracking-widest">Kein Risiko</span>
          <h2 className="font-montserrat text-3xl md:text-5xl font-bold mt-3 mb-4">Jetzt unverbindlich anfragen</h2>
          <p className="text-brand-silver max-w-2xl mx-auto text-lg">
            Schreiben Sie uns – per WhatsApp, Telefon oder Formular. Wir antworten schnell und unkompliziert.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Kontakt-Optionen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-6">
            <h3 className="font-montserrat font-bold text-xl text-brand-silverLight mb-6">Direkt Kontakt aufnehmen</h3>

            {/* WhatsApp */}
            <a href="https://wa.me/49XXXXXXXXXXX?text=Hallo%2C%20ich%20interessiere%20mich%20für%20Ihre%20Reinigungsleistungen."
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366] rounded-2xl transition-all group">
              <div className="w-14 h-14 bg-[#25D366]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle size={28} className="text-[#25D366]" />
              </div>
              <div>
                <p className="font-bold text-brand-silverLight group-hover:text-white transition-colors">WhatsApp schreiben</p>
                <p className="text-brand-silver text-sm">Schnelle Antwort garantiert – meist innerhalb 1 Stunde</p>
                <p className="text-[#25D366] text-sm font-semibold mt-1">+49 XXX XXXXXXX →</p>
              </div>
            </a>

            {/* Telefon */}
            <a href="tel:+49XXXXXXXXXXX"
              className="flex items-center gap-4 p-5 bg-brand-blue/10 border border-brand-blue/30 hover:border-brand-blue rounded-2xl transition-all group">
              <div className="w-14 h-14 bg-brand-blue/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={28} className="text-brand-blue" />
              </div>
              <div>
                <p className="font-bold text-brand-silverLight group-hover:text-white transition-colors">Direkt anrufen</p>
                <p className="text-brand-silver text-sm">Mo–Fr 7:00–19:00 Uhr | Sa 8:00–14:00 Uhr</p>
                <p className="text-brand-blue text-sm font-semibold mt-1">+49 XXX XXXXXXX →</p>
              </div>
            </a>

            {/* E-Mail */}
            <a href="mailto:Info@vogt-reinigung.de"
              className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 hover:border-brand-blue/40 rounded-2xl transition-all group">
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail size={28} className="text-brand-silver" />
              </div>
              <div>
                <p className="font-bold text-brand-silverLight group-hover:text-white transition-colors">Per E-Mail anfragen</p>
                <p className="text-brand-silver text-sm">Wir antworten innerhalb von 24 Stunden</p>
                <p className="text-brand-silver text-sm font-semibold mt-1">Info@vogt-reinigung.de →</p>
              </div>
            </a>

            {/* Adresse */}
            <div className="flex items-center gap-4 p-4 text-brand-gray text-sm">
              <MapPin size={18} className="text-brand-blue flex-shrink-0" />
              <span>VOGT Gebäudereinigung · Bretten & Umgebung · Baden-Württemberg</span>
            </div>
          </motion.div>

          {/* Kontaktformular */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit(onSubmit)}
              className="bg-brand-navy/40 border border-white/5 rounded-2xl p-6 space-y-4">
              <h3 className="font-montserrat font-bold text-xl text-brand-silverLight mb-2">Anfrage senden</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-brand-silver text-sm mb-1 block">Ihr Name *</label>
                  <input {...register('name', { required: 'Pflichtfeld' })}
                    className="w-full bg-brand-black/60 border border-white/10 focus:border-brand-blue rounded-xl px-4 py-3 text-brand-silverLight text-sm outline-none transition-colors placeholder:text-brand-gray"
                    placeholder="Max Mustermann" />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="text-brand-silver text-sm mb-1 block">Telefon</label>
                  <input {...register('telefon')}
                    className="w-full bg-brand-black/60 border border-white/10 focus:border-brand-blue rounded-xl px-4 py-3 text-brand-silverLight text-sm outline-none transition-colors placeholder:text-brand-gray"
                    placeholder="+49 XXX XXXXXXX" />
                </div>
              </div>

              <div>
                <label className="text-brand-silver text-sm mb-1 block">E-Mail *</label>
                <input {...register('email', { required: 'Pflichtfeld', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Ungültige E-Mail' } })}
                  type="email"
                  className="w-full bg-brand-black/60 border border-white/10 focus:border-brand-blue rounded-xl px-4 py-3 text-brand-silverLight text-sm outline-none transition-colors placeholder:text-brand-gray"
                  placeholder="ihre@email.de" />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="text-brand-silver text-sm mb-1 block">Gewünschte Leistung</label>
                <select {...register('leistung')}
                  className="w-full bg-brand-black/60 border border-white/10 focus:border-brand-blue rounded-xl px-4 py-3 text-brand-silverLight text-sm outline-none transition-colors">
                  <option value="">Bitte wählen...</option>
                  <option value="bueroreinigung">Büroreinigung</option>
                  <option value="firmenreinigung">Firmenreinigung</option>
                  <option value="privathaushalt">Privathaushalt</option>
                  <option value="treppenhausreinigung">Treppenhausreinigung</option>
                  <option value="sonderreinigung">Sonderreinigung</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>

              <div>
                <label className="text-brand-silver text-sm mb-1 block">Ihre Nachricht *</label>
                <textarea {...register('nachricht', { required: 'Pflichtfeld' })}
                  rows={4}
                  className="w-full bg-brand-black/60 border border-white/10 focus:border-brand-blue rounded-xl px-4 py-3 text-brand-silverLight text-sm outline-none transition-colors placeholder:text-brand-gray resize-none"
                  placeholder="Beschreiben Sie kurz Ihr Objekt, gewünschte Häufigkeit und besondere Anforderungen..." />
                {errors.nachricht && <p className="text-red-400 text-xs mt-1">{errors.nachricht.message}</p>}
              </div>

              <button type="submit" disabled={isSubmitting}
                className="w-full bg-brand-blue hover:bg-brand-blueLight disabled:opacity-50 text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 shadow-lg shadow-brand-blue/25 flex items-center justify-center gap-2">
                <Send size={18} />
                {isSubmitting ? 'Wird gesendet...' : 'Jetzt unverbindlich anfragen'}
              </button>

              <p className="text-brand-gray text-xs text-center">
                Kein Spam. Keine Weitergabe Ihrer Daten. Wir melden uns innerhalb von 24 Stunden.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

---

### `src/components/Footer.tsx`
```tsx
import Image from 'next/image'
import { Phone, MessageCircle, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/5">
      <div className="container-max px-4 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Slogan */}
          <div>
            <Image src="/logo.png" alt="VOGT Gebäudereinigung" width={160} height={50} className="h-10 w-auto mb-4" />
            <p className="text-brand-gray text-sm leading-relaxed">
              Professionelle Gebäudereinigung für Gewerbe & Privat in Bretten und der gesamten Region.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-montserrat font-bold text-brand-silverLight mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {[
                ['#leistungen', 'Leistungen'],
                ['#warum-wir', 'Warum Wir'],
                ['#ablauf', 'Ablauf'],
                ['#preise', 'Preise'],
                ['#einsatzgebiet', 'Einsatzgebiet'],
                ['#kontakt', 'Kontakt'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-brand-gray hover:text-brand-blue transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-montserrat font-bold text-brand-silverLight mb-4">Kontakt</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+49XXXXXXXXXXX" className="flex items-center gap-2 text-brand-gray hover:text-brand-blue transition-colors">
                <Phone size={15} /> +49 XXX XXXXXXX
              </a>
              <a href="https://wa.me/49XXXXXXXXXXX" className="flex items-center gap-2 text-brand-gray hover:text-[#25D366] transition-colors">
                <MessageCircle size={15} /> WhatsApp
              </a>
              <a href="mailto:Info@vogt-reinigung.de" className="flex items-center gap-2 text-brand-gray hover:text-brand-blue transition-colors">
                <Mail size={15} /> Info@vogt-reinigung.de
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-gray">
          <p>© {new Date().getFullYear()} VOGT Gebäudereinigung · Alle Rechte vorbehalten</p>
          <div className="flex gap-6">
            <a href="/impressum" className="hover:text-brand-silver transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-brand-silver transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

---

## 📸 BILDER – AUTOMATISCH VON UNSPLASH LADEN

Füge diese Bilder in den `public/` Ordner ein (oder lade sie automatisch herunter):

```bash
# Hero Background
curl -L "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80" -o public/hero-bg.jpg

# Reinigungsbilder
curl -L "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80" -o public/cleaning-1.jpg
curl -L "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80" -o public/cleaning-2.jpg
curl -L "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" -o public/cleaning-3.jpg
```

---

## ⚙️ `tailwind.config.ts` – VOLLSTÄNDIG

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black:      '#07090f',
          navy:       '#0d1b2e',
          blue:       '#1a5fa8',
          blueLight:  '#2979c8',
          silver:     '#c8cdd6',
          silverLight:'#e8ebf0',
          white:      '#ffffff',
          gray:       '#8a9ab0',
          grayLight:  '#f0f3f7',
        },
      },
      fontFamily: {
        inter:       ['var(--font-inter)', 'sans-serif'],
        montserrat:  ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
```

---

## 🔧 ABSCHLIESSEND

1. Logo-Datei `logo.png` aus dem `assets/` Ordner in `public/` kopieren
2. Telefonnummer und WhatsApp-Nummer an allen Stellen `+49XXXXXXXXXXX` ersetzen
3. E-Mail `Info@vogt-reinigung.de` prüfen / anpassen
4. `npm run dev` starten → Website öffnet unter `http://localhost:3000`
5. Für Deployment: `npm run build` → auf Vercel, Netlify oder eigenem Server deployen

---

## 📌 SPÄTERE ERWEITERUNGEN (vorbereitet)

- [ ] Preise eintragen sobald Preisliste vorliegt (Datei: `src/components/Preise.tsx`)
- [ ] Google Maps Karte in Einsatzgebiet-Sektion einbinden (API Key nötig)
- [ ] Google Reviews / Trustpilot Widget in `WarumWir.tsx` unten einbauen
- [ ] Formular an E-Mail-Backend anbinden (z.B. Resend.com oder Formspree)
- [ ] Vorher/Nachher-Bilder in Galerie-Sektion ergänzen
- [ ] Impressum & Datenschutz Seiten anlegen

---

**Trigger-Wort:** `starte das bauen`
**Bei Eingabe: Alle oben genannten Schritte vollständig ausführen, alle Dateien erstellen, Dev-Server starten.**
