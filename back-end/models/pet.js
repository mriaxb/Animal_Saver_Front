const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  raca: {
    type: String,
    required: true
  },
  observacao1: {
    type: String
  },
  observacao2: {
    type: String
  },
  imagem: {
    type: String
  }
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
