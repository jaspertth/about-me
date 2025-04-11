import { aboutSectionContent } from "./const";

export const AboutSection: React.FC = () => {
  const { title, paragraphs } = aboutSectionContent;
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="about-content">
          <div className="about-text">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
