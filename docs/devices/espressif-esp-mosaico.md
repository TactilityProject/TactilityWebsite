# Espressif ESP-Mosaico

A compact ESP32-S31 board with a 2.16" 480x480 AMOLED display and 128 MB of SPI
NAND that serves as the user-data volume.

> [!WARNING]
> Only board revision **v1.2** is supported. Revision v1.0 uses a different pin map
> (internal I2C on GPIO0/1, LCD SCL/RST swapped, codec rail on GPIO56).

## Feature support

| Feature | Status | Notes |
|-|-|-|
| Display | ✅ | 2.16" 480x480 `CO5300` AMOLED over QSPI, TE-synchronized |
| Touch | ✅ | `CST9220` over I2C |
| Backlight control | ✅ | Panel command 0x51 (no backlight GPIO) |
| Wi-Fi | ✅ | ESP32-S31 Wi-Fi 6 |
| Bluetooth | ✅ | BLE and BR/EDR |
| IMU | ✅ | `BMI270` |
| Magnetometer | ✅ | Two `BMM150` sensors |
| Fuel gauge | ✅ | `BQ27220` |
| Charger | ✅ | `TP4057` (hardware only) |
| Audio | ✅ | `ES8311` codec with speaker amplifier and microphone |
| Haptics | ✅ | PWM vibration motor, with an optional boot pulse |
| Storage | ✅ | 128 MB SPI NAND (FAT + Dhara FTL) mounted at `/sdcard` |
| USB Mass Storage | ✅ | Exposes the NAND user-data volume to a host |
| USB serial console | ✅ | CDC-ACM console on the Type-C port |
| USB host | ❌ | The single Type-C port is shared with device mode |
| SD card | ❌ | No SD slot; the NAND volume serves the same role |
| Deep sleep | ✅ | AI button (GPIO7) wake |
| Software power-off | ✅ | SAM8108 power controller via GPIO57 |
| Camera | 🚧 | V1.4 `SC101IOT` support isn't part of the current device definition yet; the V1.2 `OV3640` module isn't supported |
| 802.15.4 Zigbee/Thread | 🚧 | Supported by the silicon, no Tactility radio service yet |
| External apps (SDK) | ✅ | `esp32s31` SDK platform; apps build with `tt app bir --architecture esp32s31` |

## Usage notes

- The AI button has no application action; it is only the deep-sleep wake source.
- The vibration motor plays a short pulse on boot. Its strength and duration come from
  Settings → Vibration, where it can also be disabled.
- Mass storage mode suspends the local `/sdcard` mount while the host has control. Eject
  the drive before leaving USB mode.
- The NAND volume is FAT, which is not power-loss safe. Prefer Power → "Power off" over
  cutting power.
- The first boot formats the NAND and takes around 20 seconds; later boots are fast.

## Known issues

- Flashing requires manual download mode: hold BOOT (GPIO61) while powering the board on.
  The USB-OTG port has no DTR/RTS reset wiring. While the firmware is running, sending
  `TT:BOOTDL` on the console also reboots into download mode.
- The app console is a separate USB device from the ROM download interface, so
  `idf.py flash monitor` isn't a single command. Bootloader and early boot logs require a
  UART or USB-Serial/JTAG console.
- Camera module support isn't included yet. V1.4 `SC101IOT` support is paused, and the
  V1.2 `OV3640` module isn't implemented.
- v1.0 hardware needs runtime revision detection (different I2C/LCD pins and codec rail).

## Links

- [Product page](https://mosaico.ai/en)
- [Official guide](https://mosaico.ai/en/guide)
- [Official repositories](https://github.com/esp-mosaico)
