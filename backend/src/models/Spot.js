/* Entidade "Spot" */
const mongoose = require('mongoose'); // Importa o mongoose

// Define a estrutura da entidade (atributos do spot)
const SpotSchema = mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

// Exporta o modelo
module.exports = mongoose.model('Spot', SpotSchema);