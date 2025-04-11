export const FooterSection: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-nav">
            <a href="#about" className="footer-nav-link">
              About
            </a>
            <a href="#skills" className="footer-nav-link">
              Skills
            </a>
            <a href="#projects" className="footer-nav-link">
              Projects
            </a>
            <a href="#experience" className="footer-nav-link">
              Experience
            </a>
            <a href="#contact" className="footer-nav-link">
              Contact
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/jaspertth"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/tsz-ho-tsan-74212b23a"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="mailto:tsantszho@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Jasper Tsan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
