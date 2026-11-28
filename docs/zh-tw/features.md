---
title: "功能"
description: "Tactility 提供的功能：App、App Hub、Wi-Fi、藍牙、Mesh 網路、App 開發，以及 ESP32 裝置的驅動程式支援。"
toc: true
---

Tactility 把 ESP32 硬體變成一台執行真正作業系統的小電腦：啟動器、App、設定、檔案管理和連網功能，開箱即用。在瀏覽器中就能安裝，然後從 App Hub 新增 App，或自己開發 App。

## 支援現在就買得到的硬體 {#runs-on-hardware-you-can-buy-today}

開箱即支援 50 多款裝置：從 LilyGO T-Deck、M5Stack Cardputer 等附鍵盤的掌上型裝置，到 M5Stack Tab5 等平板，再到價格實惠的「Cheap Yellow Display」（CYD）開發板。完整清單請參閱[支援的裝置](zh-tw/supported-devices.md)。

- **安裝簡單**：用[網頁安裝程式](https://install.tactilityproject.org/?lang=zh-tw)燒錄 Tactility，不需要工具鏈。
- **多種輸入方式**：支援觸控螢幕、鍵盤、軌跡球、旋轉編碼器和一般按鍵。
- **圖形介面或無頭模式**：可以使用完整的使用者介面，也可以在沒有螢幕的情況下執行。你可以變更裝置的開機方式，並自動啟動需要的 App。

## 內建 App {#apps-included}

Tactility 內建使用和探索裝置所需的 App：

- **Files**：瀏覽、建立、複製和移動內部儲存空間和 SD 卡上的檔案與資料夾。
- **Terminal**：裝置上的命令列 shell。可以直接從 SD 卡執行原生 App 和 shell 指令碼。
- **Mesh**：在公開或私人頻道中聊天，或與聯絡人聊天。
- **Notes**、**Image Viewer**、**Camera**、**I2C Scanner**、**System Info** 等。
- **Settings**：設定 Wi-Fi、藍牙、裝置外觀等。

## App Hub {#app-hub}

透過 App Hub 直接在裝置上安裝更多 App，例如計算機、序列埠終端機、GPIO 監視器、電子書閱讀器、待辦清單，以及 Snake、Breakout、2048 等遊戲。

## 連網功能 {#connectivity}

- **Wi-Fi**：連線到網路。
- **藍牙**：在支援的裝置上使用低功耗藍牙（BLE）。
- **Mesh 網路**：在配備 LoRa 射頻的裝置上或透過 ESP-NOW 加入 [Meshtastic](https://meshtastic.org) 和 [MeshCore](https://meshcore.co.uk) 網路。
- **網頁主控台**：在瀏覽器中管理裝置。上傳和下載檔案、安裝和執行 App、查看系統資訊。
- **USB**：把裝置當成隨身碟使用，從電腦複製檔案。部分裝置還能當作 USB 主機，連接鍵盤、儲存裝置和 MIDI 裝置。

## 開發你自己的 App {#build-your-own-apps}

- **SD 卡上的 App**：開發圖形或終端機 App，放到 SD 卡上就能執行，不需要重新編譯韌體。
- **不只是 App**：可下載的 App 套件可以包含驅動程式模組或背景服務，開機後隨時可用。
- **LVGL 或直接繪製像素**：使用 [LVGL](https://lvgl.io) 打造一致的使用者介面，或透過核心顯示驅動程式直接將像素寫入螢幕，獲得更高的繪製效能。
- **透過 Wi-Fi 安裝**：在設定中啟用「Development」功能，就能從電腦透過 Wi-Fi 安裝和執行 App。還可以傳輸檔案或開啟遠端終端機。
- **電腦模擬器**：在 Linux、macOS 或 Windows（WSL）上開發和測試，不需要燒錄裝置。模擬器有多種裝置設定，可以變更螢幕尺寸和啟動器外觀。
- 請參閱[開發者文件](https://docs.tactilityproject.org)（英文）開始開發。

## 硬體與驅動程式 {#hardware-and-drivers}

Tactility 讓使用 I2C、SPI 和 UART 等底層協定更簡單、更安全。驅動程式為螢幕、觸控、鍵盤、GPS、音訊、電源等提供統一的介面，因此 App 可以在不同裝置上執行。裝置透過裝置樹（device tree）描述，為自己的硬體新增支援非常直接。

## 保護隱私的當機回報 {#privacy-friendly-crash-reporting}

Tactility 當機時會自動重新啟動並顯示一個 QR code。掃描 QR code 會開啟一個包含當機詳細資訊的網頁，但不會傳送任何資料給開發者。當然，也歡迎你透過電子郵件把當機報告寄給我們！
