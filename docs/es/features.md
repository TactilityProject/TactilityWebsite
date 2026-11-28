---
title: "Funciones"
description: "Lo que ofrece Tactility: apps, App Hub, Wi-Fi, Bluetooth, redes mesh, desarrollo de apps y soporte de drivers para dispositivos ESP32."
toc: true
---

Tactility convierte el hardware ESP32 en un pequeño ordenador con un sistema operativo de verdad: lanzador, apps, ajustes, gestión de archivos y conectividad, todo listo para usar.
Instálalo desde el navegador y añade apps desde la App Hub o crea las tuyas.

## Funciona en hardware que puedes comprar hoy {#runs-on-hardware-you-can-buy-today}

Más de 50 dispositivos son compatibles de serie: desde dispositivos de mano con teclado como el LilyGO T-Deck y el M5Stack Cardputer hasta tablets como la M5Stack Tab5 y las económicas placas «Cheap Yellow Display».
Consulta la lista completa en [Dispositivos compatibles](es/supported-devices.md).

- **Fácil de instalar**: flashea Tactility con el [instalador web](https://install.tactilityproject.org/?lang=es). No necesitas toolchain.
- **Muchos tipos de entrada**: funcionan pantallas táctiles, teclados, trackballs, encoders rotativos y botones simples.
- **Con interfaz gráfica o sin pantalla**: usa la interfaz completa o funciona sin pantalla. Puedes cambiar cómo arranca el dispositivo e iniciar automáticamente la app que necesites.

## Apps incluidas {#apps-included}

Tactility incluye las apps que necesitas para usar y explorar tu dispositivo:

- **Files**: explora, crea, copia y mueve archivos y carpetas en el almacenamiento interno y en la tarjeta SD.
- **Terminal**: una línea de comandos en el propio dispositivo. Ejecuta apps nativas y scripts de shell directamente desde la tarjeta SD.
- **Mesh**: chatea en canales públicos o privados, o con tus contactos.
- **Notes**, **Image Viewer**, **Camera**, **I2C Scanner**, **System Info** y más.
- **Settings** para Wi-Fi, Bluetooth, la apariencia del dispositivo y mucho más.

## App Hub {#app-hub}

Instala más apps directamente desde el dispositivo con la App Hub. Por ejemplo: una calculadora, una consola serie, un monitor GPIO, un lector de libros electrónicos, una lista de tareas y juegos como Snake, Breakout y 2048.

## Conectividad {#connectivity}

- **Wi-Fi**: conéctate a una red.
- **Bluetooth**: Bluetooth Low Energy en los dispositivos compatibles.
- **Redes mesh**: únete a redes [Meshtastic](https://meshtastic.org) y [MeshCore](https://meshcore.co.uk) en dispositivos con radio LoRa o mediante ESP-NOW.
- **Panel web**: gestiona tu dispositivo desde un navegador. Sube y descarga archivos, instala y ejecuta apps y consulta la información del sistema.
- **USB**: usa el dispositivo como unidad USB para copiar archivos desde tu ordenador. Algunos dispositivos también pueden funcionar como host USB para teclados, almacenamiento y dispositivos MIDI.

## Crea tus propias apps {#build-your-own-apps}

- **Apps en una tarjeta SD**: crea apps gráficas o de terminal, cópialas a una tarjeta SD y ejecútalas. No hace falta recompilar el firmware.
- **No solo apps**: los paquetes de apps descargables pueden contener módulos de drivers o servicios en segundo plano que están siempre disponibles tras el arranque.
- **LVGL o píxeles directos**: usa [LVGL](https://lvgl.io) para interfaces de usuario coherentes, o envía píxeles directamente a la pantalla con el driver de pantalla para un renderizado aún más rápido.
- **Instalación por Wi-Fi**: activa la función «Development» en los ajustes para instalar y ejecutar apps desde tu PC por Wi-Fi. También puedes transferir archivos o abrir un terminal remoto.
- **Simulador para PC**: desarrolla y prueba en Linux, macOS o Windows con WSL, sin flashear ningún dispositivo. El simulador tiene varios perfiles de dispositivo, así que puedes cambiar el tamaño de pantalla y el aspecto del lanzador.
- Consulta la [documentación para desarrolladores](https://docs.tactilityproject.org) (en inglés) para empezar.

## Hardware y drivers {#hardware-and-drivers}

Tactility hace que usar protocolos de bajo nivel como I2C, SPI y UART sea más fácil y seguro.
Los drivers comparten interfaces comunes para pantallas, táctil, teclados, GPS, audio, alimentación y más, de modo que las apps funcionan en distintos dispositivos.
Los dispositivos se describen con device trees, lo que facilita añadir soporte para tu propio hardware.

## Informes de fallos que respetan la privacidad {#privacy-friendly-crash-reporting}

Cuando Tactility falla, se reinicia y muestra un código QR.
El código QR abre una página web con los detalles del fallo, pero no se envía ningún dato a los desarrolladores. ¡Aunque puedes enviarnos el informe por correo si quieres!
