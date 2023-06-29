const Pet = require('../models/pet');
const Protetor = require('../models/protetor');

// criar um novo pet
async function criarPet(req, res) {
  try {
    const { nome, raca, perfilFisico, perfilComportamental } = req.body;
    const imagem = req.file;

    // Cria um novo pet no banco de dados
    const petCriado = await Pet.create({
      nome,
      raca,
      perfilFisico,
      perfilComportamental,
      imagem: imagem.filename,
    });

    res.status(201).json(petCriado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar o pet' });
  }
}

// obter todos os pets
async function obterPets(req, res) {
  try {
    const pets = await Pet.findAll();
    res.json(pets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter os pets' });
  }
}

// obter o pet pelo ID
async function obterPetPorId(req, res) {
  try {
    const pet = await Pet.findByPk(req.params.id);
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

    const [rowsUpdated, [petAtualizado]] = await Pet.update(
      {
        nome,
        raca,
        observacao1,
        observacao2,
        imagem,
      },
      {
        where: { id: req.params.id },
        returning: true,
      }
    );

    if (rowsUpdated === 0) {
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
    const rowsDeleted = await Pet.destroy({
      where: { id: req.params.id },
    });

    if (rowsDeleted === 0) {
      return res.status(404).json({ message: 'Pet não encontrado' });
    }

    res.json({ message: 'Pet excluído com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao excluir o pet' });
  }
}

// Adicionar um pet a um protetor
async function adicionarPetAoProtetor(req, res) {
  try {
    const { protetorId, petId } = req.body;

    // Verificar se o protetor existe
    const protetor = await Protetor.findByPk(protetorId);
    if (!protetor) {
      return res.status(404).json({ message: 'Protetor não encontrado' });
    }

    // Verificar se o pet existe
    const pet = await Pet.findByPk(petId);
    if (!pet) {
      return res.status(404).json({ message: 'Pet não encontrado' });
    }

    // Adicionar o pet ao protetor
    await pet.update({ protetorId });

    res.json({ message: 'Pet adicionado ao protetor com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao adicionar o pet ao protetor' });
  }
}

// Transferir um pet para outro protetor
async function transferirPetParaProtetor(req, res) {
  try {
    const { petId, novoProtetorId } = req.body;

    // Verificar se o pet existe
    const pet = await Pet.findByPk(petId);
    if (!pet) {
      return res.status(404).json({ message: 'Pet não encontrado' });
    }

    // Verificar se o novo protetor existe
    const novoProtetor = await Protetor.findByPk(novoProtetorId);
    if (!novoProtetor) {
      return res.status(404).json({ message: 'Novo protetor não encontrado' });
    }

    // Transferir o pet para o novo protetor
    await pet.update({ protetorId: novoProtetorId });

    res.json({ message: 'Pet transferido para o novo protetor com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao transferir o pet para o novo protetor' });
  }
}

// Remover um pet do protetor atual
async function removerPetDoProtetor(req, res) {
  try {
    const { petId } = req.body;

    // Verificar se o pet existe
    const pet = await Pet.findByPk(petId);
    if (!pet) {
      return res.status(404).json({ message: 'Pet não encontrado' });
    }

    // Remover o pet do protetor
    await pet.update({ protetorId: null });

    res.json({ message: 'Pet removido do protetor com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao remover o pet do protetor' });
  }
}

module.exports = {
  criarPet,
  obterPets,
  obterPetPorId,
  atualizarPet,
  excluirPet,
  adicionarPetAoProtetor,
  transferirPetParaProtetor,
  removerPetDoProtetor
};
