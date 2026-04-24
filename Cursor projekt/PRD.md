# PRD – VOGT Gebäudereinigung Website
**Version:** 1.0
**Stand:** März 2026
**Auftraggeber:** Vogt Gebäudereinigung, Bretten

---

## 1. Projektziel

Entwicklung einer professionellen, modernen **One-Page-Marketing-Website** für das Unternehmen VOGT Gebäudereinigung. Die Seite soll hochwertig und verkaufsstark wirken, Vertrauen aufbauen und Anfragen über WhatsApp, E-Mail und Kontaktformular generieren.

---

## 2. Unternehmensdaten

| Feld | Wert |
|------|------|
| Firmenname | Vogt Gebäudereinigung |
| Adresse | Weißhoferstraße 62/1, 75015 Bretten |
| WhatsApp / Mobil | 0176 633 56310 (+49 176 633 56310) |
| Festnetz | folgt nach |
| E-Mail | folgt (Domain wird über Namecheap gekauft) |
| Website-Typ | One-Pager |
| Einsatzgebiet | Bretten (Heimatort), Pforzheim, Karlsruhe, Enzkreis, Kraichgau, Umgebung |
| Anfahrt | bis 10 km um Bretten kostenlos, danach 0,50 €/km |

---

## 3. Design-Anforderungen

### 3.1 Designsprache
- **Stil:** Premium, modern, corporate, clean – nicht überladen
- **Atmosphäre:** Professionell, vertrauenswürdig, hochwertig
- **Referenz:** Das VOGT-Logo gibt die Designsprache vor

### 3.2 Farbpalette (exakt)
```
--black:       #06080e   (Hintergrund, tiefschwarz wie Logo-Background)
--deep:        #090c14
--navy:        #0b1828   (Karten-Hintergrund)
--navy2:       #0f2035
--blue:        #1358a0   (Primärblau, wie Logo-Gebäude)
--blue-mid:    #1a6abf
--blue-light:  #2579d4   (Hover, Akzente)
--silver-dark: #9aaabb
--silver:      #c2c8d4   (wie Logo-Schrift)
--silver-light:#dce2ec
--silver-ll:   #edf0f5   (Headlines)
--gray:        #6a7c90
```

### 3.3 Typografie
- **Headlines:** Montserrat, 700–900, metallic Gradient-Effekt
- **Body:** Inter, 300–600
- **Besonderheit:** Section-Titles mit linear-gradient clip-text (silver-ll → silver → silver-dark)

### 3.4 Assets (im `/assets/` Ordner)
- `logo.png` – VOGT Logo (schwarzer Hintergrund, metallic VOGT + Gebäudegrafik + Sparkles)
- `hero-bg.png` – Hero Background (Nachtszene: Bürogebäude, Reinigungsmaschinen, nasse Böden, blaues Licht)

---

## 4. Seitenstruktur (Sektionen in Reihenfolge)

### 4.1 Navbar (fixed, sticky)
- Logo links (`assets/logo.png`, height: 48px)
- Navigation links: Leistungen | Warum Wir | Ablauf | Preise | Einsatzgebiet | Kontakt
- CTA-Button rechts: „Jetzt anfragen" (blau, ausgefüllt)
- Beim Scrollen: Hintergrund wird opak (`rgba(6,8,14,0.96)`) + backdrop-blur + dezenter Schatten
- Mobile: Hamburger-Menü mit Slide-in

### 4.2 Hero Section
- **Hintergrundbild:** `assets/hero-bg.png` mit dunklem Overlay-Gradient
  - `linear-gradient(180deg, rgba(6,8,14,.55) 0%, rgba(6,8,14,.72) 60%, rgba(6,8,14,.92) 100%)`
- **Inhalt zentriert:**
  1. Badge: „✦ Professionelle Gebäudereinigung" (blauer Rahmen, Kleinbuchstaben uppercase)
  2. Logo-Bild groß: `assets/logo.png` (max 560px breit, drop-shadow blau)
  3. Subheadline: „Zuverlässige Reinigung für Gewerbe & Privat – Bretten · Pforzheim · Karlsruhe · Enzkreis"
  4. 2 Buttons: „Jetzt Anfrage senden →" (primary) + „📞 Direkt anrufen" (outline)
  5. Trust-Chips: ✓ Zuverlässig & pünktlich | ✓ Flexible Termine | ✓ Faire Preise | ✓ 10 km kostenlose Anfahrt
- Scroll-Indikator unten mittig

### 4.3 Stats Bar (direkt unter Hero)
Schmale Leiste mit 4 Kennzahlen:
- 100% Zufriedenheitsgarantie
- 6 Leistungsbereiche
- 10km Kostenlose Anfahrt
- 24h Antwortzeit
- Trennlinien zwischen Items, Fade-in-Animation

### 4.4 Leistungen
- Label: „Was wir tun" | Title: „Unsere Leistungen"
- 3×2 Grid, Karten mit Icon, Hover-Effekt (border-color + transform translateY)
- Karten:
  1. 💼 Büroreinigung – Böden, Oberflächen, Sanitär, Küche
  2. 🏢 Firmenreinigung – Hallen, Eingangsbereiche, Glasflächen, Außen
  3. 🏠 Privathaushalt – Wohnung, Umzugsreinigung, Fenster, Frühjahrsputz
  4. ✨ Sonderreinigung – Baureinigung, Tiefenreinigung, Grundreinigung, Notfall
  5. 🏗️ Treppenhausreinigung – Wischpflege, Desinfektion, Aufzug, Briefkästen
  6. 📅 Regelmäßige Reinigung – Feste Intervalle, Schlüsselübergabe, Flexibel
- CTA Button unten: „Kostenlos anfragen →"

### 4.5 Warum VOGT
- Label: „Unser Versprechen" | Title: „Warum VOGT?"
- 3×2 Grid mit Icon + Text Karten:
  1. ✅ Zuverlässigkeit
  2. ⭐ Gründliche Arbeit
  3. 🕐 Flexible Termine
  4. 💶 Faire Preise
  5. 👍 Persönlicher Service
  6. 📍 Regionale Nähe
- Bewertungsbox unten (5 Sterne, Zitat, Platzhalter für spätere Google Reviews)

### 4.6 So läuft es ab (Ablauf)
- Label: „Einfach & klar" | Title: „So läuft es ab"
- 4 Schritte in einer Reihe, verbunden durch horizontale Linie:
  1. 📨 Anfrage senden
  2. 💬 Abstimmung
  3. 📅 Termin
  4. ✨ Durchführung
- Jeder Schritt: Icon-Box (blau, Gradient), Nummerierung, Titel, Beschreibung
- CTA: „Jetzt Schritt 1 starten →"

### 4.7 Preise
- Label: „Transparent & fair" | Title: „Unsere Preise"
- Tab-Switcher: Gewerbe & Unternehmen | Privathaushalt
- **Gewerbe-Pakete (3 Karten):**
  - Starter (bis 100m², wöchentlich) – „Auf Anfrage"
  - Business (100–500m², 2–3×/Woche) – „Auf Anfrage" – HIGHLIGHTED/EMPFOHLEN
  - Enterprise (ab 500m², täglich) – „Auf Anfrage"
- **Privat-Pakete (2 Karten):**
  - Einmalig – „Auf Anfrage"
  - Regelmäßig (14-tägig/wöchentlich) – „Auf Anfrage" – HIGHLIGHTED
- Anfahrts-Info-Box: bis 10km kostenlos | 0,50€/km danach

### 4.8 Einsatzgebiet
- Label: „Wo wir aktiv sind" | Title: „Unser Einsatzgebiet"
- 2-Spalten-Layout:
  - Links: **Google Maps Embed** – Weißhoferstraße 62/1, 75015 Bretten
    - URL: `https://maps.google.com/maps?q=Wei%C3%9Fhoferstra%C3%9Fe+62%2F1%2C+75015+Bretten&z=13&output=embed`
    - Dark-Mode-Filter: `filter: invert(92%) hue-rotate(180deg) saturate(0.7) brightness(0.85)`
  - Rechts: Stadt-Liste + Anfahrtskosten-Box
    - 📍 Bretten (Hauptstandort)
    - 📌 Pforzheim | Karlsruhe | Enzkreis | Kraichgau | Umgebung
    - Tabelle: „Bis 10km → KOSTENLOS" | „Jeder weitere km → 0,50€"

### 4.9 Kontakt
- Label: „Kein Risiko" | Title: „Jetzt unverbindlich anfragen"
- **Priorität der Kontaktwege:**
  1. ✉️ **E-Mail** (primär) – Platzhalter „folgt in Kürze" bis Domain fertig
  2. 💬 **WhatsApp** (primär) – wa.me/4917663356310
  3. 📋 **Kontaktformular** (rechte Spalte, immer sichtbar)
  4. 📞 Telefon (sekundär, dezent dargestellt) – 0176 633 56310
- Adresse: Weißhoferstraße 62/1, 75015 Bretten
- **Kontaktformular Felder:**
  - Name* | Telefon (optional)
  - E-Mail*
  - Dropdown: Gewünschte Leistung (Büro, Firma, Privat, Treppenhausreinigung, Sonder, Sonstiges)
  - Nachricht* (Textarea)
  - Submit: „Jetzt unverbindlich anfragen" (blauer Button, volle Breite)
  - Hinweis: „Kein Spam. Wir antworten innerhalb 24h."
- Form-Handler: Aktuell Demo (alert/success-message), später Resend/Nodemailer

### 4.10 Footer
- Logo links + Tagline
- Navigation-Links (mittig)
- Kontakt-Spalte: E-Mail | WhatsApp | Telefon | Adresse
- Unterer Streifen: © 2026 VOGT Gebäudereinigung | Impressum | Datenschutz

---

## 5. Globale UI-Elemente

### 5.1 Floating WhatsApp Button
- Immer sichtbar, bottom-right, fixed
- Grüner Hintergrund (#25d366), weißes WA-Icon + Text „WhatsApp schreiben"
- Link: `https://wa.me/4917663356310`
- Erscheint nach 2s (CSS animation delay)
- Mobile: nur Icon (kein Text)
- Box-shadow grün: `0 6px 28px rgba(37,211,102,.5)`

### 5.2 Scroll-Animationen
- Alle Sektionen/Karten: `opacity: 0 → 1`, `translateY(24px → 0)` beim Eintritt
- IntersectionObserver mit threshold 0.08
- Stagger-Delays für Grid-Elemente: 0.1s, 0.2s, 0.3s, 0.4s

### 5.3 Navbar-Scroll-Verhalten
- Transparent wenn oben, solid bei scrollY > 60px
- Transition: background, padding, box-shadow

---

## 6. Technischer Stack

| Technologie | Verwendung |
|-------------|-----------|
| **Next.js 15** (App Router) | Framework |
| **JavaScript** (kein TypeScript) | Sprache |
| **Tailwind CSS v3** | Styling |
| **Framer Motion** | Animationen |
| **React Hook Form** | Kontaktformular |
| **Lucide React** | Icons |
| **Google Fonts** | Inter + Montserrat |

---

## 7. Dateistruktur

```
vogt-gebaeudereinigung/
├── public/
│   ├── logo.png              ← aus assets/ kopieren
│   ├── hero-bg.png           ← aus assets/ kopieren
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── globals.css
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── StatsBar.jsx
│       ├── Leistungen.jsx
│       ├── WarumWir.jsx
│       ├── Ablauf.jsx
│       ├── Preise.jsx
│       ├── Einsatzgebiet.jsx
│       ├── Kontakt.jsx
│       ├── Footer.jsx
│       └── FloatingWhatsApp.jsx
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## 8. Performance & SEO

- Meta-Title: „VOGT Gebäudereinigung – Professionelle Reinigung in Bretten, Pforzheim, Karlsruhe"
- Meta-Description: „Zuverlässige Gebäudereinigung für Gewerbe und Privathaushalt. Büroreinigung, Firmenreinigung, Privathaushalte. Einsatzgebiet: Bretten, Pforzheim, Karlsruhe, Enzkreis."
- Keywords: Gebäudereinigung Bretten, Büroreinigung Pforzheim, Firmenreinigung Karlsruhe, Enzkreis
- Bilder: `next/image` mit `priority` für Hero
- Fonts: `next/font/google` für Performance
- Open Graph Tags für Social Sharing

---

## 9. Spätere Erweiterungen (vorbereitet, aber noch nicht aktiv)

- [ ] E-Mail-Adresse eintragen (Domain über Namecheap)
- [ ] Festnetznummer eintragen
- [ ] Preise eintragen sobald Preisliste fertig
- [ ] Google Reviews Widget integrieren (unter „Warum Wir")
- [ ] Formular-Backend anbinden (Resend.com empfohlen, kostenlos bis 3.000/Monat)
- [ ] Google Maps API Key für interaktive Maps
- [ ] Impressum & Datenschutz Seiten (gesetzlich erforderlich vor Go-Live!)
- [ ] Vorher/Nachher Galerie

---

## 10. Deployment

Empfehlung: **Vercel** (kostenlos, automatisch, perfekt für Next.js)
1. GitHub Repo erstellen
2. Vercel.com → Import → Deploy
3. Custom Domain über Namecheap verknüpfen (CNAME/A-Record)
