import Section from './Section';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Graphical Voyage with MATLAB",
            period: "Febrero 2023 - Junio 2024",
            description: "Mejora en la comprensión de principios físicos a través de simulaciones visuales interactivas.",
            features: [
                "Simulador de tiro parabólico",
                "Simulador de caída libre con rebote y visualización de energía",
                "Oscilador armónico unidimensional con visor de energía",
                "Visualizador de integración rectangular, trapezoidal y Simpson",
                "Visualización de funciones polinomiales y trigonométricas con sus derivadas",
                "Proceso de Gram-Schmidt en tres dimensiones"
            ],
            technologies: ["MATLAB", "Physics Simulation", "Mathematical Modeling"],
            category: "Scientific Computing"
        },
        {
            title: "Spell Checker in C++",
            period: "Agosto 2023 - Diciembre 2023",
            description: "Proyecto de la clase de Estructuras de Datos y Algoritmos.",
            features: [
                "Corrector ortográfico construido en C++ que verifica más de 70,000 palabras en inglés",
                "Genera sugerencias basadas en errores tipográficos",
                "Utiliza tablas hash para lograr complejidad lineal",
                "Capacidad de procesar hasta 2×10⁸ palabras por segundo"
            ],
            technologies: ["C++", "Data Structures", "Algorithms", "Hash Tables"],
            category: "Algorithm Development",
            metrics: {
                performance: "2×10⁸ palabras/segundo",
                dictionary: "70,000+ palabras"
            }
        },
        {
            title: "BASIC Lexicographic Highlighter",
            period: "Febrero 2024 - Mayo 2024",
            description: "Resaltado lexicográfico para programas BASIC en Clojure.",
            features: [
                "Implementación de un resaltador léxico para el lenguaje BASIC usando expresiones regulares en Clojure",
                "Reconocimiento, validación de sintaxis y categorización de números, cadenas, variables, comentarios y palabras reservadas"
            ],
            technologies: ["Clojure", "Regular Expressions", "Lexical Analysis"],
            category: "Language Processing"
        }
    ];

    return (
        <Section id="projects" title="Proyectos" className="section-projects">
            <div className="projects-container">
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-header">
                                <div className="project-title-container">
                                    <h3>{project.title}</h3>
                                    <span className="project-category">{project.category}</span>
                                </div>
                                <span className="project-period">{project.period}</span>
                            </div>

                            <div className="project-body">
                                <p className="project-description">{project.description}</p>

                                <div className="project-features">
                                    <h4>Características principales:</h4>
                                    <ul>
                                        {project.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                {project.metrics && (
                                    <div className="project-metrics">
                                        {Object.entries(project.metrics).map(([key, value]) => (
                                            <div key={key} className="metric">
                                                <span className="metric-label">{key}:</span>
                                                <span className="metric-value">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="project-technologies">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Projects;