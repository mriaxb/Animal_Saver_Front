const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const protetorSchema = new mongoose.Schema({
  senhaHash: {
    type: String,
    required: true
  }
});

// criptografar a senha antes de salvar o protetor
protetorSchema.pre('save', async function (next) {
  const protetor = this;
  if (protetor.isModified('senha') || protetor.isNew) {
    try {
      const hash = await bcrypt.hash(protetor.senha, 10);
      protetor.senhaHash = hash;
    } catch (error) {
      return next(error);
    }
  }
  next();
});

// comparar a senha fornecida com a senha armazenada no banco de dados
protetorSchema.methods.compararSenha = async function (senha) {
  try {
    return await bcrypt.compare(senha, this.senhaHash);
  } catch (error) {
    throw new Error('Erro ao comparar as senhas');
  }
};

const protetorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true
  },
  espacoFisico: {
    type: Number,
    required: true
  },
  gastos: {
    type: Number,
    required: true
  },
  lotacao: {
    type: Number,
    required: true
  },
  senha: {
    type: String,
    required: true
  }
});

const Protetor = mongoose.model('Protetor', protetorSchema);

module.exports = Protetor;
