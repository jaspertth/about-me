import { ExperienceItem } from "./ExperienceItem";
import { EXPERIENCE_ITEM_CONTENT } from "./const";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          <div className="timeline-line"></div>
          {EXPERIENCE_ITEM_CONTENT.map((experience, index) => (
            <ExperienceItem
              key={index}
              jobTitle={experience.jobTitle}
              companyName={experience.companyName}
              startDate={experience.startDate}
              endDate={experience.endDate}
              jobDescription={experience.jobDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
