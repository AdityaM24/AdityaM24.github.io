const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const achievements = [
  {
    id: 'ach-patent',
    emoji: '🏅',
    title: 'Patent Filed — 2025',
    sub: 'ML-Based Personalized Nutrition & Recommendation System',
    highlight: true,
    badge: 'Intellectual Property',
  },
  {
    id: 'ach-datathon',
    emoji: '🏆',
    title: 'Runner-Up — Datathon 2025',
    sub: 'Built high-accuracy predictive model under competitive time constraints',
    file: 'Datathon- Runner Up.pdf',
    highlight: true,
    badge: 'Competition Award',
  },
]

const certs = [
  { id: 'cert-1', emoji: '💼', title: 'Deloitte', sub: 'Data Analytics Job Simulation', file: 'Data Analytics Job Simulation- Deloitte.pdf' },
  { id: 'cert-2', emoji: '🗄️', title: 'Oracle SQL', sub: 'Databases for Developers', file: 'Databases for Developers- Oracle SQL.pdf' },
  { id: 'cert-3', emoji: '🤖', title: 'AICTE × Google', sub: 'AI-ML Virtual Internship', file: 'Google AI-ML Certificate AICTE.pdf' },
  { id: 'cert-5', emoji: '📊', title: 'Kaggle', sub: 'Intro to SQL', file: 'Kaggle- Intro to SQL.pdf' },
  { id: 'cert-6', emoji: '🐍', title: 'Cisco', sub: 'PCAP Certification', file: 'PCAP.pdf' },
  { id: 'cert-7', emoji: '📈', title: 'PwC', sub: 'Power BI Job Simulation', file: 'Power BI Job Simulation- PwC.pdf' },
]

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="section-inner">
        <div className="section-header animate-on-scroll">
          <span className="section-tag">05. Certifications</span>
          <h2 className="section-title">Credentials & Achievements</h2>
        </div>

        {/* Achievements first */}
        <div style={{ marginBottom: 32 }}>
          <p className="section-tag" style={{ marginBottom: 16, display: 'block' }}>ACHIEVEMENTS</p>
          <div className="certs-grid">
            {achievements.map((a, i) => (
              <div
                key={a.id}
                id={a.id}
                className="cert-card-new highlight animate-on-scroll"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="cert-card-body">
                  <div className="cert-emoji">{a.emoji}</div>
                  <div className="cert-info">
                    <h3>{a.title}</h3>
                    <p>{a.sub}</p>
                    <span style={{
                      fontSize: '0.7rem',
                      padding: '2px 8px',
                      background: 'rgba(245,158,11,0.15)',
                      border: '1px solid rgba(245,158,11,0.3)',
                      borderRadius: 999,
                      color: '#f59e0b',
                      fontWeight: 600,
                      marginTop: 4,
                      display: 'inline-block',
                    }}>{a.badge}</span>
                  </div>
                </div>
                {a.file ? (
                  <a href={`/Certificates/${a.file}`} target="_blank" rel="noopener noreferrer" className="cert-view-btn">
                    View <ExternalIcon />
                  </a>
                ) : (
                  <span className="cert-view-btn" style={{ opacity: 0.5, cursor: 'default', pointerEvents: 'none' }}>
                    Filed
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <p className="section-tag" style={{ marginBottom: 16, display: 'block' }}>CERTIFICATIONS</p>
          <div className="certs-grid">
            {certs.map((cert, i) => (
              <div
                key={cert.id}
                id={cert.id}
                className="cert-card-new animate-on-scroll"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="cert-card-body">
                  <div className="cert-emoji">{cert.emoji}</div>
                  <div className="cert-info">
                    <h3>{cert.title}</h3>
                    <p>{cert.sub}</p>
                  </div>
                </div>
                <a href={`/Certificates/${cert.file}`} target="_blank" rel="noopener noreferrer" className="cert-view-btn">
                  View <ExternalIcon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
