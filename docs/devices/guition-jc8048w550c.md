---
title: "Guition JC8048W550C"
vendor: Guition
psram: true
sdcard: true
recommended: false
community: false
incubating: false
---

> [!WARNING]
> The device does not power on with a USB-C to USB-C cable. Use a USB-C to USB-A cable instead.

## Feature support

| Feature | Status | Notes |
|-|-|-|
| SD card | ✅ | |
| External I2C | ✅ | P4 JST SH 1.25 or P5 JST SH 1.0 header: GPIO-17 (SDA), GPIO-18 (SCL) |
| External UART | ✅ | Same headers: GPIO-17 (RX), GPIO-18 (TX) |
| I2S speaker | ✅ | `NS4168`. DIN: GPIO-17, LRCLK: GPIO-18, BCLK: GPIO-0 |
| Bluetooth | ✅ | BLE |
| Touch | ✅ | `GT911` |
| Backlight control | ✅ | Brightness control |
| Power status | 🚧 | `IP5306`, GPIO-17 via voltage divider |
| USB Mass Storage | ❌ | The USB port is wired to a `CH340C` USB-serial chip instead of the native ESP32-S3 USB pins |

## Links

- [Store (AliExpress, Guition)](https://www.aliexpress.com/item/1005006715794302.html)
- [Documentation (unofficial)](https://github.com/Shadowtrance/jc8048w550c)
