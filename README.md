# MonitorFlow website

The showcase site of [MonitorFlow](https://github.com/Kidoly/monitorflow): landing page, promo video, pricing, and the "How to monitor" guides in English and French. A Next.js static export: plain files, no server, deployable on any static host.

## Run it

```sh
npm ci
npm run dev          # http://localhost:3000, pulls the guides on first run
npm run build        # static site in out/
npm run serve        # serves out/ like a static host, on http://localhost:3000
```

Node 20.9 or later.

`npm run check`, `npm run typecheck` and `npm test` run in CI on every pull request.

## Where things are

| What | Where |
| --- | --- |
| Domain, demo URL, version, video, install commands | `src/config/site.ts` |
| Contact links (forum, issues, support, sales, security) | `src/config/contact.ts` |
| Prices, minimums, volume discounts | `src/config/pricing.ts` |
| English and French copy | `src/content/en.ts`, `src/content/fr.ts` |
| Pages | `src/views/`, routed from `src/app/(en)/` and `src/app/(fr)/fr/` |
| Colors and type (the product's tokens) | `src/app/globals.css` |
| Logo, icons | `public/brand/`, `public/favicon.ico` (from `web/public/` in the product repo) |
| Promo video, poster, captions | `public/media/promo/` |

## The guides

The guides are not copied into this repository. `npm run guides` pulls `docs/guides/` from the product repository into `content/guides/` (ignored by git), and the build turns them into `/guides/<slug>/` and `/fr/guides/<slug>/`, with hreflang links between each pair (front matter `translation`). Links between guides become site URLs; links to the rest of the product docs go to GitHub.

```sh
npm run guides                              # main of Kidoly/monitorflow
MF_PRODUCT_REF=v0.6.0 npm run guides        # a tag or branch
MF_PRODUCT_DIR=../monitorflow npm run guides  # a local checkout
```

A new guide in the product repo appears on the site at the next build, with nothing to change here.

## Rules

- Never the em dash character, anywhere. `npm run check` and every build fail on one, including in the pulled guides.
- Claim only what the product does. Roadmap items are labelled "Coming".
- No other products named as comparisons, no infrastructure details, no secrets.
- No tracking: no cookies, no analytics. The theme choice is kept in the browser's local storage only.

See `docs/` for the domains and DNS, the video and the demo.
