import Badge from './ui/Badge'

const categories = [
  {
    icon: '/meelo/6447df45c13f480d25b05f1d_icon-1.svg',
    title: 'Programming & ML',
    bg: 'background-purple',
    chips: ['Python', 'SQL', 'Scikit-learn', 'XGBoost', 'SHAP', 'Feature Engineering', 'Model Evaluation'],
  },
  {
    icon: '/meelo/6447df44d559b16980ba14f9_icon-2.svg',
    title: 'AI & LLMs',
    bg: 'background-green',
    chips: ['LLMs', 'RAG', 'AI Agents', 'Prompt Engineering', 'NLP', 'LangGraph', 'Google Gemini API'],
  },
  {
    icon: '/meelo/645cf745ffb18d1c7b387ed4_icon-3.svg',
    title: 'Backend, Frontend & Data',
    bg: 'background-pink',
    chips: ['FastAPI', 'REST APIs', 'React', 'Streamlit', 'MySQL', 'PostgreSQL', 'Prisma', 'Pandas'],
  },
  {
    icon: '/meelo/6447df459ca88d7851062edd_icon-4.svg',
    title: 'Cloud & Tools',
    bg: 'background-blue',
    chips: ['AWS', 'Docker', 'Git', 'GitHub', 'Power BI', 'Tableau', 'Excel'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrapper background-white">
        <div className="container">
          <div className="services">
            <div className="position-relative">
              <div className="headline-services animate-on-scroll">
                <Badge>Skills</Badge>
                <h2 className="display-2">Technologies I work with across the full stack.</h2>
              </div>
              <img src="/meelo/644a57ce7a5c245b2fe20399_doodle-4.svg" alt="" className="doodle-flash" />
              <img src="/meelo/644a5900cbad856df3b6fdad_doodle-3.svg" alt="" className="doodle-shine-purple" />
            </div>

            <div className="services-grid">
              {categories.map((cat) => (
                <div key={cat.title} className={`card ${cat.bg} animate-on-scroll`}>
                  <div className="service">
                    <div className="icon">
                      <img src={cat.icon} alt="" />
                    </div>
                    <div>
                      <h3>{cat.title}</h3>
                      <p className="skill-list">{cat.chips.join(', ')}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
