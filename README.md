# AG Markets Public Website

The AG Markets public website introduces the platform, explains planned products, and provides educational and company information. Practical financial tools, monitoring, and account functionality belong in a separately developed AG Markets application.

## Routes

The site uses React Router for its independent public pages. Each page has route-specific copy, a title, and a meta description. Unknown paths show a custom not-found page.

For static hosting, the deploy target must serve `index.html` for unknown paths so direct links and refreshes on client-side routes work. The `public/_redirects` rule configures this fallback for Netlify. Add the equivalent SPA rewrite if deploying on another host.

## Application integration

Application destinations are centralized in [`src/config/application.ts`](src/config/application.ts). Its `example.com` URLs are temporary placeholders; replace them with the deployed application and support URLs when available. Login, registration, product-access, and support links read from this configuration.

## Development

- `npm run dev` starts the local Vite development server.
- `npm run build` type-checks and builds the website.
- `npm run lint` runs Oxlint.
