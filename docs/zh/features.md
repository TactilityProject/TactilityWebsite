---
title: "功能"
description: "Tactility 提供的功能：应用、App Hub、Wi-Fi、蓝牙、Mesh 网络、应用开发，以及 ESP32 设备的驱动支持。"
toc: true
---

Tactility 把 ESP32 硬件变成一台运行真正操作系统的小电脑：启动器、应用、设置、文件管理和联网功能，开箱即用。在浏览器中即可安装，然后从 App Hub 添加应用，或者自己开发应用。

## 支持现在就能买到的硬件 {#runs-on-hardware-you-can-buy-today}

开箱即支持 50 多款设备：从 LilyGO T-Deck、M5Stack Cardputer 等带键盘的掌机，到 M5Stack Tab5 等平板，再到价格实惠的“Cheap Yellow Display”（CYD）开发板。完整列表请参见[支持的设备](zh/supported-devices.md)。

- **安装简单**：用[网页安装器](https://install.tactilityproject.org/?lang=zh)烧录 Tactility，无需工具链。
- **多种输入方式**：支持触摸屏、键盘、轨迹球、旋转编码器和普通按键。
- **图形界面或无头模式**：可以使用完整的用户界面，也可以在没有显示屏的情况下运行。你可以更改设备的启动方式，并自动启动所需的应用。

## 内置应用 {#apps-included}

Tactility 自带使用和探索设备所需的应用：

- **Files**：浏览、创建、复制和移动内部存储和 SD 卡上的文件和文件夹。
- **Terminal**：设备上的命令行 shell。可以直接从 SD 卡运行原生应用和 shell 脚本。
- **Mesh**：在公开或私密频道中聊天，或与联系人聊天。
- **Notes**、**Image Viewer**、**Camera**、**I2C Scanner**、**System Info** 等。
- **Settings**：设置 Wi-Fi、蓝牙、设备外观等。

## App Hub {#app-hub}

通过 App Hub 直接在设备上安装更多应用，例如计算器、串口终端、GPIO 监视器、电子书阅读器、待办清单，以及 Snake、Breakout、2048 等游戏。

## 联网功能 {#connectivity}

- **Wi-Fi**：连接到网络。
- **蓝牙**：在支持的设备上使用低功耗蓝牙（BLE）。
- **Mesh 网络**：在带 LoRa 射频的设备上或通过 ESP-NOW 加入 [Meshtastic](https://meshtastic.org) 和 [MeshCore](https://meshcore.co.uk) 网络。
- **网页控制台**：在浏览器中管理设备。上传和下载文件、安装和运行应用、查看系统信息。
- **USB**：把设备当作 U 盘使用，从电脑复制文件。部分设备还可以作为 USB 主机，连接键盘、存储设备和 MIDI 设备。

## 开发你自己的应用 {#build-your-own-apps}

- **SD 卡上的应用**：开发图形或终端应用，放到 SD 卡上即可运行，无需重新编译固件。
- **不只是应用**：可下载的应用包可以包含驱动模块或后台服务，开机后始终可用。
- **LVGL 或直接绘制像素**：使用 [LVGL](https://lvgl.io) 构建一致的用户界面，或通过核心显示驱动直接向屏幕写入像素，获得更高的渲染性能。
- **通过 Wi-Fi 安装**：在设置中启用“Development”功能，即可从电脑通过 Wi-Fi 安装和运行应用。还可以传输文件或打开远程终端。
- **电脑模拟器**：在 Linux、macOS 或 Windows（WSL）上开发和测试，无需烧录设备。模拟器有多种设备配置，可以更改屏幕尺寸和启动器外观。
- 请查看[开发者文档](https://docs.tactilityproject.org)（英文）开始开发。

## 硬件与驱动 {#hardware-and-drivers}

Tactility 让使用 I2C、SPI 和 UART 等底层协议更简单、更安全。驱动程序为显示屏、触摸、键盘、GPS、音频、电源等提供统一接口，因此应用可以在不同设备上运行。设备通过设备树描述，为自己的硬件添加支持非常直接。

## 保护隐私的崩溃报告 {#privacy-friendly-crash-reporting}

Tactility 崩溃时会自动重启并显示一个二维码。扫描二维码会打开一个包含崩溃详情的网页，但不会向开发者发送任何数据。当然，欢迎你通过电子邮件把崩溃报告发给我们！
