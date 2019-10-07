/* Entidade "User" */
const mongoose = require('mongoose'); // Importa o mongoose

// Define a estrutura da entidade (atributos do usuário)
const UserSchema = mongoose.Schema({
  email: String,
});

// Exporta o modelo
module.exports = mongoose.model('User', UserSchema);