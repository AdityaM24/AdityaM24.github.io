import { useEffect, useRef } from 'react'

const categories = [
  {
    id: 'skill-cat-genai',
    icon: '🧠',
    title: 'Generative AI',
    chips: ['LangGraph', 'RAG', 'LangChain', 'Prompt Engineering', 'OpenAI API', 'Groq API', 'Agentic Workflows'],
  },
  {
    id: 'skill-cat-ml',
    icon: '🤖',
    title: 'Machine Learning',
    chips: ['Scikit-learn', 'XGBoost', 'TensorFlow', 'PyTorch', 'Keras', 'CNN', 'Cross-Validation', 'Hyperparameter Tuning'],
  },
  {
    id: 'skill-cat-data',
    icon: '📊',
    title: 'Data Analysis',
    chips: ['Python', 'Pandas', 'NumPy', 'EDA', 'Feature Engineering', 'Statistical Analysis', 'A/B Testing'],
  },
  {
    id: 'skill-cat-viz',
    icon: '📈',
    title: 'Business Intelligence',
    chips: ['Power BI', 'Matplotlib', 'Seaborn', 'Plotly', 'Excel', 'KPI Dashboards'],
  },
  {
    id: 'skill-cat-eng',
    icon: '⚙️',
    title: 'Backend & Deployment',
    chips: ['FastAPI', 'REST APIs', 'Docker', 'Git', 'Request Logging', 'API Validation'],
  },
  {
    id: 'skill-cat-db',
    icon: '🗄️',
    title: 'Databases & SQL',
    chips: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQL (Advanced)', 'Cohort Analysis'],
  },
]

function SkillCard({ cat, index }) {
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
      card.style.transform = `perspective(600px) rotateX(${-rx}deg) rotateY(${ry}deg) translateY(-4px)`
    }
    const onLeave = () => { card.style.transform = '' }
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
      className="skills-cat-card animate-on-scroll"
      id={cat.id}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="cat-icon">{cat.icon}</div>
      <h3>{cat.title}</h3>
      <div className="skill-chips">
        {cat.chips.map((chip, i) => (
          <span key={chip} className="chip" style={{ '--delay': `${i * 0.05}s` }}>
            {chip}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="section-inner">
        <div className="section-header animate-on-scroll">
          <span className="section-tag">04. Skills</span>
          <h2 className="section-title">Tech Stack</h2>
        </div>

        <div className="skills-category-grid">
          {categories.map((cat, i) => (
            <SkillCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
