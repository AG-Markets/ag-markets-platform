# AG Markets Public Website

The AG Markets public website introduces the platform, explains planned products, and provides educational and company information. Practical financial tools, monitoring, and account functionality belong in a separately developed AG Markets application.

## Routes

The site uses React Router for its independent public pages. `npm run build` type-checks and builds the client app, then statically renders all 18 public routes into `dist/` with route-specific page content, title, description, canonical URL, and Open Graph metadata. The browser hydrates those pages to preserve client-side navigation. Unknown paths use the single-page-app fallback and show a custom not-found page.

For Cloudflare Pages, use `npm run build` with `dist` as the output directory. The build emits route-specific `.html` and `path/index.html` files plus route-only rewrites in `dist/_redirects`; no wildcard rewrite can shadow route pages or assets. Cloudflare Pages' built-in SPA fallback handles unmatched paths because the output has no top-level `404.html`. Other hosts need their own equivalent rewrite or fallback configuration.

## Application integration

Application destinations are centralized in [`src/config/application.ts`](src/config/application.ts) and are optional build-time settings:

- `VITE_APPLICATION_URL`
- `VITE_APPLICATION_LOGIN_URL`
- `VITE_APPLICATION_REGISTRATION_URL`
- `VITE_SUPPORT_URL`

Set only verified absolute HTTPS destinations when the separate application and monitored support channel are ready. Without them, the website omits external links, uses its public pricing page where appropriate, and clearly indicates unavailable actions. These values are public client-side URLs, not a place for secrets.

The canonical domain and sitemap are prepared for `https://agmarkets.co.za`; this repository cannot confirm domain ownership, DNS, TLS, deployment, or search indexing. Policy pages are drafts and require business details and professional legal review before publication.

## Development

- `npm run dev` starts the local Vite development server.
- `npm run build` type-checks, builds, and pre-renders the website.
- `npm run lint` runs Oxlint.
