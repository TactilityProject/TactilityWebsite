# Waveshare ESP32 S3 Touch LCD 1.28"

> [!WARNING]
> The round display works, but the default Tactility launcher and apps don't support it yet.
>
> The device has only 2 MB PSRAM.

## Feature support

| Feature | Status | Notes |
|-|-|-|
| SD card | ✅ | Requires an external SD card module (see Usage notes) |
| IMU | ✅ | `QMI8658C`: GPIO-6 (SDA), GPIO-7 (SCL), GPIO-4 (INT1), GPIO-3 (INT2) |
| Bluetooth | ✅ | BLE |
| Touch | ✅ | `CST816T` |
| Backlight control | ✅ | Brightness control |
| External ports | 🚧 | Only GPIO-21 and GPIO-33 are free when the SD card is in use |
| Power status | 🚧 | ADC on GPIO-1 |
| USB Mass Storage | ❌ | The USB port is wired to a `CH343P` USB-serial chip instead of the native ESP32-S3 USB pins |

## Usage notes

SD card: use a common external SD card module with an onboard voltage regulator, as found on AliExpress. Other modules may work. Connect it to the JST SH 1.0 header: VSYS (5V), GND, GPIO-15, GPIO-16, GPIO-17 and GPIO-18.

## Links

- [Product page (without metal case)](https://www.waveshare.com/product/esp32-s3-touch-lcd-1.28.htm)
- [Product page (with metal case)](https://www.waveshare.com/product/esp32-s3-touch-lcd-1.28-b.htm)
- [Official documentation](http://www.waveshare.com/wiki/ESP32-S3-Touch-LCD-1.28)
