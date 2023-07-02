const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('animalsave', 'postgres', 'meutel8414', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
