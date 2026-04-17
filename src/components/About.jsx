import { useEffect, useRef } from 'react'

const timelineItems = [
  {
    year: '2020',
    title: '10th Grade — CBSE',
    desc: 'Sri Ma Vidyalaya, Thane, Mumbai\nStrong foundation in Science & Mathematics',
  },
  {
    year: '2022',
    title: '12th Grade — PCM',
    desc: 'ShubhamRaje Jr. College, Thane\nPCM stream · Intro to Web Development',
  },
  {
    year: '2022 – 26',
    title: 'B.Tech — ENTC (Minor: Data Science)',
    desc: 'MIT Academy of Engineering, Pune · GPA: 8.3 / 10.0\nSpecializing in ML, AI & Data Science',
    active: true,
  },
  {
    year: 'July – Nov 2025',
    title: 'Software Intern · Geany Softech',
    desc: 'LangGraph agents · FastAPI · Power BI · MySQL\nLLM pipelines for production AI systems',
    pulse: true,
  },
]

const tags = [
  'Python', 'LangGraph', 'RAG', 'FastAPI', 'Machine Learning',
  'Power BI', 'SQL', 'Docker', 'PyTorch', 'LLM Agents',
]

export default function About() {
  const itemsRef = useRef([])

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) }
      }),
      { threshold: 0.15 }
    )
    itemsRef.current.forEach(el => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="section" id="about">
      <div className="section-inner">
        <div className="section-header animate-on-scroll">
          <span className="section-tag">01. About</span>
          <h2 className="section-title">My Journey</h2>
        </div>

        <div className="about-grid">
          <div className="about-text-col animate-on-scroll">
            <p className="about-lead">
              Final-year <strong>B.Tech (ENTC + Minor: Data Science)</strong> student at MIT Academy of Engineering, Pune, with a <strong>GPA of 8.3/10</strong>. I build production-grade AI systems that go beyond notebooks.
            </p>
            <p className="about-body">
              At <strong>Geany Softech Pvt. Ltd.</strong>, I architected multi-agent LangGraph systems for PDF summarization, NL-to-CRON scheduling, and automated email workflows. I also built FastAPI inference layers, MySQL-backed session memory, and Power BI dashboards monitoring <strong>10,000+ IoT sensor records</strong>.
            </p>
            <p className="about-body">
              Beyond the internship, I've filed a <strong>patent for an ML-based personalized nutrition system</strong>, placed Runner-Up in Datathon 2025, and built end-to-end ML/AI projects from churn prediction to natural language SQL engines.
            </p>
            <div className="about-tags">
              {tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>

          <div className="timeline-col">
            <div className="timeline">
              {timelineItems.map((item, i) => (
                <div
                  key={item.year}
                  className="timeline-item"
                  ref={el => itemsRef.current[i] = el}
                >
                  <div className={`timeline-dot${item.active ? ' active' : item.pulse ? ' pulse' : ''}`} />
                  <div className="timeline-content">
                    <div className="timeline-year">{item.year}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
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
