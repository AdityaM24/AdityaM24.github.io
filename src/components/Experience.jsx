import Badge from './ui/Badge'
import Button from './ui/Button'

const experiences = [
  {
    period: 'MAY 2026 - PRESENT',
    dot: 'background-blue',
    title: 'Freelance Software Engineer, Arwade Infrastructure',
    location: 'Pune',
    bullets: [
      'Built a multi-site EHS MIS with role-based access, monthly reporting, auto-escalation, and safety assessments for leadership review.',
      'Shipped REST APIs on PostgreSQL/Prisma with CSV/XLSX import-export, dashboards, and 96+ Vitest/Supertest tests.',
    ],
  },
  {
    period: 'JUL 2025 - NOV 2025',
    dot: 'background-pink',
    title: 'Software Intern, Geany Softech Pvt. Ltd.',
    location: 'Mumbai',
    bullets: [
      'Built a LangGraph enterprise knowledge assistant (FastAPI, LLMs) with prompt tuning for better retrieval quality.',
      'Added MySQL logging for AI workflows and delivered production-ready solutions with engineering and business teams.',
    ],
    last: true,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrapper background-white border-bottom">
        <div className="container">
          <div className="experience">
            <div className="experience-grid">
              <div className="experience-intro position-relative animate-on-scroll">
                <Badge>Experience</Badge>
                <h2 className="display-2">My Experiences</h2>
                <p className="paragraph-large margin-bottom-35">
                  I have worked across AI engineering, enterprise software, and full-stack product builds.
                  Always open to roles where I can own problems from model to deployment.
                </p>
                <div className="experience-cta">
                  <Button href="/Certificates/Aditya_Mahale_Resume.pdf" external arrow={false}>
                    Download Resume
                  </Button>
                </div>
              </div>

              <div className="experience-timeline animate-on-scroll">
                <div className="timeline">
                  {experiences.map((item) => (
                    <div key={item.period} className="timeline-item">
                      <div className="timeline-info">
                        <h4 className="label">{item.period}</h4>
                      </div>
                      <div className="timeline-marker">
                        <div className={`timeline-dot ${item.dot}`} />
                      </div>
                      <div className="timeline-content">
                        <h3>{item.title}</h3>
                        {item.location && <p className="timeline-location">{item.location}</p>}
                        {item.bullets ? (
                          <ul className="timeline-bullets">
                            {item.bullets.map((b) => (
                              <li key={b.slice(0, 40)}>{b}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className={item.last ? 'margin-bottom-none' : 'margin-bottom-35'}>{item.desc}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
