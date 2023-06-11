const mongoose = require('mongoose');
const Pet = require('./models/pet');
const Protetor = require('./models/protetor');

// Conecta ao banco de dados
mongoose.connect('mongodb://localhost:27017/meuapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Dados de exemplo para pets
const pets = [
  { nome: 'Rex', raca: 'Labrador', observacao1: 'Brincalhão', observacao2: 'Gosta de nadar' },
  { nome: 'Luna', raca: 'Siamês', observacao1: 'Curiosa', observacao2: 'Gosta de caixas' },
  // Adicione mais pets se necessário
];

// Dados de exemplo para protetores
const protetores = [
  { nome: 'Jean', endereco: 'Rua A, 123', email: 'jean@example.com', telefone: '123456789', espacoFisico: true, gastos: 500, lotacao: 5, senha: '123456' },
  { nome: 'Maria', endereco: 'Rua B, 456', email: 'maria@example.com', telefone: '987654321', espacoFisico: false, gastos: 200, lotacao: 3, senha: 'abcdef' },
  // Adicione mais protetores se necessário
];

// Função para popular pets
async function popularPets() {
  try {
    // Remover todos os pets existentes do banco de dados
    await Pet.deleteMany();

    // Criar os novos pets no banco de dados
    await Pet.create(pets);

    console.log('Dados de exemplo para pets inseridos com sucesso.');
  } catch (error) {
    console.error('Erro ao popular os pets:', error);
  }
}

// Função para popular protetores
async function popularProtetores() {
  try {
    // Remover todos os protetores existentes do banco de dados
    await Protetor.deleteMany();

    // Criar os novos protetores no banco de dados
    await Protetor.create(protetores);

    console.log('Dados de exemplo para protetores inseridos com sucesso.');
  } catch (error) {
    console.error('Erro ao popular os protetores:', error);
  } finally {
    // Encerrar a conexão com o banco de dados
    mongoose.connection.close();
  }
}

// Executar as funções de população de pets e protetores
async function popularDados() {
  await popularPets();
  await popularProtetores();
}

// Executar a função de população de dados
popularDados();
