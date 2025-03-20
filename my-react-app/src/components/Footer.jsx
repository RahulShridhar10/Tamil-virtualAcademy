import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-text">
          <p>
            உரிமைகளும் கடமைகளும் | தனியுரிமைக் கொள்கை | பயன்பாட்டு விதிமுறைகள் | இணையதளத்தை பற்றி | தொடர்புக்கு |
            சைட்மேப் | எஸ்.எஸ்.எஸ் | நிலைமாற்றம் | உலாவுவதற்கு | அ. ஆ. இ. ஈ. | புதுப்பிக்கப்பட்ட நாள் : 20-03-2025 03:04:03 | நன்
            கொடையளி
          </p>
        </div>
        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;