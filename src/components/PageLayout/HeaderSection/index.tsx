import { useEffect } from "react";

interface HeaderSectionProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  handleNavLinkClick: () => void;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  mobileMenuOpen,
  toggleMobileMenu,
  handleNavLinkClick,
}) => {
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Jasper Tsan</h1>

        {/* Desktop Navigation - Only visible on larger screens */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="nav-link">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button - Positioned on the right */}
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`mobile-menu-span ${mobileMenuOpen ? "open" : ""}`}
          ></span>
          <span
            className={`mobile-menu-span ${mobileMenuOpen ? "open" : ""}`}
          ></span>
          <span
            className={`mobile-menu-span ${mobileMenuOpen ? "open" : ""}`}
          ></span>
        </button>

        {/* Mobile Navigation - Only appears when menu is open */}
        <nav className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
          <ul className="mobile-nav-links">
            <li>
              <a
                href="#about"
                onClick={handleNavLinkClick}
                className="mobile-nav-link"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={handleNavLinkClick}
                className="mobile-nav-link"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={handleNavLinkClick}
                className="mobile-nav-link"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={handleNavLinkClick}
                className="mobile-nav-link"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={handleNavLinkClick}
                className="mobile-nav-link"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
