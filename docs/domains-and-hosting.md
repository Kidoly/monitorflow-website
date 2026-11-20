# Domains and hosting

Nothing here is done yet: the owner buys domains, sets DNS and turns hosting on. This page says what to set.

Two ways to host it: GitHub Pages (below), or the container image (see "Running the image").

## The plan

| Domain | Serves |
| --- | --- |
| `monitorflow.eu` | The site: English at `/`, French at `/fr/` |
| `monitorflow.fr` | Redirects to `https://monitorflow.eu/fr/` |
| `monitorflow.net` | Redirects to `https://monitorflow.eu/` |

If `monitorflow.eu` is not bought yet, launch on `monitorflow.net` instead: set the repository variable `SITE_URL` to `https://monitorflow.net` and nothing else. Every canonical URL, the sitemap, `robots.txt` and the Open Graph tags follow that one value (`NEXT_PUBLIC_SITE_URL` at build time, read in `src/config/site.ts`). Switching to `.eu` later is the same change plus a redirect from `.net`.

## Hosting the site on GitHub Pages

1. GitHub Pages on a private repository needs a paid GitHub plan. Either make this repository public or use a plan that allows it, or host `out/` elsewhere (any static host works).
2. Settings › Pages › Source: **GitHub Actions**.
3. Settings › Secrets and variables › Actions › Variables: `SITE_URL` = `https://monitorflow.eu`.
4. Actions › **Deploy site** › Run workflow. It builds and publishes; it writes the `CNAME` file from `SITE_URL`.
5. Settings › Pages › Custom domain: `monitorflow.eu`, then **Enforce HTTPS** once the certificate is issued.

### DNS records for the site (apex domain on GitHub Pages)

At the registrar of `monitorflow.eu`:

| Type | Name | Value |
| --- | --- | --- |
| A (four records) | `@` | GitHub Pages' four IPv4 addresses |
| AAAA (four records) | `@` | GitHub Pages' four IPv6 addresses |
| CNAME | `www` | `kidoly.github.io.` |

The addresses are listed in GitHub's documentation, "Managing a custom domain for your GitHub Pages site", section "Configuring an apex domain". Copy them from there on the day. Also verify the domain for the account (Settings › Pages › Verified domains, a TXT record) so nobody else can claim it.

## Running the image

The site also ships as a container image: the same static export, served by an unprivileged nginx on port 8080 (`Dockerfile`, server config in `deploy/nginx.conf`). The **Image** workflow builds it on every push to `main` and pushes it to `ghcr.io/kidoly/monitorflow-website`, tagged with the full commit SHA and `main`. It reads the same repository variables as the Pages workflow (`SITE_URL`, `DEMO_URL`, `VIDEO_URL`), baked in at build time.

```sh
docker run --rm -p 8080:8080 --read-only --tmpfs /tmp --cap-drop ALL \
  ghcr.io/kidoly/monitorflow-website:<commit-sha>
```

Then open `http://localhost:8080/`. Build it yourself with `docker build -t monitorflow-website --build-arg NEXT_PUBLIC_SITE_URL=https://monitorflow.eu .` (the build pulls the guides and the demo from the product repository, so it needs network access).

What the server does:

- Pages are `<route>/index.html`; `/pricing` redirects to `/pricing/` (relative `Location`, so it keeps the scheme and host of a TLS proxy in front).
- A missing page answers `404.html` with status 404.
- `/_next/static/` and `/demo/_next/static/` (hashed files) are cached for a year; pages and route payloads are revalidated on every visit; other files for an hour.
- Security headers on every response: `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options` and a Content Security Policy that only allows the site's own origin. `VIDEO_URL` on another origin needs that origin added to `media-src` in `deploy/nginx.conf`.
- `/healthz` answers 200 for health checks.
- The process runs as uid 101 and only writes to `/tmp`, so the root filesystem can be read-only.

The promo video is not in the image (it is not published yet); the page shows its poster until `VIDEO_URL` points at the final file or the file is committed.

Put a TLS-terminating proxy or tunnel in front of it; the container itself speaks plain HTTP.

## The demo

The live demo ships with the site at `/demo/`, so it needs no domain or hosting of its own. See `docs/demo.md` for moving it to `demo.monitorflow.eu` later.

## Redirecting monitorflow.fr and monitorflow.net

DNS alone cannot redirect to a path (`/fr/`). Two simple ways:

- **The registrar's web forwarding**, if it offers it: a permanent (301) redirect of `monitorflow.fr` and `www.monitorflow.fr` to `https://monitorflow.eu/fr/`, and of `monitorflow.net` and `www.monitorflow.net` to `https://monitorflow.eu/`. Make sure it works over HTTPS, not only HTTP.
- **A small static host or CDN with redirect rules**, pointing both domains at it with the rules above.

Keep the path when redirecting `.net` (so `monitorflow.net/pricing/` goes to `monitorflow.eu/pricing/`).

## Email

None of these domains sends mail today. Until one does, a null SPF record stops others from sending mail in its name: `TXT @ "v=spf1 -all"` on each domain, and `TXT _dmarc "v=DMARC1; p=reject"`.
