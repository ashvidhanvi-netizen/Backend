import React from 'react';
import { Flame, Sparkles, Gift, Heart, Zap } from 'lucide-react';
import { traditionsList } from '../data/traditionsData';

const iconMap = {
  Flame: <Flame size={20} />,
  Sparkles: <Sparkles size={20} />,
  Gift: <Gift size={20} />,
  Heart: <Heart size={20} />,
  Zap: <Zap size={20} />
};

const Traditions = ({ onImageClick }) => {
  return (
    <section id="traditions" className="traditions-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="festive-badge">
            <Sparkles size={14} />
            Cultural Customs
          </span>
          <h2 className="section-title">
            Beautiful <span className="gold-text">Traditions of Diwali</span>
          </h2>
          <div className="section-divider">
            <div className="section-divider-line" />
            <span className="section-divider-diya">🪔</span>
            <div className="section-divider-line" />
          </div>
          <p className="section-subtitle">
            Time-honoured rituals passed down through generations, bringing meaning, reverence, 
            and luminous joy into every celebration.
          </p>
        </div>

        {/* 5 Traditions Grid */}
        <div className="traditions-grid">
          {traditionsList.map((tradition) => (
            <div 
              key={tradition.id} 
              className="tradition-card gold-gradient-border"
            >
              <div 
                className="tradition-image-box"
                onClick={() => onImageClick && onImageClick({
                  image: tradition.image,
                  title: tradition.title,
                  tag: tradition.highlight,
                  caption: tradition.description
                })}
                title="Click to view full photo"
              >
                <img 
                  src={tradition.image} 
                  alt={tradition.title} 
                  className="tradition-img"
                  loading="lazy"
                />
                <span className="tradition-number-badge">{tradition.number}</span>
                <span className="tradition-highlight-pill">{tradition.highlight}</span>
              </div>

              <div className="tradition-content">
                <div className="tradition-icon-badge">
                  {iconMap[tradition.iconName] || <Flame size={20} />}
                </div>
                <h3 className="tradition-title">{tradition.title}</h3>
                <h4 className="tradition-subtitle font-serif">{tradition.subtitle}</h4>
                <p className="tradition-description">{tradition.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Traditions;
