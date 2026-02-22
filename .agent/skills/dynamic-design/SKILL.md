---
name: dynamic-design
description: Ensure UI consistency by deriving colors and styles mathematically from theme-config.json.
---

# Dynamic Design Skill

This skill ensures that the application's visual language is strictly driven by the `theme-config.json` and CSS variables, avoiding hardcoded values and ensuring semantic consistency.

## Core Principles

### 1. Central Configuration
- Always use CSS variables defined in `:root` (managed by `ThemeContext` or `DesignPreview`).
- Primary color: `--color-primary`.
- Border radius: `--radius-main`.

### 2. Mathematical Color Derivation
When a color is not explicitly defined, derive it mathematically from the primary color:
- **Card Backgrounds**: Use `bg-primary/5` or `bg-primary/10` (Tailwind opacity shorthand).
- **Subtle Borders**: Use `border-primary/20`.
- **Text Accents**: Use `text-primary/60` for less emphasis.
- **Glass Effects**: Combine `bg-surface/50` with `backdrop-blur`.

### 3. Structural Consistency (100vh Layouts)
- Major entry sections (Hero) should fill the viewport (`h-screen` or `min-h-screen`).
- Use `flex-col` and `justify-center` to center content perfectly "Above the Fold".
- Prevent "leaking" content from below by using precise padding or overflow control.

### 4. Visibility & Accessibility
- **Overlay Opacity**: Background image overlays should be adjustable based on the theme.
  - Light Mode: Lower overlay opacity for better image recognition.
  - Dark Mode: Higher overlay opacity for focus on text.
- **Contrast**: Ensure text remains readable (min 4.5:1 ratio) by adding subtle text-shadows or high-contrast backdrops if necessary.

## Checklist for UI Components
- [ ] No hardcoded HEX/RGB values (only CSS variables or Tailwind primary-colors)?
- [ ] Adaptive backgrounds used (`bg-primary/x` instead of solid colors)?
- [ ] `100vh` check for entry sections?
- [ ] Background imagery recognizable in Light Mode?
- [ ] Consistent `border-radius` applied via variables?
