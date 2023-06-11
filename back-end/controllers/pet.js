const Pet = require('../models/pet');

// criar um novo pet
async function criarPet(req, res) {
  try {
    const { nome, raca, observacao1, observacao2} = req.body;
    const imagem = req.file;
    // Cria um novo objeto Pet
    const novoPet = new Pet({
        nome,
        raca,
        observacao1,
        observacao2,
        imagem,
      });
      // Salva o novo pet no banco de dados
      const petSalvo = await novoPet.save();
    res.status(201).json(petSalvo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar o pet' });
  }
}

// obter todos os pets
async function obterPets(req, res) {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter os pets' });
  }
}

// obter o pet pelo ID
async function obterPetPorId(req, res) {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: 'Pet não encontrado' });
    }
    res.json(pet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter o pet' });
  }
}

// atualizar o pet pelo ID
async function atualizarPet(req, res) {
  try {
    const { nome, raca, observacao1, observacao2, imagem } = req.body;
    const petAtualizado = await Pet.findByIdAndUpdate(
      req.params.id,
      { nome, raca, observacao1, observacao2, imagem },
      { new: true }
    );
    if (!petAtualizado) {
      return res.status(404).json({ message: 'Pet não encontrado' });
    }
    res.json(petAtualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar o pet' });
  }
}

// excluir o pet pelo ID
async function excluirPet(req, res) {
  try {
    const petExcluido = await Pet.findByIdAndDelete(req.params.id);
    if (!petExcluido) {
      return res.status(404).json({ message: 'Pet não encontrado' });
    }
    res.json({ message: 'Pet excluído com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao excluir o pet' });
  }
}

module.exports = {
  criarPet,
  obterPets,
  obterPetPorId,
  atualizarPet,
  excluirPet
};
