import Section from './Section';
import '../styles/Additional.css';

const Additional = () => {
    const certifications = [
        {
            title: "Oracle One Next Education G5",
            organization: "Oracle",
            period: "Abril 2023 - Octubre 2023",
            status: "Oracle One Alumni",
            description: "Graduate of Oracle Next Education F2 T5 Back-end Program.",
            skills: [
                "Java and Spring Boot 3",
                "Business Agility",
                "Entrepreneurship",
                "Soft Skills"
            ],
            type: "Professional Certification",
            icon: "🎓"
        },
        {
            title: "CBC: Transformar para Trascender",
            organization: "Couching Conscious Business Center",
            period: "Abril 2024",
            description: "Certification earned for completing the CBC's Transformar para Trascender program during 'Tec Week'.",
            skills: [
                "Leadership Development",
                "Innovation",
                "Teamwork",
                "Business Consciousness"
            ],
            type: "Leadership Program",
            icon: "🚀"
        }
    ];

    return (
        <Section id="additional" title="Educación Adicional" className="section-additional">
            <div className="additional-container">
                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <div key={index} className="certification-card">
                            <div className="certification-icon">
                                <span>{cert.icon}</span>
                            </div>

                            <div className="certification-content">
                                <div className="certification-header">
                                    <div className="title-group">
                                        <h3>{cert.title}</h3>
                                        <span className="organization">{cert.organization}</span>
                                    </div>
                                    <span className="cert-type">{cert.type}</span>
                                </div>

                                <div className="certification-period">
                                    <span className="period-badge">{cert.period}</span>
                                    {cert.status && (
                                        <span className="status-badge">{cert.status}</span>
                                    )}
                                </div>

                                <p className="certification-description">
                                    {cert.description}
                                </p>

                                <div className="skills-learned">
                                    <h4>Habilidades adquiridas:</h4>
                                    <div className="skills-grid">
                                        {cert.skills.map((skill, idx) => (
                                            <span key={idx} className="skill-badge">
                        {skill}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="additional-info">
                    <div className="info-card">
                        <h3>Desarrollo Continuo</h3>
                        <p>
                            Constantemente busco oportunidades para expandir mis conocimientos y
                            mantenerme actualizado con las últimas tecnologías y metodologías
                            en el campo del desarrollo de software y liderazgo.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Additional;