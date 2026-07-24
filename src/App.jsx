import { useEffect } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'

function App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.animate-on-scroll').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="body">
      <CustomCursor />
      <Navbar />
      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
