# AG Markets Public Website

The AG Markets public website introduces and explains the platform. Interactive financial tools, monitoring, and account functionality belong in a separately developed AG Markets application.

## Application integration

Application destinations are centralized in [`src/config/application.ts`](src/config/application.ts). Its `example.com` URLs are temporary placeholders; replace them with the deployed application and support URLs when available. Login, registration, product-access, and support links read from this configuration.

## Development

- `npm run dev` starts the local Vite development server.
- `npm run build` type-checks and builds the website.
- `npm run lint` runs Oxlint.
