---
title: "Guition JC2432W328C"
vendor: Guition
psram: false
sdcard: true
recommended: false
community: true
incubating: false
---

> [!WARNING]
> The device does not power on with a USB-C to USB-C cable. Use a USB-C to USB-A cable instead.

## Feature support

| Feature | Status | Notes |
|-|-|-|
| SD card | ✅ | |
| External I2C | ✅ | CN1 JST SH 1.25 header: GPIO-21 (SDA), GPIO-22 (SCL) |
| External UART | ✅ | CN1 JST SH 1.25 header: GPIO-21 (RX), GPIO-22 (TX) |
| Touch | ✅ | `CST816S` |
| Backlight control | ✅ | Brightness control |
| Power status | 🚧 | `IP5306` |
| Speaker | 🚧 | GPIO-26 |
| Photoresistor | 🚧 | GPIO-34 |
| Bluetooth | ❌ | Not available in the current firmware |

## Usage notes

The RGB LED pins are set as outputs on boot and the LED is turned off. The matching pins on the P6 header are therefore outputs too: red is GPIO-4, green is GPIO-16, blue is GPIO-17.

## Known issues

- CN1 header: the silkscreen may be mislabeled as `GND IO22 IO22 3V3`. The correct pinout is `GND IO22 IO21 3V3`.

## Links

- [Store (AliExpress, Guition)](https://www.aliexpress.com/item/1005006732002132.html): capacitive touch variant
- [Documentation (unofficial)](https://github.com/Shadowtrance/jc2432w328c)
