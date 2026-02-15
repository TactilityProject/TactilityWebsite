# Waveshare ESP32 S3 Touch LCD 1.28"

- ⚠️ Round Display: While this is technically working, the default Tactility launcher and apps currently don't support it.
- ⚠️ Only 2MB PSRAM

Because the device has very limited user input capabilities, it launches the web server application by default. The plan is to eventually enable navigation through the interface using its physical buttons.

## Features

- ✅ SD card - available via common external sd card module you'd find on aliexpress with voltage regulator onboard. Others may work. And uses VSYS (5V) / GND / GPIO-15 / GPIO-16 / GPIO-17 / GPIO-18 pins on the JST SH 1.0 header.
- ⏳ External ports not yet implemented. Only 2 free pins, GPIO-21 and GPIO-33 if the sd card is in use.
- ⏳ - Power status/Battery: capable, but not yet implemented. ADC, GPIO-1.
- ⏳ - QMI8658C IMU: I2C SDA GPIO-6, I2C SCL GPIO-7, INT1 GPIO-4, INT2 GPIO-3.
- ⚠️ USB Mass Storage feature: Not working due to having a USB-Serial (CH343P) chip instead of using the native USB pins available on the S3 directly.

## Links

- [Official website](https://www.waveshare.com/product/esp32-s3-touch-lcd-1.28.htm) - without metal case
- [Official website](https://www.waveshare.com/product/esp32-s3-touch-lcd-1.28-b.htm) - with metal case
- [Official documentation](http://www.waveshare.com/wiki/ESP32-S3-Touch-LCD-1.28)

