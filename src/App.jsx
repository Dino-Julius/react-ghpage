import { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Additional from './components/Additional'
import Skills from './components/Skills'
import Footer from './components/Footer'
import './styles/globals.css'

function App() {
    const [activeSection, setActiveSection] = useState('about')
    const [theme, setTheme] = useState('dark')

    // Cambiar tema oscuro/claro
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
    }

    // Establecer tema según preferencia del sistema al cargar
    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const initialTheme = prefersDark ? 'dark' : 'light'
        setTheme(initialTheme)
        document.documentElement.setAttribute('data-theme', initialTheme)
    }, [])

    // Navegación con scroll suave
    const handleNavigation = (sectionId) => {
        setActiveSection(sectionId)
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="app-container">
            <Header
                activeSection={activeSection}
                onNavigation={handleNavigation}
                theme={theme}
                toggleTheme={toggleTheme}
            />

            <main className="content">
                <section id="about" className="section">
                    <About />
                </section>

                <section id="education" className="section">
                    <Education />
                </section>

                <section id="experience" className="section">
                    <Experience />
                </section>

                <section id="achievements" className="section">
                    <Achievements />
                </section>

                <section id="projects" className="section">
                    <Projects />
                </section>

                <section id="additional" className="section">
                    <Additional />
                </section>

                <section id="skills" className="section">
                    <Skills />
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default App