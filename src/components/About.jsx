import Section from './Section';
import '../styles/About.css';

const About = () => {
    return (
        <Section id="about" title="Sobre mí" className="section-about">
            <div className="about-container">
                <div className="about-profile">
                    <div className="profile-image">
                        <div className="avatar-placeholder">JV</div>
                    </div>
                    <div className="profile-info">
                        <h1>Julio Cesar Vivas Medina</h1>
                        <h3>Desarrollador de Software</h3>
                        <p className="location">Estado de México, México</p>
                        <p className="tagline">
                            Estudiante de Ingeniería en Tecnología Computacional con pasión por el desarrollo de software,
                            la programación competitiva y los proyectos innovadores.
                        </p>
                        <div style={{ marginTop: '1rem' }}>
                            <a
                                href="/resume_juliovivas.pdf"
                                download
                                className="download-resume-btn"
                                style={{
                                    display: 'inline-block',
                                    padding: '0.6em 1.2em',
                                    background: 'var(--accent, #007bff)',
                                    color: '#fff',
                                    borderRadius: '6px',
                                    textDecoration: 'none',
                                    fontWeight: 600,
                                    transition: 'background 0.2s'
                                }}
                            >
                                Descargar Resumen
                            </a>
                        </div>
                    </div>
                </div>

                <div className="about-description">
                    <p>
                        Soy un estudiante de segundo año de Ingeniería en Tecnología Computacional en el
                        Tecnológico de Monterrey, combinando mis estudios con experiencia profesional en desarrollo
                        de software. Mi enfoque organizado, responsable y perfeccionista me ha permitido destacar tanto
                        en proyectos académicos como profesionales.
                    </p>
                    <p>
                        Además de mi pasión por la tecnología, soy un jugador profesional de fútbol en la Liga TDP,
                        lo que me ha inculcado valores de disciplina, trabajo en equipo y perseverancia que aplico en
                        todos los aspectos de mi vida.
                    </p>
                    <p>
                        Mi versatilidad técnica abarca desde el desarrollo web y móvil hasta IoT, seguridad informática y
                        programación competitiva, siempre con un enfoque minimalista y eficiente en mis soluciones.
                    </p>
                </div>

                <div className="about-contact">
                    <div className="contact-info">
                        <div className="contact-item">
                            <span className="contact-icon">✉️</span>
                            <a href="mailto:jcvmlego@gmail.com">jcvmlego@gmail.com</a>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">📱</span>
                            <span>+52-5524317282</span>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/Dino-Julius" target="_blank" rel="noopener noreferrer" className="social-link">
                            <span className="social-icon">GitHub</span>
                        </a>
                        <a href="https://linkedin.com/in/juliovivas1407" target="_blank" rel="noopener noreferrer" className="social-link">
                            <span className="social-icon">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;