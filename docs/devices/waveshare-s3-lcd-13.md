# Waveshare ESP32 S3 LCD 1.3"

⚠️ No Touch: The only way to launch apps is to override the boot settings via SD card (see Tactility docs)

Because the device has very limited user input capabilities, it launches the web server application by default. The plan is to eventually enable navigation through the interface using its physical buttons.

## Features

- ✅ SD card
- ⏳ External ports not yet implemented. 16 free GPIO via the available side pin headers to diy.
- ⏳ - Power status/Battery: capable, but not yet implemented. ADC, GPIO-6.
- ⏳ - QMI8658C IMU: I2C SDA GPIO-47, I2C SCL GPIO-48, INT1 GPIO-46, INT2 GPIO-45.
- ⏳ - WS2812 LED: GPIO-15 not yet implemented
- ⚠️ USB Mass Storage feature: Not working due to having a USB-Serial (CH343P) chip instead of using the native USB pins available on the S3 directly.

## Links

- [Official website](https://www.waveshare.com/esp32-s3-lcd-1.3.htm)
- [Official documentation](https://www.waveshare.com/wiki/ESP32-S3-LCD-1.3)

