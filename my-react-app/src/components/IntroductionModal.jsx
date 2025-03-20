import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function IntroductionModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div id="introductionModal" className="modal" onClick={(e) => { if (e.target.className === 'modal') onClose(); }}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <div className="modal-header">
          <div className="logo-left">
            <img
              src="https://i.ibb.co/pjWgKxYb/Tamil-Virtual-University.jpg"
              alt="Tamil Virtual Academy Logo"
            />
          </div>
          <div className="header-text">
            <h1>தமிழ் இணையக் கல்விக்கழகம்</h1>
            <h2>(முந்தைய தமிழ் இணையப் பல்கலைக்கழகம்)</h2>
            <h3>TAMIL VIRTUAL ACADEMY</h3>
            <h4>(ERSTWHILE TAMIL VIRTUAL UNIVERSITY)</h4>
          </div>
          <div className="logo-right">
            <img
              src="https://i.ibb.co/sp1wWJ7f/Tamil-Nadu-Logo-svg.webp"
              alt="Tamil Nadu Government Logo"
            />
          </div>
        </div>
        <div className="quote-banner">
          <p>" தேமதுரத் தமிழோசை உலகெலாம் பரவும் வகை செய்தல் வேண்டும் "</p>
        </div>
        <div className="content-area">
          <div className="left-image">
            <img src="https://i.ibb.co/WNMGG9xD/thiruvaluvar.png" alt="Tamil Statue" />
          </div>
          <div className="right-collage">
            <img src="https://i.ibb.co/S7tVQphv/background-images.png" alt="Tamil Cultural Collage" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default IntroductionModal;