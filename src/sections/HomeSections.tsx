import {
  Activity, ArrowRight, BarChart3, BellRing, Bot, Calculator,
  Check, Crosshair, GraduationCap, Landmark, Layers3, LineChart,
  PieChart, ShieldCheck, Target, Wallet,
} from 'lucide-react'

const sectionHeading = (eyebrow: string, title: string, copy: string) => (
  <div className="section-heading">
    <div className="eyebrow"><span></span>{eyebrow}</div>
    <h2>{title}</h2>
    <p>{copy}</p>
  </div>
)

export function AIIntelligence() {
  return (
    <section className="section" id="ai-intelligence">
      <div className="container split">
        <div className="copy-column">
          {sectionHeading('AG AI Analyst', 'Clarity across every market, timeframe and scenario.', 'An intelligent financial analysis assistant designed to help traders and investors understand market conditions, evaluate opportunities and manage risk.')}
          <div className="capability-grid">
            {[
              ['Technical analysis', 'Price action and market structure'],
              ['Fundamental context', 'News, data and macro drivers'],
              ['Multi-timeframe view', 'From intraday to strategic'],
              ['Risk-first scenarios', 'Entry, invalidation and targets'],
            ].map(([title, copy]) => (
              <div className="capability" key={title}>
                <Check size={16} />
                <div><strong>{title}</strong><span>{copy}</span></div>
              </div>
            ))}
          </div>
        </div>
        <div className="chat-preview">
          <div className="chat-head">
            <span className="ai-avatar"><Bot size={18} /></span>
            <div><strong>AG AI Analyst</strong><small>Financial analysis assistant</small></div>
            <span className="online">ONLINE</span>
          </div>
          <div className="chat-body">
            <div className="chat-user">Analyse EUR/USD and identify potential trading scenarios.</div>
            <div className="chat-ai">
              <span className="chat-label">Illustrative analysis</span>
              <p><strong>Market direction:</strong> Cautiously constructive</p>
              <p><strong>Timeframe:</strong> 4-hour to daily</p>
              <p><strong>Potential entry zone:</strong> 1.0810–1.0835</p>
              <p><strong>Stop-loss / invalidation:</strong> Below 1.0785</p>
              <p><strong>Potential targets:</strong> 1.0868 / 1.0915</p>
              <p><strong>Potential R:R:</strong> 1:1.8 to 1:2.7</p>
              <div className="chat-reasons">
                <span>Higher-timeframe structure</span>
                <span>Momentum stabilisation</span>
                <span>Key support retained</span>
              </div>
            </div>
          </div>
          <div className="chat-input"><span>Ask about a market or portfolio...</span><button type="button" aria-label="Send message"><ArrowRight size={16} /></button></div>
          <small className="chat-disclaimer">Illustrative only. Not investment advice.</small>
        </div>
      </div>
    </section>
  )
}

export function MarketRadar() {
  const assets = [
    ['EUR / USD', '1.0842', 'Bullish', '+0.34%', 'high'],
    ['XAU / USD', '2,336.40', 'Consolidating', '+0.18%', 'medium'],
    ['US100', '18,742', 'Bearish', '−0.21%', 'low'],
    ['GBP / USD', '1.2678', 'Bullish', '+0.52%', 'high'],
  ]
  return (
    <section className="section section-tint" id="market-radar">
      <div className="container split split-reverse">
        <div className="radar-preview">
          <div className="radar-head"><div><small>AG MARKET RADAR</small><strong>Global Opportunity Monitor</strong></div><BellRing size={18} /></div>
          <div className="radar-alert"><span className="pulse"></span><div><strong>Volatility shift detected</strong><small>Illustrative market event</small></div><span>12m</span></div>
          <div className="radar-table">
            <div className="radar-row radar-labels"><span>Instrument</span><span>Price</span><span>Trend</span><span>Change</span></div>
            {assets.map(([name, price, trend, change, level]) => (
              <div className="radar-row" key={name}>
                <strong>{name}</strong><span>{price}</span><span className={`trend trend-${level}`}><i></i>{trend}</span><span className="positive">{change}</span>
              </div>
            ))}
          </div>
          <div className="radar-events">
            <div><span>SUPPORT</span><strong>1.0800</strong></div>
            <div><span>MOMENTUM</span><strong>Building</strong></div>
            <div><span>EVENTS</span><strong>3 watching</strong></div>
          </div>
        </div>
        <div className="copy-column">
          {sectionHeading('AG Market Radar', 'See important market developments sooner.', 'AG Market Radar is envisioned to monitor selected financial markets and bring meaningful changes, signals and events into one focused view.')}
          <div className="feature-list">
            {['Volatility and momentum monitoring', 'Trend and breakout identification', 'Support and resistance tracking', 'Watchlists and intelligent notifications'].map((item) => (
              <div key={item}><Activity size={17} /><span>{item}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function RiskManagement() {
  return (
    <section className="section risk-section" id="risk">
      <div className="container">
        {sectionHeading('AG Risk Intelligence', 'Trade with Intelligence. Manage Risk with Precision.', 'A disciplined process starts before the trade. AG Risk Intelligence is designed to help traders size positions, understand exposure and protect capital.')}
        <div className="risk-layout">
          <div className="risk-tools">
            {[
              [Calculator, 'Position sizing', 'Determine trade size'],
              [Crosshair, 'Lot calculator', 'Match account and risk'],
              [Target, 'Stop-loss planning', 'Define invalidation'],
              [BarChart3, 'Risk / reward', 'Compare potential outcomes'],
              [LineChart, 'Drawdown', 'Measure portfolio pressure'],
              [PieChart, 'Exposure', 'Monitor concentration'],
            ].map(([Icon, title, copy]) => {
              const ToolIcon = Icon as typeof Calculator
              return <div className="risk-tool" key={title as string}><ToolIcon size={20} /><strong>{title as string}</strong><span>{copy as string}</span></div>
            })}
          </div>
          <div className="calculator-preview">
            <div className="calculator-head"><ShieldCheck size={18} /><strong>Position Size Calculator</strong><span>Illustrative</span></div>
            <div className="calculator-fields">
              <label><span>Account balance</span><div>$ 10,000</div></label>
              <label><span>Risk per trade</span><div>1.0 %</div></label>
              <label><span>Stop distance</span><div>25 pips</div></label>
              <label><span>Instrument</span><div>EUR / USD <span>⌄</span></div></label>
            </div>
            <div className="calculator-result">
              <div><span>Suggested position</span><strong>0.40 <small>lots</small></strong></div>
              <div><span>Capital at risk</span><strong>$100</strong></div>
              <div><span>Risk / reward</span><strong>1 : 2</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function TradingTools() {
  const tools = [
    [Crosshair, 'Position Sizing', 'Align trade size with account equity and defined risk.'],
    [Calculator, 'Lot Calculations', 'Estimate position quantities across common instruments.'],
    [Activity, 'Pip Calculations', 'Understand pip value and price movement impact.'],
    [Target, 'Trading Plans', 'Structure entries, invalidation levels and targets.'],
    [LineChart, 'Performance Tracking', 'Review consistency, results and drawdown.'],
    [ShieldCheck, 'Risk / Reward', 'Compare potential return against planned loss.'],
  ] as const
  return (
    <section className="section section-tint" id="tools">
      <div className="container">
        {sectionHeading('AG Trading Tools', 'A complete toolkit for deliberate decisions.', 'Professional planning tools for measuring risk, structuring trades and reviewing performance.')}
        <div className="card-grid">
          {tools.map(([Icon, title, copy]) => (
            <article className="tool-card" key={title}>
              <div className="icon-box"><Icon size={22} /></div>
              <h3>{title}</h3><p>{copy}</p>
              <a href="#get-started">Explore tool <ArrowRight size={14} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function InvestorIntelligence() {
  const items = [
    [Wallet, 'Portfolio monitoring', 'Track holdings and account exposure in one view.'],
    [PieChart, 'Asset allocation', 'Understand concentration across asset classes.'],
    [Landmark, 'Investment research', 'Build context around assets and market themes.'],
    [Layers3, 'Watchlists', 'Follow investments and important developments.'],
  ] as const
  return (
    <section className="section" id="investors">
      <div className="container split">
        <div className="copy-column">
          {sectionHeading('AG Investor Intelligence', 'Invest with context, not just information.', 'AG Markets is designed for both active traders and long-term investors, bringing research, portfolio context and risk awareness together.')}
          <div className="investor-features">
            {items.map(([Icon, title, copy]) => (
              <div key={title}><span><Icon size={19} /></span><div><strong>{title}</strong><p>{copy}</p></div></div>
            ))}
          </div>
        </div>
        <div className="portfolio-preview">
          <div className="portfolio-head"><div><small>TOTAL PORTFOLIO</small><strong>$248,620.40</strong></div><span>Illustrative</span></div>
          <div className="portfolio-chart">
            <svg viewBox="0 0 560 210" role="img" aria-label="Illustrative portfolio performance chart">
              <path className="portfolio-grid" d="M0 45H560M0 105H560M0 165H560" />
              <path className="portfolio-area" d="M0 170 C50 160,70 168,110 145 S170 150,205 124 S270 132,305 105 S365 94,400 72 S460 86,490 55 S530 42,560 38 L560 210 L0 210Z" />
              <path className="portfolio-line" d="M0 170 C50 160,70 168,110 145 S170 150,205 124 S270 132,305 105 S365 94,400 72 S460 86,490 55 S530 42,560 38" />
            </svg>
          </div>
          <div className="allocation">
            {[
              ['Equities', '48%', 'equities'],
              ['Fixed income', '24%', 'fixed'],
              ['Alternatives', '18%', 'alternatives'],
              ['Cash', '10%', 'cash'],
            ].map(([name, value, kind]) => (
              <div key={name}><i className={kind}></i><span>{name}</span><strong>{value}</strong></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Academy() {
  const courses = [
    ['01', 'Trading Fundamentals', 'Understand markets, participants and order types.', '12 lessons'],
    ['02', 'Technical Analysis', 'Study price action, structure and key indicators.', '18 lessons'],
    ['03', 'Risk Management', 'Build a repeatable process for protecting capital.', '10 lessons'],
  ]
  return (
    <section className="section section-tint" id="academy">
      <div className="container">
        {sectionHeading('AG Academy', 'Build knowledge that supports better decisions.', 'Structured education across trading fundamentals, technical analysis, psychology, investment education and financial markets.')}
        <div className="academy-grid">
          {courses.map(([number, title, copy, lessons]) => (
            <article className="course-card" key={title}>
              <div className="course-number">{number}</div>
              <div className="course-icon"><GraduationCap size={24} /></div>
              <div className="course-meta"><span>LEARNING PATH</span><span>{lessons}</span></div>
              <h3>{title}</h3><p>{copy}</p>
              <a href="#get-started">View curriculum <ArrowRight size={14} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Pricing() {
  const plans = [
    {
      name: 'Explorer',
      copy: 'For building market awareness.',
      features: ['Market dashboards', 'Core planning calculators', 'Educational resources', 'Personal watchlists'],
    },
    {
      name: 'Pro',
      copy: 'For active traders and serious research.',
      featured: true,
      features: ['Advanced AG AI Analyst', 'Market Radar monitoring', 'Full trading toolkit', 'Portfolio risk analysis'],
    },
    {
      name: 'Elite',
      copy: 'For expanded intelligence and monitoring.',
      features: ['Expanded AI intelligence', 'Advanced market alerts', 'Deeper portfolio analysis', 'Enhanced watchlist monitoring'],
    },
  ]
  return (
    <section className="section" id="pricing">
      <div className="container">
        {sectionHeading('Subscriptions', 'Choose the level of intelligence you need.', 'Explore the planned AG Markets access tiers.')}
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={`pricing-card${plan.featured ? ' pricing-featured' : ''}`} key={plan.name}>
              {plan.featured && <div className="popular">ADVANCED ACCESS</div>}
              <h3>{plan.name}</h3><p>{plan.copy}</p>
              <strong className="coming-soon">Pricing Coming Soon</strong>
              <ul>{plan.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul>
              <a className={plan.featured ? 'button' : 'button button-outline'} href="#get-started">Join Waitlist</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div>
          {sectionHeading('About AG Markets', 'Making Financial Intelligence More Accessible.', 'AG Markets aims to combine artificial intelligence, financial research, market monitoring and risk management into one intelligent platform.')}
          <a className="text-link" href="#get-started">Discover the platform <ArrowRight size={15} /></a>
        </div>
        <div className="principles">
          <div><strong>01</strong><div><h3>Intelligence</h3><p>Context that helps transform market information into understanding.</p></div></div>
          <div><strong>02</strong><div><h3>Discipline</h3><p>Tools that keep risk, planning and process at the centre of decisions.</p></div></div>
          <div><strong>03</strong><div><h3>Accessibility</h3><p>Clear experiences for traders and investors at every level of experience.</p></div></div>
        </div>
      </div>
    </section>
  )
}

export function FinalCta() {
  return (
    <section className="cta-section" id="get-started">
      <span id="login" className="policy-anchor"></span>
      <div className="container cta-grid">
        <div>
          <div className="eyebrow"><span></span> Start with better information</div>
          <h2>The Markets Move.<br /><em>Stay Informed.</em></h2>
        </div>
        <div className="cta-copy">
          <p>Discover a smarter approach to market intelligence, trading analysis and investment research.</p>
          <div className="hero-actions">
            <a className="button" href="#ai-intelligence">Explore AG Markets <ArrowRight size={17} /></a>
            <a className="button button-white" href="#login">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  )
}
