import Section from './Section';
import '../styles/Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: "Mobile Software Developer",
            company: "Fundación Todas Brillamos & Toallas Zazil",
            period: "Octubre 2023 - Enero 2024",
            type: "Híbrido",
            achievements: [
                "Desarrollé la primera aplicación móvil para Fundación Todas Brillamos usando Android Studio con Kotlin y Gradle para apoyar las ventas de Toallas ZAZIL.",
                "Implementé un servidor backend con base de datos PostgreSQL y API REST usando Node.js, facilitando el manejo seguro y eficiente de datos.",
                "Construí e implementé el frontend con React, integrando un servidor de contenido estático y proxy a través de Nginx para un rendimiento optimizado.",
                "Creé un chatbot de IA utilizando LLaMA 3.1 para atender necesidades informativas y responder preguntas sobre la organización.",
                "Containericé y desplegué todo el sistema en un servidor cloud con Docker y Docker Compose, asegurando escalabilidad y gestión eficiente de recursos."
            ],
            technologies: ["Android Studio", "Kotlin", "Node.js", "React", "PostgreSQL", "Docker", "Nginx", "LLaMA 3.1"]
        },
        {
            title: "Software Junior Developer",
            company: "Soltis",
            period: "2022-2024",
            type: "Híbrido",
            achievements: [
                "Desarrollé aplicaciones web y servicios, contribuyendo tanto en el desarrollo frontend como backend.",
                "Instalé y configuré equipos de TI y seguridad, incluyendo sistemas de red, cámaras de seguridad y otras soluciones de hardware.",
                "Colaboré con equipos multifuncionales para solucionar problemas técnicos de manera eficiente.",
                "Contribuí en la planificación y ejecución de proyectos de TI, optimizando procesos internos mediante soluciones innovadoras."
            ],
            technologies: ["Web Development", "IT Infrastructure", "Security Systems", "Networking"]
        }
    ];

    return (
        <Section id="experience" title="Experiencia Profesional" className="section-experience">
            <div className="experience-container">
                <div className="experience-timeline">
                    {experiences.map((experience, index) => (
                        <div key={index} className="experience-card">
                            <div className="experience-header">
                                <div className="title-container">
                                    <h3>{experience.title}</h3>
                                    <span className="company-name">{experience.company}</span>
                                </div>
                                <div className="experience-meta">
                                    <span className="period">{experience.period}</span>
                                    <span className="type-badge">{experience.type}</span>
                                </div>
                            </div>

                            <div className="experience-body">
                                <ul className="achievements-list">
                                    {experience.achievements.map((achievement, idx) => (
                                        <li key={idx}>{achievement}</li>
                                    ))}
                                </ul>

                                {experience.technologies && (
                                    <div className="technologies">
                                        <h4>Tecnologías utilizadas:</h4>
                                        <div className="tech-tags">
                                            {experience.technologies.map((tech, idx) => (
                                                <span key={idx} className="tech-badge">
                          {tech}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;