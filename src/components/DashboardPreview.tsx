import { ArrowDownRight, ArrowUpRight, Bell, Search } from 'lucide-react'

export function DashboardPreview() {
  return (
    <div className="dashboard-shell" aria-label="Illustrative AG Markets dashboard preview">
      <div className="dashboard-topbar">
        <div className="dashboard-dots"><span /><span /><span /></div>
        <div className="dashboard-search"><Search size={13} /> Search markets</div>
        <Bell size={16} />
      </div>
      <div className="dashboard-body">
        <aside className="dashboard-sidebar">
          {['Overview', 'Watchlist', 'Analysis', 'Risk', 'Portfolio'].map((item, index) => (
            <span className={index === 0 ? 'active' : ''} key={item}>{item}</span>
          ))}
        </aside>
        <div className="dashboard-main">
          <div className="dashboard-heading">
            <div><span>MARKET OVERVIEW</span><strong>Global Markets</strong></div>
            <span>ILLUSTRATIVE SAMPLE</span>
          </div>
          <div className="market-cards">
            <div><span>EUR / USD</span><strong>1.0842</strong><small className="positive"><ArrowUpRight size={12} /> +0.34%</small></div>
            <div><span>XAU / USD</span><strong>2,336.40</strong><small className="positive"><ArrowUpRight size={12} /> +0.18%</small></div>
            <div><span>US100</span><strong>18,742</strong><small className="negative"><ArrowDownRight size={12} /> −0.21%</small></div>
          </div>
          <div className="dashboard-panels">
            <div className="chart-panel">
              <div className="panel-title"><strong>EUR/USD</strong><span>1H</span></div>
              <svg viewBox="0 0 420 150" role="img" aria-label="Illustrative EUR/USD price movement">
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#01AB41" stopOpacity=".22" />
                    <stop offset="100%" stopColor="#01AB41" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path className="chart-grid" d="M0 35H420M0 75H420M0 115H420M70 0V150M210 0V150M350 0V150" />
                <path className="chart-area" d="M0 118 C25 112,40 120,62 101 S100 88,120 96 S154 66,174 74 S210 58,232 64 S268 38,292 49 S330 80,350 60 S390 43,420 28 L420 150 L0 150Z" />
                <path className="chart-line" d="M0 118 C25 112,40 120,62 101 S100 88,120 96 S154 66,174 74 S210 58,232 64 S268 38,292 49 S330 80,350 60 S390 43,420 28" />
              </svg>
            </div>
            <div className="ai-panel">
              <div className="ai-panel-head"><span className="ai-dot"></span><strong>AG AI Analyst</strong></div>
              <span className="sample-label">Illustrative</span>
              <p>Example note: compare price structure with the selected timeframe.</p>
              <div className="signal-row"><span>Sentiment</span><strong>Constructive</strong></div>
              <div className="signal-meter"><span></span></div>
              <div className="signal-row"><span>Risk level</span><strong>Moderate</strong></div>
            </div>
          </div>
          <div className="disclaimer">All displayed figures and commentary are illustrative examples—not live market data, forecasts, or trading signals.</div>
        </div>
      </div>
    </div>
  )
}
