import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import ImageUploadSection from './components/ImageUploadSection';
import IntroductionModal from './components/IntroductionModal';
import FooterLinks from './components/FooterLinks';
import Footer from './components/Footer';
import BannerSection from './components/BannerSection';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding its CSS

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
      <main>
        <BannerSection />
        {/* <div className="content-section">
          <h2 className="section-title">தமிழ்க் கல்வி</h2>
        </div>
        <FooterLinks onIntroductionClick={openModal} /> */}
        <ImageUploadSection />
        <IntroductionModal isOpen={isModalOpen} onClose={closeModal} />
      </main>
      <Footer />
    </div>
  );
}

export default App;