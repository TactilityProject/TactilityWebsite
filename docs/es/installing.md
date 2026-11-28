---
title: "Instalación"
description: "Instala Tactility en tu dispositivo ESP32 con el instalador web o flashea una versión manualmente."
options:
  - title: Instalador web
    text: Instala Tactility directamente desde tu navegador. No necesitas herramientas.
    label: Abrir el instalador web
    url: https://install.tactilityproject.org/?lang=es
    primary: true
  - title: Versiones
    text: Descarga el firmware para tu dispositivo y flashéalo tú mismo, como se describe abajo.
    label: Descargar una versión
    url: https://github.com/ByteWelder/Tactility/releases
---

## Flasheo manual {#manual-flashing}

Después de descargar una versión, asegúrate de tener instalado [esptool](https://docs.espressif.com/projects/esptool/en/latest/esp32/installation.html).

Ejecuta el script de flasheo:

:::: tabs

::: tab Linux / macOS

Flashea tu dispositivo serie (normalmente `ttyACM0` o `ttyUSB0`):

```bash
./flash.sh /dev/ttyACM0
```

Solución de problemas:

- Si obtienes un error como 'function: not found', comprueba si tu `bash` es un alias de otra shell sin soporte para funciones (como dash). Si es así, cambia el alias para que apunte al bash real, o ejecuta el comando anterior con la ruta absoluta a tu bash (p. ej. `/usr/bin/bash ./flash /dev/ttyACM0`).
- Si obtienes un error como 'No such file or directory [...] stub_flasher_32s3.json', desinstala esptool y vuelve a instalarlo con pip/pip3. Algunos gestores de paquetes (como apt) [no tienen los binarios más recientes](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1043168) para el S3.

:::

::: tab Windows

Flashea indicando el puerto `COM`:

```powershell
flash.ps COM3
```

:::

::::

## Versiones de desarrollo {#development-builds}

Si has iniciado sesión en GitHub, allí encontrarás algunas compilaciones, pero solo están disponibles unos días o semanas después de crearse:
- [Compilaciones del firmware](https://github.com/TactilityProject/Tactility/actions/workflows/build.yml)
- [Compilaciones del SDK](https://github.com/ByteWelder/Tactility/actions/workflows/build-sdk.yml)

(Los archivos zip están al final de la página).
