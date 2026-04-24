# VOGT Gebäudereinigung – Website Projekt

## 📁 Inhalt dieses Ordners

| Datei | Beschreibung |
|-------|-------------|
| `CURSOR_PROMPT.md` | Der komplette Cursor-Prompt zum Bauen der Website |
| `assets/logo.png` | Das VOGT Logo (hier hineinkopieren, falls nicht schon vorhanden) |

---

## 🚀 So verwendest du den Prompt in Cursor

### Schritt 1 – Ordner öffnen
Öffne den Ordner `AI/Projekte/Vogt` in Cursor (oder einem neuen leeren Ordner deiner Wahl).

### Schritt 2 – Prompt einfügen
1. Öffne die Datei `CURSOR_PROMPT.md`
2. Kopiere den **gesamten Inhalt**
3. Füge ihn in das Cursor-Chat-Fenster (Composer) ein

### Schritt 3 – Auslösen
Tippe danach einfach:

```
starte das bauen
```

→ Cursor baut die gesamte Website vollautomatisch.

---

## ⚠️ Logo

Das Logo (PNG-Datei aus dem Chat) muss manuell in den `public/` Ordner des erstellten Next.js-Projekts gelegt werden:

```
vogt-website/
└── public/
    └── logo.png   ← hier das Logo hineinkopieren
```

---

## 📝 Was nach dem Bauen noch angepasst werden muss

- [ ] **Telefonnummer** ersetzen – alle `+49XXXXXXXXXXX` mit echter Nummer
- [ ] **WhatsApp-Nummer** ersetzen – in `Kontakt.tsx` und `Footer.tsx`
- [ ] **E-Mail-Adresse** anpassen – `Info@vogt-reinigung.de` (siehe `src/constants/contact.js` im Next.js-Projekt)
- [ ] **Preise eintragen** – wenn Preisliste vorliegt, in `Preise.tsx` eintragen
- [ ] **Formular-Backend** anbinden – z.B. Resend.com oder Formspree (kostenlos)
- [ ] **Impressum & Datenschutz** Seiten anlegen (gesetzlich erforderlich!)

---

## 🌐 Deployment (Website online stellen)

Empfehlung: **Vercel** (kostenlos, super einfach)

1. GitHub Account erstellen, Projekt pushen
2. Auf [vercel.com](https://vercel.com) einloggen
3. Repository verbinden → automatisch deployed!

---

*Erstellt mit Cowork · VOGT Gebäudereinigung*
