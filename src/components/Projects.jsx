import { useEffect, useRef } from 'react'

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const projects = [
  {
    id: 'project-crayfit',
    icon: '💪',
    title: 'CrayFit',
    desc: 'AI-powered personalized diet recommendation system. Hybrid KNN + collaborative filtering engine. Improved Precision/Recall by 15%, achieved sub-50ms inference via optimized vector preprocessing. Containerized with Docker.',
    tags: ['Python', 'Scikit-Learn', 'FastAPI', 'MongoDB', 'Docker', 'React.js'],
    github: 'https://github.com/AdityaM24/Crayfit',
    type: 'Team',
    featured: true,
  },
  {
    id: 'project-clearmetrics',
    icon: '📊',
    title: 'ClearMetrics',
    desc: 'End-to-end business analytics platform for tracking KPIs, revenue trends, and operational metrics. Built SQL-based ETL pipelines, interactive Power BI dashboards, and automated reporting workflows.',
    tags: ['Python', 'SQL', 'Power BI', 'Pandas', 'ETL', 'Dashboards'],
    github: 'https://github.com/AdityaM24',
    type: 'Individual',
    featured: false,
  },
  {
    id: 'project-churnsense',
    icon: '📉',
    title: 'ChurnSense',
    desc: 'End-to-end churn prediction on 7,000+ telecom records. Logistic Regression & Random Forest with stratified 5-fold CV. Achieved 0.88 ROC-AUC and 85%+ accuracy. SQL-based cohort & retention analysis.',
    tags: ['Python', 'Scikit-learn', 'SQL', 'SHAP', 'FastAPI', 'XGBoost'],
    github: 'https://github.com/AdityaM24/ChurnSense',
    type: 'Individual',
    featured: false,
  },
  {
    id: 'project-resumeiq',
    icon: '📄',
    title: 'ResumeIQ',
    desc: 'NLP pipeline for resume parsing, tokenization, and keyword extraction. ATS-style scoring engine for skill gap detection and resume-job matching. LLM-based contextual feedback generation.',
    tags: ['NLP', 'Python', 'Scikit-learn', 'FastAPI', 'Docker'],
    github: 'https://github.com/AdityaM24/ResumeIQ',
    type: 'Individual',
    featured: false,
  },
  {
    id: 'project-nl2sql',
    icon: '🗄️',
    title: 'NL2SQL',
    desc: 'Schema-aware NL-to-SQL engine using LangGraph + Groq API. Agent workflow: intent parsing → schema grounding → SQL generation → deterministic validation → execution. Exposed as a containerized REST API.',
    tags: ['LangGraph', 'Groq API', 'FastAPI', 'MySQL', 'Docker', 'Python'],
    github: 'https://github.com/AdityaM24/NL2SQL',
    type: 'Individual',
    featured: false,
  },
  {
    id: 'project-retinopathy',
    icon: '👁️',
    title: 'Diabetic Retinopathy Detection',
    desc: 'Deep learning model for automated detection and severity grading of diabetic retinopathy from fundus images. CNN-based classification pipeline with data augmentation and transfer learning.',
    tags: ['PyTorch', 'CNN', 'Transfer Learning', 'OpenCV', 'Python', 'Deep Learning'],
    github: 'https://github.com/AdityaM24',
    type: 'Individual',
    featured: false,
  },
]

function ProjectCard({ project }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    const onMove = (e) => {
      const rect = card.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const rx = ((e.clientY - cy) / (rect.height / 2)) * 8
      const ry = ((e.clientX - cx) / (rect.width / 2)) * 8
      card.style.transform = `perspective(600px) rotateX(${-rx}deg) rotateY(${ry}deg) translateY(-6px)`
      const glow = card.querySelector('.project-card-glow')
      if (glow) {
        const px = ((e.clientX - rect.left) / rect.width) * 100
        const py = ((e.clientY - rect.top) / rect.height) * 100
        glow.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(139,92,246,0.22), transparent 60%)`
      }
    }
    const onLeave = () => {
      card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) translateY(0)'
      const glow = card.querySelector('.project-card-glow')
      if (glow) glow.style.background = ''
    }
    card.addEventListener('mousemove', onMove)
    card.addEventListener('mouseleave', onLeave)
    return () => {
      card.removeEventListener('mousemove', onMove)
      card.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={`project-card animate-on-scroll${project.featured ? ' featured' : ''}`}
      id={project.id}
    >
      <div className="project-card-inner">
        <div className="project-header">
          <div className="project-icon">{project.icon}</div>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub">
              <GithubIcon />
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 10, alignItems: 'center' }}>
          {project.featured && <div className="featured-badge">Featured</div>}
          <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontWeight: 500 }}>{project.type}</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>
        <div className="project-tags">
          {project.tags.map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <div className="project-card-glow" />
    </div>
  )
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-inner">
        <div className="section-header animate-on-scroll">
          <span className="section-tag">03. Projects</span>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-sub">Production-grade ML/AI systems — from NL-to-SQL engines to medical deep learning and personalized recommendation pipelines.</p>
        </div>

        <div className="projects-grid" id="projects-grid">
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>

        <div className="projects-footer">
          <a href="https://github.com/AdityaM24" target="_blank" rel="noopener noreferrer" className="btn-ghost" id="view-all-github">
            View all on GitHub
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
