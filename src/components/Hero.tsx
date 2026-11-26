import type { ReactNode } from 'react'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { applicationConfig } from '../config/application'

export function Hero({ children }: { children: ReactNode }) {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span></span> AI-powered financial intelligence</div>
          <h1>Intelligence Beyond<br />the <em>Charts.</em></h1>
          <p>Advanced AI financial intelligence, market analysis and risk management designed for a smarter approach to trading and investing.</p>
          <div className="hero-actions">
            <Link className="button" to="/ai-intelligence">Explore AG Intelligence <ArrowRight size={17} /></Link>
            <a className="button button-outline" href={applicationConfig.registrationUrl}>Get Started</a>
          </div>
          <div className="hero-trust">
            <ShieldCheck size={17} />
            <span>Built around disciplined decisions, transparent reasoning and risk awareness.</span>
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}
