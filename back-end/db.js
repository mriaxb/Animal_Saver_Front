const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('animalsave', 'postgres', 'pgadmin4', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
