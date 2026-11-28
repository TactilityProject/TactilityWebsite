---
title: "Funktionen"
description: "Was Tactility bietet: Apps, App Hub, WLAN, Bluetooth, Mesh-Netzwerke, App-Entwicklung und Treiberunterstützung für ESP32-Geräte."
toc: true
---

Tactility macht aus ESP32-Hardware einen kleinen Computer mit einem echten Betriebssystem: Launcher, Apps, Einstellungen, Dateiverwaltung und Konnektivität, alles sofort einsatzbereit.
Installiere es direkt aus dem Browser und füge Apps aus dem App Hub hinzu oder entwickle deine eigenen.

## Läuft auf Hardware, die du heute kaufen kannst {#runs-on-hardware-you-can-buy-today}

Mehr als 50 Geräte werden direkt unterstützt: von Handhelds mit Tastatur wie dem LilyGO T-Deck und dem M5Stack Cardputer über Tablets wie das M5Stack Tab5 bis hin zu günstigen „Cheap Yellow Display“-Boards.
Die vollständige Liste findest du unter [Unterstützte Geräte](de/supported-devices.md).

- **Einfache Installation**: Flashe Tactility mit dem [Web-Installer](https://install.tactilityproject.org/?lang=de). Keine Toolchain nötig.
- **Viele Eingabemöglichkeiten**: Touchscreens, Tastaturen, Trackballs, Drehgeber und einfache Tasten funktionieren.
- **Mit Oberfläche oder headless**: Nutze die vollständige Benutzeroberfläche oder betreibe das Gerät ohne Display. Du kannst festlegen, wie das Gerät startet, und die benötigte App automatisch starten.

## Mitgelieferte Apps {#apps-included}

Tactility bringt die Apps mit, die du brauchst, um dein Gerät zu nutzen und zu erkunden:

- **Files**: Dateien und Ordner im internen Speicher und auf der SD-Karte durchsuchen, anlegen, kopieren und verschieben.
- **Terminal**: eine Kommandozeile direkt auf dem Gerät. Starte native Apps und Shell-Skripte direkt von der SD-Karte.
- **Mesh**: Chatte in öffentlichen oder privaten Kanälen oder mit deinen Kontakten.
- **Notes**, **Image Viewer**, **Camera**, **I2C Scanner**, **System Info** und mehr.
- **Settings** für WLAN, Bluetooth, das Erscheinungsbild des Geräts und vieles mehr.

## App Hub {#app-hub}

Installiere weitere Apps direkt auf dem Gerät über den App Hub. Dazu gehören zum Beispiel ein Taschenrechner, eine serielle Konsole, ein GPIO-Monitor, ein E-Book-Reader, eine To-do-Liste und Spiele wie Snake, Breakout und 2048.

## Konnektivität {#connectivity}

- **WLAN**: Verbinde dich mit einem Netzwerk.
- **Bluetooth**: Bluetooth Low Energy auf unterstützten Geräten.
- **Mesh-Netzwerke**: Tritt [Meshtastic](https://meshtastic.org)- und [MeshCore](https://meshcore.co.uk)-Netzwerken bei, auf Geräten mit LoRa-Funk oder über ESP-NOW.
- **Web-Dashboard**: Verwalte dein Gerät im Browser. Lade Dateien hoch und herunter, installiere und starte Apps und sieh dir Systeminformationen an.
- **USB**: Nutze das Gerät als USB-Laufwerk, um Dateien von deinem Computer zu kopieren. Manche Geräte können auch als USB-Host für Tastaturen, Speicher und MIDI-Geräte dienen.

## Eigene Apps entwickeln {#build-your-own-apps}

- **Apps auf der SD-Karte**: Entwickle grafische oder Terminal-Apps, kopiere sie auf eine SD-Karte und starte sie. Die Firmware muss dafür nicht neu gebaut werden.
- **Nicht nur Apps**: Herunterladbare App-Pakete können Treibermodule oder Hintergrunddienste enthalten, die nach dem Start immer verfügbar sind.
- **LVGL oder direkte Pixel**: Nutze [LVGL](https://lvgl.io) für einheitliche Benutzeroberflächen, oder schreibe Pixel über den Display-Treiber direkt auf den Bildschirm, für noch schnellere Darstellung.
- **Installation per WLAN**: Aktiviere in den Einstellungen die Funktion „Development“, um Apps von deinem PC aus per WLAN zu installieren und zu starten. Du kannst auch Dateien übertragen oder ein Remote-Terminal öffnen.
- **PC-Simulator**: Entwickle und teste unter Linux, macOS oder Windows mit WSL, ohne ein Gerät zu flashen. Der Simulator hat mehrere Geräteprofile, sodass du Displaygröße und Aussehen des Launchers ändern kannst.
- In der [Entwicklerdokumentation](https://docs.tactilityproject.org) (Englisch) erfährst du, wie du loslegst.

## Hardware und Treiber {#hardware-and-drivers}

Tactility macht es einfacher und sicherer, Low-Level-Protokolle wie I2C, SPI und UART zu nutzen.
Treiber teilen sich gemeinsame Schnittstellen für Displays, Touch, Tastaturen, GPS, Audio, Stromversorgung und mehr, sodass Apps auf verschiedenen Geräten funktionieren.
Geräte werden mit Device Trees beschrieben, was die Unterstützung eigener Hardware unkompliziert macht.

## Datenschutzfreundliche Absturzberichte {#privacy-friendly-crash-reporting}

Wenn Tactility abstürzt, startet es neu und zeigt einen QR-Code an.
Der QR-Code öffnet eine Webseite mit den Details zum Absturz, aber es werden keine Daten an die Entwickler gesendet. Du kannst uns den Absturzbericht aber gerne per E-Mail schicken!
