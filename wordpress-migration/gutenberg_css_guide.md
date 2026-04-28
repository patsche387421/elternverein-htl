# CSS-Guide: Gutenberg & Child Theme

> Technische Referenz für das Elternverein-Redesign  
> **Zielgruppe:** Schüler A (Tech Lead) + Schüler B (Design)

---

## 1. Wie CSS im Child Theme funktioniert

### Ladereihenfolge (Kaskade)

```
1. WordPress Core CSS
2. Parent Theme CSS        ← das bestehende Design
3. Child Theme style.css   ← EURE Overrides (gewinnt!)
4. Inline-Styles            ← Gutenberg-Editor-Styles
```

**style.css** (Header):
```css
/*
Theme Name:   Elternverein HTL Child
Template:     name-des-parent-themes
Description:  Child Theme für das Elternverein Redesign
Version:      1.0
*/
```

---

## 2. theme.json – Farben & Fonts für den Editor

Die `theme.json` definiert Design-Tokens, die sowohl im **Frontend** als auch im **Gutenberg-Editor** gelten:

```json
{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        { "slug": "primary", "color": "#2563eb", "name": "Primär" },
        { "slug": "primary-dark", "color": "#1e40af", "name": "Primär Dunkel" },
        { "slug": "surface", "color": "#f8fafc", "name": "Oberfläche" },
        { "slug": "text", "color": "#1e293b", "name": "Text" },
        { "slug": "accent", "color": "#f59e0b", "name": "Akzent" }
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
      "contentSize": "1200px",
      "wideSize": "1400px"
    }
  }
}
```

---

## 3. Block-Selektoren: Wie man Gutenberg-Blöcke styled

### Die wichtigsten Selektoren

```css
/* === GLOBALE OVERRIDES === */

/* Alle Inhalte */
body, .editor-styles-wrapper {
  font-family: 'Inter', sans-serif;
  color: var(--wp--preset--color--text);
}

/* === TYPOGRAFIE === */

h1, h2, h3, h4 { font-weight: 700; }
h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }

/* === BUTTONS === */

.wp-block-button__link {
  background: var(--wp--preset--color--primary);
  border-radius: 0.75rem;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  transition: background 0.2s ease, transform 0.15s ease;
}
```

---

## 4. Formular-Restyling (nur CSS!)

```css
/* === FORMULAR-OVERRIDES === */

.wpcf7 input[type="text"],
.wpcf7 input[type="email"],
.wpcf7 textarea,
.wpforms-form input[type="text"],
.wpforms-form input[type="email"],
.wpforms-form textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.75rem;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: var(--wp--preset--color--text);
  background: #ffffff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
```

---

## 5. Responsive Design (Mobile First)

```css
/* === MOBILE FIRST === */

/* Standard = Mobile (< 768px) */
.wp-block-columns {
  flex-direction: column;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .wp-block-columns {
    flex-direction: row;
  }
}
```

---

## 6. Google Font laden

In der `functions.php` des Child Themes:

```php
add_action('wp_enqueue_scripts', function() {
    wp_enqueue_style(
        'google-font-inter',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        [],
        null
    );
});
```

---

*Technische Referenz für das MEDT-Projekt – HTL Mödling, April 2026*
