export type PageVariant = 'split' | 'editorial' | 'dark' | 'legal'

export interface MarketingPage {
  path: string
  label: string
  title: string
  description: string
  eyebrow: string
  heading: string
  intro: string
  intendedAudience?: string
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
    intendedAudience: 'People who research markets across multiple sources and want to organise questions, assumptions, and alternative explanations.',
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
    intendedAudience: 'Traders and investors who want to study a market question, understand analytical concepts, and compare possible interpretations.',
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
    intendedAudience: 'People who monitor selected markets and want to distinguish a change worth reviewing from ordinary movement.',
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
    intendedAudience: 'Traders and investors who want to understand position risk, portfolio exposure, and the assumptions behind a scenario.',
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
    intendedAudience: 'Learners and market participants who want to understand calculation inputs, record a process, and check instrument-specific assumptions.',
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
      { title: 'Availability on this website', copy: 'This public website includes limited browser-based position-sizing, risk/reward, and simplified pip-value education demonstrations on relevant pages. It does not provide a production trading calculator, instrument-specific pip-value service, brokerage connection, order placement, live market feed, or trading journal.' },
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
    intendedAudience: 'Investors who want to examine allocation, concentration, and shared risk drivers across a hypothetical or self-organised portfolio.',
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
    intendedAudience: 'Traders reviewing a defined sample of historical activity and looking beyond a single win-rate or profit figure.',
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
    intendedAudience: 'People building financial-market knowledge, from foundational terminology through analysis, risk, and investing principles.',
    variant: 'editorial',
    problemTitle: 'Scattered tutorials make it difficult to build foundations.',
    problem: 'A learner can encounter unfamiliar terms without knowing what to study first or how one concept connects to the next. Structured lessons can provide a clearer learning sequence.',
    approachTitle: 'Progress from fundamentals to informed questions.',
    approach: 'The proposed Academy curriculum is designed around short learning paths, plain-language explanations, and hypothetical examples. It is educational material—not personalised financial advice or a promise of results.',
    steps: [
      { title: 'Start with risk', copy: 'Learn how position size, leverage, and possible loss relate before considering a market idea.' },
      { title: 'Study market evidence', copy: 'Explore technical and fundamental analysis while considering their limits and uncertainty.' },
      { title: 'Build investing foundations', copy: 'Learn terminology, diversification, investment horizons, and the role of independent judgement.' },
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
      { title: 'Lesson 1 — Risk management and position sizing', copy: 'Choose a hypothetical loss budget before considering quantity. For illustration, 1% of a $10,000 account is $100. If a USD-quoted FX pair has an assumed $10 pip value per standard lot and a 20-pip stop, $100 ÷ (20 × $10) = 0.5 standard lots before costs and contract-specific adjustments. A stop may slip; this example does not cap actual loss or recommend a position.' },
      { title: 'Lesson 2 — Technical analysis', copy: 'Select an instrument and timeframe, then describe observable swing highs and lows. A sequence of higher highs and lows can describe an uptrend; support and resistance are zones inferred from prior behaviour, not guaranteed turning points. Indicators transform historical data and are not independent proof of a future move.' },
      { title: 'Lesson 3 — Fundamental analysis', copy: 'Interpret economic releases relative to expectations, prior data, and revisions. Interest-rate decisions, inflation, employment, and growth affect assets through several channels. Company analysis also considers earnings, cash flow, debt, and sector conditions; no single data point dictates price.' },
      { title: 'Lesson 4 — Trading psychology', copy: 'Fear, overconfidence, and loss aversion can affect decisions. A written plan, pre-defined risk limit, and review routine can make behaviour easier to examine, but they do not remove emotion or guarantee discipline. Record decisions and process rather than judging skill from one outcome.' },
      { title: 'Lesson 5 — Portfolio diversification', copy: 'Diversification spreads exposure across assets, sectors, issuers, and return drivers. It can reduce the effect of concentration in some circumstances, but correlations can rise during stress and it cannot eliminate market risk. Review the underlying exposures, not just the number of holdings.' },
      { title: 'Lesson 6 — Financial-market terminology', copy: 'A bid is a quoted buying price and an ask is a quoted selling price; the difference is the spread. A pip and a lot are common FX conventions, while leverage describes exposure relative to capital. Liquidity concerns how readily an asset can be traded; volatility describes the magnitude, not direction, of price variation.' },
      { title: 'Lesson 7 — Investment principles', copy: 'Asset allocation should be considered against goals, time horizon, liquidity needs, risk tolerance, fees, and taxes. Nominal return does not account for inflation, and realised returns can differ from expectations. Historical correlation and performance do not guarantee future outcomes or establish personal suitability.' },
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
      { title: 'Transparency', copy: 'Publish confirmed prices while clearly marking unconfigured entitlements, availability, and application links.' },
    ],
    exampleTitle: 'How to use this website',
    example: 'Visitors can compare product concepts, study financial-market topics, review published plan prices, and check whether verified application links have been configured.',
    metrics: [
      { label: 'This website', value: 'Explain + educate' },
      { label: 'Future app', value: 'Practical tools' },
      { label: 'Previews', value: 'Illustrative' },
    ],
    benefits: ['Understand the platform before registering.', 'Find product information without entering an app dashboard.', 'See what is planned and what remains a preview.'],
    education: [
      { title: 'Purpose', copy: 'AG Markets’ vision is to make financial-market research and learning more understandable by bringing context, clear explanations, and risk awareness into a coherent product story.' },
      { title: 'The problem it aims to address', copy: 'Market information is dispersed across headlines, charts, data sources, and personal notes. This can make it difficult to compare assumptions, distinguish evidence from interpretation, or see how an idea relates to risk.' },
      { title: 'How to use this public website', copy: 'The current website introduces AG Markets and provides general educational material, including limited in-browser calculators with hypothetical inputs. Product screens, market figures, and scenarios shown here are illustrative; this site is not a live-data service or operational financial application.' },
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
  version: string
  prepared: string
  effectiveDate: string
  publicationBlockers: string[]
  sections: { title: string; paragraphs: string[] }[]
  sources: { label: string; href: string }[]
}

const legalDraftMetadata = {
  version: 'Draft v0.1',
  prepared: '28 November 2026',
  effectiveDate: 'Not set; effective only after review and adoption',
}

const legalSources = {
  popia: {
    label: 'Protection of Personal Information Act 4 of 2013 — Information Regulator',
    href: 'https://inforegulator.org.za/acts/',
  },
  popiaRegulations2025: {
    label: 'POPIA Regulations amendment, Notice 6126, Government Gazette 52523 (17 April 2025)',
    href: 'https://www.justice.gov.za/legislation/notices/2025/20250417-gg52523gon6126-POPIA-Regulations-Amendment.pdf',
  },
  popiaNotice2026: {
    label: 'POPIA Notice 8199, Government Gazette 55756 (20 November 2026; SAFPS-specific)',
    href: 'https://www.gov.za/documents/notices/protection-personal-information-exemption-personal-information-children-special',
  },
  regulatorPopia: {
    label: 'Information Regulator: POPIA information and guidance',
    href: 'https://inforegulator.org.za/popia/',
  },
  cpa: {
    label: 'Consumer Protection Act 68 of 2008 — South African Government',
    href: 'https://www.gov.za/documents/consumer-protection-act',
  },
  cpaAmendment2026: {
    label: 'Information Regulator statement on the CPA Amendment Regulations gazetted on 15 April 2026',
    href: 'https://inforegulator.org.za/wp-content/uploads/2026/04/MEDIA-STATEMENT-REGULATOR-NOTES-PUBLISHED-GAZETTE-OF-THE-CONSUMER-PROTECT-ACT-AMENDMENT-REGULATIONS-2026.pdf',
  },
  ecta: {
    label: 'Electronic Communications and Transactions Act 25 of 2002 — South African Government',
    href: 'https://www.gov.za/documents/electronic-communications-and-transactions-act',
  },
  fais: {
    label: 'Financial Advisory and Intermediary Services Act 37 of 2002 — South African Government',
    href: 'https://www.gov.za/documents/financial-advisory-and-intermediary-services-act',
  },
  fscaSearch: {
    label: 'FSCA search for authorised Financial Services Providers',
    href: 'https://www.fsca.co.za/Entity-Persons-Search/?iframe_target=financial-services-providers',
  },
}

export const legalPages: LegalPage[] = [
  {
    path: '/privacy-policy',
    label: 'Privacy Policy',
    title: 'Privacy Policy | AG Markets',
    description: 'Draft privacy notice for the AG Markets public information website, with verified scope and publication blockers.',
    eyebrow: 'Privacy',
    heading: 'Privacy Policy',
    intro: 'This draft concerns only the AG Markets public information and education website in this repository. It is not a privacy notice for the separate future application and must not be treated as an adopted policy.',
    ...legalDraftMetadata,
    publicationBlockers: [
      'Identify the legal entity operating the website, its address, its role under POPIA, and its registered Information Officer and privacy contact.',
      'Confirm the production host, CDN, access/security logs, retention periods, processors, processing locations, and any cross-border transfers.',
      'Complete a production data-flow and cookie scan, then establish a monitored process for data-subject requests, complaints, and security incidents.',
      'Confirm the current law and Gazette position, including the scope of any relevant notices, with South African privacy counsel before adoption.',
    ],
    sections: [
      {
        title: 'Scope and what the website does',
        paragraphs: [
          'This website introduces AG Markets and provides general financial education. The AG Markets application is separate and is not operated by this project. Any future application must have a notice that accurately describes its own data flows.',
          'A review of this repository found no on-site contact form, account registration, login, payment checkout, analytics tag, cookie-writing code, browser storage API, embedded third-party content, or server/API submission from the educational demonstrations. The calculators use temporary in-page state for hypothetical inputs. This code review does not inspect the production host, browser extensions, network infrastructure, or server-side logs.',
        ],
      },
      {
        title: 'Information, purposes, and recipients',
        paragraphs: [
          'A browser request to a deployed website can expose technical information to its hosting, delivery, or security providers. The actual information collected, purposes, recipients, locations, and retention for this website have not been verified. This draft therefore makes no promise that no personal information is processed and does not invent a host, service provider, or retention period.',
          'No contact form or account system is implemented here, and no application or support destination is configured. Do not send personal, account, payment, or financial information through a destination that has not been verified.',
          'Before adoption, the operator must document the actual purposes and lawful grounds for each processing activity, any operators or other recipients, applicable safeguards, and any transfer of information outside South Africa. Only verified practices should be described.',
        ],
      },
      {
        title: 'Data-subject requests and complaints',
        paragraphs: [
          'POPIA provides rights and remedies that may include requesting access to personal information, asking for correction or deletion where applicable, objecting to certain processing, and complaining to the Information Regulator. The availability and limits of each right depend on the Act and the circumstances.',
          'No monitored AG Markets privacy contact or request-handling process is configured in this project. It must be provided before this notice is adopted. The Information Regulator publishes POPIA information and guidance at the source linked below.',
        ],
      },
      {
        title: 'Security, retention, and incidents',
        paragraphs: [
          'The site operator must confirm its reasonable technical and organisational safeguards, retention schedule, deletion process, and incident-response procedure. This repository does not establish how the production host handles request logs or security events, so no security certification, storage location, retention duration, or breach-response promise is made here.',
          'Where POPIA section 22 applies, the responsible party and operator must follow the Act’s security-compromise notification requirements. The actual responsible party and operational contact path remain to be confirmed.',
        ],
      },
      {
        title: 'Children, special information, and direct marketing',
        paragraphs: [
          'The reviewed website code does not request identity, health, biometric, criminal-behaviour, or other special personal information, and it has no email or SMS marketing sign-up. The intended audience, any age restrictions, and how the production environment handles such information have not been verified.',
          'The Information Regulator’s Notice 8199 in Government Gazette 55756 (20 November 2026) grants specified exemptions and authorisations to the Southern African Fraud Prevention Service. It is a named-party notice, not a general exemption for AG Markets or other websites.',
          'The Information Regulator also noted that CPA Amendment Regulations were gazetted on 15 April 2026 and that POPIA direct-marketing rules remain relevant. The exact commencement clause and any obligations applicable to AG Markets must be checked against the Gazette before any marketing feature is introduced; this draft does not claim an effective date.',
        ],
      },
      {
        title: 'Law and policy status',
        paragraphs: [
          'POPIA, its regulations, and applicable consumer and electronic-communications laws may govern relevant processing. The official Information Regulator index reviewed lists the 2018 POPIA Regulations. They were amended by Notice 6126 in Government Gazette 52523 on 17 April 2025; that notice states that the amendment is for implementation with immediate effect.',
          'Government Notice 8199 in Government Gazette 55756 (20 November 2026) is a set of named-party notices for the Southern African Fraud Prevention Service, not a general amendment to the POPIA Regulations or an exemption for AG Markets. No separate general 2026 POPIA Regulations instrument was identified in the official sources reviewed. The operator must recheck the current Gazette and confirm applicability with South African counsel before adoption.',
          'This page is Draft v0.1 only. Its effective date is not set, and publication is blocked until the entity, actual processing, contacts, operational procedures, and legal review are complete.',
        ],
      },
    ],
    sources: [legalSources.popia, legalSources.popiaRegulations2025, legalSources.popiaNotice2026, legalSources.regulatorPopia, legalSources.cpaAmendment2026],
  },
  {
    path: '/terms',
    label: 'Terms and Conditions',
    title: 'Terms and Conditions | AG Markets',
    description: 'Draft terms for the AG Markets public website, clearly separated from future application services.',
    eyebrow: 'Terms',
    heading: 'Terms and Conditions',
    intro: 'These draft terms describe the public website only. The operator, governing law, final service terms, and consumer disclosures must be confirmed by qualified South African counsel before adoption.',
    ...legalDraftMetadata,
    publicationBlockers: [
      'Confirm the contracting website operator, legal name, address, governing law, and a working contact route.',
      'Review the published plan prices and all consumer-facing claims for CPA and ECTA requirements; subscription features, checkout, taxes, cancellation, and refunds are not configured.',
      'Confirm intellectual-property permissions and draft appropriate service, acceptable-use, dispute, and liability provisions without limiting mandatory consumer rights.',
      'Review any future application, AI, market-analysis, or financial-service terms separately, including its regulatory classification.',
    ],
    sections: [
      {
        title: 'What these terms cover',
        paragraphs: [
          'These draft terms concern browsing the AG Markets public website, which presents product information and general education. The separate future AG Markets application is not provided by this project and is not covered by these draft terms.',
          'The website contains illustrative charts and browser-based educational calculators. Calculator results are based on hypothetical inputs and simplified assumptions; they do not connect to a brokerage account, market feed, or order system.',
        ],
      },
      {
        title: 'Availability, accounts, and subscriptions',
        paragraphs: [
          'This project has no account creation, sign-in, checkout, payment processing, or subscription-management service. Application and support links remain unavailable until real destinations are configured. The Explorer, Pro, and Elite price information on the website does not make those services operational; their entitlements and transaction terms have not been configured.',
          'If the operator later offers paid services, it must publish clear pre-contract information and terms appropriate to the actual service and applicable consumer and electronic-transaction laws before accepting orders or payments. No payment, tax, cancellation, or refund terms are established by this draft.',
        ],
      },
      {
        title: 'Use of website material',
        paragraphs: [
          'Visitors may use the website to read its information and education material. Do not attempt to disrupt the website, bypass access controls, or use it in a way that violates applicable law or another person’s rights. The final operator should review and specify any additional acceptable-use rules.',
          'Names, logos, text, illustrations, and other material may be protected by intellectual-property rights. The legal owner and permitted reuse conditions have not been verified for this draft. Do not assume that a mark or asset is available for reuse without permission.',
        ],
      },
      {
        title: 'Financial content and statutory rights',
        paragraphs: [
          'Website material is general information and education, not a personalised recommendation or instruction to transact. This statement describes the current site; it does not determine the regulatory status of a future service. See the Risk Disclosure and Financial Disclaimer pages for further context.',
          'Nothing in these draft terms is intended to exclude or limit a right that cannot lawfully be excluded or limited. Any final warranty, liability, dispute, and consumer-rights language requires review against the actual entity and service.',
        ],
      },
      {
        title: 'Changes and legal review',
        paragraphs: [
          'The operator, applicable law, effective date, complaint route, and process for notifying users of material changes are not established in this project. These terms remain Draft v0.1 and are not an adopted agreement.',
        ],
      },
    ],
    sources: [legalSources.cpa, legalSources.ecta, legalSources.fais, legalSources.cpaAmendment2026],
  },
  {
    path: '/risk-disclosure',
    label: 'Risk Disclosure',
    title: 'Risk Disclosure | AG Markets',
    description: 'General financial-market risk information and the limitations of AG Markets website demonstrations.',
    eyebrow: 'Risk Disclosure',
    heading: 'Financial markets involve risk.',
    intro: 'This general education disclosure describes material risks and the current limits of this public website. It is not a complete warning for any particular product, account, or jurisdiction.',
    ...legalDraftMetadata,
    publicationBlockers: [
      'Have South African financial-services counsel assess the actual website, marketing, and any future AI, Radar, or Investor functionality under FAIS and other applicable laws.',
      'Confirm the operator’s identity and regulatory status; this draft makes no claim that AG Markets or any entity is licensed or authorised.',
      'Review product-specific risks against the instruments, jurisdictions, leverage, execution conditions, and services actually offered before launch.',
    ],
    sections: [
      {
        title: 'Loss, leverage, and product risk',
        paragraphs: [
          'The value of investments and financial instruments can fall as well as rise. You can lose some or all of the amount invested. Some leveraged or derivative products can magnify losses and, depending on the instrument and contract, losses may exceed the amount initially committed.',
          'Foreign exchange involves exchange-rate and counterparty risks; shares and indices can react to company, sector, and broad-market events; commodities can be affected by supply, demand, weather, and policy; and crypto-assets can be highly volatile and may have distinct custody, liquidity, and legal risks. This list is not exhaustive and does not imply that AG Markets offers these products.',
        ],
      },
      {
        title: 'Price, execution, and uncertainty',
        paragraphs: [
          'Prices can gap or move rapidly after economic releases, policy decisions, company announcements, geopolitical events, or changes in liquidity. Spreads, financing costs, slippage, trading hours, and execution conditions can change. An illustrative chart or level is not an executable quote, guaranteed barrier, or prediction.',
          'Past performance and historical patterns do not reliably predict future results. A strategy may behave differently across instruments, time periods, market regimes, and costs.',
        ],
      },
      {
        title: 'Risk calculations on this website',
        paragraphs: [
          'The risk-sizing and risk/reward demonstrations accept hypothetical values and calculate illustrative outputs in the browser. The simplified position-size example assumes each unit gains or loses USD 1 for each USD 1 price move and excludes fees and slippage. Real contract specifications, pip values, currency conversion, margin rules, execution, and costs may change the result materially.',
          'The performance demonstration uses sample assumptions and an illustrative path; it is not an account statement or actual trading record. No value is sent to a brokerage or used to place an order by this website.',
        ],
      },
      {
        title: 'No personal suitability assessment',
        paragraphs: [
          'This website does not assess a visitor’s objectives, financial position, experience, or risk tolerance. Its material and demonstrations are general education, not a personal recommendation or instruction to trade or invest. Consider independent professional advice where appropriate.',
        ],
      },
      {
        title: 'Current service and regulatory review',
        paragraphs: [
          'This public website has no live market feed, brokerage connection, order execution, or operational financial application. Future application features are separate and are not available through this project.',
          'The FAIS Act regulates certain financial advisory and intermediary services. A disclaimer alone does not determine whether an activity is regulated. The operator must obtain specialist South African review of any actual or planned personalised analysis, recommendations, solicitation, or intermediation before launch.',
        ],
      },
    ],
    sources: [legalSources.fais, legalSources.fscaSearch, legalSources.cpa],
  },
  {
    path: '/financial-disclaimer',
    label: 'Financial Disclaimer',
    title: 'Financial Disclaimer | AG Markets',
    description: 'Draft disclaimer for financial education, illustrative calculations, and planned AG Markets products.',
    eyebrow: 'Financial Disclaimer',
    heading: 'Information, not individual advice.',
    intro: 'This draft explains what the AG Markets public website currently does and does not provide. It is not a substitute for legal review of the website or any future financial service.',
    ...legalDraftMetadata,
    publicationBlockers: [
      'Obtain specialist review of all financial claims, AI demonstrations, product marketing, and future app functionality under the FAIS Act and applicable laws.',
      'Confirm the operating entity, regulatory status, financial products or services actually offered, and any required authorisation before publication.',
      'Check all public data, sample calculations, source dates, and disclaimers against the production experience and preserve any non-excludable statutory rights.',
    ],
    sections: [
      {
        title: 'General education, not personal advice',
        paragraphs: [
          'The current public website provides product information and general financial education. Its content does not take account of a visitor’s objectives, financial circumstances, knowledge, or experience and should not be relied on as a personal recommendation or instruction to transact.',
          'This wording describes the current website; it is not a claim that every future service is outside financial-services regulation. Whether conduct constitutes advice or an intermediary service depends on the actual activity and applicable law.',
        ],
      },
      {
        title: 'Illustrative examples and working demonstrations',
        paragraphs: [
          'Charts, market paths, interface previews, asset allocations, performance figures, and sample accounts are hypothetical illustrations, not live prices, customer outcomes, or AG Markets trading performance.',
          'Some educational website demonstrations do calculate values from visitor-entered hypothetical inputs using stated simplified assumptions. Those calculations run in the browser and are not a live-data service, investment research product, trade signal, brokerage connection, or order-execution tool.',
        ],
      },
      {
        title: 'AI, accuracy, and uncertainty',
        paragraphs: [
          'No AI system is demonstrated as an operational market analyst on this public website. Any future AI-assisted output may be incomplete, incorrect, outdated, or based on unsuitable inputs. AI cannot guarantee accuracy, predict market outcomes, or remove financial risk.',
          'Check important facts against current, authoritative sources and use independent judgement. Do not treat an illustrative example, automated explanation, or historical pattern as a guarantee of future performance.',
        ],
      },
      {
        title: 'No regulatory or performance claim',
        paragraphs: [
          'This website makes no representation that AG Markets or an unidentified operating entity holds a financial-services licence, is authorised by a regulator, or has achieved any trading result. Verify the status of any financial-services provider independently with the FSCA where relevant.',
          'A disclaimer does not replace any licence, approval, disclosure, or other requirement that may apply to an actual service. Future analysis, recommendations, marketing, or intermediation must be assessed by qualified South African regulatory counsel before being offered.',
        ],
      },
      {
        title: 'No exclusion of mandatory rights',
        paragraphs: [
          'Nothing in this draft is intended to exclude or limit a right or remedy that applicable law does not permit the operator to exclude or limit. The legal entity, governing law, final liability wording, and effective date remain unconfirmed.',
        ],
      },
    ],
    sources: [legalSources.fais, legalSources.fscaSearch, legalSources.cpa, legalSources.ecta],
  },
  {
    path: '/cookie-policy',
    label: 'Cookie Policy',
    title: 'Cookie Policy | AG Markets',
    description: 'Draft cookie notice based on a repository review, with production scanning and configuration still required.',
    eyebrow: 'Cookies',
    heading: 'Cookie Policy',
    intro: 'This draft reports what was found in the website source code. It does not establish what the production host, CDN, security layer, or linked external sites may store.',
    ...legalDraftMetadata,
    publicationBlockers: [
      'Inspect the deployed website in a clean browser and audit cookies, local/session storage, response headers, network requests, analytics, embedded content, and third-party scripts.',
      'Confirm each technology’s operator, purpose, duration, access, location, and whether it processes personal information.',
      'Obtain South African legal review of notice, consent, and preference requirements and implement working controls if required.',
    ],
    sections: [
      {
        title: 'What the source-code review found',
        paragraphs: [
          'The reviewed website code contains no cookie-writing API, analytics or advertising tag, embedded third-party content, or browser local/session-storage call. The Inter font is bundled with the website rather than loaded from a remote font service. This describes the repository, not a verified production deployment.',
          'The production host, CDN, web application firewall, and other infrastructure may set cookies or process technical request data. Their configuration has not been supplied or inspected. For that reason this draft cannot promise that the deployed site sets no cookies or list providers, purposes, or expiry periods.',
        ],
      },
      {
        title: 'Preferences and external destinations',
        paragraphs: [
          'This website does not currently implement a cookie-preference panel or consent controls. Browser settings can provide general cookie controls, but they do not replace any site-level choice or notice that applicable law may require.',
          'No application or support destination is currently configured. If real external links are added, following them will take visitors away from this website and the destination may have its own cookies and privacy practices.',
        ],
      },
      {
        title: 'Lawful use and future changes',
        paragraphs: [
          'If production technologies store or access information, or process personal information, the operator must identify what they do, assess the applicable legal requirements, and provide accurate notice and choices where required. No consent category or exemption is assumed by this draft.',
          'Before adding analytics, advertising, embedded media, or a consent tool, document the provider, data flow, retention, and legal basis and update this page. The production scan and legal review remain launch blockers.',
        ],
      },
    ],
    sources: [legalSources.popia, legalSources.popiaRegulations2025, legalSources.ecta, legalSources.regulatorPopia],
  },
]

export const faqItems = [
  { question: 'What is AG Markets?', answer: 'AG Markets is a planned financial intelligence platform with product concepts spanning market research, risk awareness, trading utilities, investor context, and education. This website explains those concepts; it is not the application itself.' },
  { question: 'Is the AG Markets application available?', answer: 'No application functionality is provided by this project. The current product is a public information and education website; any future application will be separate. Availability has not been announced.' },
  { question: 'Are the product previews live tools or live market data?', answer: 'No. The website has no live market feed, operational application, or trade execution. Some educational demonstrations do calculate hypothetical values locally from inputs using simplified assumptions, but they do not access market data, connect to a brokerage, or place trades.' },
  { question: 'Can AI analysis guarantee an accurate forecast?', answer: 'No. AI-assisted analysis can omit context, use outdated or incorrect inputs, or produce a plausible but mistaken explanation. It cannot guarantee accuracy or market outcomes; verify source information and use independent human judgement.' },
  { question: 'Does AG Markets provide personal investment or trading advice?', answer: 'No. Website material is general education and product information, not advice tailored to your finances, objectives, or experience. Consider independent qualified advice where you need guidance for your circumstances.' },
  { question: 'Are the examples or trading results real?', answer: 'No. Financial figures, instruments, charts, account values, and outcomes in previews are hypothetical illustrations, not live data, customer results, or AG Markets trading performance.' },
  { question: 'How much will AG Markets cost?', answer: 'The Pricing page lists Explorer as free, Pro at $3.99 monthly or $33.52 annually, and Elite at $9.99 monthly or $83.92 annually. Plan entitlements, registration, and subscription checkout are not yet configured, so these prices are not a purchase offer.' },
  { question: 'How can I contact AG Markets?', answer: 'A monitored contact channel has not yet been configured for this public website. The Contact page explains this; do not send passwords, payment details, or sensitive financial information through an unverified channel.' },
]

export const pricingPlans = [
  {
    name: 'Explorer',
    audience: 'For visitors starting with AG Markets.',
    monthlyPrice: 0,
  },
  {
    name: 'Pro',
    audience: 'The intermediate subscription option.',
    monthlyPrice: 3.99,
  },
  {
    name: 'Elite',
    audience: 'The highest subscription tier.',
    monthlyPrice: 9.99,
  },
] as const

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
