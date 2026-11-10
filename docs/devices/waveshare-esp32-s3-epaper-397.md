# Waveshare ESP32 S3 ePaper 3.97"

An ESP32-S3 board with a 3.97" 800x480 e-paper display (8 gray shades), 16 MB flash and 8 MB PSRAM.

## Feature support

| Feature | Status | Notes |
|-|-|-|
| Display | ✅ | `SSD1677`, 800x480, 8 gray shades |
| SD card | ✅ | SDMMC, 4-bit |
| IMU | ✅ | `QMI8658`, supports auto-rotate |
| Real-time clock | ✅ | `PCF85063`. Time is set at boot and retained after power loss |
| Audio | ✅ | `ES8311`, speaker and microphone |
| Physical buttons | ✅ | 3-way switch (up, down, press) |
| Wi-Fi | ✅ | |
| Power off | ✅ | Via the PWR button |
| Power status | ⚠️ | `AXP2101`-compatible PMIC (`TG28`). Battery level and charging are untested |
| Temperature and humidity | ⚠️ | `SHTC3`. Driver is present, values are untested |
| Bluetooth | ⚠️ | Untested |
| USB Mass Storage | ⚠️ | Untested |

## Usage notes

- The 3-way switch is used for navigation: up, down and press.
- The BOOT button currently has no function.
- Rotating the device clears the display, because e-paper refreshes slowly.

## Links

- [Product page](https://www.waveshare.com/esp32-s3-epaper-3.97.htm)
- [GitHub](https://github.com/TactilityProject/Tactility/pull/742)
