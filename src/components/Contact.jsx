import { useState } from 'react'
import Badge from './ui/Badge'
import Logo from './ui/Logo'
import SocialButtons from './ui/SocialButtons'

export default function Contact() {
  const [status, setStatus] = useState('idle')

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
      if (resp.ok && result?.success) {
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
    <section className="footer" id="contact">

      <div className="wrapper background-purple">
        <div className="overflow background-white" aria-hidden="true" />
        <div className="container cc-narrow">
          <div className="contact">
            <div className="contact-card animate-on-scroll">
              <div className="headline-contact">
                <Badge>Contact</Badge>
                <h2 className="display-2">Let&apos;s Connect!</h2>
                <p className="contact-lead margin-bottom-none">
                  Open to internships, full-time roles, freelance projects, and interesting collaborations.
                </p>
              </div>

              <div className="contact-form-block">
                <form onSubmit={handleSubmit} aria-label="Contact form">
                  <input type="hidden" name="access_key" value="c78d5412-b3b4-4817-b399-d028df614d62" />

                  <div className="form-fields-grid">
                    <div className="form-field">
                      <input
                        className="text-field"
                        name="name"
                        placeholder="Full Name *"
                        required
                      />
                    </div>
                    <div className="form-field">
                      <input
                        className="text-field"
                        name="email"
                        type="email"
                        placeholder="Email *"
                        required
                      />
                    </div>
                    <div className="form-field form-field-full">
                      <input
                        className="text-field"
                        name="phone"
                        type="tel"
                        placeholder="Phone (optional)"
                      />
                    </div>
                    <div className="form-field form-field-full">
                      <textarea
                        className="textarea"
                        name="message"
                        placeholder="Message *"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="button cc-center"
                    disabled={status === 'sending'}
                  >
                    <div className="button-front">
                      <div className="button-text">
                        {status === 'sending' ? 'Please wait...'
                          : status === 'success' ? 'Sent!'
                          : 'Submit'}
                      </div>
                    </div>
                    <div className="button-edge" />
                  </button>
                </form>

                {status === 'success' && (
                  <div className="success-message" role="status">
                    Thank you! Your submission has been received!
                  </div>
                )}
                {status === 'error' && (
                  <div className="error-message" role="alert">
                    Oops! Something went wrong while submitting the form.
                  </div>
                )}
              </div>
            </div>

            <div className="site-details">
              <div className="footer-row margin-bottom-30">
                <Logo />
                <ul className="footer-nav">
                  <li><a href="#portfolio" className="footer-nav-link"><div>Portfolio</div></a></li>
                  <li><a href="#experience" className="footer-nav-link"><div>Experience</div></a></li>
                  <li><a href="/Certificates/Aditya_Mahale_Resume.pdf" target="_blank" rel="noopener noreferrer" className="footer-nav-link"><div>Resume</div></a></li>
                </ul>
              </div>
              <div className="footer-row">
                <p className="margin-bottom-none">
                  © {new Date().getFullYear()} Aditya Mahale.
                </p>
                <div className="navbar-button-wrapper">
                  <SocialButtons />
                </div>
              </div>
            </div>

            <img src="/meelo/644bbd1ada258e858c833ac1_doodle-12.svg" alt="" className="doodle-cloud" />
            <img src="/meelo/644bbd93e44f1f7289efc855_doodle-11.svg" alt="" className="doodle-envelope" />
          </div>
        </div>
      </div>
    </section>
  )
}
