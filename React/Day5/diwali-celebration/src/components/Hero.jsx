import React from 'react';
import { Sparkles, ArrowDown, Heart, Flame } from 'lucide-react';

const Hero = () => {
  const handleScrollToNext = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Ambient Radial Glowing Orbs */}
      <div className="hero-glow-orb orb-center" aria-hidden="true" />
      <div className="hero-glow-orb orb-left" aria-hidden="true" />
      <div className="hero-glow-orb orb-right" aria-hidden="true" />

      <div className="container hero-container">
        {/* Festive Welcome Badge */}
        <div className="hero-badge-wrap">
          <span className="festive-badge">
            <Sparkles size={15} />
            Shubh Deepavali • A Personal Celebration
          </span>
        </div>

        {/* Centerpiece Glowing Diya Animation */}
        <div className="hero-diya-centerpiece">
          <div className="mandala-outer-ring">
            <div className="mandala-inner-ring">
              <div className="hero-diya-flame-wrapper">
                <div className="hero-flame" />
                <div className="hero-flame-glow" />
                <div className="hero-clay-diya">
                  <div className="clay-rim" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Headings */}
        <h1 className="hero-title">
          Diwali – A Celebration of <span className="gold-text">Light</span>, <span className="gold-text">Love</span> & <span className="gold-text">Happiness</span>
        </h1>

        <p className="hero-subtitle font-serif">
          "Every light tells a story, every celebration creates a memory."
        </p>

        <p className="hero-intro">
          Diwali is not just a festival; it's a beautiful celebration of happiness, 
          togetherness, traditions and new beginnings.
        </p>

        {/* Action Button */}
        <div className="hero-cta-group">
          <a 
            href="#about" 
            className="btn-gold-primary hero-btn"
            onClick={handleScrollToNext}
          >
            <span>Explore My Diwali</span>
            <ArrowDown size={18} className="btn-icon-bounce" />
          </a>

          <a 
            href="#celebration" 
            className="btn-gold-secondary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('celebration')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Heart size={16} />
            <span>Read My Story</span>
          </a>
        </div>

        {/* Festive Highlights Strip */}
        <div className="hero-highlights-grid">
          <div className="hero-highlight-pill">
            <span className="pill-icon">✨</span>
            <span className="pill-text">Golden Diyas & Rangoli</span>
          </div>
          <div className="hero-highlight-pill">
            <span className="pill-icon">🪔</span>
            <span className="pill-text">Native Place Reunion</span>
          </div>
          <div className="hero-highlight-pill">
            <span className="pill-icon">🍬</span>
            <span className="pill-text">Mom's Homemade Sweets</span>
          </div>
          <div className="hero-highlight-pill">
            <span className="pill-icon">🎆</span>
            <span className="pill-text">Sparkling Fireworks</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
