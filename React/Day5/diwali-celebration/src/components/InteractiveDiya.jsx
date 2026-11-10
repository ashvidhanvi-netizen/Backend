import React, { useState } from 'react';
import { Flame, Sparkles, RotateCcw } from 'lucide-react';

/**
 * Interactive Diwali Experience Component
 * Uses React useState to toggle the Diya flame state
 * and reveals a heartwarming Diwali blessing.
 */
const InteractiveDiya = () => {
  // Beginner-friendly React state to track whether the diya is lit
  const [isLit, setIsLit] = useState(false);
  const [diyaCount, setDiyaCount] = useState(0);

  const handleLightDiya = () => {
    setIsLit(true);
    setDiyaCount((prev) => prev + 1);
  };

  const handleResetDiya = () => {
    setIsLit(false);
  };

  return (
    <section id="interactive" className="interactive-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="festive-badge">
            <Sparkles size={14} />
            Interactive Blessing
          </span>
          <h2 className="section-title">
            Light Your Own <span className="gold-text">Festival Diya</span>
          </h2>
          <div className="section-divider">
            <div className="section-divider-line" />
            <span className="section-divider-diya">🪔</span>
            <div className="section-divider-line" />
          </div>
          <p className="section-subtitle">
            Click below to kindle the sacred lamp and illuminate your journey with warmth, hope, and joy.
          </p>
        </div>

        {/* Interactive Experience Card */}
        <div className="gold-gradient-border interactive-card">
          {/* Diya Visual Showcase */}
          <div className={`interactive-diya-stage ${isLit ? 'stage-lit' : 'stage-unlit'}`}>
            {/* Ambient Background Aura */}
            <div className={`diya-glow-aura ${isLit ? 'active' : ''}`} />

            {/* Rangoli circular pad underneath */}
            <div className="diya-rangoli-pad">
              {/* Diya Vessel & Flame */}
              <div className="clay-lamp-container">
                {/* Flame element */}
                <div className={`lamp-flame ${isLit ? 'flame-visible' : 'flame-hidden'}`}>
                  <div className="flame-core" />
                  <div className="flame-inner" />
                  <div className="flame-spark" />
                </div>

                {/* Wick */}
                <div className="lamp-wick" />

                {/* Earthen Clay Diya Body */}
                <div className="lamp-body">
                  <div className="lamp-rim" />
                  <div className="lamp-pattern" />
                </div>
              </div>
            </div>

            {/* Sparkles Emitter effect when lit */}
            {isLit && (
              <div className="sparkles-burst" aria-hidden="true">
                <span className="burst-spark spark-1">✨</span>
                <span className="burst-spark spark-2">🌟</span>
                <span className="burst-spark spark-3">✨</span>
                <span className="burst-spark spark-4">🌟</span>
              </div>
            )}
          </div>

          {/* Button & Message Controls */}
          <div className="interactive-controls">
            {!isLit ? (
              <button
                className="btn-gold-primary interactive-action-btn"
                onClick={handleLightDiya}
              >
                <Flame size={20} className="btn-flame-icon" />
                <span>Light a Diya</span>
              </button>
            ) : (
              <div className="lit-actions-row">
                <button
                  className="btn-gold-primary interactive-action-btn lit-glow"
                  onClick={handleLightDiya}
                >
                  <Sparkles size={20} />
                  <span>Add Another Blessing ({diyaCount})</span>
                </button>
                <button
                  className="btn-gold-secondary reset-btn"
                  onClick={handleResetDiya}
                  title="Blow out flame to light again"
                >
                  <RotateCcw size={16} />
                  <span>Reset</span>
                </button>
              </div>
            )}

            {/* Required Message Reveal */}
            <div className={`blessing-reveal-box ${isLit ? 'reveal' : ''}`}>
              <div className="blessing-diya-icon">🪔</div>
              <p className="blessing-message font-serif">
                "May your life always shine with happiness and positivity!"
              </p>
              <span className="blessing-sub">
                ✨ Wishing you and your loved ones endless joy, health and abundance! ✨
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDiya;
