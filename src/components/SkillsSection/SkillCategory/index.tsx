import { Skills } from "../../../const";

export interface SkillCategoryProps {
  skillsCatergoryTitle: string;
  skillList: Skills[];
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({
  skillsCatergoryTitle,
  skillList,
}) => {
  return (
    <div className="skill-category">
      <h3 className="skill-category-title">{skillsCatergoryTitle}</h3>
      <ul className="skill-list">
        {skillList.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};
