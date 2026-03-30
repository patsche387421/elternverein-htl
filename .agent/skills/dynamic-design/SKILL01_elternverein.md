---
name: dynamic-design
description: Ensure UI consistency by deriving colors and styles mathematically from theme-config.json.
---

# Dynamic Design Skill

This skill ensures that the application's visual language is strictly driven by the `theme-config.json` and CSS variables, avoiding hardcoded values and ensuring semantic consistency.

## Core Principles

### 1. Central Configuration
- Always use CSS variables defined in `:root` (managed by `DesignPreview`).
- Primary color: `--color-primary`.
- Border radius: `--radius`.

### 2. Mathematical Color Derivation
When a color is not explicitly defined, derive it mathematically from the primary color:
- **Card Backgrounds**: Use `bg-primary/5` or `bg-primary/10` (Tailwind opacity shorthand).
- **Subtle Borders**: Use `border-primary/20`.
- **Text Accents**: Use `text-primary/60` for less emphasis.
- **Glass Effects**: Combine `bg-surface/50` with `backdrop-blur`.

### 3. Harmonische Akzentfarben (NEU)

> **Regel**: Benötigt die UI harmonische Akzent- oder Sekundärfarben, leite diese
> **immer mathematisch** von `--primary` ab. Keine fixen Farben (Orange, Violett etc.)
> verwenden, es sei denn, sie sind explizit in `theme-config.json` definiert.

#### Ableitungsstrategie (Prioritätsreihenfolge)

1. **Opacity-Stufen** (bevorzugt – einfachste Methode):
   - `bg-primary/5` – Subtiler Hintergrund
   - `bg-primary/10` – Card-Highlight
   - `bg-primary/20` – Aktiver Zustand
   - `bg-primary/40` – Mittlerer Akzent
   - `bg-primary/70` – Starker Akzent
   - `text-primary` – Volle Sättigung

2. **CSS-Computed Varianten** (via `computeThemeVars()` in `DesignPreview.tsx`):
   - `--secondary` = gleicher Hue, reduzierte Sättigung (`s * 0.6`)
   - `--accent` = Hue-Rotation (+30°), gleiche Sättigung

3. **Verbotene Muster**:
   - ❌ `bg-violet-600`, `bg-sky-500`, `bg-emerald-400` (Tailwind-Palette direkt)
   - ❌ `text-orange-500`, `text-red-600` (feste Farbnamen)
   - ✅ `bg-primary/10`, `text-primary`, `border-primary/20` (abgeleitet)
   - ✅ `bg-success`, `bg-warning`, `bg-destructive` (semantische Status-Farben aus Config)

#### Anwendungsbeispiele

| UI-Element | Richtig | Falsch |
|---|---|---|
| News-Tag „Event" | `bg-primary text-primary-foreground` | `bg-violet-600 text-white` |
| News-Tag „Protokoll" | `bg-primary/70 text-primary-foreground` | `bg-sky-600 text-white` |
| News-Tag „News" | `bg-primary/40 text-primary-foreground` | `bg-emerald-600 text-white` |
| Card-Hintergrund | `bg-primary/5` | `bg-violet-50 dark:bg-violet-900/20` |
| Icon-Farbe | `text-primary` | `text-destructive` |

### 4. Structural Consistency (100vh Layouts)
- Major entry sections (Hero) should fill the viewport (`min-h-svh`).
- Use `flex-col` and `justify-center` to center content perfectly "Above the Fold".
- Prevent "leaking" content from below by using precise padding or overflow control.
- **Image Placeholders**: Use `bg-primary/5` as fallback background on image containers to prevent layout shift during loading.

### 5. Visibility & Accessibility
- **Overlay Opacity**: Background image overlays should be adjustable based on the theme.
  - Light Mode: Lower overlay opacity for better image recognition.
  - Dark Mode: Higher overlay opacity for focus on text.
- **Contrast**: Ensure text remains readable (min 4.5:1 ratio) by adding subtle text-shadows or high-contrast backdrops if necessary.
- **Focus States**: All interactive elements (buttons, links) must show a visible `focus-visible:ring-2 ring-primary ring-offset-2` state for keyboard navigation.

### 6. Border-Radius Consistency
- All border-radius values must use the dynamic `--radius` variable via Tailwind classes.
- **Mapping**: `rounded-sm` (0.25x), `rounded-md` (0.5x), `rounded-lg` (1x), `rounded-xl` (1.5x), `rounded-2xl` (2x), `rounded-3xl` (3x).
- ❌ Niemals `rounded-[2.5rem]` oder `rounded-[2rem]` verwenden.
- Tags/Labels: `rounded-md` statt `rounded-full` (damit sie beim Abrunden mitgehen).

## Checklist for UI Components
- [ ] No hardcoded HEX/RGB values (only CSS variables or Tailwind primary-colors)?
- [ ] Adaptive backgrounds used (`bg-primary/x` instead of solid colors)?
- [ ] Harmonische Akzentfarben nur über Opacity-Stufen oder computed Varianten?
- [ ] `min-h-svh` check for entry sections?
- [ ] Background imagery recognizable in Light Mode?
- [ ] Consistent `border-radius` applied via `--radius` variable?
- [ ] Image placeholders with `bg-primary/5` to prevent layout shift?
- [ ] Focus-visible ring states on all interactive elements?
