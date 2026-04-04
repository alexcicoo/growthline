import React from 'react';
import './Fuella.css';

const Fuella = () => {
  return (
    <article className="fuella-layout">
      <header className="fuella-header-section">
        <a href="https://fuella.eu" className="fuella-title-link">
          <h2 className="fuella-main-title">FUELLA</h2>
        </a>
        {/* Accent line palautettu tänne */}
        <div className="fuella-accent-line" aria-hidden="true"></div>
      </header>

      <div className="fuella-image-wrapper">
        <img 
          src="./Viljami.webp" alt="Viljami - Founder of Fuella" className="fuella-hero-image" 
        />
        <div className="fuella-founder-badge">
          <span className="fuella-founder-text">FOUNDER & CEO</span>
        </div>
      </div>

      <div className="fuella-description-section">
        <p className="fuella-lead-text">
          Portable blender & mixes for ambitious people
        </p>
        <a href="https://fuella.eu" className="fuella-cta-link">
          Learn more at fuella.eu →
        </a>
      </div>
    </article>
  );
};

export default Fuella;