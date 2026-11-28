import { ArrowRight, Check, Compass, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AGTradingAnimation } from './AGTradingAnimation'
import { FinancialDemonstrations } from './FinancialDemonstrations'
import type { MarketingPage as MarketingPageContent } from '../data/sitePages'
import { productNavigation } from '../data/sitePages'

export function MarketingPage({ page }: { page: MarketingPageContent }) {
  const related = productNavigation.filter((item) => item.path !== page.path).slice(0, 3)

  return (
    <main className={`marketing-page marketing-page-${page.variant}`} id="main-content" tabIndex={-1}>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div className="page-hero-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link><span aria-hidden="true">/</span><span>{page.label}</span>
            </nav>
            <div className="eyebrow"><span></span>{page.eyebrow}</div>
            <h1>{page.heading}</h1>
            <p className="page-intro">{page.intro}</p>
            {page.intendedAudience && <p className="page-audience"><strong>Intended for:</strong> {page.intendedAudience}</p>}
            <div className="page-actions">
              <a className="button" href="#page-process">How it is intended to work <ArrowRight size={16} /></a>
              <Link className="button button-outline" to="/pricing">View pricing</Link>
            </div>
            <p className="preview-notice">This product is a planned application concept. Previews are illustrative; interactive educational examples on this website are limited and are not application services.</p>
          </div>
          <aside className="page-preview" aria-label={`${page.label} illustrative preview`}>
            <div className="preview-topline">
              <span className="preview-mark"><Compass size={17} /></span>
              <div><small>AG MARKETS / PREVIEW</small><strong>{page.label}</strong></div>
              <span className="preview-status">SAMPLE</span>
            </div>
            <div className="preview-message">
              <ShieldCheck size={18} />
              <div><strong>{page.exampleTitle}</strong><p>{page.example}</p></div>
            </div>
            <div className="preview-metrics">
              {page.metrics.map((metric) => (
                <div key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong></div>
              ))}
            </div>
            {page.path === '/ai-analyst' && <AGTradingAnimation variant="analyst" size="compact" />}
            <div className="preview-footnote">Illustrative scenario · No live data or application functionality</div>
          </aside>
        </div>
      </section>

      <section className="page-section page-problem">
        <div className="container page-two-column">
          <div>
            <div className="eyebrow"><span></span>The challenge</div>
            <h2>{page.problemTitle}</h2>
          </div>
          <p className="page-body-copy">{page.problem}</p>
        </div>
      </section>

      <section className="page-section page-process" id="page-process">
        <div className="container">
          <div className="page-section-heading">
            <div className="eyebrow"><span></span>How it is intended to work</div>
            <h2>{page.approachTitle}</h2>
            <p>{page.approach}</p>
          </div>
          <div className="process-grid">
            {page.steps.map((step, index) => (
              <article className="process-card" key={step.title}>
                <span className="process-index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-features">
        <div className="container">
          <div className="page-section-heading">
            <div className="eyebrow"><span></span>Designed for real questions</div>
            <h2>What this product is being built to help with.</h2>
          </div>
          <div className="page-feature-grid">
            {page.features.map((feature) => (
              <article className="page-feature-card" key={feature.title}>
                <span className="feature-check"><Check size={15} /></span>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {page.education && (
        <section className="page-section page-education">
          <div className="container">
            <div className="page-section-heading">
              <div className="eyebrow"><span></span>Financial education</div>
              <h2>{page.path === '/academy' ? 'Seven foundations for informed learning.' : 'The concepts behind this subject.'}</h2>
              <p>General educational information only. Examples are hypothetical and are not recommendations or predictions.</p>
            </div>
            <div className="education-grid">
              {page.education.map((lesson) => (
                <article className="education-card" key={lesson.title}>
                  <h3>{lesson.title}</h3>
                  <p>{lesson.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinancialDemonstrations path={page.path} />

      <section className="page-section page-value">
        <div className="container page-value-grid">
          <div>
            <div className="eyebrow"><span></span>Why it matters</div>
            <h2>A more considered approach to {page.label}.</h2>
            <p className="page-body-copy">AG Markets is designed to explain useful context and support better questions—not to promise outcomes or remove the need for independent judgement.</p>
          </div>
          <ul className="benefit-list">
            {page.benefits.map((benefit) => <li key={benefit}><Check size={17} />{benefit}</li>)}
          </ul>
        </div>
      </section>

      <section className="page-related">
        <div className="container">
          <div className="related-heading"><div><div className="eyebrow"><span></span>Explore the platform</div><h2>Related product areas</h2></div></div>
          <div className="related-links">
            {related.map((item) => <Link key={item.path} to={item.path}>{item.label}<ArrowRight size={15} /></Link>)}
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container page-cta-inner">
          <div><div className="eyebrow"><span></span>Continue exploring</div><h2>Build your understanding before the application is available.</h2><p>The public website explains product concepts and offers limited educational demonstrations. Operational application services are not available here.</p></div>
          <div className="page-actions">
            {page.path === '/academy'
              ? <Link className="button" to="/ai-analyst">Explore the AI Analyst <ArrowRight size={16} /></Link>
              : <Link className="button" to="/academy">Visit the Academy <ArrowRight size={16} /></Link>}
            <Link className="button button-outline" to="/pricing">View pricing</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
