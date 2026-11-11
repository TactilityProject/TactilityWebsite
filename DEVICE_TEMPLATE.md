# Device page template

Copy the block below into `docs/devices/<vendor>-<model>.md` and remove the sections that don't apply.

## Conventions

- The frontmatter block at the top puts the device on the Supported Devices page; there is no separate list to edit.
  - `title`: name shown on the page and in the list (the page has no `# heading` of its own)
  - `vendor`: groups the device in the list, e.g. `LilyGO`
  - `psram`: `true` when the device has external RAM
  - `sdcard`: `true` when the SD card works
  - `recommended`: `true` for devices recommended by the developer (⭐)
  - `community`: `true` when the developer does not own the board
  - `incubating`: `true` while support is still being worked on
  - `installer` (optional): the device id in the [Web Installer](https://install.tactilityproject.org/), used for the "Install Tactility" button. Leave it out when the id equals the file name. Use a list of `id` / `label` pairs when hardware revisions need different firmware; the label is the hardware revision (e.g. `v1`) and is shown as "Hardware v1" (see `docs/devices/cl32.md`), or `false` to hide the button. An entry with `supported: false` and no `id` shows a disabled button marked "(not supported)". Install links can also go in a table on the page, where they are shown as buttons (see `docs/devices/cyd-2432s028r.md`).
- Status legend (also shown on `supported-devices.md`):
  - ✅ Supported
  - ⚠️ Partially supported or buggy (explain in Notes)
  - 🚧 Hardware is capable, but not yet implemented
  - ❌ Not supported (hardware limitation or no driver planned)
- Feature table rows are sorted by status: ✅, ⚠️, 🚧, ❌.
- Spelling: `LilyGO`, `M5Stack`, `Elecrow`, `Guition`, `Waveshare`, `Seeed Studio`, `Wi-Fi`, `USB Mass Storage`, `SD card`.
- Chip names in code formatting: `SX1262`, `ES8311`.
- Headings in sentence case: "Known issues", not "Known Issues".
- Warnings use GitHub-style alerts (`> [!WARNING]`, `> [!NOTE]`), not loose ⚠️ lines.
- Link labels: "Product page", "Official documentation", "Store", "GitHub", "Wiki". Add the variant name when there are multiple, e.g. "Store (Keyboard)".
- Known issues: one or two sentences on what is affected and what to do about it, then a link to the source.

## Template

```markdown
---
title: "<Vendor> <Model>"
vendor: <Vendor>
psram: true
sdcard: true
recommended: false
community: false
incubating: false
---

<One sentence describing the device.>

> [!WARNING]
> <Hardware caveats that affect everyone, e.g. unsupported revisions.>

## Hardware variants

- v1: <how to recognize it>
- v2: <how to recognize it>

## Feature support

| Feature | Status | Notes |
|-|-|-|
| SD card | ✅ | |
| Power status | 🚧 | |

## Usage notes

<Button mappings, keyboard shortcuts, flashing quirks.>

## Known issues

- <Issue>: <impact and workaround>. ([source](https://...))

## Links

- [Product page](https://...)
- [Official documentation](https://...)
```
