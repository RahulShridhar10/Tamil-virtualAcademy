import React from 'react';

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <img
            src="https://i.ibb.co/pjWgKxYb/Tamil-Virtual-University.jpg"
            alt="Tamil Virtual Academy Logo"
            className="logo"
          />
        </div>
        <div className="title-container">
          <h1>தமிழ் இணையக் கல்விக்கழகம் - TAMIL VIRTUAL ACADEMY</h1>
        </div>
        <div className="govt-logo-container">
          <img
            src="https://i.ibb.co/sp1wWJ7f/Tamil-Nadu-Logo-svg.webp"
            alt="Government Logo"
            className="govt-logo"
          />
        </div>
        <div className="sastra-logo">
          <img
            src="https://i.ibb.co/KpbncdL7/Shanmugha-Arts-Science-Technology-Research-Academy-svg.png"
            alt="sastra Logo"
            className="sastra-logo"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;