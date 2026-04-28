# WordPress Gutenberg Strategie – Elternverein HTL Mödling

> **Projekt:** Website-Redesign Elternverein HTL Mödling  
> **Kontext:** Bestehendes WordPress-Theme → **Child Theme** das nur überschreibt  
> **Team:** 4 Schüler + 1 Lehrer  
> **Ziel:** Schnelle, qualitativ hochwertige Ergebnisse  
> **Datum:** 27. April 2026 (aktualisiert)

---

## 1. Grundprinzip: Child Theme = Überschreiben, nicht Neubauen

> [!IMPORTANT]
> Wir bauen **keine neue Seite von Grund auf**. Die bestehende WordPress-Installation bleibt. Das Child Theme überschreibt gezielt das Aussehen (CSS, Templates, `theme.json`), während die bestehenden Inhalte und Formulare erhalten bleiben.

### Was ein Child Theme tut

```
Bestehendes Theme (Parent)
  └── Elternverein-Child (Child Theme)
       ├── style.css          → Überschreibt / ergänzt CSS des Parent
       ├── functions.php      → Lädt Child-CSS, registriert eigene Funktionen
       ├── theme.json         → Überschreibt Farben, Fonts, Spacing im Editor
       └── /templates         → Nur wenn ein Template komplett anders sein soll
```

**Wichtig:** Alles was im Child Theme NICHT definiert ist, wird automatisch vom Parent Theme übernommen. Man überschreibt also nur das, was sich ändern soll.

### Was bleibt, was ändert sich?

| Element | Bleibt bestehen | Wird überschrieben |
|---------|:-:|:-:|
| WordPress-Installation & Datenbank | ✅ | – |
| Bestehende Seiteninhalte | ✅ | – |
| Formulare (Kontakt, Projektantrag etc.) | ✅ | Nur das **Styling** |
| Menüstruktur | ✅ | Optional anpassbar |
| Plugins | ✅ | – |
| Farben, Fonts, Abstände | – | ✅ via `style.css` + `theme.json` |
| Header / Footer Layout | – | ✅ via Child-Templates oder CSS |
| Seitenlayouts (Hero, Spalten etc.) | – | ✅ via CSS + Gutenberg-Blöcke |

---

## 2. Realitätscheck: Was ist mit Gutenberg realistisch?

### ✅ Sofort umsetzbar (Gutenberg Core-Blöcke)

Diese Features können **mit Standard-Gutenberg-Blöcken** abgebildet werden – ohne zusätzliche Plugins:

| Feature | Gutenberg-Block | Aufwand |
|---------|----------------|---------|
| Hero-Bereich mit Text + Bild | `Cover`-Block + `Heading` + `Button` | ⏱️ 30 Min |
| Navigationsmenü anpassen | `Navigation`-Block oder Menü-Einstellungen | ⏱️ 45 Min |
| News/Aktuelles-Seite | `Query Loop`-Block + Beitrags-Template | ⏱️ 1-2 Std |
| Über uns / Vorstand | `Columns` + `Image` + `Paragraph` | ⏱️ 1 Std |
| FAQ-Akkordeon | `Details`-Block (nativ seit WP 6.3) | ⏱️ 30 Min |
| Kontaktseite mit Karte | `Custom HTML` (Google Maps Embed) | ⏱️ 45 Min |
| Footer anpassen | Site Editor → Footer Template Part | ⏱️ 1 Std |
| Statuten / Geschäftsordnung | `Heading` + `Paragraph` + `List` | ⏱️ 30 Min |

### ✅ Bestehende Formulare – nur Restyling

Die Formulare (Kontakt, Projektantrag etc.) funktionieren bereits und bleiben bestehen. Was sich ändert:

| Was | Wie |
|-----|-----|
| Formular-Felder (Inputs, Textareas, Selects) | CSS-Override im Child Theme |
| Buttons (Submit, Reset) | CSS-Override im Child Theme |
| Fehlermeldungen / Validierung | CSS-Override im Child Theme |
| Formular-Layout (Spalten, Abstände) | CSS-Override im Child Theme |

> [!TIP]
> **Alle Formular-Anpassungen passieren rein über CSS.** Kein Formular-Plugin muss gewechselt oder neu konfiguriert werden. Siehe dazu den separaten **[CSS-Guide](file:///c:/Users/PatrickKroeger/Documents/HTL Kolleg/Projects/Elternverein/wordpress-migration/gutenberg_css_guide.md)**.

### ⚠️ Mit leichtem Zusatzaufwand (falls noch nicht vorhanden)

| Feature | Plugin-Empfehlung |
|---------|-------------------|
| Cookie-Banner (DSGVO) | **Complianz** (kostenlos) oder bestehendes Plugin behalten |
| SEO / Meta-Tags | **Yoast SEO** (kostenlos) oder bestehendes Plugin behalten |
| Bildkompression | **Smush** (kostenlos) |

### ❌ NICHT im Zeitrahmen (weglassen / war nur Demo)

| Feature aus React-Version | Status |
|--------------------------|--------|
| Live-Theming (Color Picker) | ❌ War nur Demo-Feature, irrelevant |
| 10 Sprachen (i18n) | ❌ Max. 2 Sprachen (DE + EN) falls gewünscht |
| Custom Dashboard für Vorstand | ❌ WordPress Admin-Backend reicht |
| Dark Mode Toggle | ❌ Weglassen, sauberes Light-Design |

---

## 3. Prioritätsmatrix: Worauf zuerst fokussieren?

> **Prinzip:** Maximale Wirkung bei minimalem Aufwand → **Impact/Effort-Matrix**

### 🔴 Priorität 1 — „Quick Wins" (Woche 1)

| # | Aufgabe | Warum zuerst? | Aufwand |
|---|---------|---------------|---------|
| 1 | **Child Theme erstellen** (style.css + functions.php + theme.json) | Basis für alle Änderungen | 1 Std |
| 2 | **Farbschema definieren** in `theme.json` + `style.css` | Sofort sichtbare Veränderung | 1 Std |
| 3 | **Typografie anpassen** (Google Font laden, auf alle Elemente anwenden) | Professioneller Eindruck | 30 Min |
| 4 | **Startseite restylen** (Hero, Abstände, Buttons) | Erster Eindruck = alles | 3 Std |
| 5 | **Header / Navigation** restylen | Seitenübergreifend sichtbar | 2 Std |
| 6 | **Footer** restylen | Seitenübergreifend sichtbar | 1 Std |

**→ Ergebnis nach Woche 1:** Die Website sieht auf den ersten Blick komplett anders aus – neues Branding, neue Fonts, neuer Look.

### 🟡 Priorität 2 — „Kerninhalte restylen" (Woche 2)

| # | Aufgabe | Aufwand |
|---|---------|---------|
| 7 | **Formulare restylen** (Inputs, Buttons, Labels) | 2 Std |
| 8 | **Über uns / Vorstand** anpassen (Inhalte + Layout) | 2 Std |
| 9 | **Angebote/Services** Seiten restylen | 2 Std |
| 10 | **News-Bereich** restylen (Beitragsliste + Einzelansicht) | 2 Std |
| 11 | **Kontaktseite** Layout verbessern | 1 Std |

**→ Ergebnis nach Woche 2:** Alle Kernseiten haben den neuen Look. Formulare funktionieren und sehen modern aus.

### 🟢 Priorität 3 — „Polish & Extras" (Woche 3)

| # | Aufgabe | Aufwand |
|---|---------|---------|
| 12 | **Projekte-Bereich** restylen | 2 Std |
| 13 | **FAQ-Sektion** mit Details-Block aufbauen | 45 Min |
| 14 | **Responsive-Feinschliff** (Mobile-Tests, Breakpoints) | 2 Std |
| 15 | **Performance-Check** (Bilder optimieren, Caching) | 1 Std |
| 16 | **Cross-Browser-Test** (Chrome, Firefox, Safari, Edge) | 1 Std |
| 17 | **Dokumentation** finalisieren (JIRA, Figma) | 2 Std |

---

## 4. Gutenberg-Skills: Was muss das Team können?

### 4.1 Skill-Level-Übersicht

```
Level 0: WordPress-Basics           ← ALLE müssen das können (Tag 1)
Level 1: Gutenberg Core-Blöcke      ← ALLE müssen das können (Tag 1-2)
Level 2: CSS im Child Theme         ← 1-2 Personen (Tech Lead + Design)
Level 3: theme.json + Site Editor   ← 1 Person (Tech Lead)
```

### 4.2 Skill-Matrix pro Rolle

| Skill | Schüler A (Tech Lead) | Schüler B (Design) | Schüler C (Content) | Schüler D (Content) | Lehrer (PM/QA) |
|-------|:----:|:----:|:----:|:----:|:----:|
| Child Theme erstellen + pflegen | ✅ | – | – | – | 🔍 |
| CSS schreiben (style.css) | ✅ | ✅ | – | – | – |
| `theme.json` konfigurieren | ✅ | – | – | – | 🔍 |
| Gutenberg: Text-Blöcke | ✅ | ✅ | ✅ | ✅ | ✅ |
| Gutenberg: Layout-Blöcke (Columns, Cover, Group) | ✅ | ✅ | – | – | – |
| Gutenberg: Media-Blöcke (Image, Gallery) | – | ✅ | ✅ | ✅ | – |
| Site Editor: Header/Footer | ✅ | ✅ | – | – | – |
| Formular-Restyling (CSS) | ✅ | ✅ | – | – | – |
| Inhalte einpflegen & aktualisieren | – | – | ✅ | ✅ | 🔍 |
| Bilder beschaffen & optimieren | – | ✅ | ✅ | – | – |
| Qualitätskontrolle & Mobiltest | – | – | – | – | ✅ |

> **Legende:** ✅ = Verantwortlich | 🔍 = Überprüft/Unterstützt | – = Nicht nötig

---

## 5. Aufgabenverteilung: Sprint-Plan

### Sprint 1 (Woche 1): Visuelles Fundament

| Aufgabe | Wer | Status |
|---------|-----|--------|
| Child Theme erstellen (style.css, functions.php, theme.json) | Schüler A | `[ ]` |
| Farbpalette in `theme.json` + CSS-Custom-Properties definieren | Schüler A | `[ ]` |
| Google Font (Inter) laden und global anwenden | Schüler A | `[ ]` |
| Startseite restylen (Hero, CTAs, Abstände) | Schüler B | `[ ]` |
| Header / Navigation CSS-Override | Schüler A + B | `[ ]` |
| Footer CSS-Override | Schüler B | `[ ]` |
| Bestehende Texte prüfen & verbessern | Schüler C + D | `[ ]` |
| Bildmaterial sammeln & optimieren (Squoosh) | Schüler D | `[ ]` |
| Texte aus React-Prototyp (`de.json`) als Referenz aufbereiten | Schüler C | `[ ]` |
| **Review & Feedback** | Lehrer | `[ ]` |

---

## 6. Zusammenfassung: Die 5 Kernerkenntnisse

| # | Erkenntnis |
|---|-----------|
| 1 | **Child Theme = nur überschreiben.** Bestehende Inhalte, Formulare und Plugins bleiben. Wir ändern nur das Aussehen via CSS + `theme.json`. |
| 2 | **Formulare bleiben bestehen – nur neuer Look.** Kein Plugin-Wechsel, kein Umbau. Rein CSS-basiertes Restyling der Inputs, Buttons und Layouts. |
| 3 | **~80% der Arbeit ist CSS-Styling + Inhaltspflege.** Die technische Hürde ist gering. Fokus auf gute Texte, optimierte Bilder und saubere Abstände. |
| 4 | **Team-Split: 1 Tech + 1 Design + 2 Content.** Schüler A = Child Theme & CSS-Architektur, B = visuelles Design & Responsive, C+D = Inhalte einpflegen. Lehrer = Review. |
| 5 | **CSS-Technik im Detail:** Siehe separaten **[CSS-Guide für Gutenberg](file:///c:/Users/PatrickKroeger/Documents/HTL Kolleg/Projects/Elternverein/wordpress-migration/gutenberg_css_guide.md)** für `theme.json`, Custom Properties, Block-Selektoren und Formular-Restyling. |

---

*Erstellt im Rahmen des MEDT-Projekts – HTL Mödling, April 2026*
