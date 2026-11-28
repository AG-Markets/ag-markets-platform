import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const outputDirectory = resolve(projectRoot, 'dist')
const sitemapPath = resolve(outputDirectory, 'sitemap.xml')
const robotsPath = resolve(outputDirectory, 'robots.txt')
const templatePath = resolve(outputDirectory, 'index.html')
const redirectsPath = resolve(outputDirectory, '_redirects')

function escapeAttribute(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function replaceExactlyOnce(html, pattern, replacement, label) {
  let count = 0
  const updated = html.replace(pattern, () => {
    count += 1
    return replacement
  })

  if (count !== 1) {
    throw new Error(`Expected one ${label} in the HTML template, found ${count}.`)
  }

  return updated
}

function applyPageMetadata(template, metadata, siteOrigin, openGraphImage) {
  const canonicalUrl = `${siteOrigin}${metadata.path}`
  let html = template

  html = replaceExactlyOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${escapeAttribute(metadata.title)}</title>`, 'title')
  html = replaceExactlyOnce(html, /<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${escapeAttribute(metadata.description)}" />`, 'description')
  html = replaceExactlyOnce(html, /<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${escapeAttribute(metadata.title)}" />`, 'Open Graph title')
  html = replaceExactlyOnce(html, /<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${escapeAttribute(metadata.description)}" />`, 'Open Graph description')
  html = replaceExactlyOnce(html, /<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${canonicalUrl}" />`, 'Open Graph URL')
  html = replaceExactlyOnce(html, /<meta property="og:image" content="[^"]*"\s*\/?>/, `<meta property="og:image" content="${openGraphImage}" />`, 'Open Graph image')
  html = replaceExactlyOnce(html, /<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${canonicalUrl}" />`, 'canonical URL')

  return html
}

function validateSitemap(xml, expectedUrls) {
  if (!xml.startsWith('<?xml') || !xml.includes('<urlset ')) {
    throw new Error('The generated sitemap is not valid sitemap XML.')
  }

  const urls = Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g), (match) => match[1].trim())
  const expected = [...expectedUrls].sort()

  if (urls.length !== expected.length || [...urls].sort().some((url, index) => url !== expected[index])) {
    throw new Error(`Sitemap URLs do not match the ${expected.length} public routes.`)
  }

  if (urls.some((url) => !url.startsWith('https://agmarkets.co.za/'))) {
    throw new Error('Sitemap contains a non-production URL.')
  }
}

const server = await createServer({
  root: projectRoot,
  configFile: resolve(projectRoot, 'vite.config.ts'),
  server: { middlewareMode: true },
  appType: 'custom',
})

try {
  const [{ renderPage }, routeData] = await Promise.all([
    server.ssrLoadModule('/src/entry-server.tsx'),
    server.ssrLoadModule('/src/data/routeMetadata.ts'),
  ])
  const { OPEN_GRAPH_IMAGE_URL, SITE_ORIGIN, publicRoutes } = routeData
  const [template, sitemap, robots] = await Promise.all([
    readFile(templatePath, 'utf8'),
    readFile(sitemapPath, 'utf8'),
    readFile(robotsPath, 'utf8'),
  ])
  const expectedUrls = publicRoutes.map(({ path }) => `${SITE_ORIGIN}${path}`)
  const routeRedirects = publicRoutes
    .filter(({ path }) => path !== '/')
    .map(({ path }) => `${path} ${path}.html 200`)

  if (publicRoutes.length !== 18) {
    throw new Error(`Expected 18 public routes, found ${publicRoutes.length}.`)
  }

  validateSitemap(sitemap, expectedUrls)
  if (!robots.includes(`Sitemap: ${SITE_ORIGIN}/sitemap.xml`)) {
    throw new Error('robots.txt does not reference the production sitemap.')
  }
  await writeFile(redirectsPath, `${routeRedirects.join('\n')}\n`)

  for (const metadata of publicRoutes) {
    const markup = renderPage(metadata.path)
    if (!/<main\b[\s\S]*?<h1\b/.test(markup)) {
      throw new Error(`Pre-rendered route ${metadata.path} has no meaningful main heading.`)
    }

    const html = applyPageMetadata(template, metadata, SITE_ORIGIN, OPEN_GRAPH_IMAGE_URL)
    const pageHtml = replaceExactlyOnce(html, /<div id="root"><\/div>/, `<div id="root">${markup}</div>`, 'root element')
    const relativeOutputs = metadata.path === '/'
      ? ['index.html']
      : [`${metadata.path.slice(1)}.html`, `${metadata.path.slice(1)}/index.html`]

    for (const relativeOutput of relativeOutputs) {
      const outputPath = resolve(outputDirectory, relativeOutput)
      await mkdir(dirname(outputPath), { recursive: true })
      await writeFile(outputPath, pageHtml)
    }
  }

  console.log(`Pre-rendered and verified ${publicRoutes.length} routes.`)
} finally {
  await server.close()
}
