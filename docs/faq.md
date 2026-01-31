# FAQ

#### What is the purpose of Tactility?

The main purpose is to create an open source platform for tinkerers/hobbyists.
The secondary purpose is to build something that is usable by end-users.

The intent is to support a wide range of devices.

#### What about other hardware targets?

Several ESP32 variants and Linux are currently supported.
The software architecture is designed to be portable, so expanding support to additional platforms is feasible and likely over time.

#### Is it really an operating system?

Strictly speaking, any flashed ROM running on an ESP32 can be considered an operating system.
Most existing solutions are built on top of FreeRTOS with application logic largely hard-coded into the firmware.

Tactility, however, provides features typically associated with a general-purpose operating system:
- A kernel with a driver model, kernel modules, and devicetree support
- The ability to install and run native applications after flashing the OS
- Background services (e.g. Wi-Fi management)
- A software development kit for building native applications
- And more

#### What are the downsides of using Tactility compared to other platforms?

When using the Tactility front-end (based on LVGL and a launcher application), memory pressure can become a concern.
Display drivers typically require large contiguous memory buffers, and background services further increase memory usage.

As a development platform, Tactility is less beginner-oriented than alternatives like the Arduino IDE.
While it aims to be approachable, it has a steeper learning curve and targets developers who are comfortable with more system-level concepts.

#### How does this relate to Flipper Zero?

The project originally started as a [fork](https://github.com/KenVanHoeylandt/FlipperZeroEsp32) of Flipper Zero.
Although Flipper Zero remains a source of inspiration, Tactility also draws ideas from platforms such as Android, iOS, Zephyr and Linux.

#### Why not implement this using Zephyr?

Zephyr was not chosen initially because Tactility started as a relatively small project, and Zephyr has a significant learning curve.
Although a migration was considered later, it was ultimately rejected due to Zephyr’s largely static device and driver configuration.

One of Tactility’s goals is to support dynamic driver loading for peripherals.
This would allow binary drivers to be stored on an SD card, avoiding unnecessary use of space in the main operating system partition.

#### Why does Tactility not work with Launcher?

At the time of writing, [Launcher](https://github.com/bmorcelli/Launcher) does not support Tactility.
Launcher fails to load the data partitions required by Tactility, which prevents icons and other resources from being loaded from the filesystem.

This limitation may be addressed in the future, but there is currently no known roadmap for doing so.

#### Can I build closed-source applications?

Yes. The Tactility SDK only includes licenses that permit the development and distribution of closed-source applications.

