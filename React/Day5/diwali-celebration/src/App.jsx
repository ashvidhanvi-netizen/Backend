import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MyCelebration from './components/MyCelebration';
import PhotoGallery from './components/PhotoGallery';
import Traditions from './components/Traditions';
import Memories from './components/Memories';
import InteractiveDiya from './components/InteractiveDiya';
import Footer from './components/Footer';
import FloatingParticles from './components/FloatingParticles';
import LightboxModal from './components/LightboxModal';
import './App.css';

function App() {
  // Lightbox state for viewing any photograph in high resolution
  const [lightboxData, setLightboxData] = useState({
    isOpen: false,
    item: null,
    index: 0,
    list: []
  });

  const handleOpenImage = (item, index = 0, list = []) => {
    setLightboxData({
      isOpen: true,
      item,
      index,
      list: list.length > 0 ? list : [item]
    });
  };

  const handleCloseImage = () => {
    setLightboxData({
      isOpen: false,
      item: null,
      index: 0,
      list: []
    });
  };

  const handleNextImage = () => {
    if (!lightboxData.list.length) return;
    const nextIndex = (lightboxData.index + 1) % lightboxData.list.length;
    setLightboxData((prev) => ({
      ...prev,
      index: nextIndex,
      item: prev.list[nextIndex]
    }));
  };

  const handlePrevImage = () => {
    if (!lightboxData.list.length) return;
    const prevIndex = (lightboxData.index - 1 + lightboxData.list.length) % lightboxData.list.length;
    setLightboxData((prev) => ({
      ...prev,
      index: prevIndex,
      item: prev.list[prevIndex]
    }));
  };

  return (
    <div className="diwali-app">
      {/* Background Floating Golden Embers */}
      <FloatingParticles />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Home / Hero */}
        <Hero />

        {/* Section 2: About Diwali */}
        <About onImageClick={handleOpenImage} />

        {/* Section 3: My Diwali Celebration (Personal Experience by Ashvi) */}
        <MyCelebration onImageClick={handleOpenImage} />

        {/* Section 4: Diwali Moments – Photo Gallery */}
        <PhotoGallery onImageClick={handleOpenImage} />

        {/* Section 5: Beautiful Traditions of Diwali */}
        <Traditions onImageClick={handleOpenImage} />

        {/* Section 6: Special Diwali Memories */}
        <Memories onImageClick={handleOpenImage} />

        {/* Section 7: Interactive Diwali Experience (Light a Diya) */}
        <InteractiveDiya />
      </main>

      {/* Section 8: Footer */}
      <Footer />

      {/* Lightbox Preview Modal */}
      {lightboxData.isOpen && (
        <LightboxModal
          item={lightboxData.item}
          onClose={handleCloseImage}
          onNext={lightboxData.list.length > 1 ? handleNextImage : null}
          onPrev={lightboxData.list.length > 1 ? handlePrevImage : null}
        />
      )}
    </div>
  );
}

export default App;
