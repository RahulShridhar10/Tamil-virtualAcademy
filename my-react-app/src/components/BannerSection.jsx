import React, { useState, useEffect } from 'react';

function BannerSection() {
  const backgroundImages = [
    'url("https://i.ibb.co/6SWH0z5/tamil-education.jpg")',
    'url("https://i.ibb.co/S7tVQphv/background-images.png")',
    'url("https://i.ibb.co/r2mCbWQ6/tamil-computing.jpg")',
    'url("https://i.ibb.co/4RDB8x82/digital-library.jpg")',
    'url("https://i.ibb.co/9925mxC5/project-dama.jpg")',
    'url("https://i.ibb.co/zTjVgK6Q/projects.jpg")',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  },);

  const bannerStyle = {
    backgroundImage: backgroundImages[currentImageIndex],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '400px',
    position: 'relative',
    overflow: 'hidden',
    transition: 'background-image 1s ease-in-out',
  };

  return (
    <div className="background-section">
      <div className="banner-section" style={bannerStyle}>
        <div className="banner-container">
          <div className="banner-text">
            <h2>
              தமிழர் அறிவுத் தொகுப்பின் தேனீட்டம் ஓலைச்சுவடிகள்! 🏺 <br />
              <br />
              அவை காலத்தால் அழியாத தமிழின் செழுமை, சிந்தனை, <br /> கலாச்சாரத்திற்கான மாபெரும் சாட்சியங்கள் 📜
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSection;