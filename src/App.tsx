import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { HeroSection } from "./components/HeroSection";
import { PageLayout } from "./components/PageLayout";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";

export const App = () => {
  return (
    <>
      <PageLayout>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </PageLayout>
    </>
  );
};
