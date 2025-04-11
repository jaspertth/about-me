# Personal Portfolio Website

This is a modern, responsive portfolio website built with React and TypeScript to showcase my skills, projects, and experience as a full-stack developer.

## Project Structure

The project follows a component-based architecture with inline CSS styling for better organization, maintainability, and reusability:

```
src/
├── components/
│   ├── layout/       # Components related to layout structure
│   │   ├── Header/   # Header component files
│   │   │   ├── index.tsx  # Header component
│   │   │   └── styles.ts  # Header styles
│   │   └── Layout.tsx
│   ├── sections/     # Main content sections of the website
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   └── ui/           # Reusable UI components and styles
│       └── types.ts  # Common styles and theme variables
├── App.tsx           # Main application component
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
- Inline CSS styles for easier maintenance and portability
- Centralized theme with consistent color scheme and spacing
- Modular component structure with separated styles and logic

## Technologies Used

- React.js
- TypeScript
- Inline CSS (no external CSS files)
- Vite (build tool)

## Styling Approach

This project uses inline CSS styling with React's style prop rather than external CSS files. Benefits of this approach include:

- Component encapsulation: Styles are scoped to the component they belong to
- No CSS class name conflicts
- Easier refactoring and component reuse
- TypeScript type safety for styles
- Dynamic styling based on component state
- Centralized theme with constants for colors, spacing, and other values

The styling system includes:

- A central theme with colors, spacing, shadow, and other design constants
- Reusable style objects for common components
- TypeScript interfaces to ensure type safety
- Media query handling for responsive design
- Separation of styles and component logic in dedicated files

## Component Architecture

The project uses a modular component architecture, with complex components having their own dedicated folders. For example, the Header component:

```
Header/
├── index.tsx   # Component logic
└── styles.ts   # Component styles
```

This approach offers several advantages:

- Better separation of concerns
- Easier maintenance and updates
- Improved code organization
- Better scaling for larger components
- More logical file structure as components grow

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```
   npm install
   ```

   or

   ```
   yarn
   ```

3. Start the development server:

   ```
   npm run dev
   ```

   or

   ```
   yarn dev
   ```

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

## Customization

Feel free to customize the content in each component to reflect your personal information, skills, and projects.
