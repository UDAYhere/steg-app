import React, { useState } from 'react';
import './App.css';
import HideText from './components/HideText';
import ExtractText from './components/ExtractText';
import VirusScanner from './components/VirusScanner';

function App() {
  const [activeTab, setActiveTab] = useState('hide');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Steganography With Password Encryption </h1>
        <p>Hide and extract secret messages in images with the combination of Steganography With password encryption and file scanning</p>
      </header>

      <div className="container">
        <div className="tabs">
          <button 
            className={activeTab === 'hide' ? 'active' : ''} 
            onClick={() => setActiveTab('hide')}
          >
            Hide Text
          </button>
          <button 
            className={activeTab === 'extract' ? 'active' : ''} 
            onClick={() => setActiveTab('extract')}
          >
            Extract Text
          </button>
          <button 
            className={activeTab === 'scan' ? 'active' : ''} 
            onClick={() => setActiveTab('scan')}
          >
            Scan Image
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'hide' && <HideText />}
          {activeTab === 'extract' && <ExtractText />}
          {activeTab === 'scan' && <VirusScanner />}
        </div>
      </div>
    </div>
  );
}

export default App;
