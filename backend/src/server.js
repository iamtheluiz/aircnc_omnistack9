/* Arquivo inicial do servidor (API Rest) */
const express = require('express'); // Importa o express
const routes = require('./routes'); // Importa as rotas do backend

// Define o aplicativo express
const app = express();

// Define que o express utilizará o formato de JSON
app.use(express.json());

// Inclui as rotas do backend
app.use(routes);

// Executa a aplicação
app.listen('3333');