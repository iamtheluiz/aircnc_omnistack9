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
}, {
  toJSON: {
    // Adiciona os virtuals
    virtuals: true,
  }
});

// Cria um campo "virtual" na listagem
SpotSchema.virtual('thumbnail_url').get(function() {
  return `http://localhost:3333/files/${this.thumbnail}`;
});

// Exporta o modelo
module.exports = mongoose.model('Spot', SpotSchema);