import { legalPages, marketingPages } from './sitePages'

export interface RouteMetadata {
  path: string
  title: string
  description: string
}

export const SITE_ORIGIN = 'https://agmarkets.co.za'
export const OPEN_GRAPH_IMAGE_URL = `${SITE_ORIGIN}/ag-markets-logo.png`

const fixedRoutes: RouteMetadata[] = [
  {
    path: '/',
    title: 'AG Markets — AI Financial Intelligence',
    description: 'Explore AG Markets, a planned financial intelligence platform for market research, risk awareness, trading tools, investing context, and education.',
  },
  {
    path: '/pricing',
    title: 'AG Markets Pricing — Explorer, Pro and Elite',
    description: 'Explorer is free. Pro is $3.99 monthly and Elite is $9.99 monthly, with a 30% annual-billing discount. Plan entitlements and checkout are not configured.',
  },
  {
    path: '/faq',
    title: 'Frequently Asked Questions | AG Markets',
    description: 'Answers about the AG Markets public website, illustrative previews, pricing, planned application, and financial risk.',
  },
  {
    path: '/contact',
    title: 'Contact Information | AG Markets',
    description: 'AG Markets has not yet configured a monitored contact channel for this public website.',
  },
]

export const publicRoutes: RouteMetadata[] = [
  ...fixedRoutes.slice(0, 1),
  ...marketingPages.map(({ path, title, description }) => ({ path, title, description })),
  ...fixedRoutes.slice(1),
  ...legalPages.map(({ path, title, description }) => ({ path, title, description })),
]

const routeMetadataByPath = new Map(publicRoutes.map((route) => [route.path, route]))
const notFoundMetadata: Omit<RouteMetadata, 'path'> = {
  title: 'Page Not Found | AG Markets',
  description: 'The requested page could not be found. Return to AG Markets to explore the public website.',
}

export function getRouteMetadata(pathname: string): RouteMetadata {
  const normalizedPath = pathname === '/'
    ? '/'
    : `/${pathname.split('/').filter(Boolean).join('/')}`

  return routeMetadataByPath.get(normalizedPath) ?? {
    path: normalizedPath,
    ...notFoundMetadata,
  }
}
