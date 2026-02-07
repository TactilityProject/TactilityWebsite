# Installing

You can install Tactility with the [Web Installer](https://install.tactility.one/). Installing with the _erase_ option is recommended.

Note, for **T-Deck**: You might need to manually put the device in boot mode:
1. Press the trackball and then the reset button at the same time
2. Let go of the reset button, then the trackball

Alternative methods are described below.

## Releases: Downloads

[Page with releases](https://github.com/ByteWelder/Tactility/releases)

## Releases: Manual Flashing

Make sure you have [esptool](https://docs.espressif.com/projects/esptool/en/latest/esp32/installation.html) installed.

Run the flash script:

**Linux / macOS**

Flash your serial device (often `ttyACM0` or `ttyUSB0`)

```bash
./flash.sh /dev/ttyACM0
```
_Troubleshooting Linux / macOS_

* _If you get an error like 'function: not found', check if your bash is aliased to another shell without support for functions (like dash). If it is, you can change your bash alias to point to the real bash, or run the above command directly with the absolute path to your copy of bash, (e.g. `/usr/bin/bash ./flash /dev/ttyACM0`)._

* _If you get an error like 'No such file or directory [...] stub_flasher_32s3.json', uninstall your copy of esptools, and reinstall it using pip/pip3. Some package managers (like apt) [don't have the latest binaries](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1043168) for the s3._


**Windows**

Flash by specifying the `COM` port:

```ps
flash.ps COM3
```

## Development builds

You can find some builds in GitHub if you are logged in there, but they are only available for a few days or weeks after they were built:
- [Firmware builds](https://github.com/TactilityProject/Tactility/actions/workflows/build.yml)
- [SDK builds](https://github.com/ByteWelder/Tactility/actions/workflows/build-sdk.yml)

(scroll down to the bottom to find the zip files)

