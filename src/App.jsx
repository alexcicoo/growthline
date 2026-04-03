import React, { useState } from 'react';
import LineWaves from './components/Linewaves/Linewaves';
import SplitText from './components/SplitText';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Applicationform from './components/Applicationforms/Applicationform';
import OrgChart from './components/OrgChart/OrgChart'; 
import Team from './components/Team/Team'; 
import Fuella from './components/Fuella/Fuella';
import './App.css';

function App() {
  const [activeContent, setActiveContent] = useState(null);

  const contentData = {
    MANIFESTO: {
      title: "MANIFESTO",
      text: "Growthline is a young but experienced team built from backgrounds in startups and entrepreneurship. We've seen what works and what doesn't and we bring that into everything we do. We combine top academic education with real-world execution because knowing the theory means nothing if you can't make it happen. We work with young talents that are serious about building something real because the best companies aren't built by the most experienced people in the room. They're built by the most driven ones. Growthline exists because we got tired of watching great ideas stay ideas. We built this to change that."
    },
    CONTACT: {
      title: "CONTACT",
      text: "Ready to create something big? Contact us:\n\nEmail: growthlineteam@gmail.com"
    }
  };

  const handleDepartmentClick = (deptName) => {
    if (deptName === "Fuella") {
      setActiveContent('FUELLA');
    }
  };

  return (
    <div className={`app-container ${activeContent ? 'form-is-open' : ''}`}>
      
      <LineWaves
        speed={0.3}
        innerLineCount={32}
        outerLineCount={36}
        warpIntensity={1}
        rotation={-45}
        brightness={0.4}
        color1="#4A9438"
        color2="#4A9438"
        color3="#4A9438"
        enableMouseInteraction
      />

      <main className="ui-layer">
        {/* Header piilotetaan heti kun sisältö on aktiivinen */}
        {!activeContent && <Header />}

        {/* Pääsisältö, joka häivytetään CSS-luokalla 'hidden-main-content' */}
        <div className={`scroll-content-wrapper ${activeContent ? 'hidden-main-content' : ''}`}>
          
          <nav className="button-group">
            <button 
              className="glass-card clickable-card" 
              onClick={() => setActiveContent('MANIFESTO')}
              aria-label="Read our Manifesto"
            >
              <SplitText text="MANIFESTO" className="button-text" delay={40} duration={1.2} textAlign="center" />
            </button>

            <button 
              className="glass-card clickable-card" 
              onClick={() => setActiveContent('CONTACT')}
              aria-label="Contact information"
            >
              <SplitText text="CONTACT" className="button-text" delay={50} duration={1.2} textAlign="center" />
            </button>

            <button 
              className="glass-card clickable-card" 
              onClick={() => setActiveContent('TEAM')}
              aria-label="Meet the Team"
            >
              <SplitText text="TEAM" className="button-text" delay={60} duration={1.2} textAlign="center" />
            </button>
          </nav>

          <OrgChart onDepartmentClick={handleDepartmentClick} />
          
          <Footer />
        </div>

        {/* MODAL / LOMAKE */}
        {activeContent && (
          <Applicationform 
            onClose={() => setActiveContent(null)} 
            title={['TEAM', 'FUELLA'].includes(activeContent) ? "" : contentData[activeContent]?.title}
            text={['TEAM', 'FUELLA'].includes(activeContent) ? "" : contentData[activeContent]?.text}
            customComponent={
              activeContent === 'TEAM' ? <Team /> : 
              activeContent === 'FUELLA' ? <Fuella /> : 
              null
            }
          />
        )}
      </main>
    </div>
  );
}

export default App;