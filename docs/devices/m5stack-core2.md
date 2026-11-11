---
title: "M5Stack Core2"
vendor: M5Stack
psram: true
sdcard: true
recommended: false
community: false
incubating: false
---

> [!WARNING]
> Only the [original](https://docs.m5stack.com/en/core/Core2) version is supported, not [v1.1](https://docs.m5stack.com/en/core/Core2%20v1.1).

## Feature support

| Feature | Status | Notes |
|-|-|-|
| SD card | ✅ | |
| Power status | ✅ | `AXP192` |
| IMU | ✅ | `MPU6886` |
| Real-time clock | ✅ | `BM8563` |
| Speaker | ✅ | `NS4168` |
| Microphone | ✅ | `SPM1423` |
| Grove port | ✅ | |
| Touch | ✅ | `FT5x06` |
| Backlight control | 🚧 | Always on, powered by the `AXP192` |
| Bluetooth | ❌ | Not available in the current firmware |

## Known issues

- Memory: only 4 of the 8 MB PSRAM is usable, because the ESP32 can only map 4 MB.

## Links

- [Official documentation](https://docs.m5stack.com/en/core/Core2)
- [Store](https://shop.m5stack.com/products/m5stack-core2-esp32-iot-development-kit)
