# Medien-Matrix: elternverein.today
> **Analysiert am:** 08.05.2026 | **Methode:** Crawl + DOM-Inspektion
> **Basis-URL:** https://www.elternverein.today | **Upload-Pfad:** `/EV/wp-ev_content/uploads/`

---

## Legende
| Symbol | Bedeutung |
|--------|-----------|
| ✅ | Gut / Vorhanden |
| ⚠️ | Verbesserungswürdig |
| ❌ | Fehlt / Problematisch |
| 🔴 | Kritischer Befund |

---

## Gefundene Mediendateien

### Bild 1 – Header-Banner

| Feld | Inhalt |
|------|--------|
| **Dateiname** | `EV-Header-1024x200-neu.png` |
| **Volle URL** | `https://www.elternverein.today/EV/wp-ev_content/uploads/2014/09/EV-Header-1024x200-neu.png` |
| **Upload-Datum** | September **2014** |
| **Alt-Text** | ⚠️ `"Elternverein"` (aus Link-title abgeleitet, nicht direkt am img) |
| **Bildkategorie** | **Hero / Header-Banner** |
| **Abmessungen** | 1024 × 200 px |
| **Format** | PNG |
| **Geschätzte Dateigröße** | ⚠️ ca. 80–150 KB |
| **Auf Seiten gefunden** | Alle 13 Seiten (seitenübergreifend im Theme-Header) |
| **Position** | Oberster Bereich (Page-Header, über der Navigation) |
| **Responsive** | ❌ Kein `srcset`, kein `sizes`-Attribut |
| **Lazy Loading** | ❌ Kein `loading="lazy"` |
| **🔴 Befunde** | Bild von 2014, PNG statt SVG/WebP, keine responsive Varianten, Dateiname hartcodiert mit Größe (`-1024x200-`) |

---

### Bild 2 – Logo (Sidebar)

| Feld | Inhalt |
|------|--------|
| **Dateiname** | `EV-Logo-pur-small2.jpg` |
| **Volle URL** | `https://www.elternverein.today/EV/wp-ev_content/uploads/2014/08/EV-Logo-pur-small2.jpg` |
| **Upload-Datum** | August **2014** |
| **Alt-Text** | 🔴 `""` (leer – Alt-Text fehlt vollständig!) |
| **Bildkategorie** | **Logo** |
| **Abmessungen** | ca. 100 × 100 px |
| **Format** | JPG |
| **Geschätzte Dateigröße** | ⚠️ ca. 5–15 KB |
| **Auf Seiten gefunden** | Alle 13 Seiten (Sidebar-Widget) |
| **Position** | Sidebar (rechts, unterhalb der Navigation) |
| **Responsive** | ❌ Kein `srcset` |
| **Lazy Loading** | ❌ Kein `loading="lazy"` |
| **🔴 Befunde** | **Kein Alt-Text** (WCAG 2.1 Verstoß). JPG statt SVG/PNG für Logo. Dateiname impliziert manuelle Kopie (`small2`). Bild von 2014 |

---

### Bild 3 – Favicon / Site-Icon

| Feld | Inhalt |
|------|--------|
| **Dateiname** | — |
| **Volle URL** | 🔴 Nicht gesetzt |
| **Alt-Text** | ❌ Entfällt |
| **Bildkategorie** | **Icon / Favicon** |
| **Abmessungen** | — |
| **Auf Seiten gefunden** | Alle Seiten (Browser-Tab) |
| **🔴 Befunde** | **Kein eigenes Favicon gesetzt** – Browser zeigt Standard-Icon. Kein Apple Touch Icon vorhanden. |

---

## Seitenübergreifende Analyse

### Welche Bilder erscheinen auf welchen Seiten?

| Bild | Home | Elternverein | Vorstand | Statuten | Geschäftso. | Services | Unterstützung | Nachhilfe | Kurse | Projekte | Proj.2025/26 | Kostenübers. | Impressum |
|------|:----:|:------------:|:--------:|:--------:|:-----------:|:--------:|:-------------:|:---------:|:-----:|:--------:|:------------:|:------------:|:---------:|
| Header-Banner | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Logo Sidebar | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Favicon | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

> **Ergebnis:** Die Website verwendet auf **allen 13 Seiten** exakt dieselben 2 Bild-Assets. Es gibt **keine seitenspezifischen Inhaltsbilder, keine Galeriebilder, keine Teamfotos und keine Hero-Illustrationen**.

---

## Alt-Text-Audit

| Bild | Alt-Text vorhanden? | Wert | Bewertung |
|------|:-------------------:|------|-----------|
| Header-Banner | ⚠️ Indirekt | `"Elternverein"` | Nicht aussagekräftig, fehlt direkt am `<img>` |
| Logo Sidebar | 🔴 Nein | `""` (leer) | **WCAG-Verstoß** – Screen Reader überspringt Bild |
| Favicon | ❌ Entfällt | — | Kein Favicon vorhanden |

---

## Duplikat-Analyse

| Befund | Details |
|--------|---------|
| **Seitenübergreifende Duplikate** | Beide Bilder werden auf allen 13 Seiten geladen (gewollt, da Theme-Assets) |
| **Dateiname-Anomalie** | `EV-Logo-pur-small2.jpg` – `small2` deutet auf manuelle Kopie hin (nicht WP-Standard-Thumbnail) |
| **Datei-Duplikat-Risiko** | ⚠️ Möglicherweise existieren weitere Varianten des Logos in der WordPress-Mediathek (nicht per Crawler sichtbar) |

---

## Optimierungs-Audit

| Bild | Format-Problem | Abmessungen | WebP? | `srcset`? | Lazy Load? |
|------|---------------|-------------|-------|-----------|-----------|
| `EV-Header-1024x200-neu.png` | ⚠️ PNG → SVG/WebP | 1024×200 | ❌ | ❌ | ❌ |
| `EV-Logo-pur-small2.jpg` | ⚠️ JPG → SVG/WebP | ~100×100 | ❌ | ❌ | ❌ |

### Core Web Vitals Auswirkung
- **LCP (Largest Contentful Paint):** Header-Banner ist das LCP-Element auf jeder Seite – kein Preload, kein WebP → **schlechte Performance**
- **CLS (Cumulative Layout Shift):** Keine expliziten `width`/`height`-Attribute → möglicher Layout-Shift

---

## Fehlende Medien (Checkliste für Migration)

| # | Fehlender Medientyp | Benötigt auf Seite | Priorität |
|---|--------------------|--------------------|-----------|
| 1 | **Favicon** (SVG/ICO 32×32 + Apple Touch 180×180) | Alle Seiten | 🔴 Hoch |
| 2 | **Hero-Bild oder Illustration** (Startseite) | Home | 🔴 Hoch |
| 3 | **Vorstandsfotos** (Portraits, 400×400, WebP) | EV Vorstand | 🔴 Hoch |
| 4 | **Logo SVG** (Vektor, skalierbar) | Header alle Seiten | 🔴 Hoch |
| 5 | **Open Graph Bild** (1200×630) für Social Media | Alle Seiten | ⚠️ Mittel |
| 6 | **Service-Icons** (SVG für 7 Service-Bereiche) | EV Services | ⚠️ Mittel |
| 7 | **PDF-Thumbnails** für Download-Vorschauen | Statuten, Geschäftsordnung | ⚠️ Mittel |

---

## Globale Zusammenfassung

### Medien-Statistik

| Metrik | Ergebnis |
|--------|----------|
| Gesamte Bilddateien | **2** |
| Davon mit korrektem Alt-Text | **0** (0%) |
| Davon responsive (srcset) | **0** (0%) |
| Davon in modernem Format (WebP/SVG) | **0** (0%) |
| Davon lazy-loaded | **0** (0%) |
| Favicon vorhanden | ❌ Nein |
| Datei-Alter | Alle von **2014** |
| Seitenspezifische Inhaltsbilder | **0** |
| Vorstandsfotos | **0** |
| Hero-Bilder | **0** |

### Top-5 Prioritäten für die Migration

| # | Maßnahme | Aufwand |
|---|----------|---------|
| 1 | **Logo als SVG** neu erstellen / vektorisieren | Niedrig |
| 2 | **Favicon** (SVG + ICO + Apple Touch Icon) einrichten | Niedrig |
| 3 | **Alt-Texte** auf allen Bildern setzen (WCAG-Pflicht) | Niedrig |
| 4 | **Vorstandsfotos** beim Kunden einfordern, als WebP hochladen | Mittel |
| 5 | **Header-Banner** durch Gutenberg Cover-Block ersetzen | Mittel |

### Empfohlene Bildformate für die neue Website

| Bildtyp | Format | Begründung |
|---------|--------|-----------|
| Logo | **SVG** | Verlustfrei, skalierbar, winzige Dateigröße |
| Favicon | **SVG + ICO** (Fallback) | Moderner Standard |
| Vorstandsfotos | **WebP** (400×400 px) | 30–50% kleiner als JPG |
| Hero-Bilder | **WebP + AVIF** (1920×600 px) | Beste Kompression, moderne Browser |
| Icons | **SVG inline** | Skalierbar, keine HTTP-Anfrage |
| Open Graph | **JPG/PNG** (1200×630 px) | Social Media Standard |
