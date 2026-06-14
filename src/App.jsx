import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Certificates from './Components/Certificates'
import Footer from './Components/Footer'
import ThemeToggle from './Components/ThemeToggle'
import ScrollToTop from './Components/ScrollToTop'
import LoadingScreen from './Components/LoadingScreen'
import BackgroundDesign from './Components/BackgroundDesign'

function App() {
  const [theme, setTheme] = useState('dark')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <BrowserRouter>
      <BackgroundDesign />
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className={`min-h-screen transition-colors duration-500 ${loading ? 'opacity-0 pointer-events-none' : 'opacity-100'} ${theme === 'dark'
        ? 'dark bg-transparent'
        : 'bg-transparent'
        }`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <section id="hero" className="relative">
            <Hero />
          </section>
          <section id="education" className="relative">
            <Education />
          </section>
          <section id="skills" className="relative">
            <Skills />
          </section>
          <section id="projects" className="relative">
            <Projects />
          </section>
          <section id="certificates" className="relative">
            <Certificates />
          </section>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  )
}

export default App