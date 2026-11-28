---
title: "Anwendungen"
description: "Wofür Tactility genutzt wird: Werkzeuge für Profis im Außeneinsatz, 3D-Spiele auf dem ESP32 und eine Plattform für Maker, die gerne bauen und experimentieren."
toc: true
---

Tactility macht aus einem günstigen ESP32-Gerät einen Taschencomputer, den du für die jeweilige Aufgabe anpassen kannst.
Hier sind einige Beispiele, wofür es genutzt wird.

## Profis {#professionals}

Für Techniker, Elektriker, Installateure und Sicherheitsfachleute ist ein Tactility-Gerät ein Werkzeugkasten im Taschenformat, der dorthin mitkommt, wo ein Laptop unpraktisch ist.

- **Werkzeuge für den Außeneinsatz**: Diagnostiziere und konfiguriere Geräte vor Ort. Die App **Serial Console** kommuniziert zum Beispiel über UART mit Geräten, und die App **GPIO** zeigt den aktuellen Zustand jedes Pins.
- **Messungen und Sensoren**: Lies Sensoren und Module über I2C, SPI und UART aus, auf unterstützten Geräten auch mit GPS, Audio und mehr.
- **Drahtlos**: Arbeite mit WLAN, Bluetooth LE, ESP-NOW und LoRa-Mesh-Netzwerken, auch dort, wo es keine Netzabdeckung gibt.
- **Erweiterbar**: Füge zur Laufzeit neue Peripherie und Treiber hinzu, ohne die Firmware neu zu flashen.
- **Eigene Werkzeuge**: Starte deine eigenen Apps und Skripte von der SD-Karte und boote direkt in das Werkzeug, das du brauchst.
- **Moderne Werkzeuge**: Verwalte Geräte aus der Ferne im Browser, entwickle und verteile Apps per WLAN und teste mit dem Simulator auf deinem PC.

## Gaming {#gaming}

ESP32-Geräte können mehr, als man denkt. Tactility gibt Spielen die volle Kontrolle über Bildschirm und Eingabe, mit schnellem Zugriff auf den Display-Treiber.

- **Spiele**: Spiele 3D-Spiele mit der [Jet](https://github.com/cubecoders/jet)-Engine oder starte Spiele, die mit Deki entwickelt wurden.
- **Flüssige Leistung**: DOOM läuft flüssig, während die WLAN-Verbindung im Hintergrund bestehen bleibt. Mesh-Nachrichten kommen weiter an und warten auf dich, wenn das Spiel vorbei ist.
- **Spiel, wie du willst**: mit Touchscreen, Tastatur, Trackball oder Tasten.

## Maker {#makers}

Für alle, die gerne mit Hardware experimentieren, eigene Geräte bauen oder aus einer Idee ein Projekt machen.

- **Starte mit der Hardware, die du hast**: Tactility läuft auf [vielen Geräten](de/supported-devices.md), von Handhelds mit Tastatur bis zu Tablets und günstigen „Cheap Yellow Display“-Boards.
- **Baue dein eigenes Gerät**: Geräte werden mit Device Trees beschrieben. Um eigene Hardware zu unterstützen, musst du sie im Wesentlichen beschreiben und fehlende Treiber ergänzen.
- **Apps schreiben, ohne die Firmware neu zu bauen**: Lege Apps auf eine SD-Karte oder installiere sie per WLAN von deinem PC. Nutze [LVGL](https://lvgl.io) für Benutzeroberflächen oder zeichne Pixel direkt auf das Display.
- **Experimentiere auf deinem PC**: Der Simulator läuft unter Linux, macOS und Windows (mit WSL), mit Profilen für verschiedene Bildschirmgrößen.
- **Programmiere direkt auf dem Gerät**: Kompiliere kleine C-Programme direkt auf dem Gerät, mit den Compilern **xcc700** und **rcc700** im Terminal.
- **Schließe alles an**: I2C, SPI und UART sind einfacher und sicherer zu nutzen, und Treiber teilen sich gemeinsame Schnittstellen für Displays, Touch, Tastaturen, GPS, Audio und Stromversorgung.
- **Mehr als Apps**: App-Pakete können Treibermodule und Hintergrunddienste enthalten, die nach dem Start verfügbar sind.
- **Mach Musik**: Mach dein Gerät zum MIDI-Controller für jede DAW oder jeden Synthesizer, oder komponiere Chiptunes direkt auf dem Gerät.
- **Lerne, wie ein Betriebssystem funktioniert**: Tactility ist Open Source, mit einem Kernel, einem Treibermodell und Diensten, die du erkunden kannst.

Lies die [Entwicklerdokumentation](https://docs.tactilityproject.org) (Englisch), um loszulegen, oder zeig der [Community](de/community.md), woran du baust.
