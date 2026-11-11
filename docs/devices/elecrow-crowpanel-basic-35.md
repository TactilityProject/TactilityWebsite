---
title: "Elecrow CrowPanel Basic 3.5\""
vendor: Elecrow
psram: false
sdcard: true
recommended: false
community: false
incubating: false
---

> [!WARNING]
> Only hardware revision v2.2 is supported.

> [!NOTE]
> Rendering is slower than on most devices because of hardware and software limitations. A full screen refresh takes about 1 second, but Tactility is fully usable. Updates to smaller areas of the screen are much faster.

## Feature support

| Feature | Status | Notes |
|-|-|-|
| SD card | ✅ | |
| External ports | ✅ | UART and I2C |
| Touch | ✅ | Resistive, `XPT2046` |
| Backlight control | ✅ | Brightness control |
| Power status | 🚧 | |
| Bluetooth | ❌ | Not available in the current firmware |

## Rendering performance

The panel is wired via SPI, which allows a pixel format of either 3 bits or 18 bits. 18 bits is the logical choice, but LVGL doesn't support it natively. The display driver keeps a separate buffer to convert from the 16-bit RGB565 format (LVGL buffer) to the 18-bit RGB666 format (SPI buffer). This buffer costs extra memory, as it uses 3 bytes per pixel.

## Links

- [Product page](https://www.elecrow.com/esp32-display-3-5-inch-hmi-display-spi-tft-lcd-touch-screen.html)
- [Official documentation](https://www.elecrow.com/wiki/esp32-display-352727-intelligent-touch-screen-wi-fi26ble-320480-hmi-display.html)
