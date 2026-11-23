# The live demo

"Try the live demo" opens the real MonitorFlow web interface, answering from made-up data in the browser: about thirty invented servers, open incidents, an AI proposal waiting for approval, an update campaign, a dashboard. Every change is refused with "This is a demo: changes are not saved." There is no server behind it, nothing to attack and nothing to pay for.

## Where it comes from

The demo mode lives in the product repository (`docs/demo.md` there), so it follows the interface as it changes. `scripts/build-demo.mjs` here:

1. checks out `web/` of `Kidoly/monitorflow` (`main`, or the branch or tag in `MF_DEMO_REF`),
2. runs `npm run build:demo` there with `NEXT_PUBLIC_MONITORFLOW_BASE_PATH=/demo` and the site's URL for the banner,
3. copies the result into `public/demo/` (ignored by git), which the site build publishes at `/demo/`.

`npm run build` does this once when `public/demo/` is missing. `npm run demo` rebuilds it, for example after a product release.

```sh
npm run demo                                  # main, or the pull request branch
MF_DEMO_REF=v0.7.0 npm run demo                # a tag or branch
MF_PRODUCT_DIR=../monitorflow npm run demo     # a local checkout
```

It is invented data only: no real server, name, address or customer. Search engines are asked not to index it (`robots.txt`).

## Moving it to its own address later

To serve it at `demo.monitorflow.eu` instead: build it in the product repository with no base path (`cd web && npm run build:demo`), publish `web/out` on a host of its own (GitHub Pages allows one site per repository, so another repository or another static host), point a `CNAME` record for `demo` at that host, and set the website's repository variable `DEMO_URL` to `https://demo.monitorflow.eu/`. The site's links follow `DEMO_URL`.
