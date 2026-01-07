# Guition JC2432W328C

⚠️ Device does not power on with a proper USB-C to USB-C cable. Use a USB-C to USB-A cable instead.

⚠️ The CN1 header silkscreen may be mislabled as GND IO22 IO22 3V3, when it is in fact GND IO22 **IO21** 3V3.

## Features

- ✅ SD card
- ✅ External ports (UART and I2C) - I2C Enabled on the CN1 JST SH 1.25 header GPIO-21 (SDA)/GPIO-22 (SCL), UART Enabled on the same header GPIO-21 (RX)/GPIO-22 (TX).
- ⏳ - Power status: capable, but not yet implemented. IP5306, GPIO-??.
- ⏳ - Speaker output: GPIO-26 not yet implemented
- ⏳ - Photoresistor: GPIO-34 not yet implemented

The "dumb" RGB LED pins are set as output on boot and the LED is turned off. So the same pins on the P6 header are also set as output. RED - GPIO-4, GREEN - GPIO-16, BLUE - GPIO-17.

## Links

- [AliExpress Store @ Guition Store](https://www.aliexpress.com/item/1005006732002132.html) - Capacitive touch
- [Documentation (unofficial)](https://github.com/Shadowtrance/jc2432w328c)

