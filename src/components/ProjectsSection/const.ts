import { Skills } from "../../const";
import { ProjectCardProps } from "./ProjectCard";

export const PROJECT_CARD_CONTENT: ProjectCardProps[] = [
  {
    title: "Personal Portfolio Website",
    description:
      "A interactive, mobile-friendly portfolio showcasing my development skills and projects. Built with React and TypeScript, featuring responsive design, dark/light mode, and component-based architecture. Demonstrates my coding style and attention to detail.",
    skillList: [Skills.REACT, Skills.TS, Skills.RESPONSIVE, Skills.VITE],
    liveLink: "#",
    githubLink: "https://github.com/jaspertth/about-me",
  },
  {
    title: "Multiplayer Wordle Game",
    description:
      "An online multiplayer version of the popular word-guessing game Wordle. Players can create game rooms and compete in real-time to guess the hidden word. Features live updates of opponents' progress, responsive design, and a clean UI.",
    skillList: [
      Skills.TS,
      Skills.REACT,
      Skills.MUI,
      Skills.RESPONSIVE,
      Skills.NODE,
      Skills.EXPRESS,
      Skills.WS,
      Skills.REST,
    ],
    liveLink: "https://jaspertth-wordle.vercel.app/",
    liveLinkText: "Play Game",
    githubLink: "https://github.com/jaspertth/mywordle",
  },
];
