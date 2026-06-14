import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'
import BackgroundDesign from './components/BackgroundDesign'

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