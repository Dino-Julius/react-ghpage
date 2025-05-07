import '../styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-main">
                    <div className="footer-info">
                        <h3>Julio César Vivas Medina</h3>
                        <p className="footer-tagline">
                            Desarrollador de Software | Estudiante de ITC
                        </p>
                    </div>

                    <div className="footer-contact">
                        <h4>Contacto</h4>
                        <div className="contact-links">
                            <a href="mailto:jcvmlego@gmail.com" className="contact-link">
                                <i className="fas fa-envelope"></i>
                                jcvmlego@gmail.com
                            </a>
                            <a href="tel:+525524317282" className="contact-link">
                                <i className="fas fa-phone"></i>
                                +52 55 2431 7282
                            </a>
                            <span className="contact-link">
                <i className="fas fa-map-marker-alt"></i>
                Estado de México, México
              </span>
                        </div>
                    </div>

                    <div className="footer-social">
                        <h4>Redes Sociales</h4>
                        <div className="social-links">
                            <a
                                href="https://github.com/Dino-Julius"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <i className="fab fa-github"></i>
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/juliovivas1407"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <i className="fab fa-linkedin"></i>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-nav">
                        <a href="#about">Sobre mí</a>
                        <a href="#education">Educación</a>
                        <a href="#experience">Experiencia</a>
                        <a href="#achievements">Logros</a>
                        <a href="#projects">Proyectos</a>
                        <a href="#additional">Certificados</a>
                        <a href="#skills">Habilidades</a>
                    </div>

                    <div className="footer-copyright">
                        <p>
                            © {currentYear} Julio César Vivas Medina. Todos los derechos reservados.
                        </p>
                        <p className="footer-credits">
                            Desarrollado con <span className="heart">❤️</span> usando React
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;