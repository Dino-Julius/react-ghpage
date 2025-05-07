import Section from './Section';
import '../styles/Skills.css';

const Skills = () => {
    const skillsData = {
        programming: {
            title: "Lenguajes de Programación",
            main: ["C++", "Python", "MATLAB"],
            secondary: ["JavaScript", "Clojure", "HTML+CSS", "SQL", "LabView", "MicroPython", "Wolfram", "Java", "C#"]
        },
        cloud: {
            title: "Cloud & Bases de Datos",
            skills: ["Firebase", "MySQL", "PostgreSQL", "Digital Ocean", "AWS", "Docker"]
        },
        tools: {
            title: "Herramientas",
            skills: ["Git", "GitHub", "Insomnia", "VSCode", "JetBrains IDEs", "Unity Studio"]
        },
        iot: {
            title: "IoT & Hardware",
            skills: ["MQTT", "Espressif", "Raspberry Pi", "ESP32", "Arduino"]
        },
        courses: {
            title: "Cursos Relevantes",
            skills: [
                "Data Structures & Algorithms",
                "Object Oriented Programming",
                "Software Engineering",
                "IoT",
                "Machine Learning & Data Science",
                "CNNA Networking & Security",
                "Software/Mobile/Game Development"
            ]
        },
        interests: {
            title: "Áreas de Interés",
            skills: [
                "Cybersecurity",
                "Networking",
                "Robotics",
                "Quantum Computing",
                "Competitive Programming",
                "Software Development"
            ]
        },
        soft: {
            title: "Habilidades Blandas",
            skills: [
                "Leadership",
                "Problem Solving",
                "Self-learning",
                "Adaptability",
                "Teamwork",
                "Agile Methodologies",
                "SCRUM",
                "Mentorship",
                "Analytical Thinking",
                "Negotiation",
                "Active Listening",
                "Creativity",
                "Attention to Detail",
                "Proactivity",
                "Empathy"
            ]
        }
    };

    return (
        <Section id="skills" title="Habilidades Técnicas e Intereses" className="section-skills">
            <div className="skills-container">
                {/* Lenguajes de Programación */}
                <div className="skills-card main-languages">
                    <h3>{skillsData.programming.title}</h3>
                    <div className="main-langs">
                        {skillsData.programming.main.map((lang, index) => (
                            <div key={index} className="main-lang-badge">
                                {lang}
                            </div>
                        ))}
                    </div>
                    <div className="secondary-langs">
                        {skillsData.programming.secondary.map((lang, index) => (
                            <span key={index} className="skill-badge">
                {lang}
              </span>
                        ))}
                    </div>
                </div>

                {/* Cloud & Bases de Datos + Herramientas */}
                <div className="skills-row">
                    <div className="skills-card">
                        <h3>{skillsData.cloud.title}</h3>
                        <div className="skills-grid">
                            {skillsData.cloud.skills.map((skill, index) => (
                                <span key={index} className="skill-badge">
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                    <div className="skills-card">
                        <h3>{skillsData.tools.title}</h3>
                        <div className="skills-grid">
                            {skillsData.tools.skills.map((skill, index) => (
                                <span key={index} className="skill-badge">
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* IoT & Hardware */}
                <div className="skills-card">
                    <h3>{skillsData.iot.title}</h3>
                    <div className="skills-grid">
                        {skillsData.iot.skills.map((skill, index) => (
                            <span key={index} className="skill-badge">
                {skill}
              </span>
                        ))}
                    </div>
                </div>

                {/* Cursos Relevantes */}
                <div className="skills-card courses">
                    <h3>{skillsData.courses.title}</h3>
                    <div className="courses-grid">
                        {skillsData.courses.skills.map((course, index) => (
                            <div key={index} className="course-item">
                                <span className="course-badge">{course}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Áreas de Interés */}
                <div className="skills-card interests">
                    <h3>{skillsData.interests.title}</h3>
                    <div className="interests-grid">
                        {skillsData.interests.skills.map((interest, index) => (
                            <span key={index} className="interest-badge">
                {interest}
              </span>
                        ))}
                    </div>
                </div>

                {/* Habilidades Blandas */}
                <div className="skills-card soft-skills">
                    <h3>{skillsData.soft.title}</h3>
                    <div className="soft-skills-grid">
                        {skillsData.soft.skills.map((skill, index) => (
                            <span key={index} className="soft-skill-badge">
                {skill}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Skills;