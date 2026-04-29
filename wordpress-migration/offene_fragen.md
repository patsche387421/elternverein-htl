# Offene Fragen – Vor Finalisierung zu klären (Aktualisiert)

> **Status:** ⏳ Offen  
> **Betrifft:** WordPress Architektur-Wechsel, Datenmigration & Gutenberg-Setup  
> **Hinweis:** Die Analyse des alten `FirmaSite` Themes hat kritische technische Altlasten aufgezeigt, die vor dem Start geklärt werden müssen.

---

## 🔧 1. Technische Altlasten & Migration (Kritisch)

Die alte Website hat Mitgliedsbeiträge und Newsletter-Logik tief in das Theme (`functions.php`) und veraltete Plugins eingebaut. 

| # | Frage | Hintergrund / Warum relevant? |
|---|-------|-------------------------------|
| 1 | **Wird das Plugin *Cimy User Extra Fields* noch aktiv genutzt?** | Das Plugin ist veraltet. Es speichert aktuell Felder wie `EV_BEITRAG_BEZAHLT` und `ZAHLUNGSINFORMATION`. Wir müssen diese Daten in ein modernes Plugin (z.B. Advanced Custom Fields / ACF) oder natives User-Meta migrieren. |
| 2 | **Welche MailPoet-Version ist installiert?** | Die alte `functions.php` greift massiv in MailPoet Shortcodes (`[custom:status]`) ein, um Zahlungsaufforderungen zu senden. Läuft bereits das moderne MailPoet 3+, oder noch eine stark veraltete Version? |
| 3 | **Werden BuddyPress (Community) und bbPress (Foren) noch genutzt?** | Das alte `FirmaSite` Theme hatte diese tief integriert. Sollen Foren oder User-Profile im neuen Design erhalten bleiben? Falls ja, steigt der Aufwand. |

## 🎨 2. Design & Inhalte

| # | Frage | Hintergrund / Warum relevant? |
|---|-------|-------------------------------|
| 4 | **Soll das "Twenty Twenty-Four" Theme als Basis dienen?** | Es ist das aktuellste, performanteste Standard-Block-Theme von WordPress und ideal als Parent Theme für unser Vorhaben (ersetzt das alte, fehleranfällige Bootstrap-Theme). |
| 5 | **Liegen Logo und CI-Vorgaben hochauflösend vor?** | Um die `theme.json` initial mit den korrekten Primärfarben (z.B. das Vereins-Blau) und dem Logo im Header (Site Editor) auszustatten. |
| 6 | **Welche Inhalte/Texte werden übernommen?** | Eine Liste (Sitemap) der Seiten, die 1:1 aus dem alten System in die neuen Gutenberg-Blöcke transferiert werden sollen. |

## 📝 3. Formulare & Plugins

| # | Frage | Hintergrund / Warum relevant? |
|---|-------|-------------------------------|
| 7 | **Welches Formular-Plugin wird aktuell genutzt?** | (z.B. Contact Form 7, WPForms, Gravity Forms). Das ist wichtig, um die CSS-Klassen im Child-Theme (`style.css`) für das Restyling korrekt anzupassen. |
| 8 | **Gibt es ein Backup der Live-Seite?** | Da wir tiefgreifende Änderungen an Themes und User-Meta-Datenbanktabellen (Cimy -> ACF) vorschlagen, ist eine Staging-Umgebung oder ein vollständiges Backup absolut zwingend erforderlich. |

## 👥 4. Team & Zeitplan

| # | Frage | Hintergrund / Warum relevant? |
|---|-------|-------------------------------|
| 9 | **Hat "Schüler A" (Tech Lead) grundlegende PHP-Kenntnisse?** | Für die Migration der MailPoet-Shortcode-Filter aus der alten `functions.php` in die neue Struktur ist etwas PHP-Verständnis nötig. |
| 10| **Gibt es Zugang zu einer Staging-/Testumgebung?** | Der Architektur-Wechsel sollte nicht direkt auf der Live-Seite durchgeführt werden. |

---

> [!IMPORTANT]
> **Nächster Schritt:** Sobald die kritischen Fragen zur **MailPoet-Logik** und **User-Meta-Migration** (Fragen 1 & 2) geklärt sind, kann die technische Umsetzung im Child Theme (Sprint 1) sofort gestartet werden.
