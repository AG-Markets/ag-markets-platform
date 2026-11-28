import { useState } from 'react'
import { ArrowRight, Mail, MessageCircleQuestion } from 'lucide-react'
import { Link } from 'react-router-dom'
import { applicationConfig } from '../config/application'
import type { LegalPage as LegalPageContent } from '../data/sitePages'
import { faqItems, legalNavigation, pricingPlans } from '../data/sitePages'

type BillingPeriod = 'monthly' | 'annual'

const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

function roundToCents(value: number) {
  return Math.round((value + Number.EPSILON) * 100) / 100
}

function PageIntro({ label, heading, intro }: { label: string; heading: string; intro: string }) {
  return (
    <div className="container info-page-intro">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><span>{label}</span></nav>
      <div className="eyebrow"><span></span>{label}</div>
      <h1>{heading}</h1>
      <p>{intro}</p>
    </div>
  )
}

export function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly')

  return (
    <main className="information-page pricing-page" id="main-content" tabIndex={-1}>
      <PageIntro
        label="Membership"
        heading="Published prices for Explorer, Pro, and Elite."
        intro="Explorer is free. Pro is $3.99 per month and Elite is $9.99 per month, with a 30% discount for annual billing. Plan entitlements, registration, and subscription checkout are not configured."
      />
      <div className="container pricing-billing">
        <div className="pricing-billing-copy">
          <strong>Choose your billing period</strong>
          <p>Save 30% when you choose annual billing.</p>
        </div>
        <div className="pricing-period-switch" role="group" aria-label="Select billing period">
          <button
            type="button"
            className={billingPeriod === 'monthly' ? 'pricing-period-active' : ''}
            aria-pressed={billingPeriod === 'monthly'}
            onClick={() => setBillingPeriod('monthly')}
          >
            Monthly
          </button>
          <button
            type="button"
            className={billingPeriod === 'annual' ? 'pricing-period-active' : ''}
            aria-pressed={billingPeriod === 'annual'}
            onClick={() => setBillingPeriod('annual')}
          >
            Annually <span>Save 30%</span>
          </button>
        </div>
      </div>
      <section className="container pricing-detail-grid" aria-label="AG Markets subscription plans">
        {pricingPlans.map((plan, index) => {
          const isFree = plan.monthlyPrice === 0
          const annualPrice = roundToCents(plan.monthlyPrice * 12 * 0.7)
          const annualSavings = roundToCents(plan.monthlyPrice * 12 - annualPrice)
          const effectiveMonthlyPrice = roundToCents(annualPrice / 12)
          const displayedPrice = isFree
            ? 'Free'
            : usd.format(billingPeriod === 'annual' ? annualPrice : plan.monthlyPrice)

          return (
            <article
              className={`pricing-detail-card${plan.name === 'Pro' ? ' pricing-detail-featured' : ''}${plan.name === 'Elite' ? ' pricing-detail-elite' : ''}`}
              key={plan.name}
            >
              <span className="pricing-tier">PLAN {String(index + 1).padStart(2, '0')}</span>
              <h2 id={`pricing-plan-${plan.name.toLowerCase()}`}>{plan.name}</h2>
              <p className="pricing-audience">{plan.audience}</p>
              <div className="pricing-price">
                <span className="pricing-price-amount">{displayedPrice}</span>
                {!isFree && <span className="pricing-price-frequency">{billingPeriod === 'annual' ? 'billed annually' : '/ month'}</span>}
              </div>
              {isFree ? (
                <p className="pricing-price-detail">No subscription payment required.</p>
              ) : billingPeriod === 'annual' ? (
                <div className="pricing-annual-details">
                  <p>{usd.format(effectiveMonthlyPrice)}/month effective</p>
                  <strong>Save {usd.format(annualSavings)} per year</strong>
                </div>
              ) : (
                <p className="pricing-price-detail">Monthly subscription, billed monthly.</p>
              )}
              <p className="pricing-entitlements">Plan features and entitlements will be confirmed before launch.</p>
              <div className="pricing-card-footer">
                {applicationConfig.registrationUrl
                  ? <a className={plan.name === 'Pro' ? 'button' : 'button button-outline'} href={applicationConfig.registrationUrl}>Get Started <ArrowRight size={15} /></a>
                  : <button className={plan.name === 'Pro' ? 'button' : 'button button-outline'} type="button" disabled>Registration not available</button>}
              </div>
            </article>
          )
        })}
      </section>
      <section className="pricing-note">
        <div className="container pricing-note-inner">
          <div>
            <h2>Billing and availability</h2>
            <p>Prices do not imply that registration or subscription checkout is operational.</p>
          </div>
          <ul className="pricing-billing-details">
            <li>Explorer is free.</li>
            <li>Monthly subscriptions are billed monthly.</li>
            <li>Annual subscriptions are billed upfront for 12 months and save 30% compared with paying monthly for 12 months.</li>
            <li>Registration and subscription checkout are not available through this website. A plan button will only link to a verified application destination when one is configured.</li>
            <li>Refund, cancellation, tax, and payment details must be configured and reviewed before launch.</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export function FaqPage() {
  return (
    <main className="information-page faq-page" id="main-content" tabIndex={-1}>
      <PageIntro
        label="Help & information"
        heading="Questions about AG Markets?"
        intro="These answers explain the public website, the product previews, and what to expect as the separate application is developed."
      />
      <section className="container faq-layout">
        <aside className="faq-aside"><MessageCircleQuestion size={25} /><h2>Start with the product pages</h2><p>Each product page explains its intended purpose, sample workflow, and what remains illustrative.</p><Link to="/ai-intelligence">Explore AI Intelligence <ArrowRight size={15} /></Link></aside>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <details className="faq-item" key={item.question} open={index === 0}>
              <summary><span>{item.question}</span><span className="faq-plus" aria-hidden="true">+</span></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="faq-contact"><div className="container"><h2>Still looking for an answer?</h2><p>A monitored support channel has not yet been configured. The Contact page explains the current status.</p><Link className="button button-outline" to="/contact">Contact information</Link></div></section>
    </main>
  )
}

export function ContactPage() {
  return (
    <main className="information-page contact-page" id="main-content" tabIndex={-1}>
      <PageIntro
        label="Contact"
        heading="Contact information is being prepared."
        intro="A monitored AG Markets support channel has not yet been configured for this public website. No contact form or account-support system is implemented here."
      />
      <section className="container contact-layout">
        <div className="contact-card">
          <span className="contact-icon"><Mail size={21} /></span>
          <div className="eyebrow"><span></span>General enquiries</div>
          <h2>Official channel not yet available</h2>
          <p>Contact details will be published after the business confirms a monitored channel.</p>
          {applicationConfig.supportUrl
            ? <a className="button" href={applicationConfig.supportUrl}>Open support channel <ArrowRight size={16} /></a>
            : <p className="contact-unavailable" role="status">No support destination is configured.</p>}
        </div>
        <div className="contact-details">
          <h2>What this page can help with</h2>
          <div><strong>Product questions</strong><p>Ask about the plans and demonstrations described on this public website.</p></div>
          <div><strong>Website feedback</strong><p>Share accessibility, content, or navigation issues with the team.</p></div>
          <div><strong>Application access</strong><p>Login and registration are not available through this public website. Verified links will only be added after the separate application is ready.</p></div>
          <p className="contact-boundary">Do not send passwords, payment details, or sensitive financial information through an unverified channel.</p>
        </div>
      </section>
    </main>
  )
}

export function LegalPage({ page }: { page: LegalPageContent }) {
  return (
    <main className="information-page legal-page" id="main-content" tabIndex={-1}>
      <PageIntro label={page.eyebrow} heading={page.heading} intro={page.intro} />
      <div className="container legal-layout">
        <aside className="legal-aside-stack">
          <nav className="legal-nav" aria-label="Website policies"><strong>Website policies</strong>{legalNavigation.map((item) => <Link key={item.path} to={item.path} className={item.path === page.path ? 'legal-current' : ''}>{item.label}</Link>)}</nav>
        </aside>
        <article className="legal-content">
          <div className="draft-banner" role="note">
            <strong>Draft policy — not approved or adopted</strong>
            <span>This page is not ready for publication as a final policy. Confirm the items below and obtain qualified legal review before relying on it.</span>
          </div>
          <dl className="legal-metadata">
            <div><dt>Version</dt><dd>{page.version}</dd></div>
            <div><dt>Prepared</dt><dd>{page.prepared}</dd></div>
            <div><dt>Effective date</dt><dd>{page.effectiveDate}</dd></div>
          </dl>
          {page.sections.map((section) => (
            <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
          ))}
          <section className="legal-blockers" aria-labelledby="legal-blockers-heading">
            <h2 id="legal-blockers-heading">Items to resolve before adoption</h2>
            <ul>{page.publicationBlockers.map((blocker) => <li key={blocker}>{blocker}</li>)}</ul>
          </section>
          <section className="legal-sources" aria-labelledby="legal-sources-heading">
            <h2 id="legal-sources-heading">Official sources and guidance</h2>
            <ul>{page.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer">{source.label}</a></li>)}</ul>
          </section>
          <p className="legal-last-updated">{page.version} · Prepared {page.prepared} · Effective date not set</p>
        </article>
      </div>
    </main>
  )
}

export function NotFoundPage() {
  return (
    <main className="information-page not-found-page" id="main-content" tabIndex={-1}>
      <div className="container not-found-content">
        <div className="eyebrow"><span></span>404 · Page not found</div>
        <h1>This page is not part of the AG Markets website.</h1>
        <p>Check the address or return to the homepage to explore the platform and its product pages.</p>
        <Link className="button" to="/">Back to Home <ArrowRight size={16} /></Link>
      </div>
    </main>
  )
}
