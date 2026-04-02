import React, { useState } from 'react';
import './Applicationform.css';

const Applicationform = ({ src, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="form-wrapper">
      {/* Rasti on nyt wrapperin sisällä, jolloin se asemoituu iframen päälle */}
      <button className="close-button" onClick={onClose} aria-label="Close">
        &times;
      </button>

      {isLoading && (
        <div className="form-loader">
          <p>Loading...</p>
        </div>
      )}
      
      <iframe
        src={src}
        className={`application-form ${isLoading ? 'hidden' : 'visible'}`}
        title="Application Form"
        onLoad={() => setIsLoading(false)}
        frameBorder="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Applicationform;