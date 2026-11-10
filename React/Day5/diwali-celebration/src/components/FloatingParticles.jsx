import React, { useMemo } from 'react';

/**
 * FloatingParticles component
 * Renders subtle floating golden light embers and sparkles in the background
 */
const FloatingParticles = () => {
  // Generate a fixed set of particles with random positions, delays, and sizes
  const particles = useMemo(() => {
    return Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 5) + 3,
      left: Math.random() * 100,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.5 + 0.25,
      blur: Math.random() * 2
    }));
  }, []);

  return (
    <div className="particle-container" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
            filter: `blur(${p.blur}px)`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
