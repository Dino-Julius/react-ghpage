import '../styles/Section.css';

const Section = ({ id, title, className, children }) => {
    return (
        <div id={id} className={`section-container ${className || ''}`}>
            <h2 className="section-title">{title}</h2>
            <div className="section-content">
                {children}
            </div>
        </div>
    );
};

export default Section;