# Features

Tactility turns ESP32 hardware into a small computer with a real operating system: a launcher, apps, settings, file management and connectivity, all ready to go.
Install it from your browser, then add apps from the App Hub or build your own.

## Runs on hardware you can buy today

More than 50 devices are supported out of the box, from handhelds with keyboards like the LilyGO T-Deck and M5Stack Cardputer to tablets like the M5Stack Tab5 and affordable "Cheap Yellow Display" boards.
See [Supported Devices](supported-devices.md) for the full list.

- **Easy to install**: flash Tactility with the [Web Installer](https://install.tactility.one/). No toolchain needed.
- **Many types of input**: touchscreens, keyboards, trackballs, encoder wheels and plain buttons all work.
- **Graphical or headless**: use the full user interface, or run without a display. You can change how the device boots and start the app you need automatically.

## Apps included

Tactility comes with the apps you need to use and explore your device:

- **Files**: browse, create, copy and move files and folders on the internal storage and SD card.
- **Terminal**: a command-line shell, right on the device. Run native apps and shell scripts straight from the SD card.
- **Mesh**: Chat in public or private channels, or with your contacts.
- **Notes**, **Image Viewer**, **Camera**, **I2C Scanner**, **System Info** and **Screenshot**.
- **Settings** for Wi-Fi, Bluetooth, the device appearance and much more.

## App Hub

Install more apps straight from the device with the App Hub. Examples include a calculator, serial console, GPIO monitor, e-book reader, to-do list and games like Snake, Breakout and 2048.

## Connectivity

- **Wi-Fi**: connect to a network.
- **Bluetooth**: Bluetooth Low Energy on supported devices.
- **Mesh networking**: join [Meshtastic](https://meshtastic.org) and [MeshCore](https://meshcore.co.uk) networks on devices with a LoRa radio or via ESP-NOW.
- **Web dashboard**: manage your device from a browser. Upload and download files, install and run apps, take screenshots and view system information.
- **USB**: use the device as a USB drive to copy files from your computer. Some devices can also act as a USB host for keyboards, storage and MIDI devices.

## Build your own apps

- **Apps on an SD card**: build graphical or terminal apps, put them on an SD card and run them. No need to rebuild the firmware.
- **Not just apps**: Downloadable app packages can contain driver modules or background services that are always available after boot.
- **LVGL or raw pixels**: use [LVGL](https://lvgl.io) for consistent user interfaces, or push pixels directly to the display with the core display driver for even higher performance rendering.
- **Install over Wi-Fi**: enable the "Development" feature in the settings to install and run apps from your PC over Wi-Fi. You can also transfer files or open a remote terminal/shell.
- **PC simulator**: build and test on Linux, macOS, or Windows with WSL, without flashing a device. The simulator has multiple device profiles, so you can change the display size and launcher appearance.
- See the [developer documentation](https://docs.tactilityproject.org) to get started.

## Hardware and drivers

Tactility makes it easier and safer to use low-level protocols such as I2C, SPI and UART.
Drivers share common interfaces for displays, touch, keyboards, GPS, audio, power and more, so apps work across devices.
Devices are described with device trees, which makes it straightforward to add support for your own hardware.

## Privacy-friendly crash reporting

When Tactility crashes, it reboots and shows a QR code.
The QR code opens a web page with the crash details, but no data is sent to the developers. You're welcome to email the crash report, though!
