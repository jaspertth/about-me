import { SKILL_CATEGORY_CONTENT } from "./const";
import { SkillCategory } from "./SkillCategory";

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {SKILL_CATEGORY_CONTENT.map((skillCategory, index) => (
            <SkillCategory key={index} {...skillCategory} />
          ))}
        </div>
      </div>
    </section>
  );
};
