# VOGT GEBÄUDEREINIGUNG – CURSOR BUILD PROMPT
## Trigger: „starte das bauen"

Wenn du „starte das bauen" liest, führe ALLES unten vollständig aus – keine Rückfragen, kein Stopp.

---

## SCHRITT 1 – PROJEKT INITIALISIEREN

```bash
npx create-next-app@latest vogt-gebaeudereinigung \
  --js --tailwind --eslint --app --src-dir \
  --import-alias "@/*" --no-typescript --yes
cd vogt-gebaeudereinigung
npm install framer-motion lucide-react react-hook-form
cp ../assets/logo.png public/logo.png
cp ../assets/hero-bg.png public/hero-bg.png
```

---

## SCHRITT 2 – TAILWIND CONFIG (`tailwind.config.js`)

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black:     '#06080e',
          deep:      '#090c14',
          navy:      '#0b1828',
          navy2:     '#0f2035',
          blue:      '#1358a0',
          blueMid:   '#1a6abf',
          blueLight: '#2579d4',
          silverDark:'#9aaabb',
          silver:    '#c2c8d4',
          silverL:   '#dce2ec',
          silverLL:  '#edf0f5',
          gray:      '#6a7c90',
        },
      },
      fontFamily: {
        inter:      ['var(--font-inter)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      backgroundImage: {
        'silver-gradient': 'linear-gradient(160deg, #edf0f5 0%, #c2c8d4 60%, #9aaabb 100%)',
        'blue-gradient':   'linear-gradient(135deg, #1358a0 0%, #1a6abf 100%)',
      },
    },
  },
  plugins: [],
}
```

---

## SCHRITT 3 – GLOBALS CSS (`src/app/globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html { scroll-behavior: smooth; }

body {
  background-color: #06080e;
  color: #dce2ec;
  font-family: var(--font-inter), sans-serif;
  overflow-x: hidden;
}

@layer utilities {
  .text-silver-gradient {
    background: linear-gradient(160deg, #edf0f5 0%, #c2c8d4 60%, #9aaabb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .text-blue-gradient {
    background: linear-gradient(135deg, #2579d4 0%, #c2c8d4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .section-padding { @apply py-20 px-4 md:px-8 max-w-6xl mx-auto; }
  .card-base {
    @apply bg-brand-navy/70 border border-white/[0.06] rounded-2xl
           hover:border-brand-blue/40 transition-all duration-300
           hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/10;
  }
}
```

---

## SCHRITT 4 – LAYOUT (`src/app/layout.js`)

```jsx
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata = {
  title: 'VOGT Gebäudereinigung – Professionelle Reinigung in Bretten, Pforzheim, Karlsruhe',
  description: 'Zuverlässige Gebäudereinigung für Gewerbe und Privathaushalt. Büroreinigung, Firmenreinigung, Privathaushalte. Einsatzgebiet: Bretten, Pforzheim, Karlsruhe, Enzkreis.',
  keywords: 'Gebäudereinigung Bretten, Büroreinigung Pforzheim, Firmenreinigung Karlsruhe, Enzkreis',
  openGraph: {
    title: 'VOGT Gebäudereinigung',
    description: 'Professionelle Gebäudereinigung in der Region Bretten',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${inter.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

---

## SCHRITT 5 – PAGE (`src/app/page.js`)

```jsx
import Navbar           from '@/components/Navbar'
import Hero             from '@/components/Hero'
import StatsBar         from '@/components/StatsBar'
import Leistungen       from '@/components/Leistungen'
import WarumWir         from '@/components/WarumWir'
import Ablauf           from '@/components/Ablauf'
import Preise           from '@/components/Preise'
import Einsatzgebiet    from '@/components/Einsatzgebiet'
import Kontakt          from '@/components/Kontakt'
import Footer           from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Leistungen />
        <WarumWir />
        <Ablauf />
        <Preise />
        <Einsatzgebiet />
        <Kontakt />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
```

---

## SCHRITT 6 – KOMPONENTEN

### `src/components/Navbar.jsx`
- `'use client'`
- State: `scrolled` (boolean), `menuOpen` (boolean)
- useEffect: `window.addEventListener('scroll', ...)` → scrolled wenn scrollY > 60
- Wenn scrolled: `bg-brand-black/95 backdrop-blur-md shadow-lg py-3`, sonst `bg-transparent py-5`
- Logo: `<Image src="/logo.png" alt="VOGT Gebäudereinigung" width={180} height={60} className="h-12 w-auto" />`
- Links: Leistungen | Warum Wir | Ablauf | Preise | Einsatzgebiet
- CTA rechts: `<a href="#kontakt">Jetzt anfragen</a>` in Blau
- Mobile: Hamburger Icon (Lucide `Menu`/`X`), Slide-down Menu

### `src/components/Hero.jsx`
- `'use client'`
- Framer Motion: `motion.div` mit `initial={{ opacity:0, y:30 }}` und `animate={{ opacity:1, y:0 }}`
- Hintergrund:
  ```jsx
  <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center" />
  <div className="absolute inset-0 bg-gradient-to-b from-brand-black/55 via-brand-black/72 to-brand-black/92" />
  ```
- Inhalt zentriert:
  1. Badge: `✦ Professionelle Gebäudereinigung`
  2. Logo: `<Image src="/logo.png" width={560} height={200} priority className="w-full max-w-[560px]" style={{filter:'drop-shadow(0 0 40px rgba(19,88,160,0.4))'}} />`
  3. Subheadline: `Zuverlässige Reinigung für Gewerbe & Privat –` + `Bretten · Pforzheim · Karlsruhe · Enzkreis`
  4. Buttons: `Jetzt Anfrage senden →` + `📞 Direkt anrufen`
  5. Trust-Chips mit blauem Check-Dot
- Scroll-Indikator unten mittig (animierter vertikaler Strich)

### `src/components/StatsBar.jsx`
- `'use client'`
- Framer Motion whileInView
- Dark gradient Hintergrund, border-top + border-bottom blau
- 4 Stats:
  - `100%` / Zufriedenheitsgarantie
  - `6` / Leistungsbereiche
  - `10km` / Kostenlose Anfahrt
  - `24h` / Antwortzeit
- Trennlinien zwischen Items (hidden auf mobile)
- Zahlen: Montserrat 800, silver-gradient text

### `src/components/Leistungen.jsx`
- `'use client'`
- Framer Motion whileInView staggered
- 3×2 Grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- Jede Karte: Icon-Box (blau, border-radius), h3, p, Tag-Chips
- Hover: border-color blau, translateY(-4px), shadow
- 6 Karten: Büroreinigung, Firmenreinigung, Privathaushalt, Sonderreinigung, Treppenhausreinigung, Regelmäßige Reinigung
- CTA Button am Ende

### `src/components/WarumWir.jsx`
- `'use client'`
- 3×2 Grid Karten (Icon links, Text rechts)
- 6 Punkte: Zuverlässigkeit, Gründliche Arbeit, Flexible Termine, Faire Preise, Persönlicher Service, Regionale Nähe
- Darunter: Review-Banner mit 5 Sternen (gelb), Zitat-Text, Autor
- Platzhalter-Hinweis für spätere Google Reviews

### `src/components/Ablauf.jsx`
- `'use client'`
- 4 Schritte in einer Reihe
- Verbindungslinie zwischen Steps (absolute horizontal line, nur desktop)
- Jeder Step: blauer Icon-Kasten + Nummer-Badge + Titel + Text
- 4 Schritte: Anfrage → Abstimmung → Termin → Durchführung
- Staggered Framer Motion whileInView

### `src/components/Preise.jsx`
- `'use client'`
- useState für aktiven Tab (`'gewerbe'` oder `'privat'`)
- Tab-Buttons oben
- Gewerbe: 3 Karten (Starter | Business★ | Enterprise)
- Privat: 2 Karten (Einmalig | Regelmäßig★)
- Highlighted Karte (empfohlen): andere Border, Badge, filled Button
- Alle Preise: `Auf Anfrage` (Preisliste folgt)
- Anfahrts-Infobox darunter (🚗 bis 10km kostenlos, dann 0,50€/km)

### `src/components/Einsatzgebiet.jsx`
- `'use client'`
- 2-Spalten-Layout (lg:grid-cols-2)
- Links: Google Maps iframe
  ```jsx
  <iframe
    src="https://maps.google.com/maps?q=Wei%C3%9Fhoferstra%C3%9Fe+62%2F1%2C+75015+Bretten&t=&z=13&ie=UTF8&iwloc=&output=embed"
    className="w-full h-full border-0 rounded-2xl"
    style={{filter:'invert(92%) hue-rotate(180deg) saturate(0.7) brightness(0.85)'}}
    title="VOGT Gebäudereinigung Standort"
    loading="lazy"
  />
  ```
- Rechts: Stadt-Liste (Bretten highlighted) + Anfahrts-Kosten-Box
- Städte: Bretten (Hauptstandort), Pforzheim, Karlsruhe, Enzkreis, Kraichgau, Umgebung

### `src/components/Kontakt.jsx`
- `'use client'`
- 2-Spalten-Layout
- Links: Kontaktoptionen (Reihenfolge: E-Mail → WhatsApp → Telefon dezent)
  - E-Mail: `info@[domain folgt]` – Platzhalter, mailto: deaktiviert, kursiv grau
  - WhatsApp: `https://wa.me/4917663356310` – grüner Style
  - Telefon: klein, dezent: `0176 633 56310`
  - Adresse: `Weißhoferstraße 62/1, 75015 Bretten`
- Rechts: Kontaktformular (react-hook-form)
  - Felder: Name*, Telefon, E-Mail*, Leistung (Select), Nachricht*
  - onSubmit: Demo-Handler → Erfolgsanzeige
  - Validierung mit react-hook-form

### `src/components/Footer.jsx`
- 3-Spalten-Grid: Logo+Tagline | Navigation | Kontakt
- Logo: `<Image src="/logo.png" ... className="h-10 w-auto" />`
- Copyright-Zeile unten: dynamisches Jahr + Impressum + Datenschutz Links
- Kontakt: E-Mail (Platzhalter) | WhatsApp | Telefon | Adresse

### `src/components/FloatingWhatsApp.jsx`
- `'use client'`
- Fixed bottom-right, z-50
- `href="https://wa.me/4917663356310?text=..."` target="_blank"
- Grüner Hintergrund (#25d366), weißes Icon + Text „WhatsApp schreiben"
- Framer Motion: `initial={{ opacity:0, y:20 }}` `animate={{ opacity:1, y:0 }}` `transition={{ delay: 2 }}`
- Hover: scale(1.04) translateY(-3px)
- Mobile: nur Icon, kein Label

---

## SCHRITT 7 – STARTEN

```bash
npm run dev
```

→ Browser öffnet `http://localhost:3000`

---

## WICHTIGE DETAILS

### Kontaktdaten (bereits eingetragen):
- **Adresse:** Weißhoferstraße 62/1, 75015 Bretten
- **WhatsApp/Mobil:** 0176 633 56310 → URL: `4917663356310`
- **E-Mail:** Platzhalter (Domain folgt über Namecheap)
- **Festnetz:** folgt nach

### WhatsApp URL überall einheitlich:
```
https://wa.me/4917663356310?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Geb%C3%A4udereinigungsleistungen.
```

### Farben NICHT von Tailwind-Standard, immer brand.* verwenden:
```
bg-brand-black, bg-brand-navy, text-brand-silver, border-brand-blue/40, etc.
```

### Animationen:
- Alle Sections: `initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}`
- Grid-Karten: staggered mit `transition={{ delay: index * 0.1 }}`

### next.config.js:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = nextConfig
```

---

## TRIGGER

**Wenn du „starte das bauen" liest → führe alle Schritte 1–7 vollständig aus.**
