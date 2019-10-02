/* Rotas do backend */

const express = require('express'); // Importa o express

// Define a variável que guardará todas as rotas
const routes = express.Router();

// Define a rota principal do server
routes.get('/users', (req, res) => {
  // Req (Request) => Tem as informações da requisição
  // Res (Response) => Devolve algo para o usuário

  // req.query => Acessa os query params (para filtros)
  return res.json({ idade: req.query.idade });
});

routes.post('/users/', (req, res) => {
  // req.body => Acessa o corpo da requisição
  return res.json(req.body);
});

routes.put('/users/:id', (req, res) => {
  // req.params => Acessa os route params (Parâmetros de rota, para edição e delete)
  return res.json({ id: req.params.id });
});

// Exporta as rotas
module.exports = routes;