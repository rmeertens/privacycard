# privacycard

Tiny static site that hosts loyalty card barcodes for major supermarkets
(Albert Heijn, Tesco, Sainsbury's, Lidl, Carrefour, …) so shoppers can scan
to get member discounts without registering an account.

Live at https://privacycard.meertens.dev.

## Stack
- Plain HTML/CSS/JS, no build step.
- [JsBarcode](https://github.com/lindell/JsBarcode) via CDN renders the barcode client-side.
- Deployed via GitHub Pages (CNAME → `privacycard.meertens.dev`).

## Edit a store

All loyalty cards live in [`stores.js`](./stores.js). Update the `code`
field to change a barcode. Add a new entry to add a new supermarket, then
add the matching URL to `sitemap.xml`.

## Conversation starters

[`conversation.html`](./conversation.html) is a language-practice page with
open questions to write about. Each question reveals hints one level at a
time (words → things → verbs → grammar → example sentences). Questions and
hints live in [`starters.js`](./starters.js); add a language by adding a new
key there.

## Garmin watch app

A Connect IQ port for the fēnix 7 Pro (and other fēnix 7 family devices)
lives in [`garmin/`](./garmin). See [`garmin/README.md`](./garmin/README.md)
for build instructions.
