import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = mobileMenuOpen ? "auto" : "hidden";
  };

  // Back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="overlay"
          onClick={() => {
            setMobileMenuOpen(false);
            document.body.style.overflow = "auto";
          }}
        ></div>
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

      <header className="header">
        <div className="container">
          <h1 className="logo">Jasper Tsan</h1>

          {/* Mobile menu button */}
          <button
            className={`mobile-menu-button ${mobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${mobileMenuOpen ? "nav-open" : ""}`}>
            <ul className="nav-links">
              <li>
                <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" onClick={() => setMobileMenuOpen(false)}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setMobileMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" onClick={() => setMobileMenuOpen(false)}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Hi, I'm Jasper Tsan</h1>
            <h2>Full Stack Developer</h2>
            <p>
              I build scalable, modern applications with React, Node.js, and
              cloud-native technologies
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
              <a href="#projects" className="btn btn-secondary">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate software engineer specializing in full-stack
                development with expertise in React.js, Next.js, Node.js, and
                NestJS. With a strong background in both frontend and backend
                technologies, I build scalable, efficient, and user-friendly
                applications with polished UI using Material UI.
              </p>
              <p>
                My experience spans across microservices architecture, database
                design with TypeORM and Prisma, containerization with Docker and
                Kubernetes, and working with various SQL databases. I'm
                versatile with multiple programming languages including Python,
                Java, and C#. I'm committed to writing clean, maintainable code
                and staying current with emerging technologies and industry best
                practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul className="skill-list">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Material UI</li>
                <li>HTML5 & CSS3</li>
                <li>TypeScript/JavaScript</li>
                <li>GraphQL (Client)</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul className="skill-list">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>NestJS</li>
                <li>Python</li>
                <li>Java & C#</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Databases</h3>
              <ul className="skill-list">
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>MS SQL</li>
                <li>TypeORM</li>
                <li>Prisma</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>DevOps & Architecture</h3>
              <ul className="skill-list">
                <li>Microservices</li>
                <li>Docker & Kubernetes</li>
                <li>Linux</li>
                <li>CI/CD</li>
                <li>Git & GitHub</li>
                <li>n8n</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <img
                src="https://via.placeholder.com/600x400/4a6cf7/ffffff?text=Project+One"
                alt="Project One"
                className="project-image"
              />
              <div className="project-content">
                <h3>Project One</h3>
                <p>
                  A web application built with React and Node.js that allows
                  users to manage their tasks, set priorities, and track
                  progress in real-time.
                </p>
                <div className="project-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-sm">
                    View Project
                  </a>
                  <a href="#" className="btn btn-sm">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <img
                src="https://via.placeholder.com/600x400/2e3856/ffffff?text=Project+Two"
                alt="Project Two"
                className="project-image"
              />
              <div className="project-content">
                <h3>Project Two</h3>
                <p>
                  A responsive e-commerce platform with user authentication,
                  product catalog, and secure payment processing integration.
                  Features a polished UI with Material UI components and backend
                  data processing with Python.
                </p>
                <div className="project-tags">
                  <span>React</span>
                  <span>Material UI</span>
                  <span>TypeScript</span>
                  <span>Python</span>
                  <span>Express</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-sm">
                    View Project
                  </a>
                  <a href="#" className="btn btn-sm">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <img
                src="https://via.placeholder.com/600x400/6a7985/ffffff?text=Project+Three"
                alt="Project Three"
                className="project-image"
              />
              <div className="project-content">
                <h3>Project Three</h3>
                <p>
                  A full-stack application featuring real-time chat, user
                  profiles, and collaborative workspaces for remote teams.
                </p>
                <div className="project-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Redux</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-sm">
                    View Project
                  </a>
                  <a href="#" className="btn btn-sm">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Senior Full Stack Developer</h3>
                <h4>Tech Innovation Labs</h4>
                <p className="timeline-date">2021 - Present</p>
                <p>
                  Led development of microservices architecture using NestJS and
                  TypeScript. Orchestrated containerized deployments with Docker
                  and Kubernetes. Designed and implemented scalable database
                  solutions with PostgreSQL and TypeORM. Built modern frontend
                  interfaces with React, Next.js, Material UI and GraphQL.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Full Stack Developer</h3>
                <h4>Digital Solutions Inc.</h4>
                <p className="timeline-date">2018 - 2021</p>
                <p>
                  Developed RESTful APIs with Node.js, Express, and TypeScript.
                  Created responsive web applications using React and Material
                  UI. Implemented CI/CD pipelines for automated testing and
                  deployment. Worked with both SQL and NoSQL databases and ORM
                  frameworks. Developed data processing scripts with Python.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Backend Developer</h3>
                <h4>Software Innovations Co.</h4>
                <p className="timeline-date">2016 - 2018</p>
                <p>
                  Built backend services using Java and C# for enterprise
                  applications. Managed MS SQL and MySQL databases and optimized
                  query performance. Collaborated with frontend teams to
                  integrate API endpoints. Gained experience with Linux
                  environments and server administration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h3>Email</h3>
                <p>
                  <a href="mailto:jasper.tsan@example.com">
                    jasper.tsan@example.com
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <h3>LinkedIn</h3>
                <p>
                  <a href="https://linkedin.com/in/jaspertsan" target="_blank">
                    linkedin.com/in/jaspertsan
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <h3>GitHub</h3>
                <p>
                  <a href="https://github.com/jaspertsan" target="_blank">
                    github.com/jaspertsan
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Jasper Tsan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
