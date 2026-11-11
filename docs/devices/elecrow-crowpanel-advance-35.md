---
title: "Elecrow CrowPanel Advance 3.5\""
vendor: Elecrow
psram: true
sdcard: true
recommended: true
community: false
incubating: false
---

> [!NOTE]
> Rendering is slower than on most devices because of hardware and software limitations. A full screen refresh takes a bit less than half a second. Updates to smaller areas of the screen are much faster.

## Feature support

| Feature | Status | Notes |
|-|-|-|
| SD card | ✅ | |
| External ports | ✅ | UART and I2C |
| Bluetooth | ✅ | BLE |
| Touch | ✅ | `GT911` |
| Backlight control | ✅ | Brightness control |
| USB Mass Storage | ⚠️ | TinyUSB crashes on disconnect. Running on battery and unplugging USB after the reboot might work, but this is untested. |

## Rendering performance

The panel is wired via SPI, which allows a pixel format of either 3 bits or 18 bits. 18 bits is the logical choice, but LVGL doesn't support it natively. The display driver keeps a separate buffer to convert from the 16-bit RGB565 format (LVGL buffer) to the 18-bit RGB666 format (SPI buffer). This buffer costs extra memory, as it uses 3 bytes per pixel.

## Links

- [Product page](https://www.elecrow.com/crowpanel-advance-3-5-hmi-esp32-ai-display-480x320-artificial-intelligent-ips-touch-screen.html)
- [Official documentation](https://www.elecrow.com/pub/wiki/CrowPanel_Advance_3.5-HMI_ESP32_AI_Display.html)
- [GitHub](https://github.com/Elecrow-RD/CrowPanel-Advance-HMI-ESP32-AI-Display)
