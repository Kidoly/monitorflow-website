# Domains and hosting

Nothing here is done yet: the owner buys domains, sets DNS and turns hosting on. This page says what to set.

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

## The demo

The live demo ships with the site at `/demo/`, so it needs no domain or hosting of its own. See `docs/demo.md` for moving it to `demo.monitorflow.eu` later.

## Redirecting monitorflow.fr and monitorflow.net

DNS alone cannot redirect to a path (`/fr/`). Two simple ways:

- **The registrar's web forwarding**, if it offers it: a permanent (301) redirect of `monitorflow.fr` and `www.monitorflow.fr` to `https://monitorflow.eu/fr/`, and of `monitorflow.net` and `www.monitorflow.net` to `https://monitorflow.eu/`. Make sure it works over HTTPS, not only HTTP.
- **A small static host or CDN with redirect rules**, pointing both domains at it with the rules above.

Keep the path when redirecting `.net` (so `monitorflow.net/pricing/` goes to `monitorflow.eu/pricing/`).

## Email

None of these domains sends mail today. Until one does, a null SPF record stops others from sending mail in its name: `TXT @ "v=spf1 -all"` on each domain, and `TXT _dmarc "v=DMARC1; p=reject"`.
