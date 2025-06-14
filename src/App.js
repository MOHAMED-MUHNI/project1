import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [lightMode]);

  const toggleTheme = () => setLightMode((prev) => !prev);

  return (
    <div className="App">
      <button onClick={toggleTheme} style={{
        position: 'fixed', top: 20, right: 20, zIndex: 1000, padding: '0.7rem 1.5rem', borderRadius: '2rem', border: 'none', background: 'var(--main-color)', color: lightMode ? '#222' : '#fff', fontWeight: 600, cursor: 'pointer', boxShadow: '0 0 10px var(--main-color)'
      }}>
        {lightMode ? 'Dark Mode' : 'Light Mode'}
      </button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
