# EasyCard for Garmin

A Connect IQ watch app that shows the same loyalty-card barcodes as
[easycard.meertens.dev](https://easycard.meertens.dev), but on your wrist.
Primary target: **fēnix 7 Pro**. Other fēnix 7 family devices are listed in
the manifest and should also build.

## Features

- Menu of supermarket loyalty cards.
- CODE128 barcodes rendered directly on the watch screen.
- Backlight forced on while a barcode is shown so the till scanner can read it.
- Co-op's QR code is shown as an "unsupported" placeholder (QR rendering is
  not implemented on-watch).

## Project layout

```
garmin/
├── manifest.xml              # App ID, supported devices, API level
├── monkey.jungle             # Build manifest
├── resources/
│   ├── drawables/            # Launcher icon
│   └── strings/              # User-facing strings
├── source/
│   ├── EasyCardApp.mc        # Application entry point
│   ├── Stores.mc             # Store list + pre-computed CODE128 bar strings
│   ├── StoreListView.mc      # Menu of stores
│   └── BarcodeView.mc        # Barcode renderer
└── tools/
    └── gen_bars.py           # Regenerate bar strings from stores.js
```

## Building

You need the [Connect IQ SDK](https://developer.garmin.com/connect-iq/sdk/)
and a developer key (`monkeyc -k <key>.der`).

```bash
cd garmin
monkeyc \
    -d fenix7pro \
    -f monkey.jungle \
    -o bin/EasyCard.prg \
    -y ~/.Garmin/ConnectIQ/developer_key.der
```

To run in the simulator:

```bash
connectiq          # launch the simulator
monkeydo bin/EasyCard.prg fenix7pro
```

To side-load onto a real watch, copy `bin/EasyCard.prg` to the
`GARMIN/APPS/` directory on the device over USB.

## Adding a store

The on-watch app uses pre-computed CODE128 module strings rather than
encoding at runtime, so adding a store is a two-step process:

1. Add the entry to the web app's `stores.js`.
2. Regenerate the Monkey C entries:

   ```bash
   pip install python-barcode
   python3 garmin/tools/gen_bars.py
   ```

3. Paste the new `:bars` value into `garmin/source/Stores.mc`.

## Notes

- Bar widths are computed as `floor(screen_width / module_count)`, so on
  the fēnix 7 Pro (260 px) every barcode currently uses ≥ 1 px per module
  with a 10 px quiet zone on each side. If you add a CODE128 code longer
  than ~240 modules, shrink the quiet zone or reduce the font padding.
- QR support would require porting a QR encoder (Reed–Solomon error
  correction is the awkward part). Until then, the Co-op card opens the
  unsupported screen and refers the user to the web app.
