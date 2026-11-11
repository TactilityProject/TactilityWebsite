---
title: "FAQ"
description: "Frequently asked questions about Tactility, the operating system for ESP32 devices."
toc: true
---

## Getting started

### Which device should I get?

Any device marked with ⭐ on the [Supported Devices](supported-devices.md) page is a good choice, because these devices are recommended by the developer.
The [M5Stack Tab5](devices/m5stack-tab5.md) currently performs best and has the most features.

Devices with external RAM (marked "External RAM" in the list) are recommended. Devices without it can run Tactility, but memory is tight.

### How do I install Tactility?

Use the [Web Installer](https://install.tactilityproject.org/) in a desktop browser. Installing with the _erase_ option is recommended.
See [Installing](installing.md) for alternative methods.

### My device doesn't power on. What should I do?

Some boards, mainly CYD and Guition displays, don't power on with a USB-C to USB-C cable. Use a USB-C to USB-A cable instead.
Check your device's page on [Supported Devices](supported-devices.md) for other known issues.

### Can I go back to the original firmware?

Yes. Tactility is flashed like any other firmware, so you can flash the vendor's firmware back with their tools.

### My device isn't listed. Can it run Tactility?

Any ESP32 device should be able to run Tactility, because drivers can be implemented for any hardware.
Devices are described with a device tree, so adding a new device mostly comes down to describing its hardware and adding any missing drivers.
See the [developer documentation](https://docs.tactilityproject.org) to get started.

## Using Tactility

For guides on using Tactility and its apps, see the [documentation](https://docs.tactilityproject.org).

### How do I install apps?

Open the App Hub on your device to browse and install apps.
You can also put apps on an SD card, or install them from your PC over Wi-Fi with the "Development" feature in the settings.

### Does Tactility work with Meshtastic and MeshCore?

Yes, on devices with a LoRa radio. Each device page lists whether mesh networking is supported.

### Tactility crashed. What now?

After a crash, Tactility reboots and shows a QR code. Scan it to see the crash details. No data is sent to the developers.
Please report the problem on [GitHub](https://github.com/TactilityProject/Tactility/issues) and include the crash details.

### Where can I get help?

Join the community on [Matrix](https://matrix.to/#/#tactility:matrix.org), [Stoat.chat](https://stt.gg/xwRTZEpX) or [Discord](https://discord.gg/pXs2xGS6fs).
See [Support](support.md) for more.

## About the project

### What is the purpose of Tactility?

The main purpose is to create an open source platform for tinkerers and hobbyists.
The secondary purpose is to build something that is usable by end users.

The intent is to support a wide range of devices.

### Is Tactility free and open source?

Yes. The main firmware is licensed under GPL v3.0. Most device and driver implementations use the Apache License v2.0.
See [Licenses & Copyrights](licenses-and-copyrights.md) for details.

### Is it really an operating system?

Strictly speaking, any firmware running on an ESP32 can be considered an operating system.
Most existing solutions are built on top of FreeRTOS, with the application logic largely hard-coded into the firmware.

Tactility provides features typically associated with a general-purpose operating system:

- A kernel with a driver model, kernel modules and device tree support
- Installing and running native applications after flashing the OS
- Background services, such as Wi-Fi management
- A software development kit for building native applications

### What are the downsides compared to other platforms?

The Tactility user interface (based on LVGL and a launcher app) uses a lot of memory.
Display drivers typically need large contiguous memory buffers, and background services use memory too.
This is why devices with external RAM are recommended.

As a development platform, Tactility is less beginner-friendly than alternatives like the Arduino IDE.
While it aims to be approachable, it has a steeper learning curve and targets developers who are comfortable with system-level concepts.

### How does this relate to Flipper Zero?

The project started as a [fork](https://github.com/KenVanHoeylandt/FlipperZeroEsp32) of the Flipper Zero firmware.
Flipper Zero remains a source of inspiration, but Tactility also draws ideas from platforms such as Android, iOS, Zephyr and Linux.

## Development

### Which platforms are supported?

Tactility runs on the ESP32, ESP32-S3, ESP32-C6 and ESP32-P4, and as a PC simulator on Linux, macOS and Windows (with WSL).
The software architecture is designed to be portable, so support for more platforms is likely over time.

### Why not build this on Zephyr?

Zephyr wasn't chosen at first because Tactility started as a small project, and Zephyr has a significant learning curve.
A migration was considered later, but rejected because Zephyr's device and driver configuration is largely static.

One of Tactility's goals is to load peripheral drivers dynamically.
This would allow binary drivers to be stored on an SD card, so they don't take up space in the main operating system partition.

### Can I build closed-source apps?

Yes. TactilitySDK only includes software with licenses that allow developing and distributing closed-source apps.
