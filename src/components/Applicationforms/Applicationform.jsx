import React from 'react';
import './Applicationform.css';

const Applicationform = ({ title, text, customComponent, onClose }) => {
  return (
    <div className="form-wrapper">
      <button className="close-button" onClick={onClose} aria-label="Close">
        &times;
      </button>

      <div className="info-scroll-area">
        {/* Jos on otsikko ja teksti (Manifesto/Contact) */}
        {title && <h2 className="info-title">{title}</h2>}
        {title && <div className="info-divider"></div>}
        {text && <p className="info-text">{text}</p>}

        {/* Jos on erillinen komponentti (Team) */}
        {customComponent && (
          <div className="custom-content-wrapper">
            {customComponent}
          </div>
        )}
      </div>
    </div>
  );
};

export default Applicationform;