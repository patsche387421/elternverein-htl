# Image-Plan: Elternverein HTL Mödling

## 1. Ordner-Struktur
*   **`public/pics/`**: Dies ist unser Quellordner (Source of Truth) während der Entwicklung. Wenn wir neue Bilder hinzufügen wollen, damit sie vom Vite-Dev-Server aufbereitet und ausgeliefert werden, legen wir sie hier ab.
*   **`dist/pics/`**: Dies ist der Output-Ordner des letzten produktiven Builds (`npm run build`). Vite kopiert während des Builds alle statischen Assets aus `public` in das `dist`-Verzeichnis und optimiert sie falls konfiguriert. 

## 2. Image-Plan Tabelle

Nachfolgend alle identifizierten `.webp`-Dateien (sozusagen unser Asset-Katalog):

| Bild-Nr | Dateiname | Pfad | Interpretation / Inhalt |
|---|---|---|---|
| IMG-01 | Ausflug_1.webp | public/pics/ | Schülergruppe draußen; Schulausflug/Wandertag |
| IMG-02 | Ausflug_2.webp | public/pics/ | Weiteres Bild vom Schulausflug (Gruppendynamik) |
| IMG-03 | Event_Fußball.webp | public/pics/ | Schüler beim Sport-Event / Fußballspiel |
| IMG-04 | Event_Sieg.webp | public/pics/ | Jubelnde Schüler nach einem Event oder Wettkampf |
| IMG-05 | Event_Tag der offenen Tür_1.webp | public/pics/ | Projekt-Präsentation am Tag der offenen Tür |
| IMG-06 | Event_Vortrag.webp | public/pics/ | Vortrag oder Rede im Rahmen eines Events |
| IMG-07 | Labor_1.webp | public/pics/ | Schüler arbeiten konzentriert am Gerät im Labor |
| IMG-08 | Labor_2.webp | public/pics/ | Zweite Detailaufnahme aus dem Labor/Werkstatt |
| IMG-09 | Labor_3.webp | public/pics/ | Dritte Aufnahme der Schüler im praxisnahen Labor |
| IMG-10 | Labor_4.webp | public/pics/ | Vierte Aufnahme der Schüler im praxisnahen Labor |
| IMG-11 | News_Aluminiumteil.webp | public/pics/ | Detailaufnahme Maschinenbau-Frästeil / Abschlussarbeit |
| IMG-12 | News_Tisch von oben.webp | public/pics/ | Draufsicht auf Arbeitstisch / Projektplanung |
| IMG-13 | News_leuchtendes Zahnrad.webp | public/pics/ | Symbolbild Technik / Mechanik / Elektronik-Modell |
| IMG-14 | NormalZuCartoon.webp | public/pics/ | Experimentelles Bild (Cartoon-Filter Rendering) |
| IMG-15 | Praesentation_1.webp | public/pics/ | Elternverein/Schüler bei offizieller Projektpräsentation |
| IMG-16 | Praesentation_2.webp | public/pics/ | Zweites Bild einer Präsentation (Bindeglied zu Direktion) |
| IMG-17 | Protokoll_Vorschau_1.webp | public/pics/ | Deckblatt oder Dokumentenvorschau für Sitzungsprotokoll |
| IMG-18 | Robodog_1.webp | public/pics/ | Ein Roboterhund-Projekt, symbolisiert Spitzen-Hightech |
| IMG-19 | Robodog_2.webp | public/pics/ | Detailaufnahme oder zweiter Winkel des Roboterhunds |
| IMG-20 | Robodog_3.webp | public/pics/ | Dritte Aufnahme des Roboterhund-Projekts |
| IMG-21 | hero-bg-cartoon.webp | public/pics/ | Variantes Hintergrundbild der Schulfront im Comic-Look |
| IMG-22 | hero-bg.webp | public/pics/ | HTL Mödling Gebäude außen (klassischer Hero-Hintergrund) |
| IMG-23 | htl-gebaude-von-oben-2.webp | public/pics/ | Vogelperspektive des HTL Mödling Campus |
| IMG-24 | sportplatz.webp | public/pics/ | Außenaufnahme des HTL-Sportgeländes |

## 3. Freie Bild-Slots (Tabelle)

Aktuell sind ausschließlich auf der Startseite (`Home.tsx`) Bild-Elemente physisch vorgesehen. Folgende Slots haben wir dort definiert:

| Slot-Nr | Seite / Komponente | Datei | Aktuelles Bild / Platzhalter | Empfehlung |
|---|---|---|---|---|
| SLOT-01 | Startseite Hero | Home.tsx | NormalZuCartoon_opt.webp | **Belegt** (Animiert) |
| SLOT-02 | Fördern-Galerie (1) | Home.tsx | `/pics/Labor_1.webp` | Beibehalten. |
| SLOT-03 | Fördern-Galerie (2) | Home.tsx | `/pics/Labor_2.webp` | Beibehalten. |
| SLOT-04 | Fördern-Galerie (3) | Home.tsx | `/pics/Labor_3.webp` | Beibehalten. |
| SLOT-05 | Fördern-Galerie (4) | Home.tsx | `/pics/Labor_4.webp` | Beibehalten. |
| SLOT-06 | Helfen / Unterstützen (Split) | Home.tsx | `Event_Tag der offenen Tür_1.webp` | **Belegt** (IMG-05) |
| SLOT-07 | Informieren (Split UI - Main) | Home.tsx | `/pics/Praesentation_1.webp` | Beibehalten. |
| SLOT-08 | Helfen (Split UI - Sub) | Home.tsx | `/pics/Ausflug_1.webp` | Beibehalten. |
| SLOT-09 | News-Kachel: Events | Home.tsx | `/pics/Ausflug_1.webp` | Austauschen! |
| SLOT-10 | News-Kachel: Protokolle | Home.tsx | `Protokoll_Vorschau_1.webp` | **Belegt** (IMG-17) |
| SLOT-11 | News-Kachel: News | Home.tsx | `htl-gebaude-von-oben-2.webp` | **Belegt** (IMG-23) |
