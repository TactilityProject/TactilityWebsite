---
title: "Waveshare ESP32 S3 Touch AMOLED 2.06\""
vendor: Waveshare
psram: true
sdcard: true
recommended: false
community: false
incubating: false
---

A 2.06" AMOLED touchscreen board with an `ESP32-S3`, an IMU, a real-time clock, a speaker and a microphone.

## Feature support

| Feature | Status | Notes |
|-|-|-|
| SD card | ✅ | |
| Touch | ✅ | `FT3168` |
| Backlight control | ✅ | Brightness control of the `SH8601` panel |
| IMU | ✅ | `QMI8658`, used for auto-rotate |
| Real-time clock | ✅ | `BM8563` |
| Power status | ✅ | `AXP2101` |
| Speaker | 🚧 | `ES8311` - Speaker output not working |
| Microphone | 🚧 | `ES7210` - Not verified because speaker output isn't working |
| USB Mass Storage | ✅ | |
| Bluetooth | ✅ | BLE |

## Links

- [Product page](https://www.waveshare.com/esp32-s3-touch-amoled-2.06.htm)
- [Official documentation](https://www.waveshare.com/wiki/ESP32-S3-Touch-AMOLED-2.06)
