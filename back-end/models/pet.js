const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const Pet = sequelize.define('Pet', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  raca: {
    type: DataTypes.STRING,
    allowNull: false
  },
  observacao1: {
    type: DataTypes.STRING,
    allowNull: true
  },
  observacao2: {
    type: DataTypes.STRING,
    allowNull: true
  },
  imagem: {
    type: DataTypes.STRING,
    allowNull: true
  },
  professorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Professores',
      key: 'id',
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  },
});

Pet.associate = (models) => {
  Pet.belongsTo(models.Protetor, { as: 'pet_protetor' });
};

module.exports = Pet;
