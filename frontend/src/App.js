import React, { useState } from 'react';
import api from './services/api';

// Styles
import './App.css';
import logo from './assets/logo.svg';

// Component
function App() {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    // Não deixa o formulário ser enviado
    event.preventDefault();

    // Verifica o e-mail
    const response = await api.post('/sessions', { email });

    // Captura o id do usuário
    const { _id } = response.data;

    // Armazena o código do usuário
    localStorage.setItem('@aircnc/user', _id);
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnC Logo" />

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input
            id="email"
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
