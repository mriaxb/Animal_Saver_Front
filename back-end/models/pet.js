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
  perfilFisico: {
    type: DataTypes.STRING,
    allowNull: true
  },
  perfilComportamental: {
    type: DataTypes.STRING,
    allowNull: true
  },
  imagem: {
    type: DataTypes.STRING,
    allowNull: true
  },
});

Pet.associate = (models) => {
  Pet.belongsTo(models.Protetor, { as: 'pet_protetor' });
};

module.exports = Pet;
