import React from 'react';
import { Heart, Sparkles, Smile, Star, Quote } from 'lucide-react';

const memoryKeepsakes = [
  {
    icon: "🪔",
    title: "The First Diya at Dusk",
    text: "Lighting that very first earthen lamp outside our native home, watching the golden flame come alive against the evening twilight."
  },
  {
    icon: "🍬",
    title: "Mom's Kitchen Magic",
    text: "The sweet scent of cardamom, ghee, and fresh laddoos wafting through the house before the celebrations began."
  },
  {
    icon: "✨",
    title: "Laughter in the Courtyard",
    text: "Sharing jokes, sweets, and sparklers with cousins and elders, feeling the warmth of being together as one big family."
  }
];

const Memories = ({ onImageClick }) => {
  const memoryPhoto = {
    image: "/images/personal/sparkling-diyas-rangoli.jpg",
    title: "Golden Glow of Our Diyas",
    tag: "Precious Memory",
    caption: "A row of decorated golden diyas shining gently on the floral rangoli at our native home.",
    isPersonal: true
  };

  return (
    <section id="memories" className="memories-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="festive-badge">
            <Smile size={14} />
            Heartfelt Reflections
          </span>
          <h2 className="section-title">
            Memories That <span className="gold-text">Make Me Smile</span>
          </h2>
          <div className="section-divider">
            <div className="section-divider-line" />
            <span className="section-divider-diya">🪔</span>
            <div className="section-divider-line" />
          </div>
          <p className="section-subtitle">
            Reflecting on the quiet, luminous moments that linger long after the festival lights dim.
          </p>
        </div>

        {/* Featured Warm Personal Message Card */}
        <div className="memories-main-grid">
          {/* Left / Top: Personal Quote & Reflection */}
          <div className="memories-quote-col">
            <div className="gold-gradient-border memories-quote-card">
              <div className="quote-icon-bubble">
                <Quote size={28} className="quote-svg-icon" />
              </div>

              <blockquote className="memories-main-quote font-serif">
                “Diwali reminds me that happiness doesn't always come from grand celebrations. 
                Sometimes, it's the little things – homemade sweets, family time, festive lights 
                and laughter – that make the moments truly special.”
              </blockquote>

              <div className="memories-author-sign">
                <div className="author-diya">🪔</div>
                <div>
                  <h4 className="author-name">My Diwali Diary</h4>
                  <p className="author-title">Celebration Reflection</p>
                </div>
              </div>

              {/* Keepsake Highlights */}
              <div className="keepsakes-list">
                {memoryKeepsakes.map((k, idx) => (
                  <div key={idx} className="keepsake-item">
                    <span className="keepsake-emoji">{k.icon}</span>
                    <div>
                      <h5 className="keepsake-title">{k.title}</h5>
                      <p className="keepsake-text">{k.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right / Visual: Decorative Personal Keepsake Photograph */}
          <div className="memories-visual-col">
            <div 
              className="memories-photo-frame gold-gradient-border"
              onClick={() => onImageClick && onImageClick(memoryPhoto)}
              title="Click to view full photo"
            >
              <div className="photo-pin-accent">
                <Star size={16} />
              </div>
              <div className="memories-img-wrapper">
                <img 
                  src={memoryPhoto.image} 
                  alt={memoryPhoto.title}
                  className="memories-img"
                  loading="lazy"
                />
                <span className="personal-badge-overlay">✨ My Celebrations</span>
              </div>
              <div className="memories-frame-caption">
                <h4 className="frame-caption-title">{memoryPhoto.title}</h4>
                <p className="frame-caption-sub font-serif">
                  "Every gentle flicker carries the warmth of home."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memories;
