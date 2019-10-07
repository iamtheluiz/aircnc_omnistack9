/* Arquivo inicial do servidor (API Rest) */
const express = require('express'); // Importa o express
const mongoose = require('mongoose'); // Importa o mongoose (controle do banco de dados)
const routes = require('./routes'); // Importa as rotas do backend
const cors = require('cors'); // Permite que aplicações externas se conectem com a API
const path = require('path'); // Permite trabalhar com diretórios

const socketio = require('socket.io');  // Websocket
const http = require('http');

// Define o aplicativo express
const app = express();
const server = http.Server(app);  // Captura o servidor http

// Define o websocket
const io = socketio(server);

const connectedUsers = {};

// Verifica se um usuário conectou com a aplicação
io.on('connection', socket => {
  const { user_id } = socket.handshake.query;
  
  connectedUsers[user_id] = socket.id;
});

// Middleware
app.use((req, res, next) => {
  // Deixa o io e os usuário conectados disponíveis para todas as rotas
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
})

// Conecta com o MongoDB Atlas
mongoose.connect('mongodb+srv://aircnc:aircnc@cluster0-msvvd.mongodb.net/aircnc?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define que qualquer endereço possa acessar a API
app.use(cors());

// Define que o express utilizará o formato de JSON
app.use(express.json());

// Adiciona uma rota estática para as imagens
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

// Inclui as rotas do backend
app.use(routes);

// Executa a aplicação
server.listen('3333');