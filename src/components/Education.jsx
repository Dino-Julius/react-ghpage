import Section from './Section';
import '../styles/Education.css';

const Education = () => {
    const mainEducation = {
        degree: "B.S. in Computer Science and Technology",
        institution: "Tecnológico de Monterrey, Campus Estado de México",
        period: "2022-2026",
        status: "Second-year student (5th semester)",
        gpa: "GPA: 3.7 (equivalent to 91/100)",
        details: [
            "Relevant Coursework:",
            "Data Structures & Algorithms",
            "Object Oriented Programming",
            "Software Engineering",
            "IoT",
            "Machine Learning & Data Science",
            "CNNA Networking & Security",
            "Software/Mobile/Game Development"
        ]
    };

    const additionalEducation = [
        {
            title: "Oracle One Next Education G5",
            institution: "Oracle",
            period: "April 2023 - October 2023",
            details: [
                "Java and Spring Boot 3 training",
                "Business Agility training",
                "Entrepreneurship Training",
                "Soft Skills Training",
                "Currently Oracle One Alumni"
            ]
        },
        {
            title: "CBC: Transformar para Trascender",
            institution: "Couching Conscious Business Center",
            period: "April 2024",
            details: [
                "Development of leadership, innovation and teamwork skills",
                "Couching Conscious Business Center"
            ]
        }
    ];

    return (
        <Section id="education" title="Educación" className="section-education">
            <div className="education-container">
                {/* Educación Principal */}
                <div className="main-education">
                    <div className="education-card primary">
                        <div className="education-header">
                            <h3>{mainEducation.degree}</h3>
                            <span className="education-period">{mainEducation.period}</span>
                        </div>
                        <div className="education-body">
                            <p className="institution">{mainEducation.institution}</p>
                            <p className="status">{mainEducation.status}</p>
                            <p className="gpa">{mainEducation.gpa}</p>
                            <div className="courses">
                                <h4>{mainEducation.details[0]}</h4>
                                <div className="course-grid">
                                    {mainEducation.details.slice(1).map((course, index) => (
                                        <span key={index} className="course-badge">
                      {course}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Educación Adicional */}
                <div className="additional-education">
                    <h3 className="section-subtitle">Educación Adicional</h3>
                    <div className="education-grid">
                        {additionalEducation.map((education, index) => (
                            <div key={index} className="education-card secondary">
                                <div className="education-header">
                                    <h4>{education.title}</h4>
                                    <span className="education-period">{education.period}</span>
                                </div>
                                <div className="education-body">
                                    <p className="institution">{education.institution}</p>
                                    <ul className="details-list">
                                        {education.details.map((detail, idx) => (
                                            <li key={idx}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Education;