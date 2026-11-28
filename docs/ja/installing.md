---
title: "インストール"
description: "WebインストーラーでESP32デバイスにTactilityをインストールするか、リリースを手動で書き込みます。"
options:
  - title: Webインストーラー
    text: ブラウザーから直接Tactilityをインストールできます。ツールは不要です。
    label: Webインストーラーを開く
    url: https://install.tactilityproject.org/?lang=ja
    primary: true
  - title: リリース
    text: デバイス用のファームウェアをダウンロードし、以下の手順で自分で書き込みます。
    label: リリースをダウンロード
    url: https://github.com/ByteWelder/Tactility/releases
---

## 手動での書き込み {#manual-flashing}

リリースをダウンロードしたら、[esptool](https://docs.espressif.com/projects/esptool/en/latest/esp32/installation.html)がインストールされていることを確認してください。

書き込みスクリプトを実行します：

:::: tabs

::: tab Linux / macOS

シリアルデバイス（多くの場合 `ttyACM0` または `ttyUSB0`）に書き込みます：

```bash
./flash.sh /dev/ttyACM0
```

トラブルシューティング：

- 'function: not found' のようなエラーが出る場合は、`bash` が関数に対応していない別のシェル（dashなど）のエイリアスになっていないか確認してください。その場合は、エイリアスを本物のbashに向けるか、bashの絶対パスを指定して上のコマンドを実行してください（例：`/usr/bin/bash ./flash /dev/ttyACM0`）。
- 'No such file or directory [...] stub_flasher_32s3.json' のようなエラーが出る場合は、esptoolをアンインストールし、pip/pip3で再インストールしてください。一部のパッケージマネージャー（aptなど）には、S3用の[最新のバイナリが含まれていません](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1043168)。

:::

::: tab Windows

`COM` ポートを指定して書き込みます：

```powershell
flash.ps COM3
```

:::

::::

## 開発版ビルド {#development-builds}

GitHubにログインしていれば、いくつかのビルドを入手できます。ただし、ビルド後数日から数週間しか公開されません：
- [ファームウェアのビルド](https://github.com/TactilityProject/Tactility/actions/workflows/build.yml)
- [SDKのビルド](https://github.com/ByteWelder/Tactility/actions/workflows/build-sdk.yml)

（zipファイルはページの一番下にあります）
