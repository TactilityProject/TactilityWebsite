---
title: "Casos de uso"
description: "Para qué se usa Tactility: herramientas de campo para profesionales, juegos 3D en ESP32 y una plataforma para makers a los que les gusta construir y experimentar."
toc: true
---

Tactility convierte un dispositivo ESP32 económico en un ordenador de bolsillo que puedes adaptar a cada tarea.
Estas son algunas de las formas en que se usa.

## Profesionales {#professionals}

Para técnicos, electricistas, instaladores y profesionales de la seguridad, un dispositivo con Tactility es una caja de herramientas de bolsillo que llega donde un portátil no resulta práctico.

- **Herramientas de campo**: diagnostica y configura equipos sobre el terreno. Por ejemplo, la app **Serial Console** se comunica con dispositivos por UART, y la app **GPIO** muestra el estado en tiempo real de cada pin.
- **Mediciones y sensores**: lee sensores y módulos por I2C, SPI y UART, con GPS, audio y más en los dispositivos compatibles.
- **Inalámbrico**: trabaja con Wi-Fi, Bluetooth LE, ESP-NOW y redes mesh LoRa, incluso donde no hay cobertura.
- **Ampliable**: añade periféricos y drivers nuevos en tiempo de ejecución, sin volver a flashear el firmware.
- **Herramientas a medida**: ejecuta tus propias apps y scripts desde la tarjeta SD y arranca directamente en la herramienta que necesitas.
- **Herramientas modernas**: gestiona dispositivos a distancia desde un navegador, desarrolla y despliega apps por Wi-Fi y prueba en tu PC con el simulador.

## Juegos {#gaming}

Los dispositivos ESP32 son más capaces de lo que parecen. Tactility da a los juegos control total sobre la pantalla y la entrada, con acceso rápido al driver de pantalla.

- **Juegos**: juega a juegos 3D con el motor [Jet](https://github.com/cubecoders/jet) o ejecuta juegos creados con Deki.
- **Rendimiento fluido**: DOOM funciona con fluidez mientras el Wi-Fi sigue conectado en segundo plano. Los mensajes mesh siguen llegando, listos para leer cuando termines la partida.
- **Juega a tu manera**: con pantalla táctil, teclado, trackball o botones.

## Makers {#makers}

Para quienes disfrutan experimentando con hardware, construyendo sus propios dispositivos o convirtiendo una idea en un proyecto.

- **Empieza con el hardware que tienes**: Tactility funciona en [muchos dispositivos](es/supported-devices.md), desde dispositivos de mano con teclado hasta tablets y las económicas placas «Cheap Yellow Display».
- **Construye tu propio dispositivo**: los dispositivos se describen con device trees, así que dar soporte a tu propio hardware consiste sobre todo en describirlo y añadir los drivers que falten.
- **Escribe apps sin recompilar el firmware**: pon apps en una tarjeta SD o instálalas desde tu PC por Wi-Fi. Usa [LVGL](https://lvgl.io) para interfaces de usuario o dibuja píxeles directamente en la pantalla.
- **Experimenta en tu PC**: el simulador funciona en Linux, macOS y Windows (con WSL), con perfiles para distintos tamaños de pantalla.
- **Programa en el propio dispositivo**: compila pequeños programas en C directamente en el dispositivo con los compiladores **xcc700** y **rcc700** desde el Terminal.
- **Conecta cualquier cosa**: I2C, SPI y UART son más fáciles y seguros de usar, y los drivers comparten interfaces comunes para pantallas, táctil, teclados, GPS, audio y alimentación.
- **Ve más allá de las apps**: los paquetes de apps pueden incluir módulos de drivers y servicios en segundo plano disponibles tras el arranque.
- **Haz música**: convierte tu dispositivo en un controlador MIDI para cualquier DAW o sintetizador, o compón chiptunes en el propio dispositivo.
- **Aprende cómo funciona un sistema operativo**: Tactility es de código abierto, con un kernel, un modelo de drivers y servicios que puedes explorar.

Consulta la [documentación para desarrolladores](https://docs.tactilityproject.org) (en inglés) para empezar, o comparte lo que estás construyendo con la [comunidad](es/community.md).
