---
title: "Installing"
description: "Install Tactility on your ESP32 device with the Web Installer, or flash a release manually."
options:
  - title: Web Installer
    text: Install Tactility straight from your browser. No tools needed.
    label: Open Web Installer
    url: https://install.tactilityproject.org/
    primary: true
  - title: Releases
    text: Download the firmware for your device and flash it yourself, as described below.
    label: Download a release
    url: https://github.com/ByteWelder/Tactility/releases
---

## Manual flashing

After downloading a release, make sure you have [esptool](https://docs.espressif.com/projects/esptool/en/latest/esp32/installation.html) installed.

Run the flash script:

:::: tabs

::: tab Linux / macOS

Flash your serial device (often `ttyACM0` or `ttyUSB0`):

```bash
./flash.sh /dev/ttyACM0
```

Troubleshooting:

- If you get an error like 'function: not found', check if your bash is aliased to another shell without support for functions (like dash). If it is, you can change your bash alias to point to the real bash, or run the above command directly with the absolute path to your copy of bash (e.g. `/usr/bin/bash ./flash /dev/ttyACM0`).
- If you get an error like 'No such file or directory [...] stub_flasher_32s3.json', uninstall your copy of esptools, and reinstall it using pip/pip3. Some package managers (like apt) [don't have the latest binaries](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1043168) for the s3.

:::

::: tab Windows

Flash by specifying the `COM` port:

```powershell
flash.ps COM3
```

:::

::::

## Development builds

You can find some builds in GitHub if you are logged in there, but they are only available for a few days or weeks after they were built:
- [Firmware builds](https://github.com/TactilityProject/Tactility/actions/workflows/build.yml)
- [SDK builds](https://github.com/ByteWelder/Tactility/actions/workflows/build-sdk.yml)

(scroll down to the bottom to find the zip files)

