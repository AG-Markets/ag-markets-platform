import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { LegalPage, NotFoundPage, PricingPage, FaqPage, ContactPage } from './components/InformationPages'
import { MarketingPage } from './components/MarketingPage'
import { Navbar } from './components/Navbar'
import { HomePage } from './pages/HomePage'
import { legalPages, marketingPages } from './data/sitePages'

function RouteMetadata({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title
    const canonicalUrl = `https://agmarkets.co.za${window.location.pathname}`
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
    setOpenGraph('og:image', 'https://agmarkets.co.za/ag-markets-logo.png')
  }, [description, title])
  return null
}

function AppRoutes() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<><RouteMetadata title="AG Markets — AI Financial Intelligence" description="Explore AG Markets, a planned financial intelligence platform for market research, risk awareness, trading tools, investing context, and education." /><HomePage /></>}
        />
        {marketingPages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={<><RouteMetadata title={page.title} description={page.description} /><MarketingPage page={page} /></>}
          />
        ))}
        <Route path="/pricing" element={<><RouteMetadata title="Pricing and Membership | AG Markets" description="Compare proposed AG Markets membership audiences and planned benefits. Pricing and availability are not final." /><PricingPage /></>} />
        <Route path="/faq" element={<><RouteMetadata title="Frequently Asked Questions | AG Markets" description="Answers about AG Markets, its illustrative previews, the future application, and planned membership." /><FaqPage /></>} />
        <Route path="/contact" element={<><RouteMetadata title="Contact AG Markets" description="Contact AG Markets about its public website, product information, and future application availability." /><ContactPage /></>} />
        {legalPages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={<><RouteMetadata title={page.title} description={page.description} /><LegalPage page={page} /></>}
          />
        ))}
        <Route path="*" element={<><RouteMetadata title="Page Not Found | AG Markets" description="The requested page could not be found. Return to AG Markets to explore the public website." /><NotFoundPage /></>} />
      </Routes>
      <Footer />
    </>
  )
}

function App() {
  return <BrowserRouter><AppRoutes /></BrowserRouter>
}

export default App
