# Personal Portfolio Website

This is a modern, responsive portfolio website built with React and TypeScript to showcase my skills, projects, and experience as a full-stack developer.

## Project Structure

The project follows a component-based architecture with organized CSS styling for better organization, maintainability, and reusability:

```
src/
├── components/
│   ├── AboutSection/
│   ├── ContactSection/
│   │   ├── ContactForm/
│   │   └── ErrorMessage/
│   ├── ExperienceSection/
│   │   └── ExperienceItem/
│   ├── HeroSection/
│   ├── PageLayout/
│   │   ├── BackToTopButton/
│   │   ├── FooterSection/
│   │   └── HeaderSection/
│   ├── ProjectsSection/
│   │   └── ProjectCard/
│   └── SkillsSection/
│       └── SkillCategory/
├── App.tsx           # Main application component
├── index.css         # Global CSS with well-organized sections
└── main.tsx          # Entry point
```

## Features

- Responsive design that works on all device sizes
- Modern UI with smooth scrolling and transitions
- Mobile-friendly navigation with hamburger menu
- Organized sections for:
  - Hero banner
  - About Me
  - Skills (categorized)
  - Projects showcase
  - Work experience timeline
  - Contact information and form
- Back to top button for improved navigation
- Componentized architecture for better code organization
- Well-structured CSS with logical section organization
- Modular component structure with separated styles and logic

## Technologies Used

- React.js
- TypeScript
- CSS
- Vite

## Getting Started

### Prerequisites

- Node.js (v20 or later)
- npm

### Installation

1. Clone the repository
2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

   or

4. Open your browser and navigate to `http://localhost:5173`

## Component Structure

### Layout Components

- **Header**: Contains the navigation menu, logo, and mobile menu toggle
- **Layout**: Wraps the entire application, providing structure and handling common elements like overlay, back-to-top button, and footer

### Section Components

- **Hero**: The landing section with a brief introduction and call-to-action buttons
- **About**: Information about professional background and expertise
- **Skills**: Technical skills organized into categories (Frontend, Backend, Databases, DevOps & Architecture)
- **Projects**: Showcase of selected projects with descriptions and technologies used
- **Experience**: Work history in a timeline format
- **Contact**: Contact information and a contact form
