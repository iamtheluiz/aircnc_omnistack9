/* Controlador da Reserva */
const Booking = require('../models/Booking'); // Importa o modelo do Booking

module.exports = {
  // Cadastra uma reserva
  async store(req, res) {
    const { user_id } = req.headers;  // Captura o id do usuário
    const { spot_id }= req.params;  // Captura o id do spot
    const { date } = req.body;  // Captura a data da reserva

    // Cadastra a reserva
    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date,
    });

    // Captura os dados de "spot" e "user"
    await booking.populate('spot').populate('user').execPopulate();

    return res.json(booking);
  }
};