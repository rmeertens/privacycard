# Candidate stores

Supermarkets (and a few drugstores) that run a scan-at-the-till loyalty card,
like the ones already in [`stores.js`](./stores.js). Use this as a backlog:
a store only goes into `stores.js` once we have a **verified, working barcode
number** for it (see commit 100983c), so nothing here is live yet.

Legend for **Form**:
- **Card** – physical plastic/key-fob card exists (often usable unregistered).
- **App** – digital only; the barcode lives in the store's app.
- **Card + App** – both.

✅ = already in `stores.js`.

## United Kingdom

| Store | Programme | Form | Notes |
|---|---|---|---|
| ✅ Tesco | Clubcard | Card + App | Clubcard Prices. |
| ✅ Sainsbury's | Nectar | Card + App | Nectar Prices; also used at Argos. |
| ✅ Boots | Advantage Card | Card + App | Drugstore. |
| ✅ Co-op | Membership | Card + App | QR code. |
| **Lidl** | **Lidl Plus** | App | Lidl Plus Prices + weekly coupons. App-only; barcode is per account — needs testing whether a shared screenshot is accepted. |
| Asda | Asda Rewards | App | Cashpot rewards and "Rewards prices". |
| Morrisons | More Card | Card + App | More Card Prices. |
| Waitrose | myWaitrose | Card + App | Member offers. |
| Marks & Spencer | Sparks | App (card phased out) | Personalised offers. |
| Iceland | Bonus Card / Iceland app | Card + App | Top-up / bonus scheme. |
| Aldi | Aldi Plus | App | Newer scheme — verify availability. |
| Superdrug | Health & Beautycard | Card + App | Drugstore. |

## Netherlands

| Store | Programme | Form | Notes |
|---|---|---|---|
| ✅ Albert Heijn | Bonuskaart | Card + App | Works unregistered. |
| ✅ Jumbo | Extra's | Card + App | |
| ✅ Kruidvat | Voordeelkaart | Card + App | Also NL/BE. |
| **Lidl** | **Lidl Plus** | App | |
| Etos | Etos klantenkaart | Card + App | Drugstore (Ahold group). |
| Gall & Gall | via AH Bonuskaart | Card + App | Same card as Albert Heijn — no separate entry needed. |
| Hoogvliet | Hoogvliet app | App | Verify current scheme. |

## Belgium

| Store | Programme | Form | Notes |
|---|---|---|---|
| **Lidl** | **Lidl Plus** | App | |
| Delhaize | SuperPlus | Card + App | |
| Colruyt / OKay / Spar | Xtra | Card + App | One card for the Colruyt group. |
| Carrefour | Bonus Card | Card + App | |
| Albert Heijn (BE) | Bonuskaart | Card + App | Belgian AH stores. |

## Germany / Austria

| Store | Country | Programme | Form | Notes |
|---|---|---|---|---|
| **Lidl** | DE, AT | **Lidl Plus** | App | Lidl Plus originated in Germany. |
| Kaufland | DE | Kaufland Card | Card + App | |
| REWE / PENNY | DE | REWE Bonus / PENNY app | App | Left Payback; verify current scheme. |
| Edeka / Netto Marken-Discount | DE | Payback | Card + App | Payback is a multi-retailer card. |
| Rossmann | DE | Rossmann app | App | Drugstore coupons. |
| Billa / Penny | AT | jö Bonus Club | Card + App | Multi-retailer. |

## France

| Store | Programme | Form |
|---|---|---|
| **Lidl** | **Lidl Plus** | App |
| Carrefour | Carte Carrefour / Le Club | Card + App |
| Auchan | Waaoh | Card + App |
| E.Leclerc | Carte E.Leclerc (Ticket Leclerc) | Card + App |
| Intermarché | Carte de fidélité | Card + App |
| Monoprix | Monoprix & Moi | Card + App |

## Ireland

| Store | Programme | Form |
|---|---|---|
| **Lidl** | **Lidl Plus** | App |
| Tesco | Clubcard | Card + App |
| SuperValu | Real Rewards | Card + App |
| Dunnes Stores | Value Club | Card + App |

## Spain / Portugal / Italy

| Store | Country | Programme | Form |
|---|---|---|---|
| **Lidl** | ES, PT, IT | **Lidl Plus** | App |
| Carrefour | ES | Club Carrefour | Card + App |
| Eroski | ES | Club Eroski | Card + App |
| Dia | ES | Club Dia | Card + App |
| Continente | PT | Cartão Continente | Card + App |
| Pingo Doce | PT | Poupa Mais | Card + App |
| Esselunga | IT | Fìdaty | Card + App |
| Conad | IT | Carta Insieme | Card |
| Coop | IT | Carta Socio Coop | Card |

## Switzerland / Nordics / Poland

| Store | Country | Programme | Form |
|---|---|---|---|
| **Lidl** | CH, SE, DK, FI, PL | **Lidl Plus** | App |
| Migros | CH | Cumulus | Card + App |
| Coop | CH | Supercard | Card + App |
| ICA | SE | Stammis | Card + App |
| Coop | SE / DK / NO | Medlem / Coop app | Card + App |
| NorgesGruppen (Kiwi, Meny, Spar) | NO | Trumf | Card + App |
| K-Group | FI | K-Plussa | Card + App |
| Biedronka | PL | Moja Biedronka | Card + App |
| Żabka | PL | Żappka | App |

## Outside Europe

| Store | Country | Programme | Form |
|---|---|---|---|
| Kroger (and banners) | US | Kroger Plus | Card + App |
| Safeway / Albertsons | US | for U | Card + App |
| CVS | US | ExtraCare | Card + App |
| Walgreens | US | myWalgreens | Card + App |
| Loblaws / Shoppers Drug Mart | CA | PC Optimum | Card + App |
| Sobeys / Safeway CA | CA | Scene+ | Card + App |
| Woolworths | AU | Everyday Rewards | Card + App |
| Coles | AU | Flybuys | Card + App |

## Notes on Lidl Plus

- Available in 30+ countries, including the UK, Ireland, NL, BE, DE, FR, ES,
  IT, PL and the Nordics.
- App-only: there is no plastic card. The till scans the barcode/QR shown in
  the app, so adding it here would mean rendering that same code.
- Coupons must be activated in the app before scanning, so a shared code
  would only give the account's activated coupons plus Lidl Plus Prices
  (UK). Needs a real-world test before going into `stores.js`.

Programmes change often (e.g. M&S dropping its plastic Sparks card, REWE
leaving Payback) — double-check before adding any of these.
