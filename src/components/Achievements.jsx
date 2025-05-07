import Section from './Section';
import '../styles/Achievements.css';

const Achievements = () => {
    const achievements = [
        {
            title: "ICPC México Finalists 2024",
            description: "Ranked #88/120 in México Finals and #305/475 in Latin American Regional Contests.",
            period: "Noviembre 2024",
            icon: "🏆",
            category: "Competitive Programming"
        },
        {
            title: "Buluk #3472 FRC Team",
            description: "Driver, Programmer, and Team Member at FIRST Robotics Team from PrepaTec CEM.",
            period: "2019 - 2022",
            icon: "🤖",
            category: "Robotics",
            roles: [
                "Driver del equipo",
                "Programador principal",
                "Miembro del equipo de desarrollo"
            ]
        },
        {
            title: "Professional Soccer Player",
            description: "Professional third division player in Liga TDP, currently for Club Union FC (NUI: 134106).",
            period: "Actualidad",
            icon: "⚽",
            category: "Sports",
            achievements: [
                "Jugador profesional en tercera división",
                "Desarrollo de habilidades de liderazgo y trabajo en equipo",
                "Balance entre carrera deportiva y académica"
            ]
        }
    ];

    const competencies = [
        {
            category: "Liderazgo y Trabajo en Equipo",
            skills: [
                "Liderazgo de proyectos",
                "Trabajo en equipo",
                "Comunicación efectiva",
                "Resolución de conflictos"
            ]
        },
        {
            category: "Metodologías y Prácticas",
            skills: [
                "Metodologías Ágiles",
                "SCRUM",
                "Pensamiento analítico",
                "Atención al detalle"
            ]
        },
        {
            category: "Habilidades Personales",
            skills: [
                "Autoaprendizaje",
                "Adaptabilidad",
                "Proactividad",
                "Empatía"
            ]
        }
    ];

    return (
        <Section id="achievements" title="Logros y Competencias" className="section-achievements">
            <div className="achievements-container">
                <div className="achievements-grid">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="achievement-card">
                            <div className="achievement-icon">{achievement.icon}</div>
                            <div className="achievement-content">
                                <div className="achievement-header">
                                    <h3>{achievement.title}</h3>
                                    <span className="achievement-period">{achievement.period}</span>
                                </div>
                                <span className="achievement-category">{achievement.category}</span>
                                <p className="achievement-description">{achievement.description}</p>

                                {achievement.roles && (
                                    <div className="achievement-details">
                                        <h4>Roles:</h4>
                                        <ul>
                                            {achievement.roles.map((role, idx) => (
                                                <li key={idx}>{role}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {achievement.achievements && (
                                    <div className="achievement-details">
                                        <h4>Logros:</h4>
                                        <ul>
                                            {achievement.achievements.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="competencies-section">
                    <h3 className="competencies-title">Competencias Profesionales</h3>
                    <div className="competencies-grid">
                        {competencies.map((competency, index) => (
                            <div key={index} className="competency-card">
                                <h4>{competency.category}</h4>
                                <div className="competency-skills">
                                    {competency.skills.map((skill, idx) => (
                                        <span key={idx} className="competency-badge">
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Achievements;