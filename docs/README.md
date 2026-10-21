# Yahini documentation

The source of [documentation.yahini.io](https://documentation.yahini.io), built with [Starlight](https://starlight.astro.build).

## Edit a page

Pages are Markdown (MDX) files in `src/content/docs/`. The folder path is the URL: `src/content/docs/account/credits.mdx` is `/account/credits/`. Edit one on GitHub, through the **Edit page** link at the bottom of every page, or locally. A push to `main` redeploys the site.

- The sidebar order is in `astro.config.mjs`. Add a new page there.
- Screenshots live in `src/assets/screenshots/` as `<name>-light.png` and `<name>-dark.png`. Show one with `<Screenshot name="<name>" alt="…" />`: readers see the version that matches their theme.
- The app's onboarding tour links to `/features-functionality/keyword-research/` (and its headings) and `/features-functionality/workbook-strategy/`. Keep those URLs and headings.

## Run locally

```sh
npm ci
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Deploy

The site is static files on Cloudflare Workers (`wrangler.jsonc`, Worker `yahini-docs`). Connect the repo in Cloudflare Workers Builds with **root directory** `docs`, build command `npm run build` and deploy command `npx wrangler deploy`. Or deploy by hand with `npm run deploy`.
