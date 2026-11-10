import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Diwali', href: '#about' },
  { label: 'My Celebration', href: '#celebration' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Traditions', href: '#traditions' },
  { label: 'Memories', href: '#memories' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'celebration', 'gallery', 'traditions', 'memories'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`festive-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="nav-brand" 
          onClick={(e) => handleNavClick(e, '#home')}
        >
          <span className="brand-diya-glow">🪔</span>
          <div className="brand-text-group">
            <span className="brand-title">My Diwali</span>
            <span className="brand-tagline">Festival of Lights</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav-desktop-links">
          {navLinks.map((link) => {
            const sectionKey = link.href.replace('#', '');
            const isActive = activeSection === sectionKey;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
                {isActive && <span className="active-dot" />}
              </a>
            );
          })}

          <a 
            href="#interactive" 
            className="nav-cta-btn"
            onClick={(e) => handleNavClick(e, '#interactive')}
          >
            <Sparkles size={16} />
            <span>Light a Diya</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`nav-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-links-wrapper">
          {navLinks.map((link) => {
            const sectionKey = link.href.replace('#', '');
            const isActive = activeSection === sectionKey;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <span>{link.label}</span>
                {isActive && <span className="mobile-active-tag">Active</span>}
              </a>
            );
          })}
          
          <a 
            href="#interactive" 
            className="mobile-cta-btn"
            onClick={(e) => handleNavClick(e, '#interactive')}
          >
            <span>🪔 Light a Diya Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
