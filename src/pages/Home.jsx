import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Footer from '../components/Footer.jsx'
import PageTransition from '../components/PageTransition.jsx'
import { Suspense, lazy, useEffect, useState } from 'react'
import '../App.css'

const About = lazy(() => import('../components/About.jsx'))
const Skills = lazy(() => import('../components/Skills.jsx'))
const Process = lazy(() => import('../components/Process.jsx'))
const Projects = lazy(() => import('../components/Projects.jsx'))
const Contact = lazy(() => import('../components/Contact.jsx'))

function Home() {
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const sectionIds = ['inicio', 'sobre-mi', 'habilidades', 'proceso', 'proyectos', 'contacto']

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        if (!visibleEntries.length) {
          return
        }
        const mostVisible = visibleEntries.reduce((current, entry) =>
          entry.intersectionRatio > current.intersectionRatio ? entry : current,
        )
        setActiveSection(mostVisible.target.id)
      },
      { threshold: 0.45 },
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const handleNavigate = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(sectionId)
    }
  }

  return (
    <PageTransition className="app">
      <a href="#main" className="skip-link">
        Saltar al contenido principal
      </a>
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      <main id="main" className="main">
        <Hero 
          onContactClick={() => handleNavigate('contacto')} 
          onProjectsClick={() => handleNavigate('proyectos')}
        />
        <Suspense
          fallback={
            <div className="section-loading" aria-live="polite">
              Cargando sección…
            </div>
          }
        >
          <About />
          <Skills />
          <Process />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </PageTransition>
  )
}

export default Home
