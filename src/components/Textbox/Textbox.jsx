import React from 'react';
import './TextBox.css';

const TextBox = () => {
  return (
    <section className="textbox-container">
      <div className="textbox-content">
        <div className="textbox-line" />
        
        <h2 className="textbox-title">
          Companies we <span className="text-green">believe in.</span>
        </h2>
        
        <div className="textbox-body">
          <p>We're tired of seeing ideas stay ideas.</p>
          <p>We exist to make them <span className="text-green">happen.</span></p>
        </div>
      </div>
    </section>
  );
};

export default TextBox;