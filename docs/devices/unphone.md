---
title: "unPhone"
vendor: unPhone
psram: true
sdcard: true
recommended: false
community: false
incubating: false
---

> [!WARNING]
> Only version 9 of the hardware is supported.

## Feature support

| Feature | Status | Notes |
|-|-|-|
| SD card | ✅ | |
| Power status | ✅ | Battery level |
| Bluetooth | ✅ | BLE |
| Touch | ✅ | Resistive, `XPT2046` |
| USB Mass Storage | ⚠️ | Hardware is capable, but it currently doesn't work |
| Backlight control | ⚠️ | On/off only |

## Known issues

- Battery drain: a switched-off device drains its battery in about 3 days. Letting the battery fully deplete can permanently reduce its capacity, so charge it regularly.

## Links

- [Product page](https://unphone.net)
- [GitLab (unPhone library)](https://gitlab.com/hamishcunningham/unphonelibrary/)
- [GitLab (unPhone project)](https://gitlab.com/hamishcunningham/unphone/)
