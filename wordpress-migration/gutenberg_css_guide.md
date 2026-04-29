# CSS-Guide: Gutenberg & Native Block Themes

> Technische Referenz für das Elternverein-Redesign  
> **Zielgruppe:** Schüler A (Tech Lead) + Schüler B (Design)  
> **WICHTIG:** Dieser Guide geht davon aus, dass ein natives Block-Theme (z.B. Twenty Twenty-Four) verwendet wird. **Kein Bootstrap mehr!**

---

## 1. Das Konzept: Warum wir Bootstrap verwerfen

Das alte Theme (`FirmaSite`) nutzte Bootstrap, was zu einem stark aufgeblähten HTML-Markup und extrem spezifischen CSS-Regeln (`.container .row .col-md-6`) führte. 

Im neuen Gutenberg-Ansatz bauen wir **direkt auf den Core-Blöcken auf**. 
Vorteile:
- Sauberes, schlankes HTML.
- Keine Konflikte mit fremden CSS-Frameworks.
- Volle Kompatibilität mit dem neuen Site Editor (Full Site Editing).

Die Hierarchie der Styles (Wer gewinnt?):
1. **`theme.json`** (Zentrale Definition – höchste Priorität)
2. **Inline-Styles des Editors** (Wenn ein User im Editor eine Farbe klickt)
3. **Unsere `style.css` im Child Theme** (Für alles, was `theme.json` nicht kann)

---

## 2. Die `theme.json` – Das Herzstück des Designs

Bevor wir auch nur eine Zeile CSS schreiben, definieren wir die globalen Variablen in der `theme.json` im Hauptverzeichnis unseres Child-Themes. Das generiert nicht nur das CSS für das Frontend, sondern konfiguriert auch die Farbpaletten direkt im WordPress-Editor.

```json
{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        { "slug": "primary", "color": "#2563eb", "name": "Primär Blau" },
        { "slug": "primary-dark", "color": "#1e40af", "name": "Primär Dunkel" },
        { "slug": "surface", "color": "#f8fafc", "name": "Hintergrund Hell" },
        { "slug": "text-main", "color": "#1e293b", "name": "Text Standard" },
        { "slug": "accent-red", "color": "#dc2626", "name": "Akzent (Warnung)" }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "'Inter', sans-serif",
          "slug": "inter",
          "name": "Inter"
        }
      ]
    },
    "layout": {
      "contentSize": "800px",  
      "wideSize": "1200px"
    }
  },
  "styles": {
    "typography": {
      "fontFamily": "var(--wp--preset--font-family--inter)",
      "color": "var(--wp--preset--color--text-main)"
    },
    "elements": {
      "button": {
        "color": {
          "background": "var(--wp--preset--color--primary)",
          "text": "#ffffff"
        },
        "border": {
          "radius": "8px"
        }
      }
    }
  }
}
```

> [!TIP]
> **Tipp für den Tech Lead:** Alles, was sich in der `styles`-Sektion der `theme.json` befindet, wird automatisch vom Core-CSS verarbeitet. Wir müssen dafür keine Zeile in die `style.css` schreiben!

---

## 3. Die `style.css`: Gezielte Block-Overrides

Wenn die `theme.json` nicht ausreicht (z.B. für Hover-Effekte oder komplexe Layout-Anpassungen), nutzen wir die `style.css`. Wir zielen dabei immer auf die nativen `.wp-block-*` Klassen.

### 3.1 Globale Selektoren und Typografie

```css
/* Wir nutzen die von WordPress generierten Variablen aus der theme.json */

h1, h2, h3, h4 { 
  font-weight: 700; 
  letter-spacing: -0.02em;
}

h1 { font-size: clamp(2rem, 5vw, 3.5rem); } /* Responsive Typografie */
```

### 3.2 Buttons (Hover-Effekte & Transitions)

Da die Grundfarben und Radien in der `theme.json` stehen, fügen wir in der `style.css` nur noch Verhalten hinzu:

```css
.wp-block-button__link {
  font-weight: 600;
  transition: all 0.2s ease-in-out;
}

.wp-block-button__link:hover {
  background-color: var(--wp--preset--color--primary-dark) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
```

### 3.3 Struktur-Blöcke (Cover, Columns, Group)

```css
/* Hero-Bereich (Cover Block) auf volle Höhe ziehen */
.wp-block-cover.is-style-hero-fullscreen {
  min-height: 80vh;
}

/* Spalten-Abstände optimieren */
.wp-block-columns {
  gap: 2rem;
}

/* Akkordeon (Details-Block für FAQ) modernisieren */
.wp-block-details {
  background: var(--wp--preset--color--surface);
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1rem;
}

.wp-block-details summary {
  font-weight: 600;
  cursor: pointer;
  list-style: none; /* Entfernt den Standard-Pfeil in manchen Browsern */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Eigener Pfeil für das Akkordeon */
.wp-block-details summary::after {
  content: "+";
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--wp--preset--color--primary);
  transition: transform 0.3s ease;
}

.wp-block-details[open] summary::after {
  transform: rotate(45deg);
}
```

---

## 4. Formular-Styling (Losgelöst von Bootstrap)

Da Formular-Plugins (wie Contact Form 7 oder WPForms) oft eigenes, sehr einfaches CSS mitbringen, müssen wir dieses komplett überschreiben, damit es sich nahtlos ins neue Design einfügt.

```css
/* Alle Input-Felder, Textareas, Selects modernisieren */
.wpcf7 input[type="text"],
.wpcf7 input[type="email"],
.wpcf7 input[type="tel"],
.wpcf7 textarea,
.wpforms-form input[type="text"],
.wpforms-form input[type="email"],
.wpforms-form textarea {
  width: 100%;
  padding: 0.875rem 1.25rem;
  border: 2px solid #cbd5e1;
  border-radius: 8px;
  font-family: var(--wp--preset--font-family--inter);
  font-size: 1rem;
  color: var(--wp--preset--color--text-main);
  background-color: #ffffff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

/* Focus-State (Zugänglichkeit / Accessibility) */
.wpcf7 input:focus,
.wpcf7 textarea:focus,
.wpforms-form input:focus,
.wpforms-form textarea:focus {
  outline: none;
  border-color: var(--wp--preset--color--primary);
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.15); /* Weicher Glow-Effekt */
}

/* Labels */
.wpcf7 label,
.wpforms-form label {
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  display: block;
  color: #475569;
}

/* Submit-Button an den Theme-Button anpassen */
.wpcf7 input[type="submit"],
.wpforms-form button[type="submit"] {
  background-color: var(--wp--preset--color--primary);
  color: #ffffff;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.wpcf7 input[type="submit"]:hover,
.wpforms-form button[type="submit"]:hover {
  background-color: var(--wp--preset--color--primary-dark);
  transform: translateY(-2px);
}

/* Validation Errors (Fehlermeldungen) */
.wpcf7-not-valid-tip,
.wpforms-error {
  color: var(--wp--preset--color--accent-red);
  font-size: 0.875rem;
  margin-top: 0.5rem;
  font-weight: 500;
}
```

---

## 5. Google Font Performance-Tipp

Anstatt die Schrift in der `functions.php` zu laden, können wir sie im Zeitalter von Full Site Editing direkt über die `theme.json` oder lokal laden, um DSGVO-Probleme (Google Fonts Abmahnungen) zu vermeiden.

**Empfohlener Weg:**
Ladet die Schriftart "Inter" als `.woff2` herunter, legt sie im Child-Theme in einen `/fonts` Ordner und verlinkt sie in der `style.css`:

```css
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url('./fonts/inter-variable.woff2') format('woff2');
}
```

---
*Technische Referenz für das MEDT-Projekt – HTL Mödling, Update nach Architektur-Wechsel, April 2026*
