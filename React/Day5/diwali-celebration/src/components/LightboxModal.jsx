import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const LightboxModal = ({ item, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div 
      className="lightbox-overlay" 
      onClick={onClose}
      role="dialog" 
      aria-modal="true"
    >
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="lightbox-close-btn" 
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {onPrev && (
          <button 
            className="lightbox-nav-btn prev" 
            onClick={onPrev}
            aria-label="Previous photo"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        <div className="lightbox-image-wrapper">
          <img 
            src={item.image} 
            alt={item.title} 
            className="lightbox-image" 
          />
        </div>

        {onNext && (
          <button 
            className="lightbox-nav-btn next" 
            onClick={onNext}
            aria-label="Next photo"
          >
            <ChevronRight size={28} />
          </button>
        )}

        <div className="lightbox-details">
          {item.tag && <span className="lightbox-tag">{item.tag}</span>}
          <h3 className="lightbox-title">{item.title}</h3>
          {item.caption && <p className="lightbox-caption">{item.caption}</p>}
          {item.isPersonal && (
            <span className="lightbox-badge">✨ My Celebrations</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LightboxModal;
