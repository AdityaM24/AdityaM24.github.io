import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      // Active section tracking
      const sections = ['about', 'experience', 'projects', 'skills', 'certifications', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="nav-inner">
        <a href="#home" className="nav-logo" onClick={close}>
          AM<span className="logo-dot">.</span>
        </a>

        <div className={`nav-links${open ? ' open' : ''}`} id="nav-links">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`nav-link${active === href.slice(1) ? ' active' : ''}`}
              onClick={close}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a href="/Certificates/Aditya_Mahale_Resume.pdf" download="Aditya_Mahale_Resume.pdf" target="_blank" rel="noopener" className="resume-btn" id="resume-btn">
            <span>Resume</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>

          <button
            className={`hamburger${open ? ' active' : ''}`}
            id="hamburger"
            aria-label="Toggle menu"
            onClick={() => setOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
