import React from 'react';

// Styles
import './App.css';
import logo from './assets/logo.svg';

// Component
function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC Logo" />

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>

        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input
            id="email"
            type="email"
            placeholder="Seu melhor e-mail"
          />

          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
