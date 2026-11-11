---
title: "M5Stack Tab5"
vendor: M5Stack
psram: true
sdcard: true
recommended: true
community: false
incubating: false
---

## Hardware variants

All current hardware variants are supported:

- v1: `ILI9881C` display with `GT911` touch
- v2: `ST7123` display and touch
- v3: `ST7121` display and touch

## Feature support

| Feature | Status | Notes |
|-|-|-|
| SD card | ✅ | |
| Wi-Fi | ✅ | Via the ESP32-C6 |
| IO expanders | ✅ | Both `PI4IOE5V6408` |
| IMU | ✅ | `BMI270` |
| Power status | ✅ | `INA226` power monitoring, charging status, battery |
| Speaker | ✅ | I2S via `ES8388` |
| Microphone | ✅ | I2S via `ES7210` |
| Headphone detection | ✅ | Mutes the speaker |
| Real-time clock | ✅ | `RX8130CE` |
| USB host | ✅ | HID, MSC and MIDI via the USB-A port |
| USB Mass Storage | ✅ | |
| Tab5 Keyboard add-on | ✅ | |
| Camera | ✅ | `SC2356` |
| Bluetooth | ✅ | BLE |
| Touch | ✅ | `GT911` (v1), integrated in the display controller (v2, v3) |
| Backlight control | ✅ | Brightness control |
| RS485 | 🚧 | `SIT3088` |

## Links

- [Official documentation](https://docs.m5stack.com/en/core/Tab5)
- [Store](https://shop.m5stack.com/products/m5stack-tab5-iot-development-kit-esp32-p4)
- [Espressif ESP-BSP](https://github.com/espressif/esp-bsp/tree/master/bsp/m5stack_tab5)
- [Official documentation (Keyboard)](https://docs.m5stack.com/en/tab5/Tab5_Keyboard)
- [Store (Keyboard)](https://shop.m5stack.com/products/keyboard-for-tab5)
- [Official user demo (Keyboard)](https://github.com/m5stack/M5Tab5-Keyboard-UserDemo)
