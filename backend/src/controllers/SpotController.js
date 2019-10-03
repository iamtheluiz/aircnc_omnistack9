/* Controlador do Spot */
const Spot = require('../models/Spot'); // Importa o modelo do Spot
const User = require('../models/User'); // Importa o modelo do Usuário

module.exports = {
  // Lista os Spots
  async index(req, res) {
    // Captura a tecnologia de interesse do Usuário
    const { tech } = req.query;

    // Procura os Spots que possuem a tecnologia
    const spots = await Spot.find({ techs: tech });

    return res.json(spots);
  },

  // Cadastra um spot
  async store(req, res) {
    // Captura o nome do arquivo salvo
    const { filename } = req.file;

    // Captura os outros dados enviados
    const { company, techs, price } = req.body;

    // caputra o id do usuário
    const { user_id } = req.headers;

    // Verifica se o usuário existe
    const user = await User.findById(user_id);

    if(!user) {
      return res.status(400).json({ error: 'User does not exists' });
    }

    // Cria um novo spot
    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      // tech.trim() => Remove os espaços antes e depois da string
      techs: techs.split(',').map(tech => tech.trim()),
      price
    });

    res.json(spot);
  }
};