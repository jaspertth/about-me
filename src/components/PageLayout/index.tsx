import { ReactNode, useState } from "react";
import { FooterSection } from "./FooterSection";
import { HeaderSection } from "./HeaderSection";
import { BackToTopButton } from "./BackToTopButton";

export interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };
  return (
    <div className="page-layout">
      {mobileMenuOpen && (
        <div className="overlay" onClick={toggleMobileMenu}></div>
      )}

      <BackToTopButton />

      <HeaderSection
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        handleNavLinkClick={handleNavLinkClick}
      />

      <main className="main">{children}</main>

      <FooterSection />
    </div>
  );
};
