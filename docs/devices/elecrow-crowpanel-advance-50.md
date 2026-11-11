---
title: "Elecrow CrowPanel Advance 5.0\""
vendor: Elecrow
psram: true
sdcard: true
recommended: true
community: false
incubating: false
---

> [!WARNING]
> The device does not power on with a USB-C to USB-C cable. Use a USB-C to USB-A cable instead.

## Feature support

| Feature | Status | Notes |
|-|-|-|
| SD card | ✅ | |
| External ports | ✅ | UART and I2C |
| Bluetooth | ✅ | BLE |
| Touch | ✅ | `GT911` |
| USB Mass Storage | ⚠️ | Configured, but not yet verified |
| Backlight control | ⚠️ | On/off only |

## Known issues

- Boot loop: caused by a power issue combined with the `GT911` touch driver. Unplug the USB cable and quickly reconnect it. Retry if necessary.

## Links

- [Product page](https://www.elecrow.com/crowpanel-advance-5-0-hmi-esp32-ai-display-800x480-ips-artificial-intelligent-touch-screen.html)
- [Official documentation](https://www.elecrow.com/pub/wiki/CrowPanel_Advance_5.0-HMI_ESP32_AI_Display.html)
- [GitHub](https://github.com/Elecrow-RD/CrowPanel-Advance-HMI-ESP32-AI-Display)
