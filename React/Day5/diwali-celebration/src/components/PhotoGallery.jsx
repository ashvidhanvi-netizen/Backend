import React, { useState } from 'react';
import { Camera, Maximize2, Sparkles, Filter, Info } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/galleryData';

const PhotoGallery = ({ onImageClick }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="festive-badge">
            <Camera size={14} />
            Visual Keepsakes
          </span>
          <h2 className="section-title">
            Little Moments, <span className="gold-text">Beautiful Memories</span>
          </h2>
          <div className="section-divider">
            <div className="section-divider-line" />
            <span className="section-divider-diya">🪔</span>
            <div className="section-divider-line" />
          </div>
          <p className="section-subtitle">
            A curated snapshot collection of our festival journey—from luminous diyas and vibrant rangoli 
            to mouth-watering sweets and night fireworks.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="gallery-filter-tabs">
          {galleryCategories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="gallery-card gold-gradient-border"
              onClick={() => onImageClick && onImageClick(item, index, filteredItems)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onImageClick && onImageClick(item, index, filteredItems);
              }}
              title="Click to view full photo"
            >
              <div className="gallery-img-container">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-top">
                    <span className="gallery-badge">{item.tag}</span>
                    <span className="zoom-icon-btn">
                      <Maximize2 size={16} />
                    </span>
                  </div>
                  <div className="gallery-overlay-bottom">
                    <h3 className="gallery-item-title">{item.title}</h3>
                    <p className="gallery-item-caption">{item.caption}</p>
                    <span className="gallery-placeholder-note">
                      {item.isPersonal ? "✨ My Celebrations" : `Slot: ${item.placeholderType}`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Helpful instructions banner for easy replacement */}
        <div className="gallery-customization-notice gold-gradient-border">
          <div className="notice-icon">
            <Info size={20} />
          </div>
          <div className="notice-content">
            <h4 className="notice-title">Photo Placeholder & Replacement Guide</h4>
            <p className="notice-text">
              Each card is configured with designated placeholders: <em>Diya decorations, Rangoli, Homemade sweets, Purchased sweets, Crackers & fireworks, Family celebration, and Native place celebration</em>. 
              To update or replace any photo with your new personal images, simply add your file to <code className="notice-code">public/images/personal/</code> and update its entry in <code className="notice-code">src/data/galleryData.js</code>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
