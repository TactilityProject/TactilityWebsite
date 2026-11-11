---
title: "M5Stack CoreS3"
vendor: M5Stack
psram: true
sdcard: false
recommended: false
community: false
incubating: false
---

## Feature support

| Feature | Status | Notes |
|-|-|-|
| Power status | ✅ | `AXP2101` |
| IMU | ✅ | `BMI270` |
| Real-time clock | ✅ | `BM8563` |
| Speaker | ✅ | `AW88298` |
| Microphone | ✅ | `ES7210` |
| Camera | ✅ | `GC0308` |
| Grove port | ✅ | Ports A, B and C |
| Bluetooth | ✅ | BLE |
| Touch | ✅ | `FT5x06` |
| Backlight control | ✅ | Via the `AXP2101` |
| USB Mass Storage | ⚠️ | Depends on the SD card |
| External I2C | ⚠️ | The connector is not powered |
| SD card | ❌ | Hardware design issue (see Known issues) |

## Known issues

- SD card: not supported. This appears to be a hardware design error: the display and SD card share the SPI bus, and the display uses `MISO` as its `DC` output pin, while the SD card needs `MISO` as an input. ([ESP-BSP notes](https://github.com/espressif/esp-bsp/blob/63b99593b7ead04336c0f22e7bc880167d9bfdb6/bsp/m5stack_core_s3/README.md), [forum post](https://community.m5stack.com/post/21397), [forum thread](https://community.m5stack.com/topic/5415/core-s3-sd-tf-card-issues/2))
- External I2C: the connector does not get power, so external I2C devices don't work.

## Links

- [Official documentation](https://docs.m5stack.com/en/core/CoreS3)
- [Store](https://shop.m5stack.com/products/m5stack-cores3-esp32s3-lotdevelopment-kit)
