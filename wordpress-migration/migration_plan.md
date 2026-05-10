# Zentrales Arbeitsdokument: WordPress Gutenberg Migration

> **Projekt:** Redesign Elternverein HTL Mödling
> **Stack:** WordPress Block Theme (z.B. Twenty Twenty-Four) → Child Theme
> **Referenz:** Bestehender React-Prototyp (aus dem `/src/pages/` Verzeichnis)
> **Zielgruppe:** Gesamtes Entwicklungsteam (Schüler & Lehrer)

Dieses Dokument dient als zentrale Informationsquelle für die Migration vom React-Prototyp zu einer nativen WordPress Gutenberg-Lösung. Es dokumentiert alle Entscheidungen, die Struktur und gibt klare Handlungsanweisungen.

---

## 1. Architektur & Setup

Wir nutzen ein modernes **Block Theme** (z.B. Twenty Twenty-Four) als Basis und erstellen ein eigenes **Child Theme**. Wir verzichten auf Page-Builder (wie Elementor) oder veraltete Frameworks (wie Bootstrap) und bauen rein auf native Gutenberg-Blöcke.

### 1.1 Lokale Entwicklung mit XAMPP (Temporäres Setup)

Bis ein Staging-Zugang auf dem Live-Server verfügbar ist, arbeitet das Team lokal.

1. **XAMPP installieren:** Lade XAMPP herunter und installiere es. Starte die Module **Apache** und **MySQL**.
2. **Datenbank anlegen:** Öffne `http://localhost/phpmyadmin` und erstelle eine neue leere Datenbank (z. B. `elternverein_wp`).
3. **WordPress installieren:**
   - Lade WordPress von `wordpress.org` herunter.
   - Entpacke den Ordner nach `C:\xampp\htdocs\elternverein`.
   - Öffne im Browser `http://localhost/elternverein` und folge dem Installations-Dialog (verknüpfe die zuvor erstellte Datenbank).
4. **Themes einrichten:**
   - Installiere unter *Design → Themes* das Theme **Twenty Twenty-Four**.
   - Lege im Ordner `htdocs/elternverein/wp-content/themes/` einen neuen Ordner `elternverein-child` an.
   - **Verknüpfung zum Parent-Theme herstellen:** Damit das System weiß, welches das Haupttheme ist und dessen Basis-Styles geladen werden, müsst ihr zwei Dateien im `elternverein-child` Ordner anlegen:
     
     **1. `style.css`** (sagt WP, wer das Parent ist):
     ```css
     /*
     Theme Name: Elternverein Child
     Template: twentytwentyfour
     */
     ```
     
     **2. `functions.php`** (lädt die Styles des Parent-Themes):
     ```php
     <?php
     add_action( 'wp_enqueue_scripts', 'ev_child_enqueue_styles' );
     function ev_child_enqueue_styles() {
         wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
     }
     ?>
     ```
   - Aktiviere anschließend das **Elternverein Child** Theme im Backend. Ab jetzt könnt ihr CSS in die `style.css` schreiben, das das Haupttheme überschreibt!

### 1.2 Was sind FSE Templates? (Erklärung für das Team)

**FSE** steht für **Full Site Editing**. In modernen WordPress-Themes (wie Twenty Twenty-Four) baut man nicht nur die Inhalte einer Seite mit Blöcken, sondern die *gesamte* Website (inklusive Header, Navigation und Footer).
- **Templates** definieren das Grundgerüst für bestimmte Seitentypen (z.B. "Einzelne Seite", "Archiv", "404-Fehlerseite"). Sie bestehen aus Blöcken.
- **Template-Teile (Template Parts)** sind wiederverwendbare Bereiche wie der *Header* oder *Footer*.
- Wenn wir z. B. den Footer anpassen wollen, gehen wir im Backend auf *Design → Editor* und bearbeiten den Template-Teil "Footer". Dies wirkt sich dann global auf die ganze Seite aus.

---

## 2. Seitenstruktur (Sitemap)

Die Seitenstruktur wurde anhand der aktuellen Anforderungen optimiert. Impressum und Datenschutz sind reine Footer-Links ("Rechtliches") und tauchen nicht in der Hauptnavigation auf.

```text
📄 Home (Startseite)
📄 Aktuelles (Beitragsseite / News)

📁 Über Uns
  📄 Vorstand
  📄 Statuten
  📄 Geschäftsordnung

📁 Services
  📄 Soziale Unterstützung
  📄 Kursangebot
  📄 Nachhilfe

📁 Projekte
  📄 Neuen Antrag stellen
  📄 Status der Anträge
  📄 Zum Archiv

📄 Kontakt

--- Footer (Rechtliches) ---
📄 Impressum
📄 Datenschutzerklärung
```

---

## 3. Team-Guide: React → WordPress via KI

Das Team kann KI-Assistenten (wie ChatGPT, Claude oder Gemini) nutzen, um die React-Komponenten schnell in WordPress-Lösungen umzuwandeln.

### 3.1 Dateien finden
Alle relevanten Vorlagen liegen im React-Quellcode unter:
`\src\pages\` (z.B. `Home.tsx`, `Board.tsx`, `Statutes.tsx`)

### 3.2 Der perfekte KI-Prompt
Wenn ihr eine Seite umsetzen wollt, kopiert den Code der jeweiligen `.tsx`-Datei und nutzt diesen Prompt:

> **Prompt-Vorlage für das Team:**
> "Du bist ein WordPress Gutenberg Experte. Hier ist der Code einer React-Seite (`[Dateiname].tsx`) für unser Elternverein-Projekt. 
> Bitte analysiere das Layout und sage mir exakt:
> 1. Welche nativen Gutenberg-Core-Blöcke (z. B. Cover, Columns, Group) ich im WordPress-Editor verschachteln muss, um dieses Layout nachzubauen.
> 2. Welche CSS-Klassen ich den Blöcken geben soll.
> 3. Welches CSS ich in meine `style.css` des Child-Themes einfügen muss, um exakt dieses Design (inkl. Hover-Effekte) zu erreichen.
> Bitte verwende KEINE Custom-HTML-Blöcke oder React-Code, sondern nur native Blöcke und reines CSS."

---

## 4. Zuordnung & Gutenberg-Blöcke (Cheat-Sheet)

Dieses Mapping zeigt auf einen Blick, welche React-Komponente welcher WordPress-Seite entspricht und welche Blöcke primär genutzt werden.

| React-Komponente | WordPress-Seite | Gutenberg-Hauptblöcke |
|------------------|----------------|----------------------|
| `Home.tsx` | Home (Startseite) | Cover, Columns, Query Loop, Details |
| `News.tsx` | Aktuelles | Query Loop, Details (für Archiv) |
| `Board.tsx` | Über Uns → Vorstand | Columns, Group, Image |
| `Statutes.tsx` | Über Uns → Statuten | Details (Accordion), Buttons |
| *(NEU)* | Über Uns → Geschäftsordnung | Details (Accordion), Buttons |
| `Services.tsx` | Services (Übersicht) | Cover, Columns, List, Buttons |
| `SocialSupport.tsx`| Services → Soziale Unterstützung| Cover, Columns, Group |
| `Courses.tsx` | Services → Kursangebot | Cover, Columns, Group |
| `Tutoring.tsx` | Services → Nachhilfe | Cover, TablePress (Plugin) |
| `Contact.tsx` | Kontakt | Columns, CF7 oder WPForms Block |
| `Impressum.tsx` | Footer → Impressum | Group, Paragraph |
| *(NEU)* | Footer → Datenschutz | Group, Paragraph |

---

## 5. Spezifische Seiten-Details & CSS-Snippets

### 5.1 Vorstand (`Board.tsx`)
- **Struktur:** 2- oder 3-spaltiges Grid (Block: `Columns`).
- **Feature-Hinweis:** Es wird **keine** Suchfunktion benötigt. Die Mitglieder werden einfach als Cards untereinander im Grid dargestellt.
- **CSS-Tipp:**
  ```css
  .ev-board-grid .wp-block-column {
    background: var(--wp--preset--color--surface);
    border: 1px solid #e2e8f0;
    border-radius: 1.5rem;
    padding: 2rem;
    transition: all 0.3s;
  }
  .ev-board-grid .wp-block-column:hover {
    border-color: var(--wp--preset--color--primary);
    box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  }
  ```

### 5.2 Statuten & Geschäftsordnung (`Statutes.tsx`)
- **Struktur:** Wir wandeln die reinen Texte in ein modernes Accordion um. Dafür nutzen wir den **Details-Block** in Gutenberg.
- **CSS-Tipp:**
  ```css
  .ev-accordion .wp-block-details {
    background: var(--wp--preset--color--surface);
    border: 1px solid #e2e8f0;
    border-left: 4px solid var(--wp--preset--color--primary);
    border-radius: 0.75rem;
    margin-bottom: 0.75rem;
  }
  .ev-accordion .wp-block-details summary {
    padding: 1.25rem;
    font-weight: bold;
    cursor: pointer;
  }
  ```

### 5.3 Nachhilfe (`Tutoring.tsx`)
- **Struktur:** Gutenberg-Tabellen sind standardmäßig nicht filter- oder sortierbar.
- **Lösung:** Wir nutzen das kostenlose Plugin **TablePress**. Die Tabelle wird dort angelegt (Spalten: Name, Fach, Klasse, Verfügbarkeit, Kontakt) und per Shortcode oder Block eingefügt.

---

## 6. Formulare & Sicherheit

Das Kontaktformular und künftige Formulare (z. B. Projektanträge) werden über ein Plugin realisiert (Empfehlung: **Contact Form 7** oder **WPForms Lite**).

**Sicherheits-Checkliste:**
- [ ] **Spam-Schutz:** Installation des Plugins *Honeypot for Contact Form 7*.
- [ ] **DSGVO:** Jedes Formular benötigt eine Checkbox: *"Ich stimme der Datenschutzerklärung zu"* (Pflichtfeld).
- [ ] **Logging:** Plugin *Flamingo* installieren, um Kontaktanfragen in der Datenbank zu speichern (falls Mails verloren gehen).

---

## 7. Offene To-dos & Nächste Schritte

1. **XAMPP/Localhost einrichten:** Das Team baut das Basis-Setup laut Kapitel 1 auf.
2. **Theme.json konfigurieren:** Farben (Primär, Akzent, Surface) und Fonts (z. B. Inter) im Child-Theme eintragen.
3. **Inhalte migrieren:** Aufteilung der Seiten (siehe Cheat-Sheet) an die Teammitglieder. Erste Tests mit den KI-Prompts.
4. **Alte Plugins prüfen (Abhängigkeit):** Klären, ob alte Backend-Logik (MailPoet, Cimy User Extra Fields) bezüglich der Mitgliedsbeiträge noch migriert werden muss (siehe `offene_fragen.md`).
5. **Texte anfordern:** Inhalte für die neuen Seiten (Geschäftsordnung, Projekt-Unterseiten, Datenschutz) beim Kunden anfragen.
