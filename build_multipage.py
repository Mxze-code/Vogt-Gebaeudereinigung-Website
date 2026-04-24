#!/usr/bin/env python3
"""
Transforms vogt-website.html (one-pager) into a 3-page site:
  - vogt-website.html   (Landing: "Das Wichtigste im Überblick")
  - preise-leistungen.html
  - kontakt.html
"""

import os
src = 'vogt-website.html.bak' if os.path.exists('vogt-website.html.bak') else 'vogt-website.html'
with open(src, 'r', encoding='utf-8') as f:
    lines = f.readlines()
print(f'Reading from: {src} ({len(lines)} lines)')

def L(start, end=None):
    """Extract lines (1-based, inclusive)."""
    if end is None:
        return lines[start - 1]
    return ''.join(lines[start - 1:end])

# ── Section boundaries (1-based) ──
# Head+CSS: 1–561
# Nav HTML: 562–595
# Hero section: 596–633
# Stats bar: 634–661  (actually starts at 638 but 634-637 are blank/closing)
# Leistungen: 662–716
# Warum Wir: 717–742
# Wie wir arbeiten: 743–762
# Ablauf: 763–801
# Preise: 802–865
# Einsatzgebiet: 866–904
# Kontakt: 905–968
# Footer: 969–1002
# Script: 1003–1068

HEAD_CSS = L(1, 561)
NAV_RAW  = L(562, 595)
HERO     = L(596, 637)
STATS    = L(638, 661)
LEIS     = L(662, 716)
WARUM    = L(717, 742)
WWA      = L(743, 762)
ABLAUF   = L(763, 801)
PREISE   = L(802, 865)
EINSATZ  = L(866, 904)
KONTAKT  = L(905, 968)
FOOTER   = L(969, 1002)
# Script is lines 1003–end; WA float button starts at line 1060
SCRIPT   = L(1003, 1059)   # just <script>…</script>


# ── Build new nav for each page ──
def nav(active_page):
    """
    active_page: 'landing' | 'preise' | 'kontakt'
    """
    def cls(page):
        return ' style="color:var(--silver-ll);border-bottom:1px solid var(--blue-l);padding-bottom:2px;"' if active_page == page else ''

    # Extract logo img tag from original nav (line 569–577 area)
    # Find the logo <a> tag
    logo_line_start = None
    logo_line_end = None
    for i, line in enumerate(lines[561:595], start=562):
        if '<a href=' in line and 'img' not in line and logo_line_start is None:
            logo_line_start = i
        if logo_line_start and '</a>' in line and logo_line_end is None:
            logo_line_end = i
            break

    # The logo is on lines 568–570 roughly (just a link wrapping an img)
    logo_html = L(568, 570).replace('href="#hero"', 'href="vogt-website.html"')

    cta_href = 'kontakt.html#kontakt'

    return f'''<!-- ══════════════════════
     NAVBAR
══════════════════════ -->
<nav id="nav">
  <div class="nav-inner">
    {logo_html.strip()}
    <div class="nav-links">
      <a href="vogt-website.html"{cls('landing')}>Überblick</a>
      <a href="preise-leistungen.html"{cls('preise')}>Preise &amp; Leistungen</a>
      <a href="kontakt.html"{cls('kontakt')}>Kontakt &amp; Standort</a>
      <a href="{cta_href}" class="nav-cta">Jetzt anfragen</a>
    </div>
    <div class="hamburger" onclick="toggleMenu()">
      <span></span><span></span><span></span>
    </div>
  </div>
  <div class="mob-menu" id="mobMenu">
    <a href="vogt-website.html" onclick="toggleMenu()">Überblick</a>
    <a href="preise-leistungen.html" onclick="toggleMenu()">Preise &amp; Leistungen</a>
    <a href="kontakt.html" onclick="toggleMenu()">Kontakt &amp; Standort</a>
    <a href="{cta_href}" onclick="toggleMenu()" class="mob-cta">Jetzt unverbindlich anfragen →</a>
  </div>
</nav>
'''

# ── Footer with updated links ──
FOOTER_NEW = FOOTER \
    .replace('href="#leistungen"', 'href="preise-leistungen.html#leistungen"') \
    .replace('href="#warum-wir"',  'href="vogt-website.html#warum-wir"') \
    .replace('href="#ablauf"',     'href="preise-leistungen.html#ablauf"') \
    .replace('href="#preise"',     'href="preise-leistungen.html#preise"') \
    .replace('href="#einsatzgebiet"', 'href="kontakt.html#einsatzgebiet"') \
    .replace('href="#kontakt"',    'href="kontakt.html#kontakt"')

SCRIPT_CLEAN = SCRIPT  # just <script>…</script>, no WA button


# ════════════════════════════════════════════════════════════
# 1) LANDING PAGE (vogt-website.html) – compact version
# ════════════════════════════════════════════════════════════

# Leistungen BRIEF: first 4 cards + "Alle Leistungen" CTA
LEIS_BRIEF = '''<!-- ══════════════════════
     LEISTUNGEN (Überblick)
══════════════════════ -->
<div class="bg-stripe">
<div class="section fi" id="leistungen">
  <div style="text-align:center">
    <span class="section-label">Was wir tun</span>
    <h2 class="section-title">Unsere Leistungen</h2>
    <p class="section-sub">Von der Büroreinigung bis zur Sonderreinigung – die richtige Lösung für jeden Bedarf.</p>
  </div>
  <div class="services-grid fi fi-d1">
    <div class="svc-card">
      <div class="svc-icon">💼</div>
      <h3>Büroreinigung</h3>
      <p>Professionelle Reinigung von Büroräumen, Konferenzräumen und Gemeinschaftsbereichen. Diskret, gründlich, auf Ihre Zeiten abgestimmt.</p>
      <div class="svc-tags"><span class="stag">Böden &amp; Teppiche</span><span class="stag">Schreibtische</span><span class="stag">Sanitär</span><span class="stag">Küche</span></div>
    </div>
    <div class="svc-card">
      <div class="svc-icon">🏢</div>
      <h3>Firmenreinigung</h3>
      <p>Umfassende Reinigung für Betriebe, Produktionshallen, Lagerflächen und Gewerbeobjekte jeder Größe.</p>
      <div class="svc-tags"><span class="stag">Hallen</span><span class="stag">Eingangsbereiche</span><span class="stag">Glasflächen</span><span class="stag">Außen</span></div>
    </div>
    <div class="svc-card">
      <div class="svc-icon">🏠</div>
      <h3>Privathaushalt</h3>
      <p>Regelmäßige Haushaltsreinigung oder Einmalreinigungen – damit Sie mehr Zeit für das Wichtige haben.</p>
      <div class="svc-tags"><span class="stag">Wohnung</span><span class="stag">Umzugsreinigung</span><span class="stag">Fenster</span><span class="stag">Frühjahrsputz</span></div>
    </div>
    <div class="svc-card">
      <div class="svc-icon">✨</div>
      <h3>Sonderreinigung</h3>
      <p>Tiefenreinigung, Baureinigung, Grundreinigung – wir übernehmen auch außergewöhnliche Aufgaben.</p>
      <div class="svc-tags"><span class="stag">Baureinigung</span><span class="stag">Tiefenreinigung</span><span class="stag">Grundreinigung</span><span class="stag">Notfall</span></div>
    </div>
  </div>
  <div style="text-align:center;margin-top:2.5rem" class="fi fi-d2">
    <a href="preise-leistungen.html" class="btn-primary">Alle Leistungen &amp; Preise →</a>
  </div>
</div>
</div>
'''

# Warum Wir BRIEF: 3 strongest cards, no review banner
WARUM_BRIEF = '''<!-- ══════════════════════
     WARUM WIR (Überblick)
══════════════════════ -->
<div class="section fi" id="warum-wir">
  <div style="text-align:center">
    <span class="section-label">Unser Versprechen</span>
    <h2 class="section-title">Warum VOGT?</h2>
    <p class="section-sub">Wir sind nicht einfach ein Reinigungsunternehmen. Wir sind Ihr verlässlicher Partner.</p>
  </div>
  <div class="warum-grid fi fi-d1" style="grid-template-columns:repeat(3,1fr)">
    <div class="w-card"><div class="w-ico">✅</div><div><h3>Zuverlässigkeit</h3><p>Pünktlich zum vereinbarten Termin – ohne Ausreden. Auf uns können Sie sich verlassen.</p></div></div>
    <div class="w-card"><div class="w-ico">⭐</div><div><h3>Gründliche Arbeit</h3><p>Jedes Detail zählt. Wir reinigen so, wie wir es für uns selbst erwarten würden.</p></div></div>
    <div class="w-card"><div class="w-ico">💶</div><div><h3>Faire Preise</h3><p>Transparente Preisgestaltung ohne versteckte Kosten. Sie wissen vorher genau, was Sie bezahlen.</p></div></div>
  </div>
  <div class="review-banner fi fi-d2">
    <div class="stars">★★★★★</div>
    <p class="r-text">„Wir sind seit über einem Jahr Kunde bei VOGT und rundum zufrieden. Pünktlich, gründlich und immer freundlich."</p>
    <p class="r-author">– Kunde aus Bretten</p>
    <p style="font-size:.72rem;color:rgba(19,88,160,.45);margin-top:1rem;font-style:italic;">Weitere Bewertungen folgen in Kürze</p>
  </div>
</div>
'''

# Preise TEASER: Business + Regelmäßig + CTA
PREISE_TEASER = '''<!-- ══════════════════════
     PREISE (Teaser)
══════════════════════ -->
<div class="bg-stripe">
<div class="section fi" id="preise">
  <div style="text-align:center">
    <span class="section-label">Transparent &amp; fair</span>
    <h2 class="section-title">Unsere Preise</h2>
    <p class="section-sub">Keine versteckten Kosten. Kein Kleingedrucktes. Wir erstellen gerne ein individuelles Angebot.</p>
  </div>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:1.25rem;max-width:640px;margin:0 auto 1.75rem" class="fi fi-d1">
    <div class="p-card hl">
      <span class="hl-badge">⭐ Gewerbe Empfohlen</span>
      <h3>Business</h3><p class="p-desc">Für mittelgroße Betriebe</p>
      <div class="p-price">Auf Anfrage</div>
      <ul class="p-list"><li>100 – 500 m²</li><li>2–3× pro Woche</li><li>Komplettpaket</li><li>Fester Ansprechpartner</li></ul>
      <a href="kontakt.html#kontakt" class="p-btn prim">Jetzt anfragen</a>
    </div>
    <div class="p-card hl">
      <span class="hl-badge">⭐ Privat Empfohlen</span>
      <h3>Regelmäßig</h3><p class="p-desc">Wöchentlich oder 14-tägig</p>
      <div class="p-price">Auf Anfrage</div>
      <ul class="p-list"><li>Fester Termin</li><li>Vertrautes Personal</li><li>Flexibel pausierbar</li><li>Schlüsselübergabe möglich</li></ul>
      <a href="kontakt.html#kontakt" class="p-btn prim">Jetzt anfragen</a>
    </div>
  </div>
  <div style="text-align:center" class="fi fi-d2">
    <a href="preise-leistungen.html#preise" class="btn-primary">Alle Pakete &amp; Preise ansehen →</a>
  </div>
</div>
</div>
'''

# Einsatzgebiet MINI: just cities + km note, no map
EINSATZ_MINI = '''<!-- ══════════════════════
     EINSATZGEBIET (Überblick)
══════════════════════ -->
<div class="section fi" id="einsatzgebiet">
  <div style="text-align:center">
    <span class="section-label">Wo wir aktiv sind</span>
    <h2 class="section-title">Unser Einsatzgebiet</h2>
    <p class="section-sub">In der gesamten Region schnell und zuverlässig für Sie da.</p>
  </div>
  <div style="max-width:720px;margin:0 auto" class="fi fi-d1">
    <div class="city-list" style="grid-template-columns:repeat(3,1fr);gap:.75rem;margin-bottom:1.25rem">
      <div class="city main"><span class="city-pin">📍</span><div><div class="city-name">Bretten</div><div class="city-note">Hauptstandort</div></div></div>
      <div class="city"><span class="city-pin">📌</span><div><div class="city-name">Pforzheim</div><div class="city-note">ca. 20 km</div></div></div>
      <div class="city"><span class="city-pin">📌</span><div><div class="city-name">Karlsruhe</div><div class="city-note">ca. 30 km</div></div></div>
      <div class="city"><span class="city-pin">📌</span><div><div class="city-name">Enzkreis</div><div class="city-note">Gesamter Landkreis</div></div></div>
      <div class="city"><span class="city-pin">📌</span><div><div class="city-name">Kraichgau</div><div class="city-note">Region &amp; Umland</div></div></div>
      <div class="city"><span class="city-pin">📌</span><div><div class="city-name">Weitere Gebiete</div><div class="city-note">auf Anfrage</div></div></div>
    </div>
    <div class="km-box" style="text-align:center">
      <p style="font-size:.92rem;color:var(--silver-l)">🚗 Innerhalb von <strong style="color:var(--silver-ll)">10 km rund um Bretten</strong> kostenlose Anfahrt &nbsp;·&nbsp; Jeder weitere km <strong style="color:var(--blue-l)">0,50 €</strong></p>
      <p style="font-size:.76rem;color:var(--gray);margin-top:.5rem">Bei regelmäßigen Aufträgen oft Sonderkonditionen – einfach fragen!</p>
    </div>
  </div>
  <div style="text-align:center;margin-top:1.75rem" class="fi fi-d2">
    <a href="kontakt.html#einsatzgebiet" class="btn-outline">Karte &amp; Details ansehen →</a>
  </div>
</div>
'''

# Kontakt CTA (no form, just contact options + link)
KONTAKT_CTA = '''<!-- ══════════════════════
     KONTAKT (CTA)
══════════════════════ -->
<div class="bg-stripe">
<div class="section fi" id="kontakt">
  <div style="text-align:center">
    <span class="section-label">Kein Risiko</span>
    <h2 class="section-title">Jetzt unverbindlich anfragen</h2>
    <p class="section-sub">Per WhatsApp, Telefon oder Formular. Wir antworten schnell und unkompliziert.</p>
  </div>
  <div style="max-width:520px;margin:0 auto" class="fi fi-d1">
    <a href="mailto:Info@vogt-reinigung.de" class="k-opt">
      <div class="k-ico b">✉️</div>
      <div><div class="k-lbl">Per E-Mail anfragen</div><div class="k-sub">Antwort innerhalb von 24 Stunden</div></div>
    </a>
    <a href="tel:+4972327321032" class="k-opt">
      <div class="k-ico b">📞</div>
      <div><div class="k-lbl">Telefon · für Anrufe</div><div class="k-sub">Mo–Fr 7:00–19:00 · Sa 8:00–14:00 Uhr</div><div class="k-act" style="color:var(--blue-l);">+49 7232 7321032 →</div></div>
    </a>
    <a href="https://wa.me/4917663356310?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Geb%C3%A4udereinigungsleistungen." target="_blank" class="k-opt wa">
      <div class="k-ico g">💬</div>
      <div><div class="k-lbl">WhatsApp · für Nachrichten</div><div class="k-sub">Nicht zum Anrufen – nur Chat</div><div class="k-act g">+49 176 63356310 →</div></div>
    </a>
    <div style="text-align:center;margin-top:1.75rem">
      <a href="kontakt.html#kontakt" class="btn-primary">Zum Kontaktformular →</a>
    </div>
  </div>
</div>
</div>
'''

def build_page(title, active, body_sections):
    meta_desc = {
        'landing': 'Professionelle Gebäudereinigung für Gewerbe und Privathaushalt in Bretten, Pforzheim, Karlsruhe und Enzkreis. Zuverlässig, gründlich, fair.',
        'preise':  'Alle Leistungen und Preise von VOGT Gebäudereinigung – Büro, Gewerbe, Privat. Transparente Pakete, flexibel und fair.',
        'kontakt': 'Kontakt, Standort und Über uns – VOGT Gebäudereinigung in Bretten. Anruf, WhatsApp oder Formular – wir antworten schnell.',
    }
    head = HEAD_CSS \
        .replace(
            'VOGT Gebäudereinigung – Professionelle Reinigung in Bretten, Pforzheim, Karlsruhe',
            title
        ).replace(
            'Zuverlässige Gebäudereinigung für Gewerbe und Privathaushalt in Bretten, Pforzheim, Karlsruhe und Enzkreis.',
            meta_desc[active]
        )
    # WA float button (extracted from original lines 1060–1067)
    wa_btn = L(1060, 1069)  # includes </body></html>
    return head + nav(active) + '\n'.join(body_sections) + '\n' + FOOTER_NEW + '\n' + SCRIPT_CLEAN + '\n' + wa_btn


# ════════════════════════════════════════════════════════════
# 2) PREISE & LEISTUNGEN page
# ════════════════════════════════════════════════════════════

# Leistungen FULL – update kontakt link
LEIS_FULL = LEIS.replace('href="#kontakt"', 'href="kontakt.html#kontakt"')

# Wie wir arbeiten FULL
WWA_FULL = WWA

# Ablauf FULL – update kontakt link
ABLAUF_FULL = ABLAUF.replace('href="#kontakt"', 'href="kontakt.html#kontakt"')

# Preise FULL – update kontakt link + add hero-style header
PREISE_FULL = PREISE.replace('href="#kontakt"', 'href="kontakt.html#kontakt"')

PAGE_PREISE_HERO = '''<!-- ══════════════════════
     PAGE HEADER
══════════════════════ -->
<div style="min-height:22vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:8rem 1.5rem 3rem;background:linear-gradient(180deg,rgba(6,8,14,.0) 0%,rgba(6,8,14,1) 100%),linear-gradient(155deg,var(--navy) 0%,var(--black) 42%,var(--navy2) 100%);">
  <div>
    <span class="section-label">Transparent &amp; vollständig</span>
    <h1 class="section-title" style="font-size:clamp(2rem,5vw,3.5rem);margin-bottom:.75rem">Preise &amp; Leistungen</h1>
    <p style="color:var(--silver-d);font-size:1.05rem;max-width:560px;margin:0 auto">Alle unsere Angebote im Überblick – von der Einzelreinigung bis zum Jahresvertrag.</p>
  </div>
</div>
'''

# ════════════════════════════════════════════════════════════
# 3) KONTAKT & STANDORT page
# ════════════════════════════════════════════════════════════

UEBER_UNS = '''<!-- ══════════════════════
     ÜBER UNS
══════════════════════ -->
<div class="section fi" id="ueber-uns" style="text-align:center;padding-bottom:3rem">
  <span class="section-label">Wer wir sind</span>
  <h2 class="section-title">Über VOGT Gebäudereinigung</h2>
  <p class="section-sub" style="max-width:700px">VOGT Gebäudereinigung ist ein familiengeführtes Unternehmen aus Bretten. Wir stehen für persönlichen Service, handwerkliche Sorgfalt und echte Verlässlichkeit – egal ob kleines Büro oder großes Gewerbeobjekt. Für uns ist jeder Auftrag eine Vertrauenssache.</p>
  <div class="warum-grid fi fi-d1" style="margin-top:2.5rem;grid-template-columns:repeat(3,1fr)">
    <div class="w-card"><div class="w-ico">🏠</div><div><h3>Heimatverbunden</h3><p>Gegründet und verwurzelt in Bretten. Kurze Wege, schnelle Reaktion – wir kennen die Region.</p></div></div>
    <div class="w-card"><div class="w-ico">🤝</div><div><h3>Persönlicher Kontakt</h3><p>Kein Callcenter. Sie sprechen direkt mit uns – ehrlich, unkompliziert, auf Augenhöhe.</p></div></div>
    <div class="w-card"><div class="w-ico">🕐</div><div><h3>Flexible Zeiten</h3><p>Früh, abends, am Wochenende – wir passen uns Ihren Zeiten an, nicht umgekehrt.</p></div></div>
  </div>
</div>
'''

# Einsatzgebiet FULL (original, no changes)
EINSATZ_FULL = EINSATZ

# Kontakt FULL – no changes needed
KONTAKT_FULL = KONTAKT

PAGE_KONTAKT_HERO = '''<!-- ══════════════════════
     PAGE HEADER
══════════════════════ -->
<div style="min-height:22vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:8rem 1.5rem 3rem;background:linear-gradient(180deg,rgba(6,8,14,.0) 0%,rgba(6,8,14,1) 100%),linear-gradient(155deg,var(--navy) 0%,var(--black) 42%,var(--navy2) 100%);">
  <div>
    <span class="section-label">Direkt &amp; unkompliziert</span>
    <h1 class="section-title" style="font-size:clamp(2rem,5vw,3.5rem);margin-bottom:.75rem">Kontakt &amp; Standort</h1>
    <p style="color:var(--silver-d);font-size:1.05rem;max-width:560px;margin:0 auto">Wir freuen uns über Ihre Anfrage – per WhatsApp, Telefon oder Formular.</p>
  </div>
</div>
'''

# ════════════════════════════════════════════════════════════
# BUILD ALL THREE FILES
# ════════════════════════════════════════════════════════════

# Update hero internal links for landing page
HERO_LANDING = HERO \
    .replace('href="#kontakt"', 'href="kontakt.html#kontakt"') \
    .replace('href="tel:+49 176 633 56310"', 'href="tel:+4917663356310"')

# Landing page
landing = build_page(
    'VOGT Gebäudereinigung – Professionelle Reinigung in Bretten, Pforzheim, Karlsruhe',
    'landing',
    [HERO_LANDING, STATS, LEIS_BRIEF, WARUM_BRIEF, PREISE_TEASER, EINSATZ_MINI, KONTAKT_CTA]
)

with open('vogt-website.html', 'w', encoding='utf-8') as f:
    f.write(landing)
print('✓ vogt-website.html written')

# Preise & Leistungen page
preise_page = build_page(
    'Preise & Leistungen – VOGT Gebäudereinigung Bretten',
    'preise',
    [PAGE_PREISE_HERO, LEIS_FULL, WWA_FULL, ABLAUF_FULL, PREISE_FULL]
)

with open('preise-leistungen.html', 'w', encoding='utf-8') as f:
    f.write(preise_page)
print('✓ preise-leistungen.html written')

# Kontakt page
kontakt_page = build_page(
    'Kontakt & Standort – VOGT Gebäudereinigung Bretten',
    'kontakt',
    [PAGE_KONTAKT_HERO, UEBER_UNS, EINSATZ_FULL, KONTAKT_FULL]
)

with open('kontakt.html', 'w', encoding='utf-8') as f:
    f.write(kontakt_page)
print('✓ kontakt.html written')

print('\nDone! 3 pages generated.')
