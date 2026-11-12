---
title: "Espressif ESP32-S31-Korvo-1"
vendor: Espressif
psram: true
sdcard: true
recommended: false
community: false
incubating: true
---

An ESP32-S31 multimedia development board with a 4.3" 800x480 touch display on the
ESP32-S3-LCD-EV-Board-SUB3 subboard, 16 MB of flash and 16 MB of PSRAM.

> [!NOTE]
> Tactility is set up for board revision **V1.1**.

## Feature support

| Feature | Status | Notes |
|-|-|-|
| Display | ✅ | 4.3" 800x480 `ST7262` RGB panel |
| Touch | ✅ | `GT1151` over I2C |
| Wi-Fi | ✅ | |
| Bluetooth | ✅ | BLE |
| SD card | ✅ | microSD |
| USB Mass Storage | ✅ | |
| RGB LED | ✅ | `WS2812` |
| Audio | 🚧 | `ES8389` codec, no driver yet |
| Camera | 🚧 | |
| Buttons | 🚧 | |
| SPI NAND | ❌ | Shares its pins with the microSD slot and needs hardware rework to select |

## Links

- [Official documentation](https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32s31/esp32-s31-korvo-1/user_guide.html)
