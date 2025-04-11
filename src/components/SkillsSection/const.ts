import { Skills } from "../../const";
import { SkillCategoryProps } from "./SkillCategory";

export const SKILL_CATEGORY_CONTENT: SkillCategoryProps[] = [
  {
    skillsCatergoryTitle: "Frontend",
    skillList: [
      Skills.REACT,
      Skills.NEXT,
      Skills.MUI,
      Skills.HTML_CSS,
      Skills.TS_JS,
      Skills.GQLCLIENT,
      Skills.RESPONSIVE,
    ],
  },
  {
    skillsCatergoryTitle: "Backend",
    skillList: [
      Skills.NODE,
      Skills.EXPRESS,
      Skills.NEST,
      Skills.PYTHON,
      Skills.JAVA_CSHARP,
      Skills.REST,
      Skills.GQL,
      Skills.WS,
    ],
  },
  {
    skillsCatergoryTitle: "Databases and ORMs",
    skillList: [
      Skills.POSTGRESQL,
      Skills.MYSQL,
      Skills.MSSQL,
      Skills.MONGODB,
      Skills.PRISMA,
      Skills.TYPEORM,
    ],
  },
  {
    skillsCatergoryTitle: "DevOps & Architecture",
    skillList: [
      Skills.DOCKER,
      Skills.KUBERNETES,
      Skills.GIT,
      Skills.N8N,
      Skills.LINUX,
      Skills.MICROSERVICES,
    ],
  },
];
