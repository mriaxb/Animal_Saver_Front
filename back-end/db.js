const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('animalsave', 'postgresql', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
