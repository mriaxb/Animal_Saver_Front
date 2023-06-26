const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db');
const Protetor = require('./models/protetor');
const Pet = require('./models/pet');

// Importa as rotas
const petRoutes = require('./routes/router');
const protetorRoutes = require('./routes/router');

// Configurar o aplicativo Express
const app = express();
app.use(bodyParser.json());

// Rotas para as models
app.use('/api/pets', petRoutes);
app.use('/api/protetores', protetorRoutes);

// Rota padrão
app.get('/', (req, res) => {
  res.send('Bem-vindo à API do Animal Save');
});

// Iniciar e sincronizar os modelos do Sequelize
async function iniciar() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    // Defina as associações entre os modelos
    Protetor.hasMany(Pet, { as: 'pets' });

    // Crie as tabelas se elas ainda não existirem
    await sequelize.sync();

    console.log('Modelos sincronizados com o banco de dados.');
  } catch (error) {
    console.error('Erro ao conectar e sincronizar com o banco de dados:', error);
  }
}

iniciar();

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor está executando na porta ${PORT}`);
});
