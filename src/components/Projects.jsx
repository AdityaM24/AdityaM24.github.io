import Badge from './ui/Badge'
import Button from './ui/Button'
import ButtonLink from './ui/ButtonLink'

const projects = [
  {
    id: 'project-churnsense',
    title: 'ChurnSense',
    subtitle: 'Telecom Customer Churn Prediction · Individual',
    tags: ['Python', 'XGBoost', 'SHAP', 'FastAPI', 'Streamlit', 'Docker'],
    desc: 'End-to-end ML pipeline on the IBM Telco dataset: EDA, feature engineering, XGBoost with tuned thresholds, SHAP explainability per prediction, FastAPI REST endpoint, Streamlit dashboard, and drift monitoring.',
    image: '/Images/churnsense.png',
    github: 'https://github.com/AdityaM24/ChurnSense',
  },
  {
    id: 'project-crayfit',
    title: 'CrayFit',
    subtitle: 'AI-Powered Nutrition & Diet Recommendation · Group',
    tags: ['Python', 'Scikit-learn', 'FastAPI', 'Streamlit', 'Docker', 'KNN'],
    desc: 'Hybrid recommendation engine combining collaborative filtering (1,000+ interactions) with KNN content-based similarity. FastAPI inference API, Streamlit frontend, Docker Compose deployment. Evaluated with RMSE, precision, and recall.',
    image: '/Images/crayfit.png',
    github: 'https://github.com/AdityaM24/Crayfit',
  },
  {
    id: 'project-resumeiq',
    title: 'ResumeIQ',
    subtitle: 'Resume ↔ Job Description Intelligence Engine · Individual',
    tags: ['Python', 'FastAPI', 'Groq', 'Streamlit', 'LLMs', 'Embeddings'],
    desc: 'AI-powered resume–JD matching with LLaMA structured extraction via Groq, semantic embeddings for contextual scoring, skill gap detection, and actionable rewrite suggestions. FastAPI backend with a Streamlit intelligence dashboard.',
    image: '/Images/resumeiq.png',
    github: 'https://github.com/AdityaM24/ResumeIQ',
  },
  {
    id: 'project-nl2sql',
    title: 'NL2SQL',
    subtitle: 'Natural Language to SQL Query Generator · Individual',
    tags: ['Python', 'FastAPI', 'Google Gemini API', 'MySQL', 'Streamlit'],
    desc: 'AI-powered platform that converts natural language into executable SQL using Gemini. Schema-aware prompt engineering, FastAPI REST APIs, a Streamlit interface, and validation safeguards to block unsafe queries.',
    image: '/Images/nl2sql.png',
    github: 'https://github.com/AdityaM24/NL2SQL',
  },
]

export default function Projects() {
  return (
    <section id="portfolio" className="section">
      <div className="wrapper background-purple border-bottom">
        <div className="container">
          <div className="portfolio">
            <div className="anchor cc-transform-none" />

            <div className="position-relative">
              <div className="headline-portfolio animate-on-scroll">
                <Badge>My Works</Badge>
                <h2 className="display-2">Projects that I have built.</h2>
              </div>
              <img src="/meelo/644a57c231357b3a724ac76c_doodle-8.svg" alt="" className="doodle-shine-pink" />
            </div>

            <div className="portfolio-grid">
              {projects.map((p) => (
                <div key={p.id} className="portfolio-item animate-on-scroll" id={p.id}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="image-link margin-bottom-40">
                    <img src={p.image} alt={p.title} className="image-frame" loading="lazy" />
                  </a>
                  <h3 className="post-title">{p.title}</h3>
                  <p className="project-subtitle margin-bottom-15">{p.subtitle}</p>
                  <p className="project-tags margin-bottom-20">{p.tags.join(', ')}</p>
                  <p className="margin-bottom-20">{p.desc}</p>
                  <ButtonLink href={p.github} external>
                    View Project
                  </ButtonLink>
                </div>
              ))}
            </div>

            <div className="portfolio-footer animate-on-scroll">
              <Button href="https://github.com/AdityaM24" center external>
                View All on GitHub
              </Button>
            </div>

            <img src="/meelo/644bbe6c275b305c08dcc0a1_doodle-10.svg" alt="" className="doodle-clink" />
          </div>
        </div>
      </div>
    </section>
  )
}
