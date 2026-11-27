export type PageVariant = 'split' | 'editorial' | 'dark' | 'legal'

export interface MarketingPage {
  path: string
  label: string
  title: string
  description: string
  eyebrow: string
  heading: string
  intro: string
  variant: PageVariant
  problemTitle: string
  problem: string
  approachTitle: string
  approach: string
  steps: { title: string; copy: string }[]
  features: { title: string; copy: string }[]
  exampleTitle: string
  example: string
  metrics: { label: string; value: string }[]
  benefits: string[]
  education?: { title: string; copy: string }[]
}

export const marketingPages: MarketingPage[] = [
  {
    path: '/ai-intelligence',
    label: 'AI Intelligence',
    title: 'AI Intelligence | AG Markets',
    description: 'Explore how AG Markets plans to bring AI-assisted research, market context, and risk-aware decision support together.',
    eyebrow: 'AG Intelligence',
    heading: 'More context for every market decision.',
    intro: 'AG Intelligence is the planned research layer of AG Markets: a way to bring market questions, relevant context, and structured scenarios into one considered workflow.',
    variant: 'split',
    problemTitle: 'Information is abundant. Useful context is harder to find.',
    problem: 'Traders and investors often move between headlines, charts, notes, and portfolio views. The result can be fragmented research, overlooked assumptions, and decisions made without a clear record of why.',
    approachTitle: 'A research workflow, not an oracle.',
    approach: 'The planned experience is designed to organise questions and evidence into understandable summaries. AI can support exploration, but people remain responsible for verifying information and making decisions.',
    steps: [
      { title: 'Frame the question', copy: 'Set an instrument, timeframe, or market theme and state what you want to understand.' },
      { title: 'Bring context together', copy: 'Review relevant technical, fundamental, and risk considerations in a single research flow.' },
      { title: 'Assess the scenario', copy: 'Compare possible interpretations, note uncertainty, and decide what needs independent verification.' },
    ],
    features: [
      { title: 'Market explanations', copy: 'Plain-language summaries intended to make market structure and drivers easier to examine.' },
      { title: 'Cross-market context', copy: 'A planned way to connect related assets, events, and themes without losing the original question.' },
      { title: 'Risk-aware prompts', copy: 'Guided analysis that makes assumptions, invalidation, and uncertainty part of the discussion.' },
      { title: 'Research continuity', copy: 'A future home for reviewing research questions and the reasoning behind them.' },
    ],
    exampleTitle: 'Illustrative research brief',
    example: 'A visitor asks what could influence a major currency pair over the coming week. A sample brief might separate scheduled data, recent price structure, and alternative scenarios instead of presenting one certain outcome.',
    metrics: [
      { label: 'Question', value: 'Weekly FX outlook' },
      { label: 'Context', value: 'Events + structure' },
      { label: 'Output', value: 'Scenario brief' },
    ],
    benefits: ['Spend less time switching between research sources.', 'Make assumptions visible before acting.', 'Treat AI output as a starting point for verification.'],
    education: [
      { title: 'What AI-assisted analysis can do', copy: 'Language models can organise supplied information, explain terminology, compare stated scenarios, and help a researcher find follow-up questions. These are forms of assistance, not independent evidence that a market claim is true.' },
      { title: 'Check the source and the timestamp', copy: 'An analysis is only as current and complete as its inputs. Confirm publication time, original source, units, instrument, and timeframe; a summary can omit context or misread ambiguous material.' },
      { title: 'Look for uncertainty and alternatives', copy: 'A useful research process asks what evidence supports an interpretation, what contradicts it, and what would change the view. AI-generated confidence or fluent wording is not a probability guarantee.' },
      { title: 'Keep human judgement responsible', copy: 'People must decide whether information is relevant to their objectives, circumstances, and risk capacity. Never treat generated text as personalised financial advice or an instruction to trade.' },
    ],
  },
  {
    path: '/ai-analyst',
    label: 'AG AI Analyst',
    title: 'AG AI Analyst | AG Markets',
    description: 'Learn how the planned AG AI Analyst can help frame financial market questions with explainable, risk-aware research.',
    eyebrow: 'AG AI Analyst',
    heading: 'Ask better questions of the markets.',
    intro: 'AG AI Analyst is a planned conversational research assistant for traders and investors who want to explore price action, market drivers, and possible scenarios with their assumptions in view.',
    variant: 'editorial',
    problemTitle: 'A chart can show movement without explaining its context.',
    problem: 'One indicator rarely tells the whole story. A fast market move may reflect positioning, scheduled events, liquidity, or a change in technical structure—and those possibilities deserve separate consideration.',
    approachTitle: 'From question to structured analysis.',
    approach: 'The planned analyst will organise a user’s question into relevant observations and competing explanations. It is intended to show reasoning cues and uncertainty, not issue guaranteed calls or personal investment advice.',
    steps: [
      { title: 'Choose a subject', copy: 'Ask about an instrument, timeframe, technical concept, or market event.' },
      { title: 'Review the evidence', copy: 'Examine relevant observations and the assumptions that shape each interpretation.' },
      { title: 'Compare scenarios', copy: 'Consider what could support or weaken a view, then verify the source information yourself.' },
    ],
    features: [
      { title: 'Technical context', copy: 'Explore structure, momentum, and levels as observations rather than instructions.' },
      { title: 'Fundamental themes', copy: 'Place macroeconomic and company-specific drivers into a clearer research outline.' },
      { title: 'Scenario comparison', copy: 'Contrast a constructive case with alternatives and potential invalidation points.' },
      { title: 'Plain-language answers', copy: 'Translate unfamiliar market terminology into accessible explanations.' },
    ],
    exampleTitle: 'Hypothetical EUR/USD question',
    example: 'A user asks what a break above a recent range might mean. An illustrative response would distinguish confirmation from a false break, list evidence to watch, and explain what would invalidate each reading.',
    metrics: [
      { label: 'Instrument', value: 'EUR / USD' },
      { label: 'Question type', value: 'Range breakout' },
      { label: 'Response', value: 'Two scenarios' },
    ],
    benefits: ['Turn broad questions into focused research.', 'See alternative interpretations before forming a view.', 'Keep risk and uncertainty in the conversation.'],
    education: [
      { title: 'Technical analysis', copy: 'Technical analysis studies historical price and volume behaviour to describe market conditions and possible scenarios. Indicators are transformations of past data; they do not establish what price must do next.' },
      { title: 'Fundamental analysis', copy: 'Fundamental analysis considers economic conditions, policy, company finances, industry dynamics, and other factors that may affect an asset’s value. Relevant drivers differ across instruments and can already be reflected in prices.' },
      { title: 'Trends and market structure', copy: 'A trend describes directional movement over a chosen timeframe. A sequence of higher swing highs and higher swing lows is often called an uptrend; lower highs and lower lows can describe a downtrend. Structure can differ across timeframes, so state which one is being analysed.' },
      { title: 'Support and resistance', copy: 'Support and resistance are areas where price has previously met buying or selling interest. They are zones, not exact barriers: price can pass through them, reverse before reaching them, or briefly break and return.' },
      { title: 'Momentum', copy: 'Momentum describes the pace or persistence of price movement. Oscillators and rate-of-change measures can help compare movement, but strong momentum may persist or reverse; an extreme reading alone is not a timing signal.' },
      { title: 'Volatility', copy: 'Volatility describes the magnitude of price variation, not its direction. Wider movement can increase uncertainty and potential loss for a given position size, making the same stop distance or quantity inappropriate in different conditions.' },
      { title: 'Use competing explanations', copy: 'Combine observations carefully: a breakout from resistance might indicate a change in structure, but it can also fail. Consider confirmation, liquidity, event risk, and an invalidation point without assuming any outcome.' },
    ],
  },
  {
    path: '/market-radar',
    label: 'AG Market Radar',
    title: 'AG Market Radar | AG Markets',
    description: 'Discover the planned AG Market Radar experience for monitoring watchlists, market conditions, and noteworthy changes.',
    eyebrow: 'AG Market Radar',
    heading: 'A clearer view of what is changing.',
    intro: 'AG Market Radar is a planned market-awareness workspace that would help users follow selected instruments and review notable changes without treating every fluctuation as an opportunity.',
    variant: 'dark',
    problemTitle: 'Too many alerts can hide the few that matter.',
    problem: 'Monitoring multiple markets can create noise: repeated price notifications, fragmented watchlists, and little explanation of why a move might deserve attention.',
    approachTitle: 'Watch markets with a defined purpose.',
    approach: 'The intended Radar workflow brings user-selected markets and event context into a focused overview. Any future alert would need to be interpreted against a user’s timeframe, plan, and tolerance for risk.',
    steps: [
      { title: 'Build a watchlist', copy: 'Select the assets and themes that are relevant to your research.' },
      { title: 'Set useful conditions', copy: 'Choose the kinds of changes worth reviewing, such as volatility or a price level.' },
      { title: 'Review the context', copy: 'Open a signal preview, check the underlying market conditions, and decide whether further research is warranted.' },
    ],
    features: [
      { title: 'Watchlist overview', copy: 'A single place to scan selected instruments and compare their current state.' },
      { title: 'Condition monitoring', copy: 'Planned monitoring for changes in volatility, momentum, or defined technical areas.' },
      { title: 'Event awareness', copy: 'A way to keep scheduled market events alongside the assets they may affect.' },
      { title: 'Alert preferences', copy: 'User-controlled settings intended to reduce low-value interruptions.' },
    ],
    exampleTitle: 'Illustrative watchlist change',
    example: 'A sample watchlist might flag that volatility has expanded in an index ahead of a scheduled announcement. The preview explains the change; it does not predict direction or recommend a trade.',
    metrics: [
      { label: 'Watchlist', value: '4 instruments' },
      { label: 'Condition', value: 'Volatility shift' },
      { label: 'Status', value: 'Review context' },
    ],
    benefits: ['Keep selected markets visible in one place.', 'Distinguish a notification from a decision.', 'Spend attention according to a monitoring plan.'],
    education: [
      { title: 'Foreign exchange', copy: 'FX quotes express one currency relative to another. Exchange rates can respond to interest-rate expectations, inflation, employment, trade, risk appetite, and central-bank communication. Trading hours overlap across global centres, while liquidity and spreads vary.' },
      { title: 'Indices and equities', copy: 'An equity index represents a defined group of shares under a particular weighting and calculation method; it is not the same as a single company. Individual equities can react to earnings, guidance, financing, sector conditions, and broader market sentiment.' },
      { title: 'Commodities', copy: 'Commodity prices may reflect physical supply and demand, inventories, production costs, weather, transport, geopolitics, and futures-market structure. A futures contract has expiry and contract specifications that matter when interpreting its price.' },
      { title: 'Crypto assets', copy: 'Crypto markets can trade continuously on multiple venues, with fragmented liquidity, changing market structure, and substantial price variation. Exchange, custody, operational, and regulatory risks are distinct from ordinary price risk.' },
      { title: 'Volatility, breakouts, and trends', copy: 'A volatility increase means larger price changes, not a directional forecast. A breakout is movement beyond a previously observed range or level; it may continue, stall, or fail. Compare it with the chosen timeframe, volume or liquidity context, and a pre-defined monitoring plan.' },
      { title: 'Economic events and monitoring', copy: 'Scheduled releases and policy decisions can create rapid repricing, wider spreads, or gaps, especially when results differ from expectations. A calendar event does not predict direction; note its timing, affected markets, and the possibility that expectations are already priced in.' },
    ],
  },
  {
    path: '/risk-intelligence',
    label: 'Risk Intelligence',
    title: 'AG Risk Intelligence | AG Markets',
    description: 'Understand the planned AG Risk Intelligence tools for position planning, exposure awareness, and disciplined risk review.',
    eyebrow: 'AG Risk Intelligence',
    heading: 'Put the downside into the plan.',
    intro: 'AG Risk Intelligence is the planned risk-management area of AG Markets. It is designed to help people examine exposure and trade assumptions before they commit capital.',
    variant: 'dark',
    problemTitle: 'A promising idea is not a complete risk plan.',
    problem: 'Position size, stop distance, portfolio exposure, and the possibility of loss all affect a decision. Considering them separately can obscure how much capital is actually at risk.',
    approachTitle: 'Make risk assumptions easier to inspect.',
    approach: 'The future toolset is expected to help users organise key inputs and compare hypothetical outcomes. Any calculation will depend on accurate inputs and must be checked against the relevant account and instrument terms.',
    steps: [
      { title: 'Define the trade idea', copy: 'Record the instrument, entry assumption, and the point at which the idea no longer holds.' },
      { title: 'Set risk inputs', copy: 'Consider account equity, intended risk, stop distance, and instrument-specific details.' },
      { title: 'Review exposure', copy: 'Assess the result alongside other open positions and your own risk limits.' },
    ],
    features: [
      { title: 'Position planning', copy: 'A future calculator to estimate size from user-entered risk and stop assumptions.' },
      { title: 'Risk-to-reward comparison', copy: 'A structured view of potential outcomes without implying that targets will be reached.' },
      { title: 'Exposure overview', copy: 'Tools intended to highlight concentration across correlated markets or portfolio holdings.' },
      { title: 'Drawdown awareness', copy: 'Educational views that help users understand how sequences of losses can affect capital.' },
    ],
    exampleTitle: 'Illustrative position-planning example',
    example: 'A hypothetical trader sets a maximum loss budget and a stop distance, then reviews how the resulting position could affect total exposure. The example is not a live calculation or a recommendation.',
    metrics: [
      { label: 'Risk budget', value: 'User-defined' },
      { label: 'Stop distance', value: 'Scenario input' },
      { label: 'Result', value: 'Illustrative only' },
    ],
    benefits: ['Make risk an explicit part of preparation.', 'Compare a new idea with existing exposure.', 'Build repeatable habits without assuming outcomes.'],
    education: [
      { title: 'Position sizing and lot size', copy: 'A risk budget can be defined as account equity multiplied by the chosen risk fraction. For illustration, 1% of a hypothetical $10,000 account is $100. If a USD-quoted FX pair has an assumed pip value of $10 per standard lot and the stop is 20 pips away, estimated size is $100 ÷ (20 × $10) = 0.5 standard lots, before spread, commission, slippage, and conversion effects. This is a hypothetical calculation, not a recommendation; contract specifications and account currency change the result.' },
      { title: 'Stop-losses and gaps', copy: 'A stop-loss marks a level at which a trade thesis or risk plan is no longer acceptable. A stop order may execute at a different price during gaps or fast markets, so it cannot guarantee a maximum loss. Broker rules and instrument mechanics also matter.' },
      { title: 'Risk/reward is not probability', copy: 'If a hypothetical setup risks 20 pips to target 40 pips, its gross planned reward-to-risk is 2:1 (often written risk/reward 1:2). That ratio says nothing by itself about the chance of reaching the target; costs and execution affect realised results.' },
      { title: 'Pip value depends on the contract', copy: 'For many standard FX contracts, one pip is 0.0001, while JPY pairs commonly quote a pip as 0.01; fractional pip conventions also exist. Pip value depends on position units, pair, quote currency, and the account’s conversion rate. Verify the instrument specification rather than assuming a universal dollar value.' },
      { title: 'Drawdown and recovery', copy: 'Drawdown measures a decline from a prior account peak to a later trough. A hypothetical fall from $10,000 to $8,000 is a 20% drawdown; returning from $8,000 to $10,000 requires a 25% gain. This asymmetry is why limiting losses and total exposure matters.' },
      { title: 'Portfolio exposure', copy: 'Several positions can share the same underlying driver even when their symbols differ. Review notional exposure, leverage, currency denomination, correlation, and event concentration together; diversification can reduce some risks but cannot remove market loss.' },
    ],
  },
  {
    path: '/trading-tools',
    label: 'Trading Tools',
    title: 'Trading Tools | AG Markets',
    description: 'See the planned AG Markets trading utilities for preparation, trade sizing, pip and lot calculations, and review.',
    eyebrow: 'AG Trading Tools',
    heading: 'Practical utilities for a more deliberate process.',
    intro: 'AG Trading Tools is a planned collection of educational and planning utilities to support preparation before a trade and reflection after it.',
    variant: 'split',
    problemTitle: 'Small calculation errors can distort a trading plan.',
    problem: 'Instrument conventions, contract sizes, account currencies, and stop distances differ. A result only makes sense when its inputs and assumptions match the actual trading conditions.',
    approachTitle: 'Keep the inputs and assumptions visible.',
    approach: 'The future tools are intended to make common planning steps easier to review. They will support user calculations, not place orders or replace broker specifications and independent checks.',
    steps: [
      { title: 'Select the utility', copy: 'Choose a planning task such as position sizing, pip value, or risk-to-reward.' },
      { title: 'Enter the assumptions', copy: 'Supply instrument details and account values required for the selected calculation.' },
      { title: 'Check the result', copy: 'Review units, contract rules, and the result against authoritative account information.' },
    ],
    features: [
      { title: 'Position-size planning', copy: 'Estimate trade quantity from a defined risk amount and stop distance.' },
      { title: 'Pip and lot references', copy: 'Understand how movement and quantity relate under specified assumptions.' },
      { title: 'Trade-plan outline', copy: 'Capture the thesis, invalidation, and possible exit areas in one repeatable format.' },
      { title: 'Review prompts', copy: 'Structure a post-trade review around adherence to plan and process.' },
    ],
    exampleTitle: 'Hypothetical calculation workflow',
    example: 'A learner compares two possible stop distances for the same risk budget. The example focuses on how the input changes estimated position size, not on whether the trade is attractive.',
    metrics: [
      { label: 'Inputs', value: 'Risk + distance' },
      { label: 'Comparison', value: 'Two scenarios' },
      { label: 'Use', value: 'Planning aid' },
    ],
    benefits: ['Bring routine planning steps into a consistent workflow.', 'See which assumptions drive a calculation.', 'Keep execution and order placement outside the public website.'],
    education: [
      { title: 'What a calculator is for', copy: 'A calculator applies a stated formula to inputs; it does not determine whether an assumption is sensible or whether a trade is suitable. Check units, account currency, contract size, fees, and rounding before relying on a result.' },
      { title: 'Position-size planning', copy: 'A common estimate is risk amount divided by stop distance multiplied by value per unit of movement. For FX expressed in pips: position lots = risk budget ÷ (stop pips × pip value per lot). The pip value must match the specific pair, contract, and account currency.' },
      { title: 'Pips and lots', copy: 'A pip is a conventional unit of FX price movement, but quote precision and pip definitions vary by instrument. A standard FX lot is commonly 100,000 base-currency units, with mini and micro lots commonly one-tenth and one-hundredth of that size; brokers may offer different increments.' },
      { title: 'Risk/reward worksheet', copy: 'Compare the distance from entry to a possible stop with the distance to a hypothetical target. A 15-point risk against a 30-point target is a 1:2 risk-to-reward comparison before costs, not a forecast or evidence that the target is likely.' },
      { title: 'Trading journal', copy: 'Record the plan before entry, the rationale, risk assumptions, execution details, and later review. Separate process adherence from outcome: a planned trade can lose, and a profitable result can still involve poor risk discipline.' },
      { title: 'Availability on this website', copy: 'The current public website contains explanations and illustrative displays only. It does not provide working calculators, order placement, live market connections, or a functioning trading journal.' },
    ],
  },
  {
    path: '/investor-intelligence',
    label: 'Investor Intelligence',
    title: 'Investor Intelligence | AG Markets',
    description: 'Explore planned investor research, portfolio context, allocation views, and watchlists from AG Markets.',
    eyebrow: 'AG Investor Intelligence',
    heading: 'See holdings in the context of a portfolio.',
    intro: 'AG Investor Intelligence is a planned research and portfolio-awareness area for people who want to understand how holdings, asset allocation, and market themes relate to their investing objectives.',
    variant: 'editorial',
    problemTitle: 'Individual asset updates do not show the whole portfolio.',
    problem: 'A collection of interesting investments may still hide concentration, overlapping risks, or changes in allocation. Portfolio context helps frame what deserves a closer look.',
    approachTitle: 'Connect research to portfolio questions.',
    approach: 'The future experience is intended to help users review holdings and themes in an organised way. It will not make suitability decisions or tell users what to buy or sell.',
    steps: [
      { title: 'Organise holdings', copy: 'Bring selected investments into a portfolio view with clear user-provided context.' },
      { title: 'Review allocation', copy: 'Explore broad categories and concentration, with attention to the limits of the underlying data.' },
      { title: 'Follow a theme', copy: 'Keep research notes and watchlists connected to longer-term questions.' },
    ],
    features: [
      { title: 'Portfolio overview', copy: 'A planned summary of holdings, categories, and user-defined reference points.' },
      { title: 'Allocation context', copy: 'Illustrative views designed to make concentration and mix easier to examine.' },
      { title: 'Investment watchlists', copy: 'Track assets or themes that are under research without implying a position.' },
      { title: 'Research notes', copy: 'Keep an organised record of questions and observations for later review.' },
    ],
    exampleTitle: 'Illustrative allocation review',
    example: 'An investor reviewing a hypothetical portfolio notices that several holdings may share exposure to one sector. The sample view prompts further research; it does not assess suitability or forecast returns.',
    metrics: [
      { label: 'View', value: 'Asset mix' },
      { label: 'Question', value: 'Concentration' },
      { label: 'Next step', value: 'Independent review' },
    ],
    benefits: ['Connect individual research with portfolio-wide context.', 'Notice concentration questions earlier.', 'Keep long-term monitoring distinct from short-term trading.'],
    education: [
      { title: 'Diversification', copy: 'Diversification spreads exposure across assets, sectors, issuers, regions, or return drivers. It can reduce the effect of a loss concentrated in one holding, but correlations can rise during stress and diversification cannot eliminate market risk.' },
      { title: 'Asset allocation', copy: 'Asset allocation is the mix of broad asset classes in a portfolio. It should be considered against an investor’s goals, time horizon, liquidity needs, risk tolerance, and constraints; there is no universally suitable allocation.' },
      { title: 'Investment horizon and liquidity', copy: 'A longer horizon may allow more time to withstand fluctuations, but it does not ensure recovery or make an investment appropriate. Match the accessibility and volatility of assets to when funds may be needed.' },
      { title: 'Risk and return', copy: 'Higher expected return generally involves accepting uncertainty or risk, but taking more risk does not guarantee a higher realised return. Distinguish nominal from inflation-adjusted return and account for fees, taxes, and cash flows when comparing performance.' },
      { title: 'Correlation and concentration', copy: 'Correlation describes how returns have moved together over a selected historical period; it can change and does not prove a causal relationship. Holdings that look different may share exposure to the same industry, currency, rate, or economic factor.' },
      { title: 'Review the whole portfolio', copy: 'Consider position weights, underlying exposures, cash needs, costs, and rebalancing rules together. Any portfolio illustration on this website is fictional and cannot assess personal suitability.' },
    ],
  },
  {
    path: '/performance-analytics',
    label: 'Performance Analytics',
    title: 'Performance Analytics | AG Markets',
    description: 'Learn about planned AG Markets performance reporting for reviewing trading outcomes, consistency, and drawdown.',
    eyebrow: 'Performance Analytics',
    heading: 'Measure the process behind the outcome.',
    intro: 'Performance Analytics is a planned review space for traders who want to understand patterns in their own historical activity rather than judge a process from one result.',
    variant: 'split',
    problemTitle: 'A profitable period does not explain how it happened.',
    problem: 'Headline profit can hide inconsistent sizing, large drawdowns, or results driven by a small number of trades. Process measures provide a richer basis for personal review.',
    approachTitle: 'Turn trading history into questions worth asking.',
    approach: 'The planned analytics experience would organise user-provided or connected history into reviewable summaries. Data quality, fees, open positions, and reporting periods all affect interpretation.',
    steps: [
      { title: 'Choose a review period', copy: 'Set a time range and define which accounts or activities to include.' },
      { title: 'Inspect the measures', copy: 'Review metrics such as drawdown, average outcome, and adherence to a recorded plan.' },
      { title: 'Find a pattern', copy: 'Compare periods or categories and frame a question for the next review cycle.' },
    ],
    features: [
      { title: 'Outcome distribution', copy: 'Understand how results are spread across a sample rather than relying on a single headline.' },
      { title: 'Drawdown review', copy: 'Examine declines from prior peaks and the time taken to recover in historical records.' },
      { title: 'Consistency indicators', copy: 'Compare activity across periods, strategies, or user-defined categories.' },
      { title: 'Process notes', copy: 'Pair metrics with reflections about plan adherence and decision context.' },
    ],
    exampleTitle: 'Sample monthly review',
    example: 'A hypothetical trader compares two months and sees that returns were similar but the path and largest drawdown differed. The useful question becomes what changed in exposure and execution.',
    metrics: [
      { label: 'Window', value: 'Two months' },
      { label: 'Comparison', value: 'Return + drawdown' },
      { label: 'Focus', value: 'Process review' },
    ],
    benefits: ['Look beyond a win-rate headline.', 'Use consistent periods for comparison.', 'Make measured reflection part of a trading routine.'],
    education: [
      { title: 'Win rate', copy: 'Win rate is winning trades divided by all closed trades in the defined sample. It ignores the size of wins and losses: a high win rate can still lose money if occasional losses are sufficiently large.' },
      { title: 'Expectancy', copy: 'A simple per-trade expectancy is (win probability × average win) − (loss probability × average loss), with costs included for a realistic estimate. For illustration, a 40% win rate, $150 average win, and $80 average loss gives 0.4 × $150 − 0.6 × $80 = $12 per trade before any omitted costs; a small sample may not represent future outcomes.' },
      { title: 'Profit factor and average win/loss', copy: 'Profit factor is gross profits divided by gross losses over a chosen sample. Average win-to-average loss compares mean winning and losing trade sizes. Neither metric describes risk on open positions or guarantees that the sample will repeat.' },
      { title: 'Equity curve', copy: 'An equity curve plots account value through time, ideally including deposits, withdrawals, fees, and open-position treatment consistently. Examine both the overall path and the variability; a rising endpoint can conceal long or severe declines.' },
      { title: 'Maximum drawdown', copy: 'Maximum drawdown is the largest peak-to-trough decline in the measured equity series, usually expressed as a percentage of the peak. Results depend on the date range, sampling frequency, and whether intraperiod lows and open positions are included.' },
      { title: 'Interpret metrics together', copy: 'Use enough observations, consistent definitions, and comparable periods. Include spread, commission, slippage, and leverage where available, and treat historical analysis as a description of a sample—not a forecast or verified AG Markets performance.' },
    ],
  },
  {
    path: '/academy',
    label: 'AG Academy',
    title: 'AG Academy | AG Markets',
    description: 'Explore the planned AG Academy learning paths for market fundamentals, technical research, and risk awareness.',
    eyebrow: 'AG Academy',
    heading: 'Build market knowledge one concept at a time.',
    intro: 'AG Academy is the planned education area of AG Markets, with structured learning paths intended to help people understand financial markets, analytical methods, and the risks involved.',
    variant: 'editorial',
    problemTitle: 'Scattered tutorials make it difficult to build foundations.',
    problem: 'A learner can encounter unfamiliar terms without knowing what to study first or how one concept connects to the next. Structured lessons can provide a clearer learning sequence.',
    approachTitle: 'Progress from fundamentals to informed questions.',
    approach: 'The proposed Academy curriculum is designed around short learning paths, plain-language explanations, and hypothetical examples. It is educational material—not personalised financial advice or a promise of results.',
    steps: [
      { title: 'Start with foundations', copy: 'Learn market participants, common instruments, and the basics of how prices are quoted.' },
      { title: 'Study a method', copy: 'Explore research approaches such as technical analysis while considering their limitations.' },
      { title: 'Practise risk awareness', copy: 'Use scenarios to understand uncertainty, leverage, and the possibility of loss.' },
    ],
    features: [
      { title: 'Trading fundamentals', copy: 'Core vocabulary, order concepts, and market mechanics for new learners.' },
      { title: 'Technical analysis', copy: 'Lessons on chart structure and indicators with emphasis on interpretation limits.' },
      { title: 'Risk management', copy: 'Educational material on exposure, drawdown, and planning for adverse outcomes.' },
      { title: 'Investor learning', copy: 'Introductory material on diversification, time horizons, and portfolio questions.' },
    ],
    exampleTitle: 'A learning path in practice',
    example: 'A new learner might first study how currency pairs are quoted, then review a chart example, and finally explore how position size changes the impact of a hypothetical price move.',
    metrics: [
      { label: 'Format', value: 'Guided lessons' },
      { label: 'Practice', value: 'Hypothetical cases' },
      { label: 'Purpose', value: 'Financial education' },
    ],
    benefits: ['Follow a more coherent learning sequence.', 'Build vocabulary before exploring advanced tools.', 'Learn with risk and uncertainty included.'],
    education: [
      { title: 'Lesson 1 — Forex fundamentals', copy: 'An FX pair quotes one currency in terms of another: in EUR/USD, EUR is the base and USD the quote currency. If the quote rises, one euro buys more dollars. Learn bid and ask, spread, pip, lot, and leverage before interpreting a price move. Leverage magnifies losses as well as gains.' },
      { title: 'Lesson 2 — Technical analysis', copy: 'Start by selecting an instrument and timeframe. Mark observable swing highs and lows, then describe whether price is ranging or forming higher highs and lows. Support and resistance are zones inferred from prior behaviour, not guaranteed turning points. Indicators summarise price data and should not be treated as independent proof.' },
      { title: 'Lesson 3 — Risk management', copy: 'Choose a hypothetical maximum loss before considering quantity. For example, 1% of a $10,000 example balance is $100; with a 20-pip stop and an assumed $10-per-pip value per standard lot, the arithmetic gives 0.5 lots before costs and contract-specific adjustments. Stops can slip, so the example does not cap actual loss.' },
      { title: 'Lesson 4 — Trading psychology', copy: 'Fear, overconfidence, and loss aversion can affect decisions. A written plan, pre-defined risk limit, and review routine can make behaviour easier to examine, but they do not remove emotion or guarantee discipline. Record decisions and process rather than judging skill from one outcome.' },
      { title: 'Lesson 5 — Fundamental analysis', copy: 'Economic releases are interpreted relative to expectations, prior data, and revisions. Interest-rate decisions, inflation, employment, and growth can affect currencies and other assets through several channels. Company analysis adds earnings, cash flow, debt, and sector conditions; no single data point dictates price.' },
      { title: 'Lesson 6 — Investing and portfolios', copy: 'An investment portfolio combines holdings with different risks and time horizons. Asset allocation and diversification can manage concentration, while correlations and risks can change. Consider liquidity, fees, taxes, and personal objectives, and seek qualified advice for decisions specific to your circumstances.' },
    ],
  },
  {
    path: '/about',
    label: 'About',
    title: 'About AG Markets | Our Approach',
    description: 'Learn about the purpose, principles, and public-web presence of AG Markets.',
    eyebrow: 'About AG Markets',
    heading: 'Financial intelligence with a risk-aware point of view.',
    intro: 'AG Markets is being developed to make market research, educational resources, and planning tools easier to explore in one connected product ecosystem.',
    variant: 'editorial',
    problemTitle: 'Technology should support judgement, not replace it.',
    problem: 'Financial decisions are personal and markets are uncertain. A useful platform should make information easier to examine while remaining clear about what its tools can and cannot do.',
    approachTitle: 'A public website and an application with different roles.',
    approach: 'This website introduces AG Markets, explains planned products, and provides educational information. A separately developed application will host practical experiences after its destinations and availability are confirmed.',
    steps: [
      { title: 'Explain the products', copy: 'Use clear public pages to show the intended value and limits of each product area.' },
      { title: 'Demonstrate responsibly', copy: 'Label sample interfaces and scenarios as illustrative rather than live or operational.' },
      { title: 'Build the application separately', copy: 'Keep interactive product functionality and account experiences outside this marketing website.' },
    ],
    features: [
      { title: 'Clarity', copy: 'Explain product ideas in accessible language and distinguish previews from working tools.' },
      { title: 'Discipline', copy: 'Keep planning and risk awareness visible across the product story.' },
      { title: 'Separation', copy: 'Maintain an independent application architecture for future practical functionality.' },
      { title: 'Transparency', copy: 'Use clear notes where availability, pricing, or product details are not yet final.' },
    ],
    exampleTitle: 'How to use this website',
    example: 'Visitors can compare product concepts, learn about financial-market topics, review planned membership benefits, and follow configurable links to the future application.',
    metrics: [
      { label: 'This website', value: 'Explain + educate' },
      { label: 'Future app', value: 'Practical tools' },
      { label: 'Previews', value: 'Illustrative' },
    ],
    benefits: ['Understand the platform before registering.', 'Find product information without entering an app dashboard.', 'See what is planned and what remains a preview.'],
    education: [
      { title: 'Purpose', copy: 'AG Markets’ vision is to make financial-market research and learning more understandable by bringing context, clear explanations, and risk awareness into a coherent product story.' },
      { title: 'The problem it aims to address', copy: 'Market information is dispersed across headlines, charts, data sources, and personal notes. This can make it difficult to compare assumptions, distinguish evidence from interpretation, or see how an idea relates to risk.' },
      { title: 'How to use this public website', copy: 'The current website introduces AG Markets and provides general educational material. Product screens, market figures, and scenarios shown here are illustrative; this site is not a live-data service or operational financial application.' },
      { title: 'A separate future application', copy: 'Practical tools and interactive product functionality are planned for a separate AG Markets application. Describing a proposed feature here does not mean it is built, available, or producing financial analysis today.' },
      { title: 'A guiding boundary', copy: 'Technology can help organise information, but it cannot remove uncertainty or replace informed human judgement. No product description is a promise of performance, guaranteed AI accuracy, or personalised advice.' },
    ],
  },
]

export interface LegalPage {
  path: string
  label: string
  title: string
  description: string
  eyebrow: string
  heading: string
  intro: string
  sections: { title: string; paragraphs: string[] }[]
}

export const legalPages: LegalPage[] = [
  {
    path: '/privacy-policy',
    label: 'Privacy Policy',
    title: 'Privacy Policy | AG Markets',
    description: 'Read the AG Markets privacy notice framework and the information that must be confirmed before publication.',
    eyebrow: 'Privacy',
    heading: 'Privacy Policy',
    intro: 'This draft describes the topics a complete AG Markets privacy notice should address. The organization’s actual practices, responsible entity, and contact details must be confirmed before this page is published as a final policy.',
    sections: [
      { title: 'Information and purpose', paragraphs: ['A final notice should identify what information the public website collects, why it is needed, and whether it is provided directly by a visitor or generated through site usage.', 'Do not assume that application account data is processed by this public website. The future application may have separate data flows and a separate notice.'] },
      { title: 'Use, sharing, and retention', paragraphs: ['The published policy should explain the actual purposes for using personal information, any service providers or other recipients, and how long information is retained.', 'Describe only practices that have been implemented and verified. Include the legal basis or jurisdiction-specific details only after qualified review.'] },
      { title: 'Choices and contact', paragraphs: ['A complete notice should explain the privacy rights and choices available to visitors in the jurisdictions where AG Markets operates.', 'Before launch, provide a monitored privacy contact and a process for handling requests. The current support destination is a configurable placeholder.'] },
      { title: 'Policy updates', paragraphs: ['State how material changes will be communicated and the effective date of the final policy. Review this page whenever website technologies or data practices change.'] },
    ],
  },
  {
    path: '/terms',
    label: 'Terms and Conditions',
    title: 'Terms and Conditions | AG Markets',
    description: 'Review the draft terms framework for use of the AG Markets public information website.',
    eyebrow: 'Terms',
    heading: 'Terms and Conditions',
    intro: 'These draft topics are not a complete agreement. AG Markets must confirm the contracting entity, governing law, and actual website services with qualified legal counsel before publication.',
    sections: [
      { title: 'Website scope', paragraphs: ['This public website explains and demonstrates AG Markets products. Illustrative interface previews are not operational financial tools, and future application services may be governed by separate terms.', 'A final version should identify the services these terms cover and who may use them.'] },
      { title: 'Permitted use and content', paragraphs: ['The final terms should set out acceptable use of the website and clarify ownership or permitted use of text, marks, and other materials.', 'Do not rely on this draft to define intellectual-property permissions or restrictions until those terms have been reviewed and approved.'] },
      { title: 'Availability and liability', paragraphs: ['Explain service availability, warranty exclusions, and liability limits only in language that is appropriate for the applicable law and business model.', 'Nothing in this draft should be treated as a final allocation of legal responsibility.'] },
      { title: 'Contact and changes', paragraphs: ['Provide an effective date, a process for updates, and a working contact route when the final terms are published.'] },
    ],
  },
  {
    path: '/risk-disclosure',
    label: 'Risk Disclosure',
    title: 'Risk Disclosure | AG Markets',
    description: 'Understand the general risks of financial markets and why illustrative AG Markets content is not a recommendation.',
    eyebrow: 'Risk Disclosure',
    heading: 'Financial markets involve risk.',
    intro: 'This general disclosure highlights important risks for visitors exploring AG Markets. It does not describe every risk of every product, account, or jurisdiction.',
    sections: [
      { title: 'Possible loss of capital', paragraphs: ['The value of investments and financial instruments can fall as well as rise. You may lose some or all of the capital you commit, and losses can occur quickly.', 'Leveraged products can magnify both gains and losses. Depending on the instrument and account terms, losses may exceed an initial amount deposited.'] },
      { title: 'Uncertainty and liquidity', paragraphs: ['Prices can move unpredictably in response to economic, political, company-specific, or market-structure events. Past performance does not reliably predict future results.', 'Liquidity, spreads, trading hours, execution conditions, and product terms can change. A displayed or illustrative price is not a promise of an executable price.'] },
      { title: 'Personal suitability', paragraphs: ['AG Markets website content is general and educational. It is not tailored to your objectives, financial situation, or experience and should not be treated as a personal recommendation.', 'Consider whether a product is appropriate for you and seek independent professional advice where necessary.'] },
      { title: 'Preview limitations', paragraphs: ['Product screens and sample scenarios on this website are illustrative only. They are not live market data, working calculations, investment research, or trade signals.'] },
    ],
  },
  {
    path: '/financial-disclaimer',
    label: 'Financial Disclaimer',
    title: 'Financial Disclaimer | AG Markets',
    description: 'Read the AG Markets financial-content disclaimer covering education, previews, accuracy, and independent decisions.',
    eyebrow: 'Financial Disclaimer',
    heading: 'Information, not individual advice.',
    intro: 'The AG Markets public website is designed to introduce products and provide general educational material. This page explains the boundaries of that information.',
    sections: [
      { title: 'No personal financial advice', paragraphs: ['Website content is not investment, trading, tax, accounting, or legal advice and does not take account of an individual visitor’s circumstances.', 'Nothing on this site is an offer, solicitation, or recommendation to buy, sell, or hold a financial instrument.'] },
      { title: 'Illustrations and previews', paragraphs: ['Charts, balances, calculations, conversations, instruments, and results displayed in product previews are fictional or illustrative examples. They do not represent a live connection or expected result.', 'Future application tools will have their own availability, limitations, and terms. Their development or description on this site does not mean they are currently operational.'] },
      { title: 'Accuracy and independent verification', paragraphs: ['Information may be incomplete, delayed, or changed without notice. Visitors should independently verify important facts with authoritative sources before relying on them.', 'AG Markets does not guarantee that any strategy, analysis method, or tool will produce a particular financial outcome.'] },
      { title: 'Professional guidance', paragraphs: ['Seek advice from an appropriately qualified independent professional where you need guidance tailored to your circumstances.'] },
    ],
  },
  {
    path: '/cookie-policy',
    label: 'Cookie Policy',
    title: 'Cookie Policy | AG Markets',
    description: 'Read the cookie-policy framework that must be aligned with the actual technologies used by the AG Markets website.',
    eyebrow: 'Cookies',
    heading: 'Cookie Policy',
    intro: 'This draft explains what a complete cookie notice needs to cover. The technologies currently used by the published site must be audited before this is presented as a final policy.',
    sections: [
      { title: 'What cookies and similar tools do', paragraphs: ['Cookies and similar technologies can store preferences, support essential site functions, or help measure how a website is used.', 'The final policy should list the actual technologies deployed on this website rather than assume particular analytics or advertising services are present.'] },
      { title: 'Categories and choices', paragraphs: ['Identify each technology by purpose, provider, and retention period. Explain which tools are essential and which require consent under applicable law.', 'Provide working preference controls where required. Browser settings may also allow visitors to manage or remove stored cookies.'] },
      { title: 'Third-party services', paragraphs: ['If third-party content or services set technologies on this site, identify them and link to their relevant notices after confirming the integration and its data flow.'] },
      { title: 'Review before launch', paragraphs: ['Complete a technical cookie audit, confirm the applicable consent requirements, and add an effective date and contact route before publishing this as a final policy.'] },
    ],
  },
]

export const faqItems = [
  { question: 'What is AG Markets?', answer: 'AG Markets is a planned financial intelligence platform with product concepts spanning market research, risk awareness, trading utilities, investor context, and education. This website explains those concepts; it is not the application itself.' },
  { question: 'Is the AG Markets application available?', answer: 'No application functionality is provided by this project. The current product is a public information and education website; any future application will be separate. Availability has not been announced.' },
  { question: 'Are the product previews live tools or live market data?', answer: 'No. Interface screens, prices, charts, sample conversations, and scenarios on this website are illustrative. They are not connected to market data, do not calculate positions, and do not monitor or execute trades.' },
  { question: 'Can AI analysis guarantee an accurate forecast?', answer: 'No. AI-assisted analysis can omit context, use outdated or incorrect inputs, or produce a plausible but mistaken explanation. It cannot guarantee accuracy or market outcomes; verify source information and use independent human judgement.' },
  { question: 'Does AG Markets provide personal investment or trading advice?', answer: 'No. Website material is general education and product information, not advice tailored to your finances, objectives, or experience. Consider independent qualified advice where you need guidance for your circumstances.' },
  { question: 'Are the examples or trading results real?', answer: 'No. Financial figures, instruments, charts, account values, and outcomes in previews are hypothetical illustrations, not live data, customer results, or AG Markets trading performance.' },
  { question: 'How much will AG Markets cost?', answer: 'No subscription price or purchase offer is available. Pricing and any final membership details will be announced when the separate application is ready.' },
  { question: 'How can I contact AG Markets?', answer: 'The Contact page links to the support destination currently configured for this website. That destination is a placeholder, not a confirmed monitored contact channel; do not send passwords, payment details, or sensitive financial information.' },
]

export const pricingPlans = [
  {
    name: 'Explorer',
    audience: 'For people building a regular market-research habit.',
    description: 'A proposed starting tier centred on market awareness and guided learning.',
    benefits: ['Core market overview concepts', 'Introductory planning utilities', 'Selected Academy learning paths', 'Personal watchlist concept'],
  },
  {
    name: 'Pro',
    audience: 'For active market participants who need a broader research workflow.',
    description: 'A proposed tier combining deeper research support with practical planning features.',
    benefits: ['Expanded AI Analyst research', 'Broader Radar monitoring options', 'Full trading-tool collection', 'Performance review features'],
  },
  {
    name: 'Elite',
    audience: 'For experienced users who want a more comprehensive view.',
    description: 'A proposed tier for expanded monitoring and portfolio research capabilities.',
    benefits: ['Extended intelligence features', 'Additional monitoring preferences', 'Deeper portfolio context', 'Expanded analytical summaries'],
  },
]

export const productNavigation = [
  { label: 'AI Intelligence', path: '/ai-intelligence' },
  { label: 'AG AI Analyst', path: '/ai-analyst' },
  { label: 'AG Market Radar', path: '/market-radar' },
  { label: 'AG Risk Intelligence', path: '/risk-intelligence' },
  { label: 'Trading Tools', path: '/trading-tools' },
  { label: 'Investor Intelligence', path: '/investor-intelligence' },
  { label: 'Performance Analytics', path: '/performance-analytics' },
  { label: 'AG Academy', path: '/academy' },
]

export const companyNavigation = [
  { label: 'Pricing', path: '/pricing' },
  { label: 'About', path: '/about' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
]

export const legalNavigation = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms and Conditions', path: '/terms' },
  { label: 'Risk Disclosure', path: '/risk-disclosure' },
  { label: 'Financial Disclaimer', path: '/financial-disclaimer' },
  { label: 'Cookie Policy', path: '/cookie-policy' },
]
