# SEO- und Qualitäts-Audit: elternverein.today
> **Analysiert am:** 08.05.2026 | **Methode:** Crawler + DOM-Inspektion + Mobile Viewport Test
> **System:** WordPress 6.1.10 (Theme: FirmaSite) | **Basis-URL:** https://www.elternverein.today

---

## 1. Executive Summary

Die aktuelle Website weist massive Defizite im Bereich **On-Page SEO, semantischer HTML-Struktur und Barrierefreiheit (Accessibility)** auf. Grundlegende SEO-Metadaten wie Meta-Descriptions fehlen komplett. Die Heading-Hierarchie ist durchgehend fehlerhaft. Aus technischer Sicht ist die WordPress-Version veraltet (Sicherheitsrisiko) und die Mobile-Usability weist Schwächen auf. Die anstehende Migration auf ein modernes Gutenberg-Theme bietet die perfekte Gelegenheit, diese "Technical Debt" vollständig aufzulösen.

---

## 2. Detaillierte Analyse-Ergebnisse

### 2.1 Technisches SEO & Metadaten

| Metrik | Befund | Bewertung |
|--------|--------|-----------|
| **Meta-Descriptions** | Auf keiner einzigen Seite vorhanden. | 🔴 **Kritisch** – Suchmaschinen generieren zufällige Snippets. |
| **Title-Tags** | Vorhanden, aber generisch (z.B. "Elternverein – Elternverein"). | ⚠️ **Warnung** – Nicht optimiert. |
| **Open Graph (Social)** | Fehlend (`og:title`, `og:description`, `og:image`). | ❌ **Fehlt** – Schlechte Darstellung beim Teilen von Links. |
| **Favicon** | Nicht als echtes Favicon (.ico/.svg) eingebunden. | ❌ **Fehlt** |
| **Canonical Tags** | Teilweise vorhanden, aber inkonsistent. | ⚠️ **Warnung** |

### 2.2 Semantische Struktur (Headings)

| Seite | H1-Tag | H2-H3 Tags | H4-H6 Tags | Fazit |
|-------|--------|------------|------------|-------|
| **Startseite** | 🔴 **0** | 0 | 15× H4 | Völlig fehlerhaft (H4 ohne H1-H3). |
| **EV Vorstand** | ✅ 1 | 0 | 1× H4 | H2 und H3 fehlen komplett. |
| **EV Statuten** | ✅ 1 | 0 | 3× H4 | §§-Texte komplett ohne semantische Struktur. |

### 2.3 Barrierefreiheit (Accessibility) & Medien

*   **Alt-Texte (Bilder):** Gravierende Mängel. Auf der Startseite fehlen bei 50% der Bilder die Alt-Texte. Auf Unterseiten fehlen bei nahezu allen Struktur- und Inhaltsbildern aussagekräftige `alt`-Attribute.
*   **Media-Performance:** Das Haupt-Banner (Header) liegt als unkomprimiertes PNG (1024x200) aus dem Jahr 2014 vor. Es fehlt der Einsatz moderner Formate wie WebP.

### 2.4 Mobile-Responsiveness & Usability

*   **Viewport:** Ein `<meta name="viewport">` Tag ist vorhanden (`width=device-width, initial-scale=1.0`). Das Layout bricht grundsätzlich responsiv (einspaltig bei 375px) um.
*   **Navigation:** Das Burger-Menü funktioniert auf Unterseiten, hat aber auf der Startseite Überlagerungs-Probleme mit dem großen Header-Banner. Es ist teilweise schwer als Navigation erkennbar.
*   **Touch-Targets:** Die Klickziele ("Touch Targets") im Bereich der Beitragslisten sind zu eng beieinander, was zu versehentlichen Fehlklicks auf mobilen Geräten führt.
*   **Formulare:** Mobile Eingabefelder sind teilweise zu klein skaliert.

### 2.5 Link-Struktur & Duplicate Content

*   **Interne Verlinkung:** Solide (ca. 30-50 interne Links pro Seite durch das Hauptmenü). Allerdings fehlen kontextbezogene In-Text-Verlinkungen zwischen den Seiten.
*   **Fragile Links:** Links wie `?p=18` (verwendet auf der Services-Seite zum Kontaktformular) sind extrem fehleranfällig und schlecht für SEO.
*   **Duplicate Content:** Viele Projekt-Archiv-Seiten (2012 bis 2026) haben exakt denselben (oder gar keinen) textlichen Inhalt, da die eigentlichen Daten von einem Plugin nachgeladen werden. Dies erzeugt Keyword-Kannibalisierung und leere Seiten im Google-Index.

---

## 3. Priorisierte Problemliste & Roadmap

### 🔴 Priorität 1: Kritische Fixes (Müssen bei Migration gelöst werden)
1.  **H1-Tags sicherstellen:** Jede Seite **muss** genau eine `<h1>` Überschrift haben. (Besonders die Startseite!).
2.  **Meta-Descriptions einbauen:** Ein SEO-Plugin (RankMath oder Yoast) installieren und für alle 13 Kernseiten einen maßgeschneiderten Text (ca. 155 Zeichen) schreiben.
3.  **WordPress-Update:** Die veraltete Version 6.1.10 muss durch die aktuellste WordPress-Version (6.5+) ersetzt werden.

### ⚠️ Priorität 2: Wichtige Verbesserungen
4.  **Heading-Hierarchie reparieren:** Keine H4 verwenden, wenn vorher keine H2 und H3 existieren.
5.  **Alt-Texte ergänzen:** Alle hochgeladenen Bilder in der neuen Mediathek müssen sofort mit deskriptiven Alt-Texten versehen werden.
6.  **Permalinks (Pretty URLs):** Fragile Links (`?p=18`) konsequent in lesbare URLs umwandeln (z.B. `/kontakt`).

### 🔵 Priorität 3: Performance & UX
7.  **Bilder-Optimierung:** Konsequenter Einsatz von WebP statt PNG/JPG für große Flächen (Hero-Bereich).
8.  **Favicon/Icons:** Ein sauberes SVG/ICO Favicon in den Customizer-Einstellungen von WordPress hochladen.
9.  **Mobile Navigation:** Das Gutenberg-Theme so konfigurieren, dass das Mobile-Menü ausreichend große Abstände (Padding) aufweist und sich deutlich vom Header abhebt.

---

> **Fazit für das Migrationsteam:**
> Die aktuelle Seite rankt (wenn überhaupt) nur aufgrund des Mangels an lokaler Konkurrenz. Bei der Umsetzung mit Gutenberg müssen keine komplexen SEO-Strukturen migriert werden, da keine vorhanden sind. Das Team kann mit einem "Clean Slate" (weißes Blatt) starten und SEO von Grund auf richtig aufsetzen (Yoast/RankMath, saubere H1-H6 Blöcke, Alt-Texte).
