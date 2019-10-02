/* Arquivo inicial do servidor (API Rest) */
const express = require('express'); // Importa o express

// Define o aplicativo express
const app = express();

// Define que o express utilizará o formato de JSON
app.use(express.json());

// Define a rota principal do server
app.get('/users', (req, res) => {
  // Req (Request) => Tem as informações da requisição
  // Res (Response) => Devolve algo para o usuário

  // req.query => Acessa os query params (para filtros)
  return res.json({ idade: req.query.idade });
});

app.post('/users/', (req, res) => {
  // req.body => Acessa o corpo da requisição
  return res.json(req.body);
});

app.put('/users/:id', (req, res) => {
  // req.params => Acessa os route params (Parâmetros de rota, para edição e delete)
  return res.json({ id: req.params.id });
});

// Executa a aplicação
app.listen('3333');