/* Entidade "Booking" */
const mongoose = require('mongoose'); // Importa o mongoose

// Define a estrutura da entidade (atributos do usuário)
const BookingSchema = mongoose.Schema({
  data: String,
  approved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot'
  }
});

// Exporta o modelo
module.exports = mongoose.model('Booking', BookingSchema);