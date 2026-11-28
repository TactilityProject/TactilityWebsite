---
title: "安装"
description: "使用网页安装器把 Tactility 安装到你的 ESP32 设备上，或手动烧录发布版本。"
options:
  - title: 网页安装器
    text: 直接在浏览器中安装 Tactility，无需任何工具。
    label: 打开网页安装器
    url: https://install.tactilityproject.org/?lang=zh
    primary: true
  - title: 发布版本
    text: 下载适用于你的设备的固件，按照下面的说明自行烧录。
    label: 下载发布版本
    url: https://github.com/ByteWelder/Tactility/releases
---

## 手动烧录 {#manual-flashing}

下载发布版本后，请确认已安装 [esptool](https://docs.espressif.com/projects/esptool/en/latest/esp32/installation.html)。

运行烧录脚本：

:::: tabs

::: tab Linux / macOS

烧录到你的串口设备（通常是 `ttyACM0` 或 `ttyUSB0`）：

```bash
./flash.sh /dev/ttyACM0
```

故障排除：

- 如果出现类似 'function: not found' 的错误，请检查你的 `bash` 是否是另一个不支持函数的 shell（例如 dash）的别名。如果是，可以把别名改为指向真正的 bash，或使用 bash 的绝对路径直接运行上面的命令（例如 `/usr/bin/bash ./flash /dev/ttyACM0`）。
- 如果出现类似 'No such file or directory [...] stub_flasher_32s3.json' 的错误，请卸载 esptool，然后用 pip/pip3 重新安装。某些包管理器（例如 apt）[没有 S3 所需的最新二进制文件](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1043168)。

:::

::: tab Windows

指定 `COM` 端口进行烧录：

```powershell
flash.ps COM3
```

:::

::::

## 开发版构建 {#development-builds}

登录 GitHub 后可以找到一些构建版本，但它们只在构建后保留几天或几周：
- [固件构建](https://github.com/TactilityProject/Tactility/actions/workflows/build.yml)
- [SDK 构建](https://github.com/ByteWelder/Tactility/actions/workflows/build-sdk.yml)

（滚动到页面底部即可找到 zip 文件）
