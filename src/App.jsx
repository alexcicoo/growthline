import React, { useState } from 'react';
import LineWaves from './components/Linewaves/Linewaves';
import SplitText from './components/SplitText';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Applicationform from './components/Applicationforms/Applicationform';
import './App.css';

function App() {
  // Tila, joka määrittää näytetäänkö hakemuslomake vai aloitusnappi
  const [showForm, setShowForm] = useState(false);

  // Google Forms -linkkisi
  const FORMS_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd1FdPI7D6RMbIIer8mHr-DfvNskRqyRkLHrK4tiVmogCa5Lw/viewform?usp=header";

  /**
   * Käsittelee tekstianimaation valmistumisen (valinnainen)
   */
  const handleAnimationComplete = () => {
    console.log('Tekstianimaatio valmis!');
  };

  return (
    <div className="app-container">
      {/* Kiinteä Header sivun yläreunassa */}
      <Header /> 
      
      {/* Tausta-animaatio, joka näkyy elementtien läpi */}
      <LineWaves
        speed={0.3}
        innerLineCount={32}
        outerLineCount={36}
        warpIntensity={1}
        rotation={-45}
        brightness={0.2}
        color1="#4A9438"
        color2="#4A9438"
        color3="#4A9438"
        enableMouseInteraction
      />

      <main className="ui-layer">
        {!showForm ? (
          /* NÄKYMÄ 1: APPLICATION-NAPPI */
          <button 
            className="glass-card clickable-card" 
            onClick={() => setShowForm(true)}
          >
            <SplitText
              text="APPLICATION"
              className="button-text"
              delay={50}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </button>
        ) : (
          /* NÄKYMÄ 2: IFRAME-KOMPONENTTI */
          <Applicationform 
            src={FORMS_URL} 
            onClose={() => setShowForm(false)} 
          />
        )}
      </main>

      {/* Kiinteä Footer sivun alareunassa */}
      <Footer />
    </div>
  );
}

export default App;