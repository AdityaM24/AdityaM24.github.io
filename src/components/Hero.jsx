import { useEffect, useRef, useState } from 'react'

const stats = [
  { target: 10, label: 'Projects Built' },
  { target: 8, label: 'Certifications' },
  { target: 83, label: 'GPA Score', suffix: '%' },
]

export default function Hero() {
  const cardRef = useRef(null)
  const [showScroll, setShowScroll] = useState(true)

  // 3D tilt on hero card
  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    const onMove = (e) => {
      const rect = card.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const rx = ((e.clientY - cy) / (rect.height / 2)) * 14
      const ry = ((e.clientX - cx) / (rect.width / 2)) * 14
      card.style.transform = `perspective(900px) rotateX(${-rx}deg) rotateY(${ry}deg) scale3d(1.03,1.03,1.03)`
    }
    const onLeave = () => {
      card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale3d(1,1,1)'
    }
    const onScroll = () => setShowScroll(window.scrollY < 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    card.addEventListener('mousemove', onMove)
    card.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('scroll', onScroll)
      card.removeEventListener('mousemove', onMove)
      card.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  // Counter animation
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const el = entry.target
        const target = parseInt(el.dataset.target)
        const suffix = el.dataset.suffix || '+'
        let current = 0
        const step = Math.ceil(target / 30)
        const timer = setInterval(() => {
          current = Math.min(current + step, target)
          el.textContent = current + suffix
          if (current >= target) clearInterval(timer)
        }, 50)
        io.unobserve(el)
      })
    }, { threshold: 0.5 })
    document.querySelectorAll('.stat-num').forEach(c => io.observe(c))
    return () => io.disconnect()
  }, [])

  // Typed.js
  useEffect(() => {
    let typedInstance = null
    function initTyped() {
      typedInstance = new window.Typed('#typed-element', {
        strings: [
          'AI Pipelines.',
          'LLM Agents.',
          'ML Models.',
          'Power BI Dashboards.',
          'RAG Systems.',
        ],
        typeSpeed: 55,
        backSpeed: 30,
        backDelay: 1800,
        loop: true,
      })
    }
    if (!window.Typed) {
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js'
      script.onload = initTyped
      document.head.appendChild(script)
    } else {
      initTyped()
    }
    return () => typedInstance && typedInstance.destroy()
  }, [])

  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          <span>Open to opportunities · Patent Filed 2025</span>
        </div>

        <h1 className="hero-title">
          <span className="title-line">Hi, I'm</span>
          <span className="title-name">Aditya Mahale</span>
        </h1>

        <div className="hero-typed-wrap">
          <span className="typed-prefix">I build </span>
          <span id="typed-element" />
        </div>

        <p className="hero-desc">
          Final Year ENTC Engineer (8.3 GPA) at MIT-AOE, Pune. Building production-grade
          Generative AI systems — LangGraph agents, RAG pipelines, ML models and BI dashboards.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary" id="hero-projects-btn">
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
          <a
            href="/Certificates/Aditya_Mahale_GenAI.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            id="hero-resume-btn"
          >
            View Resume
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
          <a href="#contact" className="btn-ghost" id="hero-contact-btn">Let's Talk</a>
        </div>

        <div className="hero-stats">
          {stats.map((s, i) => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <div className="stat-item">
                <span className="stat-num" data-target={s.target} data-suffix={s.suffix || '+'}>
                  0{s.suffix || '+'}
                </span>
                <span className="stat-label">{s.label}</span>
              </div>
              {i < stats.length - 1 && <div className="stat-divider" />}
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-3d-card" ref={cardRef} id="hero-3d-card">
          <div className="card-inner">
            <div className="profile-glow-ring" />
            <div className="profile-img-wrap">
              <img src="/Images/profile.png" alt="Aditya Mahale" className="profile-img" />
            </div>
          </div>
          <div className="floating-badge fb-1">🤖 AI Engineer</div>
          <div className="floating-badge fb-2">⚡ Data Scientist</div>
          <div className="floating-badge fb-3">🐍 Python · SQL</div>
        </div>
      </div>

      <div className="scroll-indicator" style={{ opacity: showScroll ? 1 : 0, transition: 'opacity 0.5s ease', pointerEvents: 'none' }}>
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}
