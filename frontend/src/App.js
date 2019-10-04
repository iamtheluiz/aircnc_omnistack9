import React from 'react';

// Styles
import './App.css';
import logo from './assets/logo.svg';

// Rotas
import Routes from './routes';

// Component
function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
