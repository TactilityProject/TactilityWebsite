---
title: "Installation"
description: "Installiere Tactility mit dem Web-Installer auf deinem ESP32-Gerät oder flashe ein Release manuell."
options:
  - title: Web-Installer
    text: Installiere Tactility direkt aus dem Browser. Keine Tools nötig.
    label: Web-Installer öffnen
    url: https://install.tactilityproject.org/?lang=de
    primary: true
  - title: Releases
    text: Lade die Firmware für dein Gerät herunter und flashe sie selbst, wie unten beschrieben.
    label: Release herunterladen
    url: https://github.com/ByteWelder/Tactility/releases
---

## Manuell flashen {#manual-flashing}

Stelle nach dem Herunterladen eines Releases sicher, dass [esptool](https://docs.espressif.com/projects/esptool/en/latest/esp32/installation.html) installiert ist.

Starte das Flash-Skript:

:::: tabs

::: tab Linux / macOS

Flashe dein serielles Gerät (oft `ttyACM0` oder `ttyUSB0`):

```bash
./flash.sh /dev/ttyACM0
```

Fehlerbehebung:

- Bei einem Fehler wie 'function: not found' prüfe, ob dein `bash` ein Alias für eine andere Shell ohne Unterstützung für Funktionen ist (etwa dash). Falls ja, lass den Alias auf das echte bash zeigen oder starte den Befehl oben direkt mit dem absoluten Pfad zu deinem bash (z. B. `/usr/bin/bash ./flash /dev/ttyACM0`).
- Bei einem Fehler wie 'No such file or directory [...] stub_flasher_32s3.json' deinstalliere esptool und installiere es mit pip/pip3 neu. Manche Paketmanager (etwa apt) [haben nicht die neuesten Binärdateien](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1043168) für den S3.

:::

::: tab Windows

Flashe unter Angabe des `COM`-Ports:

```powershell
flash.ps COM3
```

:::

::::

## Entwicklungs-Builds {#development-builds}

Wenn du bei GitHub angemeldet bist, findest du dort einige Builds. Sie sind aber nur wenige Tage oder Wochen nach dem Build verfügbar:
- [Firmware-Builds](https://github.com/TactilityProject/Tactility/actions/workflows/build.yml)
- [SDK-Builds](https://github.com/ByteWelder/Tactility/actions/workflows/build-sdk.yml)

(Die ZIP-Dateien findest du ganz unten auf der Seite.)
