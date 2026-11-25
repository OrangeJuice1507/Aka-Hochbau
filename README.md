# A & K Hochbau GmbH – Website-Konzept

Konzept- und Demonstrationsprototyp für einen neuen Internetauftritt der A & K Hochbau GmbH, Kamenz.
Next.js 16 (App Router, statisch vorgerendert) · TypeScript · Tailwind CSS 4 · keine weiteren Abhängigkeiten.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Seiten

| Route | Inhalt |
| --- | --- |
| `/` | Hero, Faktenleiste, Leistungen, Projekte, Warum A & K, Unternehmen, Karriere, Kontakt-CTA |
| `/leistungen` | 22 Leistungen in 6 Bereichen, Sprungnavigation, CTA je Bereich (füllt das Formular vor) |
| `/projekte` | Portfolio-Raster mit Kategoriefilter |
| `/unternehmen` | Profil, Leitsatz, Arbeitsweise, Ansprechpartner, Standort |
| `/karriere` | Stelle Maurer (m/w/d), Ausbildung Maurer/Hochbaufacharbeiter (m/w/d), Bewerbung |
| `/kontakt` | Kontaktwege, Formular, Karte (Zwei-Klick, OpenStreetMap) |
| `/impressum`, `/datenschutz` | Platzhalter mit Verweis auf die bestehenden Rechtstexte |

## Inhalte pflegen

- **Unternehmensdaten:** `src/lib/site.ts` – Telefon, E-Mail, Adresse, Jahre Erfahrung. Alle Werte stammen von
  www.a-und-k-online.de (Stand Nov. 2026).
- **Leistungen:** `src/lib/services.ts`
- **Projekte:** `src/lib/projects.ts` – derzeit **ausschließlich Beispielprojekte** (`demo: true`, im UI als
  „Beispielprojekt“ markiert). Echte Projekte mit eigenen Fotos eintragen und `demo: false` setzen.

## Vor dem Livegang offen

- [ ] Eigene Fotos statt Unsplash-Platzhaltern (Bilder nach `public/` legen, `src` anpassen)
- [ ] Original-Logo als SVG statt Text-Wortmarke (`src/components/logo.tsx`)
- [ ] Echte Referenzprojekte, Ansprechpartner (Name, Foto), Ablauf „Arbeitsweise“ abstimmen
- [ ] Kontaktformular an Versand anbinden (Server Action oder Formular-Dienst) – aktuell wird **nichts** übertragen,
      die Bestätigung sagt das offen und bietet Versand per E-Mail-Programm an
- [ ] Impressum und Datenschutzerklärung übernehmen und rechtlich prüfen
- [ ] `site.live = true` setzen → schaltet Indexierung, `robots.txt` und Sitemap-Verweis frei
      (im Konzeptmodus ist die Seite für Suchmaschinen gesperrt)

## Technik & SEO

- Individuelle Title/Description je Seite, Canonical-URLs, `sitemap.xml`, `robots.txt`
- JSON-LD: `GeneralContractor`/`LocalBusiness` + `WebSite`, nur mit belegten Angaben
- Bilder über `next/image` mit Unsplash-CDN-Loader (AVIF/WebP, responsive `sizes`, Lazy Loading)
- Schriften Inter + Manrope über `next/font` (selbst gehostet)
- Scroll-Reveal per IntersectionObserver, respektiert „Bewegung reduzieren“; Inhalte bleiben ohne JS sichtbar
- Mobile-Menü mit Escape, Scroll-Sperre und Schließen beim Seitenwechsel; Skip-Link; Fokus-Stile

Bildnachweis: Platzhalterfotos von [Unsplash](https://unsplash.com) (Unsplash-Lizenz).
