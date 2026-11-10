import React from 'react';
import { Heart, ArrowUp, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Diwali', href: '#about' },
    { label: 'My Celebration', href: '#celebration' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Traditions', href: '#traditions' },
    { label: 'Memories', href: '#memories' }
  ];

  return (
    <footer className="festive-footer">
      {/* Decorative Golden Border Gradient */}
      <div className="footer-top-border" />

      <div className="container footer-container">
        {/* Diya Emblem */}
        <div className="footer-emblem" onClick={scrollToTop} title="Back to top">
          <span className="footer-diya-glow">🪔</span>
        </div>

        {/* Primary Diwali Greetings */}
        <h2 className="footer-heading font-accent">
          Happy Diwali! 🪔
        </h2>

        <p className="footer-blessing font-serif">
          "May this festival fill every heart with happiness, peace and prosperity."
        </p>

        {/* Quick Footer Links */}
        <div className="footer-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="footer-link"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Creator Attribution */}
        <div className="footer-bottom-row">
          <p className="footer-credit">
            Made with <Heart size={16} className="heart-icon" /> by <strong className="creator-name">Ashvi</strong>
          </p>
          
          <button 
            className="back-to-top-btn" 
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
