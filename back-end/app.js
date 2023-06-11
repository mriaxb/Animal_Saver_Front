const express = require('express');
const bodyParser = require('body-parser');
const connectToDB = require('./db');

connectToDB();

// Importa as rotas
const petRoutes = require('./routes/petRoutes');
const protetorRoutes = require('./routes/protetorRoutes');

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

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor está executando na porta 3000');
});
