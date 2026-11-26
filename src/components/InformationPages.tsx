import { ArrowRight, Check, Mail, MessageCircleQuestion } from 'lucide-react'
import { Link } from 'react-router-dom'
import { applicationConfig } from '../config/application'
import type { LegalPage as LegalPageContent } from '../data/sitePages'
import { faqItems, legalNavigation, pricingPlans } from '../data/sitePages'

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
  return (
    <main className="information-page pricing-page">
      <PageIntro
        label="Membership"
        heading="Plans designed around how you use market intelligence."
        intro="AG Markets is planning several membership levels for different research needs. The names and benefit outlines below are for information only; prices, availability, and final entitlements have not been set."
      />
      <section className="container pricing-detail-grid">
        {pricingPlans.map((plan, index) => (
          <article className={`pricing-detail-card${index === 1 ? ' pricing-detail-featured' : ''}`} key={plan.name}>
            <span className="pricing-tier">PROPOSED TIER {String(index + 1).padStart(2, '0')}</span>
            <h2>{plan.name}</h2>
            <p className="pricing-audience">{plan.audience}</p>
            <p>{plan.description}</p>
            <ul>{plan.benefits.map((benefit) => <li key={benefit}><Check size={16} />{benefit}</li>)}</ul>
            <strong className="pricing-status">Pricing and availability to be announced</strong>
            <a className={index === 1 ? 'button' : 'button button-outline'} href={applicationConfig.registrationUrl}>Get Started <ArrowRight size={15} /></a>
          </article>
        ))}
      </section>
      <section className="pricing-note">
        <div className="container pricing-note-inner"><h2>Benefits are planned, not a current subscription offer.</h2><p>We will publish final plan details and terms when the AG Markets application is ready. No plan is currently purchasable through this public website.</p></div>
      </section>
    </main>
  )
}

export function FaqPage() {
  return (
    <main className="information-page faq-page">
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
      <section className="faq-contact"><div className="container"><h2>Still looking for an answer?</h2><p>Reach the contact page for the currently configured support destination.</p><Link className="button button-outline" to="/contact">Contact AG Markets</Link></div></section>
    </main>
  )
}

export function ContactPage() {
  return (
    <main className="information-page contact-page">
      <PageIntro
        label="Contact"
        heading="Get in touch with AG Markets."
        intro="For questions about the public website, product information, or future availability, use the configured support destination below. No contact form or account support system is implemented on this website."
      />
      <section className="container contact-layout">
        <div className="contact-card">
          <span className="contact-icon"><Mail size={21} /></span>
          <div className="eyebrow"><span></span>General enquiries</div>
          <h2>Contact the AG Markets team</h2>
          <p>The destination is a temporary placeholder until a monitored AG Markets support channel is configured.</p>
          <a className="button" href={applicationConfig.supportUrl}>Open support destination <ArrowRight size={16} /></a>
          <small>Temporary URL: {applicationConfig.supportUrl}</small>
        </div>
        <div className="contact-details">
          <h2>What this page can help with</h2>
          <div><strong>Product questions</strong><p>Ask about the plans and demonstrations described on this public website.</p></div>
          <div><strong>Website feedback</strong><p>Share accessibility, content, or navigation issues with the team.</p></div>
          <div><strong>Application access</strong><p>Application login and registration are not yet provided here. Their links remain configurable placeholders.</p></div>
          <p className="contact-boundary">Do not send account passwords, payment details, or sensitive financial information to a placeholder address.</p>
        </div>
      </section>
    </main>
  )
}

export function LegalPage({ page }: { page: LegalPageContent }) {
  return (
    <main className="information-page legal-page">
      <PageIntro label={page.eyebrow} heading={page.heading} intro={page.intro} />
      <div className="container legal-layout">
        <aside className="legal-nav"><strong>Website policies</strong>{legalNavigation.map((item) => <Link key={item.path} to={item.path} className={item.path === page.path ? 'legal-current' : ''}>{item.label}</Link>)}</aside>
        <article className="legal-content">
          <div className="draft-banner"><strong>Draft for review</strong><span>This content must be checked against AG Markets’ actual operations and applicable law before publication.</span></div>
          {page.sections.map((section) => (
            <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
          ))}
          <p className="legal-last-updated">Draft content · Effective date to be confirmed</p>
        </article>
      </div>
    </main>
  )
}

export function NotFoundPage() {
  return (
    <main className="information-page not-found-page">
      <div className="container not-found-content">
        <div className="eyebrow"><span></span>404 · Page not found</div>
        <h1>This page is not part of the AG Markets website.</h1>
        <p>Check the address or return to the homepage to explore the platform and its product pages.</p>
        <Link className="button" to="/">Back to Home <ArrowRight size={16} /></Link>
      </div>
    </main>
  )
}
