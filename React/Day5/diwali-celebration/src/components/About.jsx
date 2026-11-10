import React from 'react';
import { Sun, ShieldCheck, Sparkles, Users, Flame } from 'lucide-react';

const coreValues = [
  {
    icon: <Sun size={26} className="core-icon" />,
    title: "Light Over Darkness",
    desc: "Every lit diya dispels the shadows of ignorance, radiating warmth, awareness, and inner enlightenment throughout every home."
  },
  {
    icon: <ShieldCheck size={26} className="core-icon" />,
    title: "Good Over Evil",
    desc: "A timeless reminder that truth, righteousness, and kindness ultimately triumph, no matter how formidable the obstacles appear."
  },
  {
    icon: <Sparkles size={26} className="core-icon" />,
    title: "Happiness & New Beginnings",
    desc: "Marking an auspicious fresh start filled with hope, welcoming Goddess Lakshmi for prosperity, abundance, and holistic well-being."
  },
  {
    icon: <Users size={26} className="core-icon" />,
    title: "Family Gatherings & Love",
    desc: "Reuniting families across miles, fostering heartfelt togetherness, traditional pujas, shared feasts, and unforgettable memories."
  }
];

const About = ({ onImageClick }) => {
  const featuredImage = {
    image: "/images/diwali-grand-lights.jpg",
    title: "The Sacred Festival of Lights",
    tag: "Festival Atmosphere",
    caption: "A magnificent celebration with thousands of illuminated clay diyas, marigolds, and warm golden radiance."
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="festive-badge">
            <Flame size={14} />
            Ancient Heritage & Spirit
          </span>
          <h2 className="section-title">
            The <span className="gold-text">Festival of Lights</span>
          </h2>
          <div className="section-divider">
            <div className="section-divider-line" />
            <span className="section-divider-diya">🪔</span>
            <div className="section-divider-line" />
          </div>
          <p className="section-subtitle">
            Diwali is one of the most revered and beloved celebrations in India and around the globe, 
            illuminating hearts with hope, boundless joy, and universal harmony.
          </p>
        </div>

        {/* Narrative & Visual Feature Grid */}
        <div className="about-grid">
          <div className="about-story-col">
            <div className="gold-gradient-border about-narrative-card">
              <h3 className="about-card-title">What is Diwali?</h3>
              <p className="about-paragraph">
                Also known as <strong>Deepavali</strong> (meaning "a row of lights"), Diwali transforms cities, 
                courtyards, and native homes into glowing constellations of earthenware diyas, fairy lights, 
                and colourful floral rangolis.
              </p>
              <p className="about-paragraph">
                Beyond the sparkling fireworks and festive delicacies, Diwali holds deep spiritual significance. 
                It celebrates the eternal victory of light over darkness, wisdom over ignorance, and righteousness over evil. 
                It is a sacred season to let go of grudges, embrace forgiveness, illuminate our minds with positive intentions, 
                and embark on hopeful new beginnings.
              </p>
              <div className="about-quote-box">
                <span className="quote-mark">“</span>
                <p className="about-quote-text font-serif">
                  When you light a diya, you don't just brighten a room—you kindle the spirit of unity, gratitude, 
                  and love in every heart.
                </p>
              </div>
            </div>
          </div>

          <div className="about-visual-col">
            <div 
              className="about-image-card" 
              onClick={() => onImageClick && onImageClick(featuredImage)}
              title="Click to view full image"
            >
              <div className="about-image-wrapper">
                <img 
                  src={featuredImage.image} 
                  alt="Diwali festival celebration of lights" 
                  className="about-img"
                  loading="lazy"
                />
                <div className="about-img-overlay">
                  <span className="about-img-tag">Festival Atmosphere</span>
                  <p className="about-img-caption">The divine radiance of thousands of glowing earthen lamps</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="about-values-grid">
          {coreValues.map((val, idx) => (
            <div key={idx} className="gold-gradient-border value-card">
              <div className="value-icon-circle">
                {val.icon}
              </div>
              <h4 className="value-title">{val.title}</h4>
              <p className="value-desc">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
