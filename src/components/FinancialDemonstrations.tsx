import { useState, type ReactNode } from 'react'

type DemonstrationProps = { path: string }

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
})

const decimal = new Intl.NumberFormat('en-US', { maximumFractionDigits: 4 })

function NumberField({
  id,
  label,
  value,
  onChange,
  min,
  max,
  step = 'any',
  suffix,
}: {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  min?: number
  max?: number
  step?: number | 'any'
  suffix?: string
}) {
  return (
    <label className="demo-field" htmlFor={id}>
      <span>{label}</span>
      <span className="demo-input-wrap">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(event) => onChange(event.currentTarget.value)}
        />
        {suffix && <small>{suffix}</small>}
      </span>
    </label>
  )
}

function DemonstrationFrame({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <section className="page-section financial-demo-section" aria-labelledby="financial-demo-heading">
      <div className="container">
        <div className="page-section-heading">
          <div className="eyebrow"><span></span>{eyebrow}</div>
          <h2 id="financial-demo-heading">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="financial-demo-content">{children}</div>
        <p className="demo-disclaimer">Educational website demonstration · Hypothetical inputs only · No live data, trade execution, or financial advice.</p>
      </div>
    </section>
  )
}

function CandlestickStudy() {
  const candles = [
    { x: 70, open: 185, close: 167, high: 154, low: 198, volume: 24 },
    { x: 112, open: 167, close: 177, high: 158, low: 191, volume: 17 },
    { x: 154, open: 177, close: 150, high: 142, low: 186, volume: 31 },
    { x: 196, open: 150, close: 159, high: 138, low: 172, volume: 21 },
    { x: 238, open: 159, close: 131, high: 124, low: 166, volume: 37 },
    { x: 280, open: 131, close: 143, high: 119, low: 152, volume: 23 },
    { x: 322, open: 143, close: 119, high: 110, low: 149, volume: 33 },
    { x: 364, open: 119, close: 127, high: 104, low: 138, volume: 26 },
    { x: 406, open: 127, close: 98, high: 92, low: 135, volume: 41 },
    { x: 448, open: 98, close: 109, high: 88, low: 119, volume: 27 },
    { x: 490, open: 109, close: 82, high: 75, low: 114, volume: 38 },
    { x: 532, open: 82, close: 91, high: 68, low: 103, volume: 30 },
  ]

  return (
    <div className="demo-panel analysis-visual">
      <div className="demo-panel-heading">
        <div><span className="panel-kicker">TECHNICAL STUDY · SCHEMATIC</span><h3>Reading price structure</h3></div>
        <span className="illustrative-tag">Illustrative</span>
      </div>
      <div className="candle-chart-wrap">
        <svg className="financial-chart candle-chart" viewBox="0 0 600 320" role="img" aria-labelledby="candle-title candle-description">
          <title id="candle-title">Illustrative candlestick chart with support, resistance and volume</title>
          <desc id="candle-description">A hypothetical rising and falling candle sequence with horizontal support and resistance zones and illustrative volume bars. It contains no market prices.</desc>
          <path className="chart-grid-lines" d="M48 50H580M48 100H580M48 150H580M48 200H580M48 250H580M120 32V280M240 32V280M360 32V280M480 32V280" />
          <text className="chart-axis-label" x="48" y="20">PRICE STRUCTURE · NO PRICE SCALE</text>
          <path className="chart-level chart-resistance" d="M48 76H580" />
          <text className="chart-level-label" x="52" y="69">Resistance zone</text>
          <path className="chart-level chart-support" d="M48 204H580" />
          <text className="chart-level-label" x="52" y="198">Support zone</text>
          {candles.map((candle) => {
            const rising = candle.close < candle.open
            const top = Math.min(candle.open, candle.close)
            const height = Math.max(4, Math.abs(candle.close - candle.open))
            return (
              <g key={candle.x} className={rising ? 'candle-up' : 'candle-down'}>
                <path d={`M${candle.x + 7} ${candle.high}V${candle.low}`} />
                <rect x={candle.x} y={top} width="14" height={height} rx="1" />
                <rect className="volume-bar" x={candle.x + 1} y={281 - candle.volume} width="12" height={candle.volume} rx="1" />
              </g>
            )
          })}
          <path className="volume-baseline" d="M48 281H580" />
          <text className="chart-axis-label" x="48" y="310">VOLUME · ILLUSTRATIVE</text>
        </svg>
      </div>
      <div className="chart-legend">
        <span><i className="legend-green" />Higher close</span>
        <span><i className="legend-navy" />Lower close</span>
        <span><i className="legend-line" />Observed price zone</span>
      </div>
      <p className="demo-caption">A schematic example for learning how analysts describe swings and areas of prior interest. A level is not a guaranteed barrier or a signal.</p>
    </div>
  )
}

function AnalysisPrinciples() {
  return (
    <div className="analysis-principles">
      <article className="demo-panel principle-card">
        <span className="principle-index">01 / TECHNICAL</span>
        <h3>Describe what price has done</h3>
        <p>Compare swing highs and lows across a stated timeframe. A higher high and higher low can describe an uptrend; market structure may differ across timeframes.</p>
        <div className="mini-trend" aria-label="Illustrative rising trend diagram">
          <svg viewBox="0 0 320 92" role="img" aria-label="Schematic sequence of rising swing lows and highs">
            <path className="mini-grid" d="M0 22H320M0 46H320M0 70H320" />
            <path className="mini-trend-line" d="M6 76L51 62L82 69L128 45L160 54L208 28L239 37L311 12" />
            <circle cx="51" cy="62" r="3" /><circle cx="128" cy="45" r="3" /><circle cx="208" cy="28" r="3" />
          </svg>
        </div>
      </article>
      <article className="demo-panel principle-card">
        <span className="principle-index">02 / FUNDAMENTAL</span>
        <h3>Ask what may drive value</h3>
        <p>Economic policy, inflation, employment, company cash flows, and industry conditions can affect markets. Their influence depends on expectations and what is already reflected in price.</p>
        <ul className="analysis-checklist">
          <li><span>01</span>Identify the source and publication time</li>
          <li><span>02</span>Compare the result with expectations</li>
          <li><span>03</span>Consider competing explanations</li>
        </ul>
      </article>
    </div>
  )
}

function IntelligenceMap() {
  return (
    <div className="demo-panel intelligence-map">
      <div className="demo-panel-heading">
        <div><span className="panel-kicker">RESEARCH WORKFLOW · CONCEPT</span><h3>From question to considered review</h3></div>
        <span className="illustrative-tag">Illustrative</span>
      </div>
      <svg className="financial-chart intelligence-svg" viewBox="0 0 900 270" role="img" aria-labelledby="intelligence-title intelligence-description">
        <title id="intelligence-title">Illustrative AI-assisted research workflow</title>
        <desc id="intelligence-description">Three connected stages: gather context, compare evidence, and review uncertainty. The diagram does not show a live AI service.</desc>
        <path className="intelligence-connection" d="M220 130H682" />
        <path className="intelligence-flow" d="M220 130H682" />
        <g className="intelligence-node">
          <circle cx="220" cy="130" r="57" />
          <circle className="node-core" cx="220" cy="130" r="30" />
          <text x="220" y="126">01</text><text className="node-sub" x="220" y="146">CONTEXT</text>
          <text className="node-label" x="220" y="218">Gather sources</text>
        </g>
        <g className="intelligence-node">
          <circle cx="450" cy="130" r="57" />
          <circle className="node-core" cx="450" cy="130" r="30" />
          <text x="450" y="126">02</text><text className="node-sub" x="450" y="146">EVIDENCE</text>
          <text className="node-label" x="450" y="218">Compare views</text>
        </g>
        <g className="intelligence-node">
          <circle cx="680" cy="130" r="57" />
          <circle className="node-core" cx="680" cy="130" r="30" />
          <text x="680" y="126">03</text><text className="node-sub" x="680" y="146">JUDGEMENT</text>
          <text className="node-label" x="680" y="218">Review uncertainty</text>
        </g>
      </svg>
      <p className="demo-caption">AI can help organise information and surface questions. It can also be incomplete or wrong; independently verify evidence and retain human judgement.</p>
    </div>
  )
}

function RadarStudy() {
  const volatility = [
    { name: 'Foreign exchange', width: 43, note: 'Relative variation · sample' },
    { name: 'Equity indices', width: 61, note: 'Relative variation · sample' },
    { name: 'Commodities', width: 76, note: 'Relative variation · sample' },
    { name: 'Crypto assets', width: 88, note: 'Relative variation · sample' },
  ]
  return (
    <div className="demo-panel radar-study">
      <div className="demo-panel-heading">
        <div><span className="panel-kicker">MARKET MONITORING · SCHEMATIC</span><h3>Compare conditions, not predictions</h3></div>
        <span className="illustrative-tag">Illustrative</span>
      </div>
      <div className="radar-layout">
        <div className="radar-category-list">
          {[
            ['FX', 'Currency pairs · policy and rate expectations'],
            ['INDICES', 'Equity baskets · broad risk sentiment'],
            ['COMMODITIES', 'Supply, inventories and contract structure'],
            ['EQUITIES', 'Company results and sector conditions'],
            ['CRYPTO', 'Fragmented venues and changing liquidity'],
          ].map(([label, copy]) => (
            <div className="radar-category" key={label}><span className="radar-category-icon">{label.slice(0, 2)}</span><div><strong>{label}</strong><small>{copy}</small></div><span className="radar-neutral-dot" /></div>
          ))}
        </div>
        <div className="volatility-panel">
          <h4>Relative movement range</h4>
          <p>Hypothetical comparison only; not a current volatility ranking.</p>
          {volatility.map((item) => (
            <div className="volatility-row" key={item.name}>
              <div><span>{item.name}</span><small>{item.note}</small></div>
              <div className="volatility-track"><span style={{ width: `${item.width}%` }} /></div>
            </div>
          ))}
          <div className="radar-event-note"><span className="event-marker" /><p><strong>Event watch</strong>Scheduled releases can widen ranges or spreads; the direction of a reaction is uncertain.</p></div>
          <div className="sentiment-spectrum">
            <div><strong>Sentiment spectrum</strong><span>Concept diagram · no measured data</span></div>
            <div className="sentiment-scale" role="img" aria-label="Conceptual sentiment scale from cautious through balanced to optimistic">
              <span className="sentiment-marker" />
            </div>
            <div className="sentiment-labels"><span>Cautious</span><span>Balanced</span><span>Optimistic</span></div>
          </div>
        </div>
      </div>
      <p className="demo-caption">Volatility indicates movement size, not direction. Breakouts can continue or fail; event timing, liquidity and timeframe matter when interpreting a change.</p>
    </div>
  )
}

function RiskSizingCalculator() {
  const [balance, setBalance] = useState('10000')
  const [riskPercent, setRiskPercent] = useState('1')
  const [entry, setEntry] = useState('100')
  const [stop, setStop] = useState('98')
  const values = [balance, riskPercent, entry, stop].map((value) => value.trim() === '' ? Number.NaN : Number(value))
  const [accountBalance, riskRate, entryPrice, stopPrice] = values
  let error = !values.every(Number.isFinite)
    ? 'Enter a number in every field.'
    : accountBalance <= 0
      ? 'Account balance must be greater than zero.'
      : accountBalance > 1_000_000_000_000
        ? 'Account balance must not exceed $1 trillion for this demonstration.'
        : riskRate <= 0 || riskRate > 100
          ? 'Risk percentage must be greater than 0 and no more than 100.'
          : entryPrice <= 0 || stopPrice <= 0 || entryPrice > 1_000_000_000_000 || stopPrice > 1_000_000_000_000
            ? 'Entry and stop prices must be greater than zero and no more than 1 trillion.'
            : entryPrice === stopPrice
              ? 'Entry and stop prices must be different.'
              : ''
  const validInputs = !error
  const riskAmount = validInputs ? accountBalance * (riskRate / 100) : 0
  const unitRisk = validInputs ? Math.abs(entryPrice - stopPrice) : 0
  const size = validInputs ? riskAmount / unitRisk : 0
  if (!error && (!Number.isFinite(riskAmount) || riskAmount <= 0 || !Number.isFinite(size))) {
    error = 'These inputs produce an unrepresentable result; use a larger stop distance or smaller balance.'
  }
  return (
    <div className="demo-panel calculator-panel">
      <div className="demo-panel-heading">
        <div><span className="panel-kicker">POSITION SIZING · USD ILLUSTRATION</span><h3>Estimate a hypothetical position size</h3></div>
        <span className="illustrative-tag">Interactive</span>
      </div>
      <p className="calculator-intro">This simplified example assumes each unit gains or loses USD 1 for every USD 1 price move, with no fees or slippage.</p>
      <div className="calculator-layout">
        <div className="calculator-fields">
          <NumberField id="position-balance" label="Account balance" value={balance} onChange={setBalance} min={0} suffix="USD" />
          <NumberField id="position-risk-percent" label="Risk budget" value={riskPercent} onChange={setRiskPercent} min={0} max={100} suffix="%" />
          <NumberField id="position-entry" label="Entry price" value={entry} onChange={setEntry} min={0} />
          <NumberField id="position-stop" label="Stop-loss price" value={stop} onChange={setStop} min={0} />
        </div>
        <div className="calculation-results" aria-live="polite">
          {error ? <p className="calculator-error" role="alert">{error}</p> : (
            <>
              <span className="result-label">Illustrative maximum risk budget</span>
              <strong className="result-primary">{usd.format(riskAmount)}</strong>
              <div className="result-divider" />
              <div className="result-row"><span>Entry-to-stop distance</span><strong>{decimal.format(unitRisk)} price units</strong></div>
              <div className="result-row"><span>Estimated position size</span><strong>{decimal.format(size)} units</strong></div>
            </>
          )}
        </div>
      </div>
      <p className="demo-caption">Formula: balance × risk percentage ÷ absolute entry-to-stop distance. Real contract sizes, pip values, account currency, leverage, costs and execution can materially change exposure; a stop does not guarantee this maximum loss.</p>
    </div>
  )
}

function RiskRewardCalculator() {
  const [entry, setEntry] = useState('100')
  const [stop, setStop] = useState('98')
  const [target, setTarget] = useState('104')
  const values = [entry, stop, target].map((value) => value.trim() === '' ? Number.NaN : Number(value))
  const [entryPrice, stopPrice, targetPrice] = values
  let error = !values.every(Number.isFinite)
    ? 'Enter a number in every field.'
    : values.some((value) => value <= 0 || value > 1_000_000_000_000)
      ? 'All prices must be greater than zero and no more than 1 trillion.'
      : entryPrice === stopPrice
        ? 'Entry and stop prices must be different.'
        : (entryPrice - stopPrice) * (targetPrice - entryPrice) <= 0
          ? 'For this illustration, the stop and target must be on opposite sides of entry.'
          : ''
  const risk = error ? 0 : Math.abs(entryPrice - stopPrice)
  const reward = error ? 0 : Math.abs(targetPrice - entryPrice)
  const ratio = risk > 0 ? reward / risk : 0
  if (!error && !Number.isFinite(ratio)) {
    error = 'These inputs produce an unrepresentable ratio; use values with a wider risk distance.'
  }

  return (
    <div className="demo-panel calculator-panel">
      <div className="demo-panel-heading">
        <div><span className="panel-kicker">SCENARIO COMPARISON</span><h3>Compare distance to risk and reward</h3></div>
        <span className="illustrative-tag">Interactive</span>
      </div>
      <div className="risk-reward-layout">
        <div className="calculator-fields">
          <NumberField id="rr-entry" label="Entry price" value={entry} onChange={setEntry} min={0} />
          <NumberField id="rr-stop" label="Stop-loss price" value={stop} onChange={setStop} min={0} />
          <NumberField id="rr-target" label="Illustrative target" value={target} onChange={setTarget} min={0} />
        </div>
        <div className="risk-reward-result" aria-live="polite">
          {error ? <p className="calculator-error" role="alert">{error}</p> : (
            <>
              <div className="rr-ratio"><span>Potential reward : stated risk</span><strong>1 : {decimal.format(ratio)}</strong></div>
              <div className="rr-visual" aria-hidden="true"><span className="rr-risk" style={{ flexGrow: risk }} /><span className="rr-reward" style={{ flexGrow: reward }} /></div>
              <div className="rr-legend"><span>Risk · {decimal.format(risk)} units</span><span>Reward · {decimal.format(reward)} units</span></div>
              <p>This distance ratio does not estimate the probability of reaching either price.</p>
            </>
          )}
        </div>
      </div>
      <p className="demo-caption">The displayed ratio compares price distances only, before spread, fees, slippage or gaps. A larger potential reward does not make an outcome more likely.</p>
    </div>
  )
}

function PortfolioAllocationDemo() {
  const [allocation, setAllocation] = useState(['45', '25', '20', '10'])
  const names = ['Equities', 'Fixed income', 'Commodities', 'Cash']
  const colors = ['#01AB41', '#000D18', '#71C58F', '#A8B5AF']
  const parsed = allocation.map((value) => value.trim() === '' ? Number.NaN : Number(value))
  const total = parsed.reduce((sum, value) => sum + (Number.isFinite(value) ? value : 0), 0)
  const valid = parsed.every((value) => Number.isFinite(value) && value >= 0 && value <= 100) && Math.abs(total - 100) < 0.001

  return (
    <div className="demo-panel allocation-panel">
      <div className="demo-panel-heading">
        <div><span className="panel-kicker">PORTFOLIO MIX · HYPOTHETICAL</span><h3>Explore how an allocation is composed</h3></div>
        <span className="illustrative-tag">Interactive</span>
      </div>
      <p className="calculator-intro">Edit the example weights. The chart appears only when the entered allocations total exactly 100%.</p>
      <div className="allocation-layout">
        <div className="allocation-inputs">
          {names.map((name, index) => (
            <div className="allocation-input-row" key={name}>
              <span className="allocation-swatch" style={{ backgroundColor: colors[index] }} />
              <label htmlFor={`allocation-${index}`}>{name}</label>
              <span className="demo-input-wrap"><input id={`allocation-${index}`} type="number" inputMode="decimal" min="0" max="100" step="1" value={allocation[index]} onChange={(event) => { const nextValue = event.currentTarget.value; setAllocation((current) => current.map((value, itemIndex) => itemIndex === index ? nextValue : value)) }} /><small>%</small></span>
            </div>
          ))}
          <div className={`allocation-total${valid ? '' : ' allocation-total-invalid'}`} aria-live="polite"><span>Total</span><strong>{Number.isFinite(total) ? decimal.format(total) : '—'}%</strong></div>
          {!valid && <p className="calculator-error" role="status">Adjust the allocations to total 100% to show the composition chart.</p>}
        </div>
        <div className="allocation-chart-area">
          {valid ? (
            <>
              <svg className="financial-chart allocation-chart" viewBox="0 0 1000 100" role="img" aria-labelledby="allocation-title allocation-description">
                <title id="allocation-title">Illustrative portfolio allocation</title>
                <desc id="allocation-description">{names.map((name, index) => `${name} ${parsed[index]} percent`).join(', ')}. Hypothetical allocation only.</desc>
                {parsed.map((value, index) => {
                  const x = parsed.slice(0, index).reduce((sum, item) => sum + item, 0) * 10
                  return <rect key={names[index]} x={x} y="25" width={value * 10} height="48" fill={colors[index]} />
                })}
              </svg>
              <div className="allocation-legend">
                {names.map((name, index) => <div key={name}><span className="allocation-swatch" style={{ backgroundColor: colors[index] }} /><span>{name}</span><strong>{decimal.format(parsed[index])}%</strong></div>)}
              </div>
            </>
          ) : <div className="allocation-empty" aria-hidden="true"><span>100%</span><p>Set a valid total to view the allocation</p></div>}
        </div>
      </div>
      <p className="demo-caption">Diversifying across asset classes can reduce concentration in some circumstances, but correlations and risk can change. This example does not assess personal suitability.</p>
    </div>
  )
}

function PerformanceAnalyticsDemo() {
  const [tradeCount, setTradeCount] = useState('20')
  const [winRate, setWinRate] = useState('55')
  const [averageWin, setAverageWin] = useState('150')
  const [averageLoss, setAverageLoss] = useState('100')
  const values = [tradeCount, winRate, averageWin, averageLoss].map((value) => value.trim() === '' ? Number.NaN : Number(value))
  const [trades, winProbability, winAmount, lossAmount] = values
  const error = !values.every(Number.isFinite)
    ? 'Enter a number in every field.'
    : !Number.isInteger(trades) || trades < 1 || trades > 20
      ? 'Sample trades must be a whole number from 1 to 20.'
      : winProbability < 0 || winProbability > 100
        ? 'Win rate must be between 0 and 100%.'
        : winAmount <= 0 || winAmount > 5000
          ? 'Average win must be greater than 0 and no more than $5,000.'
          : lossAmount <= 0 || lossAmount > 500
            ? 'Average loss must be greater than 0 and no more than $500.'
            : ''

  let wins = 0
  let losses = 0
  let profitFactor = 0
  let expectedValue = 0
  let maximumDrawdown = 0
  let curve: number[] = []
  if (!error) {
    wins = Math.round(trades * winProbability / 100)
    losses = trades - wins
    const grossWins = wins * winAmount
    const grossLosses = losses * lossAmount
    profitFactor = grossLosses === 0 ? Number.POSITIVE_INFINITY : grossWins / grossLosses
    expectedValue = winProbability / 100 * winAmount - (1 - winProbability / 100) * lossAmount
    curve = [10000]
    let equity = 10000
    let peak = equity
    for (let index = 0; index < trades; index += 1) {
      const isWin = Math.floor((index + 1) * wins / trades) > Math.floor(index * wins / trades)
      equity += isWin ? winAmount : -lossAmount
      curve.push(equity)
      peak = Math.max(peak, equity)
      maximumDrawdown = Math.max(maximumDrawdown, peak === 0 ? 0 : (peak - equity) / peak * 100)
    }
  }
  const minEquity = curve.length ? Math.min(...curve) : 0
  const maxEquity = curve.length ? Math.max(...curve) : 1
  const range = Math.max(1, maxEquity - minEquity)
  const points = curve.map((value, index) => `${20 + index * 560 / Math.max(1, curve.length - 1)},${130 - (value - minEquity) * 100 / range}`).join(' ')

  return (
    <div className="demo-panel performance-demo">
      <div className="demo-panel-heading">
        <div><span className="panel-kicker">PERFORMANCE REVIEW · SAMPLE DATA</span><h3>See how assumptions change the measures</h3></div>
        <span className="illustrative-tag">Interactive</span>
      </div>
      <p className="calculator-intro">A hypothetical 20-trade maximum sample starts at USD 10,000. Wins are evenly distributed for the illustrative equity path; the path is not a forecast.</p>
      <div className="performance-layout">
        <div className="calculator-fields performance-fields">
          <NumberField id="performance-trades" label="Sample trades" value={tradeCount} onChange={setTradeCount} min={1} max={20} step={1} />
          <NumberField id="performance-win-rate" label="Assumed win rate" value={winRate} onChange={setWinRate} min={0} max={100} suffix="%" />
          <NumberField id="performance-average-win" label="Average win" value={averageWin} onChange={setAverageWin} min={0} max={5000} suffix="USD" />
          <NumberField id="performance-average-loss" label="Average loss" value={averageLoss} onChange={setAverageLoss} min={0} max={500} suffix="USD" />
        </div>
        <div className="performance-results" aria-live="polite">
          {error ? <p className="calculator-error" role="alert">{error}</p> : (
            <>
              <div className="performance-metrics">
                <div><span>Rounded sample record</span><strong>{wins}W / {losses}L</strong></div>
                <div><span>Profit factor</span><strong>{Number.isFinite(profitFactor) ? decimal.format(profitFactor) : 'Not defined'}</strong></div>
                <div><span>Expected value / trade</span><strong>{usd.format(expectedValue)}</strong></div>
                <div><span>Max sample drawdown</span><strong>{decimal.format(maximumDrawdown)}%</strong></div>
              </div>
              <svg className="financial-chart equity-chart" viewBox="0 0 600 160" role="img" aria-labelledby="equity-title equity-description">
                <title id="equity-title">Hypothetical sample equity curve</title>
                <desc id="equity-description">An illustrative curve from a USD 10,000 starting balance over {trades} hypothetical trades. It is not actual performance.</desc>
                <path className="chart-grid-lines" d="M20 30H580M20 80H580M20 130H580" />
                <polyline className="equity-line" points={points} />
              </svg>
              <div className="chart-legend"><span><i className="legend-green" />Hypothetical equity path · USD</span></div>
            </>
          )}
        </div>
      </div>
      <p className="demo-caption">Profit factor uses rounded sample win/loss counts; expected value uses the entered probability. Maximum drawdown is calculated peak-to-trough on this ordered sample path. Fees, slippage, deposits and open positions are excluded.</p>
    </div>
  )
}

function AcademyProgress() {
  const lessons = [
    ['01', 'Forex basics', 'Quotes, pairs and pips'],
    ['02', 'Chart reading', 'Trends and price zones'],
    ['03', 'Risk planning', 'Exposure and position size'],
    ['04', 'Decision process', 'Bias and journaling'],
  ]
  return (
    <div className="demo-panel academy-visual">
      <div className="demo-panel-heading">
        <div><span className="panel-kicker">LEARNING PATH · EXAMPLE</span><h3>Build knowledge in a useful sequence</h3></div>
        <span className="illustrative-tag">Illustrative</span>
      </div>
      <div className="academy-path">
        {lessons.map(([index, title, copy], position) => (
          <article className="academy-path-step" key={index}>
            <span className="academy-step-index">{index}</span>
            {position < lessons.length - 1 && <span className="academy-step-connector" aria-hidden="true" />}
            <div><h4>{title}</h4><p>{copy}</p></div>
            <span className="academy-step-state">LESSON</span>
          </article>
        ))}
      </div>
      <p className="demo-caption">A curriculum illustration only; this website does not track learning progress or provide an interactive course application.</p>
    </div>
  )
}

function ProductVisual({ path }: DemonstrationProps) {
  if (path === '/ai-intelligence') {
    return <DemonstrationFrame eyebrow="AI-assisted research" title="Organise evidence without mistaking it for certainty." description="A conceptual workflow for turning a market question into a reviewable set of sources, observations and uncertainties."><IntelligenceMap /></DemonstrationFrame>
  }
  if (path === '/ai-analyst') {
    return <DemonstrationFrame eyebrow="Chart reading" title="Use technical structure and fundamentals as separate lenses." description="The chart below is schematic and unpriced. Pair observable price behaviour with relevant context rather than treating an indicator or headline as a complete explanation."><CandlestickStudy /><AnalysisPrinciples /></DemonstrationFrame>
  }
  if (path === '/market-radar') {
    return <DemonstrationFrame eyebrow="Market awareness" title="Monitor different markets with their own context." description="FX, indices, commodities, equities and crypto respond to different drivers. A watch process should distinguish volatility from direction and scheduled events from outcomes."><RadarStudy /></DemonstrationFrame>
  }
  if (path === '/risk-intelligence') {
    return <DemonstrationFrame eyebrow="Risk planning" title="Make downside assumptions visible before considering a position." description="These browser-based lessons use user-entered hypothetical values. They are educational calculations, not trading instructions or application tools."><RiskSizingCalculator /><RiskRewardCalculator /></DemonstrationFrame>
  }
  if (path === '/trading-tools') {
    return <DemonstrationFrame eyebrow="Trading calculations" title="Understand what planning formulas can—and cannot—tell you." description="Explore position size and risk/reward arithmetic without connecting an account, market feed or order system."><RiskSizingCalculator /><RiskRewardCalculator /></DemonstrationFrame>
  }
  if (path === '/investor-intelligence') {
    return <DemonstrationFrame eyebrow="Portfolio education" title="Explore how asset weights make up a hypothetical portfolio." description="Adjust the sample allocation to see its composition. The display is not a recommended or suitable portfolio for any individual."><PortfolioAllocationDemo /></DemonstrationFrame>
  }
  if (path === '/performance-analytics') {
    return <DemonstrationFrame eyebrow="Performance education" title="Read multiple measures together—not a single headline." description="Adjust hypothetical trade assumptions and compare sample win/loss counts, profit factor, expectancy and peak-to-trough drawdown."><PerformanceAnalyticsDemo /></DemonstrationFrame>
  }
  if (path === '/academy') {
    return <DemonstrationFrame eyebrow="Learning path" title="Connect foundational concepts step by step." description="A sample sequence moves from market vocabulary to analysis, risk management and decision review."><AcademyProgress /></DemonstrationFrame>
  }
  return null
}

export function FinancialDemonstrations({ path }: DemonstrationProps) {
  return <ProductVisual path={path} />
}
