const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../db');

const Protetor = sequelize.define('Protetor', {
  nome: {
    type: DataTypes.STRING,
    allowNull: true
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  espacoFisico: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  gastos: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  lotacao: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

// criptografar a senha antes de salvar o protetor
Protetor.beforeCreate(async (protetor) => {
  if (protetor.senha) {
    const salt = await bcrypt.genSaltSync(10);
    protetor.senha = bcrypt.hashSync(protetor.senha, salt);
  }
});

// comparar a senha fornecida com a senha armazenada no banco de dados
Protetor.prototype.compararSenha = async function (senha) {
  return await bcrypt.compareSync(senha, this.senha);
};

Protetor.associate = (models) => {
  Protetor.hasMany(models.Pet, { as: 'protetor_pets' });
};

module.exports = Protetor;
