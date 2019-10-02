/* Arquivo inicial do servidor (API Rest) */
const express = require('express'); // Importa o express
const mongoose = require('mongoose'); // Importa o mongoose (controle do banco de dados)
const routes = require('./routes'); // Importa as rotas do backend

// Define o aplicativo express
const app = express();

// Conecta com o MongoDB Atlas
mongoose.connect('mongodb+srv://aircnc:aircnc@cluster0-msvvd.mongodb.net/aircnc?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define que o express utilizará o formato de JSON
app.use(express.json());

// Inclui as rotas do backend
app.use(routes);

// Executa a aplicação
app.listen('3333');