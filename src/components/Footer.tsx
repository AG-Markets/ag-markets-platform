import { ArrowUpRight } from 'lucide-react'
import { Brand } from './Brand'
import { applicationConfig } from '../config/application'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>Combining artificial intelligence, financial research and risk management in one intelligent platform.</p>
        </div>
        <div>
          <h3>Platform</h3>
          <a href="#ai-intelligence">AI Intelligence</a>
          <a href="#market-radar">Market Radar</a>
          <a href="#risk">Risk Management</a>
        </div>
        <div>
          <h3>Trading</h3>
          <a href="#tools">Trading Tools</a>
          <a href="#investors">Investor Intelligence</a>
          <a href="#academy">AG Academy</a>
        </div>
        <div>
          <h3>Company</h3>
          <a href="#about">About</a>
          <a href={applicationConfig.supportUrl}>Contact <ArrowUpRight size={13} /></a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#disclaimer">Risk Disclaimer</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span id="privacy" className="policy-anchor"></span>
        <span id="terms" className="policy-anchor"></span>
        <span id="disclaimer" className="policy-anchor"></span>
        <span>© 2026 AG Markets. All rights reserved.</span>
        <span>Trading involves risk. Past performance is not indicative of future results.</span>
      </div>
    </footer>
  )
}
