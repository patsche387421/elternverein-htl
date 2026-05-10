# Technischer Architekturbericht: elternverein.today
> **Analysiert am:** 08.05.2026 | **Methode:** JavaScript DOM-Inspektion & Manuelle Layout-Prüfung
> **Basis-URL:** https://www.elternverein.today

---

## 1. Executive Summary

Die Website basiert auf einer veralteten WordPress-Installation (Version 6.1.10) und nutzt ein stark anpassungsbedürftiges Theme ("FirmaSite"), das auf Bootstrap und jQuery aufbaut. Positiv hervorzuheben ist der komplette Verzicht auf externe Tracking-Tools und Tracking-Cookies, was die Seite aus Datenschutzsicht unproblematisch macht (kein Cookie-Banner notwendig). Das Design verfolgt einen radikalen "Mobile-First"-Ansatz, der jedoch auf Desktop-Geräten zu massiven Usability-Einschränkungen führt.

---

## 2. Kern-Technologien & CMS

| Kategorie | Technologie | Befund & Bewertung |
|-----------|-------------|--------------------|
| **CMS** | WordPress | **Version 6.1.10** – Veraltet. Ein Update auf die aktuelle Version (6.5+) ist dringend erforderlich (Sicherheitsrisiko). |
| **Theme** | FirmaSite | Veraltetes Theme, das offensichtlich nicht mehr gepflegt wird. Die Migration auf das moderne **Twenty Twenty-Four** (Gutenberg Block-Theme) ist die korrekte strategische Entscheidung. |
| **CSS Framework** | Bootstrap | Wird aktuell geladen. **Ziel für Migration:** Vollständig entfernen, um CSS-Overhead zu reduzieren und stattdessen native Gutenberg-Blöcke zu nutzen. |
| **JS Libraries** | jQuery | Wird standardmäßig vom Theme/WP geladen. **Ziel für Migration:** Sofern keine Legacy-Plugins (wie TablePress in alten Versionen) dies erzwingen, sollte jQuery für das Frontend vermieden werden. |

---

## 3. Plugins & Externe Ressourcen

### 3.1 Identifizierte Plugins
Obwohl die Standard-Plugin-Pfade im Quelltext teilweise verschleiert sind, lassen sich aus der vorherigen Content-Matrix und dem Verhalten der Seite folgende Kern-Plugins ableiten:
1.  **Contact Form 7 (CF7):** Zuständig für die 3 aktiven Formulare (Unterstützung, Projektantrag, Kontakt).
2.  **Unbekanntes Projekt-Status-Plugin:** Generiert die 14 Unterseiten der Projektanträge und verwaltet den Status. (Muss bei der Migration genauer analysiert oder durch eine Eigenentwicklung/ACF ersetzt werden).

### 3.2 Hosting, CDNs & Fonts
*   **Fonts:** Die Seite lädt Google Fonts (`Voces` und `PT Sans`) direkt über die Google-Server (`fonts.googleapis.com`).
    *   🔴 **DSGVO-Risiko:** Das direkte Einbinden von Google Fonts ohne lokale Speicherung ist nach aktueller Rechtsprechung datenschutzrechtlich problematisch.
    *   **Migrationsempfehlung:** Schriften lokal in das neue Child-Theme einbinden.
*   **CDN:** Abgesehen von Google Fonts werden keine externen Content Delivery Networks (wie Cloudflare oder jsDelivr) für Kern-Assets verwendet.

---

## 4. Tracking, Analytics & Cookies

Die Analyse des DOMs und der aktiven Skripte ergab einen sehr erfreulichen Befund:

| Metrik | Befund | Bewertung |
|--------|--------|-----------|
| **Google Analytics / GTM** | ❌ Nicht vorhanden | ✅ DSGVO-konform |
| **Facebook Pixel** | ❌ Nicht vorhanden | ✅ DSGVO-konform |
| **Matomo / Piwik** | ❌ Nicht vorhanden | ✅ DSGVO-konform |
| **Aktive Cookies** | ❌ Keine (außer ggf. WP-Session für Admins) | ✅ Sehr gut |
| **Cookie-Banner** | ❌ Nicht vorhanden | ✅ Nicht notwendig (da kein Tracking) |

**Fazit:** Der Verzicht auf Tracking-Tools vereinfacht die Migration enorm. Es muss kein komplexes Consent-Management-System (wie Borlabs Cookie) lizenziert und konfiguriert werden.

---

## 5. Responsive Design & Layout-Architektur

### 5.1 Layout-Blöcke
Die Website ist sehr simpel und fast schon restriktiv aufgebaut. Es gibt folgende wiederkehrende Blöcke:
1.  **Globaler Header:** Logo (Text) mit flankierenden Platzhalter-Fotos und einer roten Menüleiste.
2.  **Navigation (Hamburger-Menü):** Das Menü ist **immer** hinter einem Burger-Icon (☰) versteckt, selbst auf extrem breiten Desktop-Monitoren. Dies ist eine starke Einschränkung der Usability.
3.  **Content-Area (Card-Style):** Beiträge und Seiteninhalte werden in einem zentralen, in der Breite stark begrenzten Container (Card-Design) dargestellt. Auf Desktops entstehen dadurch sehr breite, leere Ränder.
4.  **"Falsche" Sidebar:** Klassische Sidebar-Widgets (Neueste Beiträge, Archiv, Logo) befinden sich nicht neben, sondern **unter** dem Hauptinhalt (auf allen Breakpoints).
5.  **Globaler Footer:** Minimalistisch, enthält Theme-Credits.

### 5.2 Responsive Verhalten
Das Design ist "Mobile-First", wurde aber für Desktop-Bildschirme nicht sinnvoll erweitert.
*   **Mobile (Viewport 375px):** Das Layout funktioniert grundsätzlich, da es einspaltig konzipiert ist. Die Abstände (Paddings/Touch-Targets) sind teilweise zu gering.
*   **Desktop:** Das Layout skaliert nicht in die Breite. Es bleibt faktisch ein mobiles Layout, das in der Mitte eines großen Bildschirms zentriert wird.

---

## 6. Technische Migrationsempfehlungen

Für das Schülerteam ergeben sich aus dieser Analyse klare technische Vorgaben für die Umsetzung mit dem **Twenty Twenty-Four Theme**:

1.  **Vanilla CSS & Native Blöcke:** Verzicht auf Bootstrap und jQuery. Das Design muss ausschließlich mit WordPress-Core-Blöcken (Gruppen, Spalten, Cover) und Custom CSS im Child-Theme umgesetzt werden.
2.  **Desktop-Navigation:** Das permanente Burger-Menü wird durch eine klassische, horizontale Header-Navigation für Desktop-Geräte abgelöst. Das Burger-Menü kommt nur noch auf Mobile-Breakpoints zum Einsatz.
3.  **Lokale Fonts:** Die verwendeten Schriften (sofern sie beibehalten werden sollen) müssen zwingend heruntergeladen und lokal gehostet werden (`/assets/fonts/`).
4.  **Plugin-Reduzierung:** CF7 kann migriert werden, aber das ominöse Projekt-Status-Plugin sollte kritisch hinterfragt und idealerweise durch native Custom Post Types (CPT UI) und Advanced Custom Fields (ACF) abgelöst werden.
