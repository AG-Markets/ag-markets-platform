import { useEffect, useId, useRef, useState } from 'react'

export type AnimationVariant =
  | 'home'
  | 'intelligence'
  | 'analyst'
  | 'radar'
  | 'risk'
  | 'tools'
  | 'investor'
  | 'performance'
  | 'academy'
  | 'pricing'
  | 'support'
  | 'legal'

type AnimationSize = 'large' | 'medium' | 'compact' | 'mini'

const profiles: Record<AnimationVariant, {
  label: string
  title: string
  status: string
  stats: { label: string; value: string }[]
}> = {
  home: {
    label: 'AG AI · MARKET SCAN',
    title: 'Multi-market analysis',
    status: 'SCANNING SAMPLE MARKETS',
    stats: [
      { label: 'Markets', value: 'FX · Index · Stocks · Metals · Crypto' },
      { label: 'Structure', value: 'Scenario study' },
      { label: 'Signal', value: 'Illustrative only' },
    ],
  },
  intelligence: {
    label: 'AG INTELLIGENCE · CONTEXT',
    title: 'EUR/USD · Context & structure',
    status: 'ANALYSIS IN PROGRESS',
    stats: [
      { label: 'Context', value: 'Price + momentum' },
      { label: 'Scenario', value: 'Bullish hypothesis' },
      { label: 'Review', value: 'Verify independently' },
    ],
  },
  analyst: {
    label: 'AG AI ANALYST · TECHNICAL STUDY',
    title: 'EUR/USD · Higher-timeframe view',
    status: 'PATTERN STUDY',
    stats: [
      { label: 'Structure', value: 'Higher highs · sample' },
      { label: 'Setup', value: 'Potential continuation' },
      { label: 'Status', value: 'Not a forecast' },
    ],
  },
  radar: {
    label: 'AG MARKET RADAR · WATCHLIST',
    title: 'Multi-market watch · Sample view',
    status: 'SCANNING WATCHLIST',
    stats: [
      { label: 'EUR/USD', value: 'Volatility watch' },
      { label: 'Gold', value: 'Range review' },
      { label: 'Index', value: 'Momentum watch' },
    ],
  },
  risk: {
    label: 'AG RISK INTELLIGENCE · SCENARIO',
    title: 'EUR/USD · Hypothetical plan',
    status: 'RISK CHECK',
    stats: [
      { label: 'Entry', value: '1.0850' },
      { label: 'Stop loss', value: '1.0820' },
      { label: 'Take profit', value: '1.0910' },
      { label: 'Risk / reward', value: '1 : 2' },
      { label: 'Position size', value: 'Account-specific' },
    ],
  },
  tools: {
    label: 'AG TRADING TOOLS · PLANNING',
    title: 'EUR/USD · Example trade plan',
    status: 'INPUT-LED EXAMPLE',
    stats: [
      { label: 'Sizing', value: 'Risk budget first' },
      { label: 'Pip value', value: 'Instrument specific' },
      { label: 'Plan', value: 'Check inputs' },
    ],
  },
  investor: {
    label: 'AG INVESTOR · PORTFOLIO CONTEXT',
    title: 'Illustrative portfolio market view',
    status: 'RESEARCH PREVIEW',
    stats: [
      { label: 'Allocation', value: 'Illustrative mix' },
      { label: 'Exposure', value: 'Portfolio view' },
      { label: 'Insight', value: 'Market context' },
    ],
  },
  performance: {
    label: 'AG PERFORMANCE · REVIEW',
    title: 'Trade review · Hypothetical sample',
    status: 'HISTORICAL REVIEW',
    stats: [
      { label: 'Entry', value: '1.0850 · sample' },
      { label: 'Exit', value: '1.0910 · sample' },
      { label: 'Risk', value: '30 pips · hypothetical' },
      { label: 'Outcome', value: '+2R · illustrative' },
    ],
  },
  academy: {
    label: 'AG ACADEMY · LEARNING EXAMPLE',
    title: 'Lesson: reading market structure',
    status: 'EDUCATIONAL PREVIEW',
    stats: [
      { label: 'Topic', value: 'Trend structure' },
      { label: 'Exercise', value: 'Hypothetical chart' },
      { label: 'Principle', value: 'Risk first' },
    ],
  },
  pricing: {
    label: 'AG MARKETS · PLANNED ACCESS',
    title: 'Research workflow · Preview',
    status: 'PLANNED PRODUCT',
    stats: [
      { label: 'Research', value: 'Planned' },
      { label: 'Risk tools', value: 'Planned' },
      { label: 'Education', value: 'Planned' },
    ],
  },
  support: {
    label: 'AG MARKETS · PRODUCT OVERVIEW',
    title: 'Financial intelligence · Preview',
    status: 'INFORMATION ONLY',
    stats: [
      { label: 'Website', value: 'Information' },
      { label: 'Product', value: 'Illustrative' },
      { label: 'Application', value: 'Separate' },
    ],
  },
  legal: {
    label: 'AG MARKETS · RISK EXAMPLE',
    title: 'Hypothetical scenario · EUR/USD',
    status: 'ILLUSTRATIVE ONLY',
    stats: [
      { label: 'Data', value: 'Hypothetical' },
      { label: 'Results', value: 'Not actual' },
      { label: 'Risk', value: 'Losses possible' },
    ],
  },
}

const candles = [
  { x: 70, open: 231, close: 219, high: 209, low: 239 },
  { x: 99, open: 219, close: 226, high: 210, low: 234 },
  { x: 128, open: 226, close: 205, high: 198, low: 235 },
  { x: 157, open: 205, close: 211, high: 198, low: 222 },
  { x: 186, open: 211, close: 188, high: 180, low: 219 },
  { x: 215, open: 188, close: 193, high: 181, low: 205 },
  { x: 244, open: 193, close: 175, high: 168, low: 201 },
  { x: 273, open: 175, close: 182, high: 168, low: 190 },
  { x: 302, open: 182, close: 158, high: 150, low: 189 },
  { x: 331, open: 158, close: 163, high: 150, low: 173 },
  { x: 360, open: 163, close: 138, high: 130, low: 169 },
  { x: 389, open: 138, close: 144, high: 130, low: 153 },
  { x: 418, open: 144, close: 117, high: 108, low: 154 },
]

export function AGTradingAnimation({
  variant,
  size = 'medium',
}: {
  variant: AnimationVariant
  size?: AnimationSize
}) {
  const figureRef = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const id = useId()
  const profile = profiles[variant]

  useEffect(() => {
    const element = figureRef.current
    if (!element || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting)
    }, { rootMargin: '80px' })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(preference.matches)
    updatePreference()
    preference.addEventListener('change', updatePreference)
    return () => preference.removeEventListener('change', updatePreference)
  }, [])

  return (
    <figure
      ref={figureRef}
      className={`ag-trading-animation ag-animation-${size}${isInView ? '' : ' ag-animation-paused'}`}
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-disclaimer`}
    >
      <div className="ag-animation-shell">
        <header className="ag-animation-header">
          <div className="ag-animation-brand">
            <span className="ag-animation-brand-mark" aria-hidden="true">AG</span>
            <div><span>{profile.label}</span><strong id={`${id}-title`}>AI market analysis</strong></div>
          </div>
          <span className="ag-animation-mode"><i></i> SIMULATED</span>
        </header>
        <div className="ag-animation-markets" aria-label="Illustrative markets being scanned">
          <span>FX <strong>EUR/USD</strong></span>
          <span>INDEX <strong>US 500</strong></span>
          <span>METALS <strong>XAU/USD</strong></span>
          <span>EQUITIES <strong>STOCKS</strong></span>
          <span>CRYPTO <strong>BTC/USD</strong></span>
        </div>
        <div className="ag-animation-indicators">
          <span>STRUCTURE <strong>Higher highs</strong></span>
          <span>MOMENTUM <strong>Firming</strong></span>
          <span>INDICATOR <strong>RSI · Sample</strong></span>
        </div>
        <div className="ag-animation-chart-title">
          <strong>{profile.title}</strong>
          <span className="ag-animation-status">{profile.status}</span>
        </div>
        {variant === 'radar' && (
          <div className="ag-radar-signals">
            <span><i></i>EUR/USD · Volatility watch</span>
            <span><i></i>Gold · Range review</span>
            <span><i></i>US 500 · Momentum watch</span>
          </div>
        )}
        {variant === 'tools' && (
          <div className="ag-tool-formula"><span>PLANNING MODEL</span><strong>Risk budget ÷ stop distance <i>→</i> estimated size</strong></div>
        )}
        {variant === 'investor' && (
          <div className="ag-investor-allocation">
            <span>ILLUSTRATIVE ASSET MIX</span>
            <div className="ag-allocation-bar" aria-label="Illustrative allocation: equities 45%, fixed income 25%, alternatives 20%, cash 10%">
              <i></i><i></i><i></i><i></i>
            </div>
            <small>Equities 45% · Fixed income 25% · Alternatives 20% · Cash 10%</small>
          </div>
        )}
        {variant === 'performance' && (
          <div className="ag-performance-curve">
            <span>HYPOTHETICAL EQUITY CURVE · EXAMPLE PATH</span>
            <svg viewBox="0 0 240 48" role="img" aria-label="Illustrative equity curve, not actual trading results">
              <path className="ag-equity-grid" d="M0 12H240M0 25H240M0 38H240" />
              <path className="ag-equity-line" d="M2 36 C22 33 28 39 45 30 S67 32 82 25 S102 30 120 19 S143 23 160 14 S181 20 198 10 S222 14 238 5" />
            </svg>
          </div>
        )}
        <div className="ag-animation-chart">
          <svg viewBox="0 0 560 310" role="img" aria-labelledby={`${id}-chart-title ${id}-chart-description`}>
            <title id={`${id}-chart-title`}>Hypothetical EUR/USD candlestick analysis</title>
            <desc id={`${id}-chart-description`}>A sample bullish price path moves from a hypothetical entry at 1.0850 toward a take-profit level at 1.0910. A stop-loss level is shown at 1.0820. This is not live market data or actual trading performance.</desc>
            <rect x="42" y="24" width="458" height="245" className="ag-chart-background" />
            <g className="ag-chart-grid">
              <path d="M42 60H500M42 100H500M42 140H500M42 180H500M42 220H500M42 260H500" />
              <path d="M90 24V269M160 24V269M230 24V269M300 24V269M370 24V269M440 24V269" />
            </g>
            <g className="ag-chart-volumes">
              <rect x="65" y="245" width="9" height="18" />
              <rect x="94" y="250" width="9" height="13" />
              <rect x="123" y="239" width="9" height="24" />
              <rect x="152" y="247" width="9" height="16" />
              <rect x="181" y="235" width="9" height="28" />
              <rect x="210" y="244" width="9" height="19" />
              <rect x="239" y="238" width="9" height="25" />
              <rect x="268" y="246" width="9" height="17" />
              <rect x="297" y="232" width="9" height="31" />
              <rect x="326" y="243" width="9" height="20" />
              <rect x="355" y="230" width="9" height="33" />
              <rect x="384" y="241" width="9" height="22" />
              <rect x="413" y="226" width="9" height="37" />
            </g>
            <g className="ag-trade-level ag-level-target">
              <line x1="42" y1="108" x2="500" y2="108" />
              <text x="508" y="112">TP 1.0910</text>
            </g>
            <g className="ag-trade-level ag-level-entry">
              <line x1="42" y1="180" x2="500" y2="180" />
              <text x="508" y="184">IN 1.0850</text>
            </g>
            <g className="ag-trade-level ag-level-stop">
              <line x1="42" y1="244" x2="500" y2="244" />
              <text x="508" y="248">SL 1.0820</text>
            </g>
            <g className="ag-candles">
              {candles.map((candle, index) => {
                const bullish = candle.close < candle.open
                const bodyY = Math.min(candle.open, candle.close)
                const bodyHeight = Math.max(5, Math.abs(candle.close - candle.open))
                return (
                  <g className={bullish ? 'ag-candle ag-candle-up' : 'ag-candle ag-candle-down'} key={candle.x}>
                    <line x1={candle.x + 6} y1={candle.high} x2={candle.x + 6} y2={candle.low} />
                    <rect
                      x={candle.x}
                      y={bodyY}
                      width="12"
                      height={bodyHeight}
                      style={{ animationDelay: `${index * 70}ms` }}
                    />
                  </g>
                )
              })}
            </g>
            <path
              className="ag-price-path"
              d="M50 233 C78 228 86 215 107 220 S139 230 165 205 S194 208 220 188 S249 196 275 174 S301 184 327 154 S354 163 380 135 S407 144 435 116 S461 112 486 92"
            />
            <circle className={`ag-price-traveler${isInView && !prefersReducedMotion ? ' ag-price-traveler-active' : ''}`} cx="0" cy="0" r="4">
              {isInView && !prefersReducedMotion && (
                <>
                  <animateMotion
                    dur="11s"
                    path="M50 233 C78 228 86 215 107 220 S139 230 165 205 S194 208 220 188 S249 196 275 174 S301 184 327 154 S354 163 380 135 S407 144 435 116 S461 112 486 92"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    dur="11s"
                    keyTimes="0;0.03;0.8;0.95;1"
                    repeatCount="indefinite"
                    values="0;1;1;0;0"
                  />
                </>
              )}
            </circle>
            <line className="ag-scan-beam" x1="42" y1="28" x2="42" y2="268" />
            <g className="ag-chart-axis">
              <text x="45" y="290">09:00</text><text x="180" y="290">12:00</text><text x="318" y="290">15:00</text><text x="443" y="290">18:00</text>
            </g>
          </svg>
          <div className="ag-animation-outcome" aria-label="Illustrative hypothetical take-profit outcome">
            <span>HYPOTHETICAL TARGET REACHED</span>
            <strong>+2R <small>illustrative</small></strong>
          </div>
        </div>
        <div className="ag-animation-summary">
          {profile.stats.map((stat) => (
            <div key={stat.label}><span>{stat.label}</span><strong>{stat.value}</strong></div>
          ))}
        </div>
        <figcaption className="ag-animation-disclaimer" id={`${id}-disclaimer`}>
          Illustrative example — hypothetical data, not actual trading results. Trading involves risk and losses are possible.
        </figcaption>
      </div>
    </figure>
  )
}
