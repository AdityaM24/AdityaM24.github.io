import Badge from './ui/Badge'
import Button from './ui/Button'

export default function About() {
  return (
    <section id="home" className="section">
      <div className="wrapper background-purple border-bottom overflow-hidden">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content animate-on-scroll">
              <Badge>Hello!</Badge>
              <h1 className="display-1 hero-title margin-bottom-15">
                I&apos;m Aditya Mahale,<br />
                an <span className="underline">AI/ML</span> engineer.
              </h1>
              <p className="hero-subtitle margin-bottom-15">
                ML Applications · Agentic Systems · Full-Stack
              </p>
              <p className="paragraph-large hero-text margin-bottom-15">
                AI/ML engineer from Pune who ships end-to-end: models, APIs, frontends, and deployment.
                B.Tech ENTC with Honours in Data Science (CGPA 8.5) at MIT Academy of Engineering.
              </p>
              <p className="hero-text margin-bottom-30">
                I&apos;ve built LangGraph assistants, a patent-filed recommender (CrayFit), and production
                systems for live enterprise clients, from ML pipelines to React and FastAPI.
              </p>
              <Button href="#portfolio">See My Works</Button>
            </div>

            <div className="hero-visual position-relative animate-on-scroll">
              <img
                src="/Images/profile.png"
                alt="Aditya Mahale"
                width="465"
                className="hero-image"
                onError={(e) => { e.target.src = '/meelo/6458c23afe2bc0522b3bc189_about-1.jpg' }}
              />
              <div className="star-badge">
                <div className="label cc-rotate">Let&apos;s Work Together</div>
              </div>
              <img src="/meelo/64468b4c63698e178b507028_doodle-1.svg" alt="" className="doodle-shine" />
              <img src="/meelo/64468b9bcfb0b14bcc9eef5a_doodle-2.svg" alt="" className="doodle-breeze" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
