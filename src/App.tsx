import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { LegalPage, NotFoundPage, PricingPage, FaqPage, ContactPage } from './components/InformationPages'
import { MarketingPage } from './components/MarketingPage'
import { Navbar } from './components/Navbar'
import { HomePage } from './pages/HomePage'
import { legalPages, marketingPages } from './data/sitePages'
import { getRouteMetadata, OPEN_GRAPH_IMAGE_URL, SITE_ORIGIN } from './data/routeMetadata'

function RouteMetadata() {
  const { pathname } = useLocation()
  const { path, title, description } = getRouteMetadata(pathname)

  useEffect(() => {
    document.title = title
    const canonicalUrl = `${SITE_ORIGIN}${path}`
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.append(meta)
    }
    meta.content = description

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = canonicalUrl

    const setOpenGraph = (property: string, content: string) => {
      let tag = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', property)
        document.head.append(tag)
      }
      tag.content = content
    }
    setOpenGraph('og:type', 'website')
    setOpenGraph('og:site_name', 'AG Markets')
    setOpenGraph('og:title', title)
    setOpenGraph('og:description', description)
    setOpenGraph('og:url', canonicalUrl)
    setOpenGraph('og:image', OPEN_GRAPH_IMAGE_URL)
    setOpenGraph('og:image:alt', 'AG Markets logo')
  }, [description, path, title])
  return null
}

function AppRoutes() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <RouteMetadata />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {marketingPages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={<MarketingPage page={page} />}
          />
        ))}
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {legalPages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={<LegalPage page={page} />}
          />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export function App() {
  return <BrowserRouter><AppRoutes /></BrowserRouter>
}

export default App

export { AppRoutes }
