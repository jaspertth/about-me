import { Skills } from "../../../const";

export interface ProjectCardProps {
  title: string;
  description: string;
  skillList: Skills[];
  liveLink?: string;
  liveLinkText?: string;
  githubLink?: string;
  githubLinkText?: string;
  image?: string;
}

export const ProjectCard = ({
  title,
  description,
  skillList,
  liveLink,
  liveLinkText = "View Website",
  githubLink,
  githubLinkText = "GitHub",
  image,
}: ProjectCardProps) => {
  return (
    <div className="project-card">
      {image && <img src={image} alt={title} className="project-image" />}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-skills">
          {skillList.map((skill, index) => (
            <span key={index} className="project-skill">
              {skill}
            </span>
          ))}
        </div>
        <div className="project-links">
          {liveLink && (
            <a
              href={liveLink}
              target={liveLink === "#" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              {liveLinkText}
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              {githubLinkText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
