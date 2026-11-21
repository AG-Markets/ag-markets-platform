import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Brand } from './Brand'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  const mobileLinks = [
    ['Home', '#home'],
    ['AI Intelligence', '#ai-intelligence'],
    ['Market Radar', '#market-radar'],
    ['Risk Management', '#risk'],
    ['Trading Tools', '#tools'],
    ['Investor Intelligence', '#investors'],
    ['AG Academy', '#academy'],
    ['About', '#about'],
    ['Login', '#login'],
  ]

  return (
    <header className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
      <div className="nav-inner">
        <Brand />
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
        <nav className={`nav-links${open ? ' nav-links-open' : ''}`} aria-label="Main navigation">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#ai-intelligence" onClick={() => setOpen(false)}>AI Intelligence</a>
          <a href="#market-radar" onClick={() => setOpen(false)}>Market Radar</a>
          <a href="#risk" onClick={() => setOpen(false)}>Risk</a>
          <a href="#tools" onClick={() => setOpen(false)}>Trading Tools</a>
          <a href="#investors" onClick={() => setOpen(false)}>Investors</a>
          <span className="nav-more">
            <button type="button">More <ChevronDown size={14} /></button>
            <span className="nav-dropdown">
              <a href="#academy">AG Academy</a>
              <a href="#about">About</a>
            </span>
          </span>
          <a className="nav-login" href="#login" onClick={() => setOpen(false)}>Login</a>
          <a className="button button-small" href="#get-started" onClick={() => setOpen(false)}>Get Started</a>
        </nav>
      </div>
      <aside
        ref={menuRef}
        id="mobile-navigation"
        className={`mobile-navigation${open ? ' mobile-navigation-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
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
        <nav className="mobile-nav-links" aria-label="Mobile primary navigation">
          {mobileLinks.map(([label, href], index) => (
            <a href={href} onClick={closeMenu} key={href}>
              <span className="mobile-link-index">{String(index + 1).padStart(2, '0')}</span>
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <a className="mobile-nav-cta" href="#get-started" onClick={closeMenu}>
          Get Started
          <span aria-hidden="true">→</span>
        </a>
      </aside>
    </header>
  )
}
