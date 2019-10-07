const Booking = require('../models/Booking');

module.exports = {
  async store(req, res) {
    // Captura o id do booking
    const { booking_id } = req.params;

    // Captura todos os dados
    const booking = await Booking.findById(booking_id).populate('spot');

    // Define que a reserva foi aceita
    booking.approved = true;

    // Salva as alterações
    await booking.save();

    const bookingUserSocket = req.connectedUsers[booking.user];

    // Envia uma resposta
    if (bookingUserSocket) {
      req.io.to(bookingUserSocket).emit('booking_response', booking);
    }

    return res.json(booking);
  }
}