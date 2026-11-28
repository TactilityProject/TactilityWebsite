---
title: "Use Cases"
description: "What people use Tactility for: field tools for professionals, 3D gaming on ESP32 and a platform for makers who like to build and experiment."
toc: true
---

Tactility turns a cheap ESP32 device into a pocket computer you can shape for the job at hand.
Here are some of the ways people use it.

## Professionals

For technicians, electricians, installers and security professionals, a Tactility device is a pocket-sized toolkit that goes where a laptop is impractical.

- **Field tools**: diagnose and configure equipment in the field. For example, the **Serial Console** app talks to devices over UART, and the **GPIO** app shows the live state of every pin.
- **Measurements and sensors**: read out sensors and modules over I2C, SPI and UART, with GPS, audio and more on supported devices.
- **Wireless**: work with Wi-Fi, Bluetooth LE, ESP-NOW and LoRa mesh networks, even where there is no network coverage.
- **Extensible**: add new peripherals and drivers at runtime, without reflashing the firmware.
- **Custom tools**: run your own apps and scripts from the SD card, and boot straight into the tool you need.
- **Modern tooling**: manage devices remotely from a browser, develop and deploy apps over Wi-Fi, and test on your PC with the simulator.

## Gaming

ESP32 devices are more capable than they look. Tactility gives games full control over the screen and input, with fast access to the display driver.

- **Gaming**: play 3D games with the [Jet](https://github.com/cubecoders/jet) engine, or run games built with Deki.
- **Smooth performance**: DOOM runs smoothly while Wi-Fi stays connected in the background. Mesh messages keep coming in, ready to read when your game is over.
- **Play your way**: use a touchscreen, keyboard, trackball or buttons.

## Makers

For people who like to experiment with hardware, build their own devices or turn an idea into a project.

- **Start from hardware you have**: Tactility runs on [many devices](supported-devices.md), from handhelds with keyboards to tablets and affordable "Cheap Yellow Display" boards.
- **Build your own device**: devices are described with device trees, so adding support for your own hardware mostly comes down to describing it and adding any missing drivers.
- **Write apps without rebuilding firmware**: put apps on an SD card or install them from your PC over Wi-Fi. Use [LVGL](https://lvgl.io) for user interfaces, or draw pixels directly to the display.
- **Experiment on your PC**: the simulator runs on Linux, macOS and Windows (with WSL), with profiles for different screen sizes.
- **Code on the device itself**: compile small C programs right on the device with the **xcc700** and **rcc700** compilers from the Terminal.
- **Connect anything**: I2C, SPI and UART are easier and safer to use, and drivers share common interfaces for displays, touch, keyboards, GPS, audio and power.
- **Go beyond apps**: app packages can include driver modules and background services that are available after boot.
- **Make music**: turn your device into a MIDI controller for any DAW or synthesizer, or compose chiptunes right on the device.
- **Learn how an OS works**: Tactility is open source, with a kernel, driver model and services you can explore.

See the [developer documentation](https://docs.tactilityproject.org) to get started, or share what you're building with the [community](community.md).
