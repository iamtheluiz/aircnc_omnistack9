/* Controlador da Dashboard */
const Spot = require('../models/Spot'); // Importa o modelo do Spot

module.exports = {
  // Lista os Spots
  async show(req, res) {
    // Captura o id do usuário
    const { user_id } = req.headers;

    // Consulta todos os campos criados pelo usuário
    const spots = await Spot.find({ user: user_id });

    return res.json(spots);
  }
};