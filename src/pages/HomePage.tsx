import { ArrowRight, BarChart3, BookOpen, Bot, Compass, LineChart, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { DashboardPreview } from '../components/DashboardPreview'
import { AGTradingAnimation } from '../components/AGTradingAnimation'
import { productNavigation } from '../data/sitePages'

const productSummaries = [
  { path: '/ai-intelligence', icon: Sparkles, title: 'AI Intelligence', focus: 'Organise research questions, market context, and assumptions for review.', complements: 'A broad research concept that frames the analyst and market-monitoring areas.' },
  { path: '/ai-analyst', icon: Bot, title: 'AG AI Analyst', focus: 'Explore technical, fundamental, and scenario-based analysis concepts.', complements: 'Would help examine a market question raised during monitoring; output still needs human judgement.' },
  { path: '/market-radar', icon: Compass, title: 'AG Market Radar', focus: 'Review selected markets, volatility, trends, and events that may warrant attention.', complements: 'Monitoring can prompt further analysis; movement alone is not a trade signal.' },
  { path: '/risk-intelligence', icon: ShieldCheck, title: 'AG Risk Intelligence', focus: 'Understand position assumptions, possible loss, and portfolio exposure.', complements: 'Risk assessment belongs alongside research, not after a decision.' },
  { path: '/trading-tools', icon: BarChart3, title: 'Trading Tools', focus: 'Plan calculations and structured review, such as risk/reward and journaling.', complements: 'Practical planning concepts can support risk review and performance reflection.' },
  { path: '/investor-intelligence', icon: LineChart, title: 'Investor Intelligence', focus: 'Examine allocation, concentration, time horizon, and diversification.', complements: 'A portfolio perspective broadens single-market research into investment context.' },
  { path: '/performance-analytics', icon: BarChart3, title: 'Performance Analytics', focus: 'Understand historical outcomes, expectancy, and drawdown measures.', complements: 'Reviewing a sample of past activity can inform a process without predicting returns.' },
  { path: '/academy', icon: BookOpen, title: 'AG Academy', focus: 'Learn market terminology, analysis, risk, psychology, and investing principles.', complements: 'Education provides foundations for interpreting every other product concept.' },
]

const methodology = [
  { title: 'Market information', copy: 'Identify the instrument, timeframe, source, and event; separate observations from assumptions.' },
  { title: 'AI-assisted analysis', copy: 'The planned AI layer may help organise evidence and compare scenarios. Its output can be incomplete or wrong and must be checked.' },
  { title: 'Risk intelligence', copy: 'Consider position size, downside, volatility, and wider exposure before acting.' },
  { title: 'Informed decisions', copy: 'A person weighs objectives, uncertainty, and alternatives. No tool removes risk or guarantees an outcome.' },
]

export function HomePage() {
  return (
    <main className="home-page" id="main-content" tabIndex={-1}>
      <Hero><AGTradingAnimation variant="home" size="large" /></Hero>
      <section className="home-positioning">
        <div className="container home-positioning-grid">
          <div><div className="eyebrow"><span></span>A public introduction to AG Markets</div><h2>Understand the platform before you enter it.</h2></div>
          <p>AG Markets aims to make market research easier to understand by connecting context, analysis, risk awareness, and financial education. Markets generate more headlines, charts, and data than most people can assess at once; fragmented information can hide assumptions and exposure. This website explains the product vision and teaches foundational concepts, including limited browser-based educational demonstrations. Those demonstrations are not connected to markets or brokerage accounts; operational application services remain separate.</p>
        </div>
      </section>
      <section className="home-dashboard">
        <div className="container home-dashboard-grid">
          <DashboardPreview />
          <div><div className="eyebrow"><span></span>Platform preview</div><h2>Explore the proposed workspace.</h2><p>This static preview illustrates how market context, research, and portfolio information could be organised. It is not a working dashboard and does not connect to live markets.</p><Link className="text-link" to="/ai-intelligence">See how the products fit together <ArrowRight size={15} /></Link></div>
        </div>
      </section>
      <section className="home-methodology" aria-labelledby="home-methodology-heading">
        <div className="container">
          <div className="home-section-heading">
            <div><div className="eyebrow"><span></span>AG Markets methodology</div><h2 id="home-methodology-heading">A disciplined path from information to a decision.</h2></div>
            <p>A product vision for structured research—not an operational workflow on this public website.</p>
          </div>
          <ol className="methodology-flow">
            {methodology.map((step, index) => (
              <li key={step.title}>
                <span className="methodology-index">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
                {index < methodology.length - 1 && <ArrowRight className="methodology-arrow" size={18} aria-hidden="true" />}
              </li>
            ))}
          </ol>
          <p className="methodology-note">Illustrative methodology · AI assistance is not a substitute for source verification, independent judgement, or professional advice.</p>
        </div>
      </section>
      <section className="home-products">
        <div className="container">
          <div className="home-section-heading"><div><div className="eyebrow"><span></span>Product ecosystem comparison</div><h2>Distinct roles, designed to complement one another.</h2></div><p>These are planned product concepts. Their relationships are conceptual; no integrations or application functionality are currently available.</p></div>
          <div className="home-product-grid">
            {productSummaries.map(({ path, icon: Icon, title, focus, complements }, index) => (
              <article className="home-product-card" key={path}>
                <span className="home-product-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="home-product-icon"><Icon size={20} /></span>
                <h3>{title}</h3><p className="home-product-focus">{focus}</p>
                <p className="home-product-complement"><strong>How it fits:</strong> {complements}</p>
                <Link to={path}>Explore product <ArrowRight size={15} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="home-approach">
        <div className="container home-approach-grid">
          <div><div className="eyebrow"><span></span>Built around clear boundaries</div><h2>Website explains.<br /><em>Application is separate.</em></h2><p>This public website provides product information, education, and limited educational calculators. It is not a trading terminal, general-purpose trading calculator, or monitoring dashboard; the separate AG Markets application is not available through this project.</p><Link className="text-link" to="/about">How AG Markets is structured <ArrowRight size={15} /></Link></div>
          <div className="home-principles">
            <div><span>01</span><div><strong>Understand</strong><p>Learn what each product is intended to do.</p></div></div>
            <div><span>02</span><div><strong>Evaluate</strong><p>Review examples that are explicitly illustrative.</p></div></div>
            <div><span>03</span><div><strong>Stay informed</strong><p>Check official AG Markets channels for application availability updates.</p></div></div>
          </div>
        </div>
      </section>
      <section className="home-membership">
        <div className="container home-membership-inner"><div><div className="eyebrow"><span></span>Published pricing · Availability not yet configured</div><h2>Review the Explorer, Pro, and Elite prices.</h2><p>Prices are published, but entitlements, registration, and subscription checkout are not configured. No plan can currently be purchased through this website.</p></div><Link className="button button-outline" to="/pricing">View pricing <ArrowRight size={15} /></Link></div>
      </section>
      <section className="home-related">
        <div className="container"><div className="eyebrow"><span></span>Learn more</div><div className="home-quick-links">{productNavigation.slice(0, 4).map((item) => <Link key={item.path} to={item.path}>{item.label}<ArrowRight size={14} /></Link>)}<Link to="/faq">Frequently asked questions<ArrowRight size={14} /></Link></div></div>
      </section>
    </main>
  )
}
