import { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = ({ activeSection, onNavigation, theme, toggleTheme }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Controlar la barra de navegación en scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClick = (sectionId) => {
        onNavigation(sectionId);
        setMenuOpen(false);
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <div className="logo">
                    <h1>Julio Vivas</h1>
                </div>

                <div className="header-actions">
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>

                    <button
                        className="menu-toggle"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger ${menuOpen ? 'active' : ''}`}></span>
                    </button>
                </div>

                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <li>
                            <a
                                href="#about"
                                className={activeSection === 'about' ? 'active' : ''}
                                onClick={() => handleClick('about')}
                            >
                                Sobre mí
                            </a>
                        </li>
                        <li>
                            <a
                                href="#education"
                                className={activeSection === 'education' ? 'active' : ''}
                                onClick={() => handleClick('education')}
                            >
                                Estudios
                            </a>
                        </li>
                        <li>
                            <a
                                href="#experience"
                                className={activeSection === 'experience' ? 'active' : ''}
                                onClick={() => handleClick('experience')}
                            >
                                Experiencia
                            </a>
                        </li>
                        <li>
                            <a
                                href="#achievements"
                                className={activeSection === 'achievements' ? 'active' : ''}
                                onClick={() => handleClick('achievements')}
                            >
                                Logros
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className={activeSection === 'projects' ? 'active' : ''}
                                onClick={() => handleClick('projects')}
                            >
                                Proyectos
                            </a>
                        </li>
                        <li>
                            <a
                                href="#additional"
                                className={activeSection === 'additional' ? 'active' : ''}
                                onClick={() => handleClick('additional')}
                            >
                                Certificados
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                className={activeSection === 'skills' ? 'active' : ''}
                                onClick={() => handleClick('skills')}
                            >
                                Habilidades
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;