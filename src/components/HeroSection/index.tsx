import React from "react";
import { HERO_SECTION_CONTENT } from "./const";

export const HeroSection: React.FC = () => {
  const {
    title,
    subtitle,
    description,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink,
  } = HERO_SECTION_CONTENT;
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{description}</p>
          <div className="hero-buttons">
            <a href={primaryButtonLink} className="btn btn-primary">
              {primaryButtonText}
            </a>
            <a href={secondaryButtonLink} className="btn btn-secondary">
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
