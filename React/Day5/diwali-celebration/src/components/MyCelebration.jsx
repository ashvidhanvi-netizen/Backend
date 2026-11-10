import React from 'react';
import { Heart, MapPin, Sparkles, Utensils, Zap, Clock } from 'lucide-react';

const MyCelebration = ({ onImageClick }) => {
  const celebrationPhotos = [
    {
      id: 1,
      image: "/images/personal/family-rangoli-celebration.jpg",
      title: "Native Place Family Celebration",
      tag: "Family & Traditions",
      caption: "All of us gathered together around the flower rangoli, lighting earthen lamps into the evening.",
      isPersonal: true
    },
    {
      id: 2,
      image: "/images/personal/festive-thali-diyas.jpg",
      title: "Lighting the Sacred Puja Thali",
      tag: "Puja Moments",
      caption: "Holding our traditional brass thali adorned with glowing diyas and fragrant marigold petals.",
      isPersonal: true
    },
    {
      id: 3,
      image: "/images/personal/coconut-rava-laddoo.png",
      title: "Mom's Homemade Delicacies",
      tag: "Homemade Sweets",
      caption: "Freshly made sweets prepared with so much love by my mom for our Diwali gathering.",
      isPersonal: true
    },
    {
      id: 4,
      image: "/images/personal/motichoor-laddoo.jpg",
      title: "Our Favourite Purchased Sweets",
      tag: "Festive Treats",
      caption: "Golden motichoor laddoos we bought to share with visiting relatives and friends.",
      isPersonal: true
    }
  ];

  return (
    <section id="celebration" className="celebration-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="festive-badge">
            <Heart size={14} />
            My Celebrations Diary
          </span>
          <h2 className="section-title">
            How I Celebrated <span className="gold-text">My Diwali</span>
          </h2>
          <div className="section-divider">
            <div className="section-divider-line" />
            <span className="section-divider-diya">🪔</span>
            <div className="section-divider-line" />
          </div>
          <p className="section-subtitle">
            A heartfelt reflection on travelling to my roots, sharing warmth with family, 
            and discovering magic in the simplest traditions.
          </p>
        </div>

        {/* Featured Personal Narrative Highlight Box */}
        <div className="gold-gradient-border personal-story-featured-card">
          <div className="story-header-row">
            <div className="story-badge">
              <Sparkles size={16} />
              <span>My Celebration Story</span>
            </div>
            <div className="story-native-tag">
              <MapPin size={15} />
              <span>Native Place Reunion</span>
            </div>
          </div>

          <div className="story-body-content">
            <p className="story-lead font-serif">
              "This Diwali was all about happiness, family and beautiful little moments. 
              I travelled to my native place to celebrate the festival with my family."
            </p>

            <p className="story-text">
              "My mom prepared delicious homemade sweets, and we also bought some of our 
              favourite sweets to make the celebration even more special."
            </p>

            <p className="story-text">
              "We bought crackers and enjoyed the festive moments together. Spending time with my family, 
              sharing sweets, enjoying the celebrations and creating happy memories made this Diwali special."
            </p>

            <div className="story-concluding-highlight">
              <p className="concluding-text font-serif">
                "It was a simple celebration, but the happiness of being together made it unforgettable."
              </p>
            </div>
          </div>
        </div>

        {/* Story Chapters Visual Breakdown */}
        <div className="story-chapters-grid">
          {/* Chapter 1 */}
          <div className="story-chapter-card gold-gradient-border">
            <div 
              className="chapter-img-box"
              onClick={() => onImageClick && onImageClick(celebrationPhotos[0])}
              title="Click to view full photo"
            >
              <img 
                src={celebrationPhotos[0].image} 
                alt={celebrationPhotos[0].title}
                className="chapter-img"
              />
              <span className="personal-badge-overlay">✨ My Celebrations</span>
            </div>
            <div className="chapter-content">
              <div className="chapter-meta">
                <MapPin size={16} className="chapter-icon" />
                <span>Chapter 1 • Journey to Roots</span>
              </div>
              <h3 className="chapter-title">Reuniting at Our Native Place</h3>
              <p className="chapter-desc">
                Travelling back to our ancestral home brought back childhood memories. 
                Sitting together in the courtyard, creating a large floral rangoli, 
                and lighting countless diyas filled our hearts with immense peace.
              </p>
            </div>
          </div>

          {/* Chapter 2 */}
          <div className="story-chapter-card gold-gradient-border">
            <div 
              className="chapter-img-box"
              onClick={() => onImageClick && onImageClick(celebrationPhotos[2])}
              title="Click to view full photo"
            >
              <img 
                src={celebrationPhotos[2].image} 
                alt={celebrationPhotos[2].title}
                className="chapter-img"
              />
              <span className="personal-badge-overlay">✨ My Celebrations</span>
            </div>
            <div className="chapter-content">
              <div className="chapter-meta">
                <Utensils size={16} className="chapter-icon" />
                <span>Chapter 2 • Sweet Delicacies</span>
              </div>
              <h3 className="chapter-title">Mom's Sweets & Festive Treats</h3>
              <p className="chapter-desc">
                The aroma of roasted flour, ghee, and cardamom drifted through the kitchen. 
                Mom's homemade sweets paired with our favourite purchased laddoos made every 
                gathering and visitor's smile so sweet.
              </p>
            </div>
          </div>

          {/* Chapter 3 */}
          <div className="story-chapter-card gold-gradient-border">
            <div 
              className="chapter-img-box"
              onClick={() => onImageClick && onImageClick(celebrationPhotos[1])}
              title="Click to view full photo"
            >
              <img 
                src={celebrationPhotos[1].image} 
                alt={celebrationPhotos[1].title}
                className="chapter-img"
              />
              <span className="personal-badge-overlay">✨ My Celebrations</span>
            </div>
            <div className="chapter-content">
              <div className="chapter-meta">
                <Zap size={16} className="chapter-icon" />
                <span>Chapter 3 • Lights & Crackers</span>
              </div>
              <h3 className="chapter-title">Crackers & Sparkling Joy</h3>
              <p className="chapter-desc">
                As twilight fell, we lit sparklers and crackers in the open night sky. 
                The laughter of cousins, the warm glow of our puja thali, and the shared joy 
                made it a celebration to cherish forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCelebration;
