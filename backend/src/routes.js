/* Rotas do backend */

const express = require('express'); // Importa o express

// Importa os controllers
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

// Define a variável que guardará todas as rotas
const routes = express.Router();

// Define as possíveis rotas
routes.post('/sessions/', SessionController.store);
routes.post('/spots/', SpotController.store);

// Exporta as rotas
module.exports = routes;