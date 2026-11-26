import { ArrowRight, BarChart3, BookOpen, Bot, Compass, LineChart, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { DashboardPreview } from '../components/DashboardPreview'
import { productNavigation } from '../data/sitePages'

const productSummaries = [
  { path: '/ai-intelligence', icon: Sparkles, title: 'AI Intelligence', copy: 'A planned research layer for exploring market questions with relevant context and visible assumptions.' },
  { path: '/ai-analyst', icon: Bot, title: 'AG AI Analyst', copy: 'A conversational research concept for technical, fundamental, and scenario-based questions.' },
  { path: '/market-radar', icon: Compass, title: 'AG Market Radar', copy: 'A planned way to follow selected markets and review notable changes with context.' },
  { path: '/risk-intelligence', icon: ShieldCheck, title: 'AG Risk Intelligence', copy: 'Risk-management concepts for examining position assumptions, exposure, and possible loss.' },
  { path: '/trading-tools', icon: BarChart3, title: 'Trading Tools', copy: 'A future collection of utilities for trade preparation, planning, and structured review.' },
  { path: '/investor-intelligence', icon: LineChart, title: 'Investor Intelligence', copy: 'Planned portfolio context and investment research for longer-term questions.' },
  { path: '/performance-analytics', icon: BarChart3, title: 'Performance Analytics', copy: 'A future review space for examining trading outcomes, drawdown, and consistency.' },
  { path: '/academy', icon: BookOpen, title: 'AG Academy', copy: 'Structured financial-market education, from foundational concepts to risk awareness.' },
]

export function HomePage() {
  return (
    <main className="home-page">
      <Hero><DashboardPreview /></Hero>
      <section className="home-positioning">
        <div className="container home-positioning-grid">
          <div><div className="eyebrow"><span></span>A public introduction to AG Markets</div><h2>Understand the platform before you enter it.</h2></div>
          <p>AG Markets brings together planned intelligence products for traders and investors. This website explains the ideas, shares educational context, and shows clearly labelled previews. Practical functionality belongs in a separate application.</p>
        </div>
      </section>
      <section className="home-products">
        <div className="container">
          <div className="home-section-heading"><div><div className="eyebrow"><span></span>Explore the platform</div><h2>One platform idea. Distinct ways to learn and analyse.</h2></div><p>Each product area has its own purpose, capabilities, and illustrative example.</p></div>
          <div className="home-product-grid">
            {productSummaries.map(({ path, icon: Icon, title, copy }, index) => (
              <article className="home-product-card" key={path}>
                <span className="home-product-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="home-product-icon"><Icon size={20} /></span>
                <h3>{title}</h3><p>{copy}</p>
                <Link to={path}>Explore product <ArrowRight size={15} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="home-approach">
        <div className="container home-approach-grid">
          <div><div className="eyebrow"><span></span>Built around clear boundaries</div><h2>Website explains.<br /><em>Application delivers.</em></h2><p>The public website is not a trading terminal, calculator, or monitoring dashboard. It helps visitors understand what AG Markets is building and where future application functionality will live.</p><Link className="text-link" to="/about">How AG Markets is structured <ArrowRight size={15} /></Link></div>
          <div className="home-principles">
            <div><span>01</span><div><strong>Understand</strong><p>Learn what each product is intended to do.</p></div></div>
            <div><span>02</span><div><strong>Evaluate</strong><p>Review examples that are explicitly illustrative.</p></div></div>
            <div><span>03</span><div><strong>Continue</strong><p>Follow configurable links when the separate application is ready.</p></div></div>
          </div>
        </div>
      </section>
      <section className="home-membership">
        <div className="container home-membership-inner"><div><div className="eyebrow"><span></span>Planned membership</div><h2>Find the level of intelligence that fits your workflow.</h2><p>Compare proposed plan audiences and benefits. Pricing and availability have not been finalised.</p></div><Link className="button button-outline" to="/pricing">Explore planned plans <ArrowRight size={15} /></Link></div>
      </section>
      <section className="home-related">
        <div className="container"><div className="eyebrow"><span></span>Learn more</div><div className="home-quick-links">{productNavigation.slice(0, 4).map((item) => <Link key={item.path} to={item.path}>{item.label}<ArrowRight size={14} /></Link>)}<Link to="/faq">Frequently asked questions<ArrowRight size={14} /></Link></div></div>
      </section>
    </main>
  )
}
