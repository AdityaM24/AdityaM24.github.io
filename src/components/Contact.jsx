import { useState } from 'react'

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

const socials = [
  {
    id: 'social-linkedin',
    name: 'LinkedIn',
    handle: '@adityam24',
    href: 'https://www.linkedin.com/in/adityam24',
    img: '/Images/linkidin.png',
  },
  {
    id: 'social-github',
    name: 'GitHub',
    handle: '@AdityaM24',
    href: 'https://github.com/AdityaM24',
    img: '/Images/github.png',
  },
  {
    id: 'social-instagram',
    name: 'Instagram',
    handle: '@adityyaaindeed',
    href: 'https://www.instagram.com/adityyaaindeed/',
    img: '/Images/insta.png',
  },
  {
    id: 'social-email',
    name: 'Email',
    handle: 'adityamahale76@gmail.com',
    href: 'mailto:adityamahale76@gmail.com',
    img: '/Images/gmail.png',
  },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    try {
      const resp = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(form),
      })
      const result = await resp.json().catch(() => null)
      if (resp.ok && result && result.success) {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section className="section section-alt" id="contact">
      <div className="section-inner">
        <div className="section-header animate-on-scroll">
          <span className="section-tag">06. Contact</span>
          <h2 className="section-title">Let's Build Together</h2>
          <p className="section-sub">Open to internships, full-time roles, freelance projects, and interesting collaborations.</p>
        </div>

        <div className="contact-grid">
          {/* Left — info + socials */}
          <div className="contact-left">
            <div className="contact-info-block">
              <h3>Get in Touch</h3>
              <p>Whether you have a project in mind, a role to discuss, or just want to chat about AI — my inbox is always open.</p>
            </div>
            <div className="social-grid">
              {socials.map((s, i) => (
                <a
                  key={s.id}
                  id={s.id}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="social-card animate-on-scroll"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="social-icon">
                    <img src={s.img} alt={s.name} />
                  </div>
                  <div className="social-meta">
                    <span className="social-name">{s.name}</span>
                    <span className="social-handle">{s.handle}</span>
                  </div>
                  <ArrowIcon className="social-arrow" />
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-right animate-on-scroll">
            <form className="contact-form-new" onSubmit={handleSubmit} id="contact-form">
              <input type="hidden" name="access_key" value="c78d5412-b3b4-4817-b399-d028df614d62" />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input type="text" id="contact-name" name="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input type="email" id="contact-email" name="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-phone">Phone (optional)</label>
                <input type="tel" id="contact-phone" name="phone" placeholder="+91 98765 43210" />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" rows="5" placeholder="Tell me about your project or opportunity..." required />
              </div>

              <button
                type="submit"
                className="btn-primary form-submit-btn"
                id="form-submit-btn"
                disabled={status === 'sending'}
              >
                <span className="btn-text">
                  {status === 'idle' && 'Send Message'}
                  {status === 'sending' && 'Sending...'}
                  {status === 'success' && '✓ Message Sent!'}
                  {status === 'error' && 'Failed — Try Again'}
                </span>
                {status === 'idle' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
