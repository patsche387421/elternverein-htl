---
name: languages
description: Enforce high-level internationalization (i18n) standards across web applications.
---

# Language Management Skill

This skill ensures that the application is fully multi-language capable and that all user-facing strings are managed centrally.

## Core Standards

### 1. No Hardcoded Strings
- Every user-facing text element (labels, placeholders, buttons, meta-tags, error messages) MUST use the `t()` function from `react-i18next`.
- Never use hardcoded strings in JSX.

### 2. JSON Structure
- Support for multiple languages via standard JSON files in `src/locales/`.
- Maintain structural parity between languages (if a key exists in `de.json`, it must exist in `en.json`, `tr.json`, etc.).

### 3. Semantic Keys
- Use logical, hierarchical keys:
  - `nav.home`
  - `contact.form.emailPlaceholder`
  - `errors.requiredField`
- Avoid flat keys like `text1`, `text2`.

### 4. Language Consistency
- **DE**: "Unterstützung" for support-related services (unless it's technical support).
- **EN**: "Support".
- **TR**: "Destek".

### 5. Placeholder & Validation Translation
- Input placeholders and dynamic validation messages must be included in the translation files.
- Example: `placeholder={t('form.email_placeholder')}`.

## Checklist for UI Components
- [ ] No hardcoded text in JSX?
- [ ] All placeholders use translation keys?
- [ ] Error messages (e.g., from Zod or native validation) translated?
- [ ] Structure consistent across all `locales/*.json` files?
