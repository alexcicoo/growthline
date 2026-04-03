import React from 'react';
import './Fuella.css';

const Fuella = () => {
  return (
    <article className="fuella-layout">
      <header className="fuella-header-section">
        <h2 className="fuella-main-title">FUELLA</h2>
        <div className="fuella-accent-line" aria-hidden="true"></div>
      </header>

      <div className="fuella-image-wrapper">
        <img 
          src="./Viljami.webp" 
          alt="Fuella brand - portable blender and mixes for ambitious people" 
          className="fuella-hero-image" 
        />
      </div>

      <div className="fuella-description-section">
        <p className="fuella-lead-text">
          portable blender & mixes for ambitious people
        </p>
      </div>
    </article>
  );
};

export default Fuella;