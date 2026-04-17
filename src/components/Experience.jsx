const techTags = ['LangGraph', 'OpenAI API', 'FastAPI', 'MySQL', 'Power BI', 'Python', 'Docker', 'IoT Analytics']

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="section-inner">
        <div className="section-header animate-on-scroll">
          <span className="section-tag">02. Experience</span>
          <h2 className="section-title">Work Experience</h2>
        </div>

        <div className="exp-card animate-on-scroll" id="exp-card-1">
          <div className="exp-header">
            <div className="exp-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
              </svg>
            </div>
            <div className="exp-meta">
              <h3 className="exp-title">Software Intern</h3>
              <span className="exp-company">Geany Softech Pvt. Ltd.</span>
              <span className="exp-location">Mumbai, Maharashtra (Remote)</span>
            </div>
            <div>
              <span className="duration-badge">July 2025 – Nov 2025</span>
            </div>
          </div>

          <div className="exp-body">
            <ul className="exp-list">
              <li>
                <span className="exp-arrow">→</span>
                <span>
                  Architected a <strong>multi-agent LangGraph system</strong> enabling PDF summarization, natural-language-to-CRON scheduling, automated email workflows, and contextual task orchestration with tool-routing logic.
                </span>
              </li>
              <li>
                <span className="exp-arrow">→</span>
                <span>
                  Built <strong>FastAPI-based inference layer</strong> with structured prompt templates, deterministic validation, request logging, and failure-replay support for reliability under production constraints.
                </span>
              </li>
              <li>
                <span className="exp-arrow">→</span>
                <span>
                  Designed <strong>MySQL-backed conversation memory</strong> enabling session-aware responses and context persistence across multi-turn interactions.
                </span>
              </li>
              <li>
                <span className="exp-arrow">→</span>
                <span>
                  Developed <strong>Power BI dashboards</strong> analyzing <strong>10,000+ IoT sensor records</strong> to monitor equipment KPIs and anomaly trends, reducing manual reporting effort by <strong>30%</strong>.
                </span>
              </li>
              <li>
                <span className="exp-arrow">→</span>
                <span>
                  Performed SQL-based data extraction and Python-driven preprocessing to clean, transform, and standardize operational datasets; reduced redundant support queries by <strong>40%</strong> via internal automation chatbot.
                </span>
              </li>
            </ul>

            <div className="exp-tech">
              {techTags.map(t => <span key={t} className="tech-tag">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
