# Vogt Gebäudereinigung – Deployment (Namecheap)

## Upload-Ziel

Alle **Inhalte** des Ordners `namecheap-upload/` gehören bei Namecheap in das Webroot **`public_html`** (bzw. den von Ihrem Hosting-Paket vorgegebenen Document-Root).

Nach dem Upload ist die Startseite erreichbar unter:

`https://Ihre-Domain.de/`

## Startdatei

- **`index.html`** ist die Startseite (Standard-Dokument des Webservers).

## Ordnerstruktur (uploadfertig)

```
namecheap-upload/
├── index.html           # Startseite (statisch)
├── impressum.html
├── datenschutz.html
└── assets/
    ├── css/
    │   ├── main.css     # Styles der Startseite (aus vogt-website.html extrahiert)
    │   └── legal.css    # Styles für Impressum & Datenschutz
    ├── js/
    │   └── main.js      # Navbar, Fade-in, Tabs, Formular-Demo
    └── images/
        ├── README.txt   # Hinweis zum Hero-Bild
        └── (optional) hero-background.png
```

## Was Sie hochladen

1. Den **gesamten Inhalt** von `namecheap-upload/` (alle Dateien und Unterordner).
2. **Nicht** hochladen müssen: Next.js-Projekt (`vogt-gebaeudereinigung/`), `node_modules`, lokale Dev-Dateien oder die Quell-`vogt-website.html` im Projektroot (die diente nur als Basis für den Export).

## Hero-Hintergrundbild

- In `assets/css/main.css` wird `../images/hero-background.png` referenziert.
- Legen Sie optional `hero-background.png` in `assets/images/` ab (siehe `assets/images/README.txt`).
- Fehlt die Datei, bleibt der Hero als Verlauf sichtbar – keine kaputten „Broken Image“-Pfade.

## Rechtliche Seiten

- **impressum.html** und **datenschutz.html** sind statische Seiten; Inhalt stammt aus dem bestehenden Next.js-Projekt (`src/app/impressum` / `datenschutz`) und wurde für HTML exportiert.
- Texte rechtlich prüfen und bei Bedarf anpassen (Steuernummer, finale Formulierungen).

## Technische Hinweise

- **Kein** `npm`, **kein** Node.js und **kein** localhost auf dem Server nötig.
- Externe Ressourcen: Google Fonts, Google Maps-Embed, WhatsApp-Links – setzen eine Internetverbindung beim Besucher voraus (normal).
- Formular: Die Demo simuliert den Versand im Browser (`doSend` in `main.js`). Für echtes Versenden brauchen Sie später z. B. ein serverseitiges Skript oder einen Formular-Dienst – das ist bewusst nicht Teil dieses statischen Pakets.

## Kurz-Checkliste nach dem Upload

1. Startseite und Navigation testen.
2. `impressum.html` und `datenschutz.html` aufrufen.
3. Optional: `hero-background.png` hochladen und Hero prüfen.
4. HTTPS in Namecheap/cPanel aktivieren (SSL), falls noch nicht geschehen.
