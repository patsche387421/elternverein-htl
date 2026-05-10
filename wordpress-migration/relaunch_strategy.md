# Relaunch- & Migrationsstrategie: elternverein.today
> **Datum:** 08.05.2026 | **Projekt:** WordPress Gutenberg Migration
> **Ziel:** Zusammenführung aller Audit-Ergebnisse (Content, Media, SEO, Tech) zu einem konkreten Maßnahmenplan.

---

## 1. Neue Seitenstruktur (Sitemap)

Die aktuelle Struktur ist fragmentiert und teilweise verwirrend. Wir straffen die Architektur auf eine flache, nutzerzentrierte Hierarchie mit klaren Einstiegspunkten.

| Level 1 (Hauptmenü) | Level 2 (Unterseiten) | Funktion / Ziel |
|---------------------|-----------------------|-----------------|
| **Startseite** | - | News-Übersicht, Hero-Banner, Quick-Links |
| **Über uns** | Vorstand, Statuten, Geschäftsordnung | Bündelung aller Vereinsinformationen |
| **Services** | Soziale Unterstützung, Nachhilfeliste | Aktive Hilfsangebote für Eltern/Schüler |
| **Projekte** | Kostenübersicht | Einreichung & Information über Förderungen |
| **Kontakt** | - | Zentrales Formular & Kontaktdaten |
| **Rechtliches** (Footer)| Impressum, Datenschutz | Saubere Trennung rechtlicher Pflichten |

---

## 2. Inhalts-Strategie (Keep, Merge, Delete)

Wir wenden das "Spring Cleaning"-Prinzip an, um die Website von Altlasten zu befreien.

### 🟢 Behalten & Aufwerten (Keep)
*   **Vorstand:** Textstruktur übernehmen, aber zwingend um echte Portraits (WebP) und Profile (Cards) ergänzen.
*   **Soziale Unterstützung:** Text übernehmen, aber den Antragsprozess klarer in 3 Schritten visualisieren. Das Formular übernehmen.
*   **News/Blog-Beiträge:** Alle bisherigen Beiträge werden 1:1 als WordPress-Posts migriert, um die Historie zu erhalten.

### 🟡 Zusammenführen & Optimieren (Merge)
*   **Projekte & Kostenübersicht:** Die bisherigen 14 "Projektanträge Jahres-Seiten" (2012-2026) werden **restlos gelöscht**. Stattdessen gibt es eine zentrale Projekt-Seite mit dem Antragsformular und einem Accordion für die Kostenübersicht.
*   **Impressum & DSGVO:** Bisher eine Seite. Wird getrennt in `/impressum` und `/datenschutz`. Das Formular auf dieser Seite wird in eine eigene `/kontakt`-Seite verschoben.
*   **Statuten & Geschäftsordnung:** Die reinen Textwüsten werden in gut lesbare Gutenberg-Accordion-Blöcke (FAQs) gegliedert.

### 🔴 Entfernen (Delete)
*   **Derzeitiges Kursangebot:** Die Seite ist ein toter Platzhalter (1 Satz). Wird gelöscht. Bei Bedarf wird auf der Startseite eine News-Meldung gepostet.
*   **EV Services (Übersichtsseite):** Die Seite mit der fragilen Link-Struktur wird aufgelöst. Die Unterpunkte (Nachhilfe, Unterstützung) wandern direkt in das Dropdown-Menü.
*   **Nachhilfe-Excel-Download:** Die `.xls`-Datei wird gelöscht und durch eine responsive Tabelle (TablePress) direkt auf der Seite ersetzt.

---

## 3. Inhaltspriorisierung & UX/UI Verbesserungen

### 3.1 Design-Vorgaben für das Gutenberg-Theme
1.  **Mobile Navigation:** Das dauerhafte Desktop-Burger-Menü wird durch eine klassische, horizontale Navigation abgelöst. Das Burger-Menü wird erst ab Tablet-Größe (Breakpoints < 768px) aktiv.
2.  **Hero Section:** Die Startseite erhält ein echtes "Hero"-Element (Gutenberg Cover-Block) mit einer starken Headline ("Wir fördern die Zukunft der HTL Mödling") und zwei klaren CTAs (z.B. "Projekte einreichen", "Unterstützung anfragen").
3.  **Farbgebung:** Das harte Rot/Weiß der alten Seite wird in ein modernes, vertrauenserweckendes Corporate Design übersetzt (analog zum Design-Brief).
4.  **Touch-Targets:** Mindestens 48x48px Klickfläche für alle Links und Buttons auf mobilen Geräten.

### 3.2 Medien & Assets
*   **Logo:** Das alte, fehlerhafte JPG wird durch eine SVG-Version ersetzt.
*   **Favicon:** Ein SVG/ICO-Favicon wird im Customizer eingerichtet.
*   **Icons:** Für die Service-Bereiche werden moderne, konsistente SVG-Icons eingeführt.

---

## 4. SEO-Migrationsplan

### 4.1 On-Page Optimierung (Must-Haves)
*   **Yoast SEO / RankMath:** Installation eines SEO-Plugins.
*   **H1-Regel:** Jede migrierte Seite erhält zwingend einen `<h1>`-Titel am Anfang des Dokuments.
*   **Meta-Descriptions:** Für jede Seite wird ein individueller Text (ca. 155 Zeichen) formuliert, der zum Klicken anregt.
*   **Alt-Texte:** Jedes hochgeladene Bild erhält in der Mediathek einen deskriptiven `alt`-Text.

### 4.2 Technische Optimierung
*   **Permalinks:** Die Permalink-Struktur wird auf "Beitragsname" (`/%postname%/`) belassen/eingestellt.
*   **Ladezeiten:** Verzicht auf jQuery und Bootstrap. Bilder werden konsequent im **WebP-Format** hochgeladen.
*   **Google Fonts:** Schriften werden zwingend lokal im Theme eingebunden, um DSGVO-Konformität sicherzustellen und DNS-Lookups zu sparen.

---

## 5. Redirect-Strategie (301 Mapping)

Um bestehende Google-Rankings und externe Verlinkungen nicht zu verlieren, ist eine konsequente 301-Weiterleitung (Permanent Redirect) essenziell.

| Alte URL (Quelle) | Neue URL (Ziel) | Aktion / Grund |
|-------------------|-----------------|----------------|
| `/` | `/` | Bleibt identisch |
| `/elternverein/` | `/ueber-uns/` | URL bereinigt |
| `/elternverein/ev-vorstand/` | `/ueber-uns/vorstand/` | Logische Hierarchie |
| `/elternverein/ev-statuten/` | `/ueber-uns/statuten/` | Logische Hierarchie |
| `/elternverein/ev-geschaeftsordnung/` | `/ueber-uns/geschaeftsordnung/` | Logische Hierarchie |
| `/ev-services/` | `/` | Seite wird aufgelöst, Redirect auf Home |
| `/ev-services/unterstuetzungsansuchen/` | `/services/soziale-unterstuetzung/` | Klarer formuliert |
| `/ev-services/nachhilfeliste/` | `/services/nachhilfeliste/` | URL bereinigt |
| `/derzeitiges-kursangebot/` | `/` | Seite gelöscht, Redirect auf Home |
| `/projekte/` | `/projekte/` | Bleibt identisch |
| `/projekte/projektantraege-20*/` (14 URLs) | `/projekte/` | Leere Archiv-Seiten aufgelöst |
| `/kostenubersicht/` | `/projekte/` | Zusammengeführt mit Projekte |
| `/impressum/` | `/impressum/` | Bleibt identisch |
| *(Neu)* | `/datenschutz/` | Neue Seite für DSGVO |
| *(Neu)* | `/kontakt/` | Neue Seite für das allgemeine Formular |

**Umsetzung:** Die Redirects werden über die `.htaccess`-Datei (empfohlen für Performance) oder über das SEO-Plugin (Yoast/RankMath) direkt nach dem Go-Live eingerichtet.
