import { useState, useEffect } from 'react'
import Logo from './ui/Logo'
import SocialButtons from './ui/SocialButtons'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const sections = ['home', 'experience', 'portfolio', 'skills', 'contact']
    const offset = 120

    const updateActive = () => {
      const position = window.scrollY + offset
      let current = sections[0]

      for (const id of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = window.scrollY + el.getBoundingClientRect().top
        if (position >= top) current = id
      }

      setActive(current)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="navbar border-bottom">
      <div className="navbar-space" />
      <div className="navbar-inner">
        <div className="container">
          <nav className="nav-menu-grid">
            <Logo />
            <ul className="nav-menu">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={`nav-link${active === href.slice(1) ? ' active' : ''}`}
                    {...(active === href.slice(1) ? { 'aria-current': 'page' } : {})}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="navbar-button-wrapper">
              <SocialButtons />
            </div>
          </nav>
        </div>
      </div>

      <div className="navbar-inner-mobile">
        <div className="container">
          <div className="navbar-wrapper-mobile">
            <Logo className="navbar-brand-mobile" />
            <button
              className={`menu-button${open ? ' open' : ''}`}
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <div className="burger">
                <div className="burger-line cc-top" />
                <div className="burger-line cc-middle" />
                <div className="burger-line cc-bottom" />
              </div>
            </button>
          </div>
        </div>
        <nav className={`nav-menu-wrapper-mobile${open ? ' open' : ''}`}>
          <div className="nav-menu-flex-mobile">
            <ul className="nav-menu">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={`nav-link-mobile${active === href.slice(1) ? ' active' : ''}`}
                    onClick={close}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <div className="navbar-space" />
    </header>
  )
}
