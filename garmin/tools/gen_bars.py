#!/usr/bin/env python3
"""Regenerate the CODE128 bar strings embedded in source/Stores.mc.

Reads stores.js (the web app's source of truth), encodes each CODE128
entry with python-barcode, and prints a Monkey C snippet you can paste
into Stores.all().

Usage:
    pip install python-barcode
    python3 tools/gen_bars.py
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

try:
    from barcode import Code128
except ImportError:
    sys.exit("Install python-barcode first: pip install python-barcode")

ROOT = Path(__file__).resolve().parents[2]
STORES_JS = ROOT / "stores.js"


def parse_stores_js(text: str) -> list[dict]:
    # stores.js is plain JS with trailing commas removed; pull the array
    # literal out and coerce it into JSON.
    match = re.search(r"\[(.*)\]", text, re.S)
    if not match:
        raise SystemExit("Could not find array literal in stores.js")
    body = "[" + match.group(1) + "]"
    body = re.sub(r"//[^\n]*", "", body)
    body = re.sub(r",(\s*[}\]])", r"\1", body)
    body = re.sub(r"(\w+):", r'"\1":', body)
    return json.loads(body)


def main() -> int:
    stores = parse_stores_js(STORES_JS.read_text())
    for s in stores:
        if s["format"] != "CODE128":
            bars = ""
        else:
            bars = Code128(s["code"], writer=None).build()[0]
        print(f'// {s["name"]}')
        print(f'// :bars => "{bars}"')
        print()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
