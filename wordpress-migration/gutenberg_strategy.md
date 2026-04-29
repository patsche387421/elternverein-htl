# WordPress Gutenberg Strategie – Elternverein HTL Mödling (V2 - Block Theme)

> **Projekt:** Website-Redesign Elternverein HTL Mödling  
> **Kontext:** Migration von Legacy-Theme (FirmaSite/Bootstrap) → **Modernes Block-basiertes Parent Theme (z.B. Twenty Twenty-Four)** + Child Theme  
> **Team:** 4 Schüler + 1 Lehrer  
> **Ziel:** Zukunftsfähige, performante Gutenberg-Architektur unter Beibehaltung der Kernlogik (MailPoet-Integration)  
> **Datum:** 29. April 2026 (Aktualisiert nach Legacy-Analyse)

---

## 1. Architektur-Wechsel: Weg von Bootstrap, hin zu Block Themes

> [!WARNING]
> **Kritische Erkenntnis aus der Legacy-Analyse:** Das alte Parent-Theme (`FirmaSite`) basiert massiv auf Twitter Bootstrap, BuddyPress und bbPress. Es ist ein veraltetes, klassisches PHP-Template-Theme. Ein neues Gutenberg-Child-Theme auf diesem Fundament aufzubauen, würde zu massiven CSS-Konflikten führen.

**Die neue Architektur:**
Wir verwerfen das `FirmaSite` Theme komplett. Stattdessen nutzen wir ein modernes, natives WordPress Block Theme (z.B. *Twenty Twenty-Four*) als Parent Theme.

```text
Neues Parent Theme (z. B. Twenty Twenty-Four)
  └── Elternverein-Gutenberg-Child (Unser Child Theme)
       ├── style.css          → Gutenberg-spezifische CSS-Overrides
       ├── functions.php      → Laden der Styles UND Migration der Legacy-Logik (MailPoet)
       └── theme.json         → Zentrale Steuerung von Farben, Fonts und Spacing im Editor
```

### Was bleibt, was ändert sich?

| Element | Status | Maßnahme / Änderung |
|---------|:-:|---|
| WordPress-Installation & Datenbank | ✅ | Bleibt bestehen. |
| Parent Theme (`FirmaSite`) | ❌ | Wird durch ein modernes Block Theme ersetzt. |
| Bestehende Seiteninhalte | ⚠️ | Bleiben erhalten, müssen aber in Gutenberg-Blöcke konvertiert/gestylt werden. |
| Foren / Community (BuddyPress/bbPress) | ❓ | Klärungsbedarf: Werden diese Features noch genutzt? |
| Mitglieds-Daten (`Cimy User Extra Fields`) | ❌ | Cimy ist veraltet. Migration zu *Advanced Custom Fields (ACF)* oder nativem User Meta notwendig. |
| Newsletter-Logik (`MailPoet`) | 🔄 | Die Zahlungsstatus-Logik in der alten `functions.php` muss für das neue Child-Theme umgeschrieben werden. |

---

## 2. Legacy-Logik: Die MailPoet-Zahlungsstatus-Migration

Die Analyse des alten `elternverein` Child Themes (`functions.php`) zeigte eine kritische Integration:
Die Website prüft via `[custom:status]` und `[custom:text]` Shortcodes in MailPoet, ob ein Mitglied seinen Beitrag (`EV_BEITRAG_BEZAHLT`) bezahlt hat, und fügt Zahlungsverweise (`ZAHLUNGSINFORMATION`) in Newsletter ein.

> [!IMPORTANT]
> **Technischer Umbau:** Da das alte Plugin *Cimy User Extra Fields* veraltet ist, muss diese Logik neu geschrieben werden.
> 1. Anlage von User-Meta-Feldern (z.B. mit ACF) für Zahlungsstatus.
> 2. Übernahme und Modernisierung der `mailpoet_newsletter_shortcode` Filterfunktion in die neue `functions.php`.

---

## 3. Realitätscheck: Was ist mit Gutenberg realistisch?

### ✅ Gutenberg Core-Blöcke (Nativ)

| Feature | Umsetzung (Ohne Plugins) |
|---------|--------------------------|
| Hero-Bereich | `Cover`-Block + `Heading` + `Button` |
| Navigationsmenü | Site Editor → `Navigation`-Block |
| News/Aktuelles | `Query Loop`-Block + Post Template |
| Über uns / Vorstand | `Columns` (Spalten) + `Image` + `Paragraph` |
| FAQ | `Details`-Block (Akkordeon) |
| Footer | Site Editor → Footer Template Part |

### ⚠️ Formulardesign & Plugins

Die bestehenden Formulare (Kontakt etc.) bleiben. Das Styling erfolgt **rein über CSS** im neuen Child Theme. Da wir kein Bootstrap mehr haben, ist das Styling der Inputs und Buttons über unser neues CSS sogar sauberer und konfliktfreier.

---

## 4. Prioritätsmatrix & Sprint-Plan: Worauf zuerst fokussieren?

### 🔴 Sprint 1 (Woche 1): Fundament & Backend-Logik

| # | Aufgabe | Details | Wer |
|---|---------|---------|-----|
| 1 | **Parent Theme Wechsel** | Neues Block Theme installieren (Twenty Twenty-Four) und Child Theme anlegen. | Schüler A |
| 2 | **`theme.json` Setup** | Farben, Typografie (Inter) und Abstände für den Block Editor definieren. | Schüler A |
| 3 | **Startseite umbauen** | Alte Inhalte in saubere Gutenberg-Blöcke transferieren und via `style.css` anpassen. | Schüler B + C |
| 4 | **Backend: User Fields** | *Cimy User Extra Fields* durch ACF ersetzen. Felder für `EV_BEITRAG_BEZAHLT` anlegen. | Schüler A (Tech Lead) |
| 5 | **Backend: MailPoet Logik** | Die alte Shortcode-Logik aus der alten `functions.php` umschreiben und in die neue übernehmen. | Schüler A (Tech Lead) |

### 🟡 Sprint 2 (Woche 2): Layouts & Kerninhalte

| # | Aufgabe | Details | Wer |
|---|---------|---------|-----|
| 6 | **Header & Footer** | Im Site Editor (Full Site Editing) neu aufbauen und an das Design anpassen. | Schüler B |
| 7 | **Formular-Styling** | CSS-Overrides für Inputs, Buttons und Validation-Errors schreiben. | Schüler B |
| 8 | **Inhaltsseiten** | Über uns, Vorstand, Angebote mit Gutenberg Spalten und Cover-Blöcken restylen. | Schüler C + D |
| 9 | **News-Bereich** | Query-Loop Block für die Beitragsübersicht einrichten. | Schüler B |

### 🟢 Sprint 3 (Woche 3): Polish & Extras

| # | Aufgabe | Details | Wer |
|---|---------|---------|-----|
| 10 | **Responsive-Feinschliff** | Mobile-Tests, Breakpoints in der `style.css` anpassen. | Alle |
| 11 | **MailPoet Tests** | Test-Newsletter versenden, um zu prüfen, ob die Zahlungsstatus-Shortcodes korrekt greifen. | Lehrer / QA |
| 12 | **Performance & SEO** | Bildkompression (Smush), Metadaten prüfen. | Schüler C + D |
| 13 | **Cross-Browser-Test** | Funktionalität in Safari, Chrome, Firefox sicherstellen. | Alle |

---

## 5. Erweiterte Skill-Matrix pro Rolle

Durch die Legacy-Logik verschieben sich die Anforderungen leicht:

| Skill | Schüler A (Tech Lead) | Schüler B (Design) | Schüler C/D (Content) | Lehrer (QA) |
|-------|:----:|:----:|:----:|:----:|
| Child Theme / `theme.json` | ✅ | – | – | 🔍 |
| Gutenberg Full Site Editing (Header/Footer) | 🔍 | ✅ | – | – |
| CSS für Blöcke & Formulare | ✅ | ✅ | – | – |
| **PHP: MailPoet Custom Shortcodes** | ✅ | – | – | 🔍 |
| **Datenbank: User Meta Migration (ACF)**| ✅ | – | – | – |
| Block-Gestaltung (Inhalte einpflegen) | – | 🔍 | ✅ | – |

---

## 6. Fazit der Neuausrichtung

1. **Ein sauberer Schnitt:** Der Wechsel weg von `FirmaSite` und Bootstrap zu einem reinen Block-Theme garantiert eine performante und zukunftssichere Website.
2. **Backend-Logik bewahren:** Der wichtigste technische Task ist nicht das Design, sondern die Sicherstellung, dass die MailPoet-Mitgliedsbeitrag-Logik im neuen System weiter funktioniert.
3. **Volle Gutenberg-Macht:** Durch `theme.json` und Full Site Editing entfällt viel PHP-Template-Arbeit. Die Layouts entstehen direkt im Editor.

---
*Erstellt im Rahmen des MEDT-Projekts – HTL Mödling, April 2026*
