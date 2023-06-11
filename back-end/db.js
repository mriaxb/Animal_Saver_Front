const mongoose = require('mongoose');

// Função para conectar-se ao banco de dados MongoDB
async function connectToDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/animalsaver', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexão estabelecida com o MongoDB');
  } catch (error) {
    console.error('Erro ao conectar-se ao MongoDB:', error);
  }
}

module.exports = connectToDB;
