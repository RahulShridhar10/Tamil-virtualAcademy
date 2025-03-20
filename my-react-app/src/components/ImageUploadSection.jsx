import React, { useState, useRef } from 'react';

function ImageUploadSection() {
  const [previewImage, setPreviewImage] = useState('#');
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [resultText, setResultText] = useState('');
  const fileInputRef = useRef(null);

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setIsPreviewVisible(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResultButtonClick = () => {
    if (!previewImage || previewImage === '#') {
      alert('தயவுசெய்து முதலில் ஒரு படத்தை பதிவேற்றவும்');
      return;
    }
    setResultText('முடிவு காட்டப்படுகிறது...');
    setIsResultVisible(true);
  };

  const handleClearButtonClick = () => {
    setPreviewImage('#');
    setIsPreviewVisible(false);
    setIsResultVisible(false);
    setResultText('');
  };

  return (
    <div className="upload-section">
      <h3 className="upload-title">உங்கள் ஓலைச்சுவடிகளை பதிவேற்றவும்</h3>
      <div className="upload-container">
        <div className="button-group">
          <button id="uploadButton" className="upload-button" onClick={handleUploadButtonClick}>
            பதிவேற்று
          </button>
          <button id="resultButton" className="upload-button" onClick={handleResultButtonClick}>
            முடிவு
          </button>
          <button id="clearButton" className="upload-button" onClick={handleClearButtonClick}>
            அழி
          </button>
        </div>
      </div>
      <div id="previewContainer" className={`preview-container ${isPreviewVisible ? 'visible' : ''}`}>
        <img id="previewImage" className="preview-image" src={previewImage} alt="Preview" />
      </div>
      <div id="resultContainer" className={`result-container ${isResultVisible ? 'visible' : ''}`}>
        <h4>முடிவு:</h4>
        <p id="resultText">{resultText}</p>
      </div>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        ref={fileInputRef}
      />
    </div>
  );
}

export default ImageUploadSection;