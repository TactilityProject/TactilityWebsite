# Waveshare ESP32 S3 LCD 1.3"

> [!NOTE]
> Support for this device is incubating.

> [!WARNING]
> This device has no touchscreen. The only way to launch apps is to override the boot settings via the SD card (see the Tactility docs).

## Feature support

| Feature | Status | Notes |
|-|-|-|
| SD card | ✅ | |
| IMU | ✅ | `QMI8658C`: GPIO-47 (SDA), GPIO-48 (SCL), GPIO-46 (INT1), GPIO-45 (INT2) |
| Bluetooth | ✅ | BLE |
| Backlight control | ✅ | Brightness control |
| External ports | 🚧 | 16 free GPIO on the side pin headers |
| Power status | 🚧 | ADC on GPIO-6 |
| RGB LED | 🚧 | `WS2812` on GPIO-15 |
| USB Mass Storage | ❌ | The USB port is wired to a `CH343P` USB-serial chip instead of the native ESP32-S3 USB pins |
| Touch | ❌ | No touchscreen |

## Links

- [Product page](https://www.waveshare.com/esp32-s3-lcd-1.3.htm)
- [Official documentation](https://www.waveshare.com/wiki/ESP32-S3-LCD-1.3)
