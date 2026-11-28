import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Brand } from './Brand'
import { applicationConfig } from '../config/application'
import { companyNavigation, legalNavigation, productNavigation } from '../data/sitePages'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>Combining artificial intelligence, financial research, education, and risk awareness in a planned platform.</p>
        </div>
        <div>
          <h3>Platform</h3>
          {productNavigation.map((item) => <Link key={item.path} to={item.path}>{item.label}</Link>)}
        </div>
        <div>
          <h3>Company</h3>
          {companyNavigation.map((item) => <Link key={item.path} to={item.path}>{item.label}</Link>)}
        </div>
        <div>
          <h3>Legal</h3>
          {legalNavigation.map((item) => <Link key={item.path} to={item.path}>{item.label}</Link>)}
        </div>
        <div>
          <h3>Application</h3>
          {applicationConfig.applicationUrl && <a href={applicationConfig.applicationUrl}>Application <ArrowUpRight size={13} /></a>}
          {applicationConfig.loginUrl && <a href={applicationConfig.loginUrl}>Login <ArrowUpRight size={13} /></a>}
          {applicationConfig.registrationUrl && <a href={applicationConfig.registrationUrl}>Get Started <ArrowUpRight size={13} /></a>}
          {applicationConfig.supportUrl && <a href={applicationConfig.supportUrl}>Support <ArrowUpRight size={13} /></a>}
          {!applicationConfig.applicationUrl && !applicationConfig.loginUrl && !applicationConfig.registrationUrl && !applicationConfig.supportUrl && (
            <p className="footer-unavailable">Application access and support channels are not configured.</p>
          )}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 AG Markets. All rights reserved.</span>
        <span>Financial markets involve risk. <Link to="/risk-disclosure">Read the risk disclosure.</Link></span>
      </div>
    </footer>
  )
}
