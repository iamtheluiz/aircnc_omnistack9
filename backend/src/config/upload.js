const multer = require('multer'); // Importa o multer (trabalhar com Multpart Form)
const path = require('path'); // Trabalhar com caminhos

// Exporta as configurações necessárias
module.exports = {
  // Forma de armazenar os arquivos
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, cb) => {
      // req => Informações da requisição
      // file => Arquivo enviado
      // cb => callback, chamada quando o nome do arquivo estiver pronto

      // file.originalname => Nome original do arquivo (com extensão)
      // path.extname() => Captura a extensão com base na string passada
      const ext = path.extname(file.originalname);

      // path.basename() => Captura apenas o nome do arquivo
      const name = path.basename(file.originalname, ext);

      // Date.now() => Contagem dos segundos
      cb(null, `${name}-${Date.now()}${ext}`);
    }
  })
}