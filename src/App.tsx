import { Navbar } from './components/Navbar'
import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { DashboardPreview } from './components/DashboardPreview'
import {
  AIIntelligence,
  MarketRadar,
  RiskManagement,
  TradingTools,
  InvestorIntelligence,
  Academy,
  Pricing,
  About,
  FinalCta,
} from './sections/HomeSections'

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('main > section')
    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('reveal-visible'))
      return
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero>
          <DashboardPreview />
        </Hero>
        <AIIntelligence />
        <MarketRadar />
        <RiskManagement />
        <TradingTools />
        <InvestorIntelligence />
        <Academy />
        <Pricing />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}

export default App
