import { PROJECT_CARD_CONTENT } from "./const";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {PROJECT_CARD_CONTENT.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
