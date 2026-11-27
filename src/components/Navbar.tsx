import { useEffect, useRef, useState } from 'react'
import { ChevronDown, CircleUserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Brand } from './Brand'
import { applicationConfig } from '../config/application'
import { companyNavigation, legalNavigation, productNavigation } from '../data/sitePages'

const mobileLinks = [
  { label: 'Home', path: '/' },
  ...productNavigation,
  ...companyNavigation,
  ...legalNavigation,
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<'platform' | 'company' | null>(null)
  const menuRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!activeDropdown) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveDropdown(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeDropdown])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }

      if (event.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        )
        if (!focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    window.requestAnimationFrame(() => {
      menuRef.current?.querySelector<HTMLElement>('a[href]')?.focus()
    })

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const closeMenu = () => setOpen(false)
  const closeDropdown = () => setActiveDropdown(null)

  return (
    <header className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
      <div className="nav-inner">
        <Brand />
        <div className="mobile-header-actions">
          <a
            className="mobile-account-button"
            href={applicationConfig.loginUrl}
            aria-label="Account"
            title="Account"
          >
            <CircleUserRound size={20} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>
        <button
          ref={toggleRef}
          className={`menu-button${open ? ' menu-button-open' : ''}`}
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span></span><span></span><span></span>
        </button>
        <nav className="nav-links" aria-label="Main navigation">
          <Link to="/">Home</Link>
          <span className={`nav-more${activeDropdown === 'platform' ? ' nav-more-open' : ''}`}>
            <button
              type="button"
              aria-expanded={activeDropdown === 'platform'}
              aria-controls="platform-dropdown"
              onClick={() => setActiveDropdown((current) => current === 'platform' ? null : 'platform')}
            >Platform <ChevronDown size={14} /></button>
            <span className="nav-dropdown" id="platform-dropdown">
              {productNavigation.map((item) => <Link key={item.path} to={item.path} onClick={closeDropdown}>{item.label}</Link>)}
            </span>
          </span>
          <span className={`nav-more nav-company${activeDropdown === 'company' ? ' nav-more-open' : ''}`}>
            <button
              type="button"
              aria-expanded={activeDropdown === 'company'}
              aria-controls="company-dropdown"
              onClick={() => setActiveDropdown((current) => current === 'company' ? null : 'company')}
            >Company <ChevronDown size={14} /></button>
            <span className="nav-dropdown" id="company-dropdown">
              {companyNavigation.map((item) => <Link key={item.path} to={item.path} onClick={closeDropdown}>{item.label}</Link>)}
              {legalNavigation.map((item) => <Link key={item.path} to={item.path} onClick={closeDropdown}>{item.label}</Link>)}
            </span>
          </span>
          <a className="nav-login" href={applicationConfig.loginUrl}>Login</a>
          <a className="button button-small" href={applicationConfig.registrationUrl}>Get Started</a>
        </nav>
      </div>
      <aside
        ref={menuRef}
        id="mobile-navigation"
        className={`mobile-navigation${open ? ' mobile-navigation-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="mobile-nav-head">
          <Brand />
          <button
            className="mobile-close"
            type="button"
            aria-label="Close navigation"
            onClick={closeMenu}
          >
            <span></span><span></span>
          </button>
        </div>
        <nav className="mobile-nav-links" aria-label="Mobile site pages">
          {mobileLinks.map(({ label, path }, index) => (
            <Link to={path} onClick={closeMenu} key={path}>
              <span className="mobile-link-index">{String(index + 1).padStart(2, '0')}</span>
              <span>{label}</span>
            </Link>
          ))}
          <a href={applicationConfig.loginUrl} onClick={closeMenu}>
            <span className="mobile-link-index">{String(mobileLinks.length + 1).padStart(2, '0')}</span>
            <span>Login</span>
          </a>
        </nav>
        <a className="mobile-nav-cta" href={applicationConfig.registrationUrl} onClick={closeMenu}>
          Get Started
          <span aria-hidden="true">→</span>
        </a>
      </aside>
    </header>
  )
}
