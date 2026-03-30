---
name: seo-optimization
description: Enforce high-level SEO standards across web applications, including semantic HTML, structured data, and performance.
---

# SEO Optimization Skill

This skill ensures that every page follows modern SEO best practices for visibility, accessibility, and performance.

## Core Standards

### 1. Semantic HTML5
Always use semantic tags to define the structure of the page:
- `<main>` for the primary content.
- `<header>` for hero sections or page titles.
- `<nav>` for navigation elements.
- `<article>` for independent content (news, blog posts).
- `<section>` for logical blocks.
- `<footer>` for page footers.
- Ensure only one `<h1>` per page.

### 2. Meta-Tagging with <SEO /> Component
Every page MUST include the `SEO` component with:
- `title`: Descriptive and unique (max 60 chars).
- `description`: Compelling summary (max 160 chars).
- `keywords`: Relevant comma-separated terms.
- `canonical`: URL of the preferred version of the page.
- `type`: 'website', 'article', etc.

### 3. Structured Data (JSON-LD)
Implement JSON-LD schema markup for critical pages:
- **Organization**: Homepage.
- **NewsArticle**: News detail pages.
- **BreadcrumbList**: Deeper page hierarchies.
- **LocalBusiness**: If the organization has a physical address.

### 4. Performance & Accessibility
- **Images**: Always use `loading="lazy"` for non-hero images.
- **Images**: Mandatory `alt` attributes describing the content.
- **Links**: Use descriptive link text (avoid "Click here").
- **Contrast**: Ensure text readability via high-contrast overlays on images.

## Checkliste für jede Seite
- [ ] `SEO` Komponente eingebunden?
- [ ] Semantische Tags (`main`, `section`, `article`) korrekt gesetzt?
- [ ] Genau eine `h1` vorhanden?
- [ ] Bilder mit `alt` und `lazy-loading` versehen?
- [ ] JSON-LD Markup auf Korrektheit geprüft?
