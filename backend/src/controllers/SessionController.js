/* Controlador da Sessão */
const User = require('../models/User'); // Importa o modelo do Usuário

// Lista de métodos de um controlador: index, show, store, update, destroy
module.exports = {
  // Cadastra um usuário
  async store(req, res) {
    // Busca o e-mail do usuário
    const { email } = req.body;

    // Verifica se o usuário já existe
    let user = await User.findOne({ email });

    // Caso não encontre
    if (!user) {
      // Cria um novo usuário (precisa finalizar antes de seguir para a próxima linha)
      user = await User.create({ email });
    }

    return res.json(user)
  }
}