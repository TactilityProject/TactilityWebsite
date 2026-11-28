---
title: "安裝"
description: "使用網頁安裝程式把 Tactility 安裝到你的 ESP32 裝置上，或手動燒錄發行版本。"
options:
  - title: 網頁安裝程式
    text: 直接在瀏覽器中安裝 Tactility，不需要任何工具。
    label: 開啟網頁安裝程式
    url: https://install.tactilityproject.org/?lang=zh-tw
    primary: true
  - title: 發行版本
    text: 下載適用於你的裝置的韌體，依照下方說明自行燒錄。
    label: 下載發行版本
    url: https://github.com/ByteWelder/Tactility/releases
---

## 手動燒錄 {#manual-flashing}

下載發行版本後，請確認已安裝 [esptool](https://docs.espressif.com/projects/esptool/en/latest/esp32/installation.html)。

執行燒錄指令碼：

:::: tabs

::: tab Linux / macOS

燒錄到你的序列埠裝置（通常是 `ttyACM0` 或 `ttyUSB0`）：

```bash
./flash.sh /dev/ttyACM0
```

疑難排解：

- 如果出現類似 'function: not found' 的錯誤，請檢查你的 `bash` 是否是另一個不支援函式的 shell（例如 dash）的別名。如果是，可以把別名改為指向真正的 bash，或使用 bash 的絕對路徑直接執行上面的指令（例如 `/usr/bin/bash ./flash /dev/ttyACM0`）。
- 如果出現類似 'No such file or directory [...] stub_flasher_32s3.json' 的錯誤，請解除安裝 esptool，然後用 pip/pip3 重新安裝。某些套件管理員（例如 apt）[沒有 S3 所需的最新二進位檔](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1043168)。

:::

::: tab Windows

指定 `COM` 連接埠進行燒錄：

```powershell
flash.ps COM3
```

:::

::::

## 開發版建置 {#development-builds}

登入 GitHub 後可以找到一些建置版本，但它們只會在建置後保留幾天或幾週：
- [韌體建置](https://github.com/TactilityProject/Tactility/actions/workflows/build.yml)
- [SDK 建置](https://github.com/ByteWelder/Tactility/actions/workflows/build-sdk.yml)

（捲動到頁面底部即可找到 zip 檔）
