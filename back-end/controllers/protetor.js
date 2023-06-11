const Protetor = require('../models/protetor');
const bcrypt = require('bcryptjs');

// criar um novo protetor
async function criarProtetor(req, res) {
  try {
    const { nome, endereco, email, telefone, espacoFisico, gastos, lotacao, senha } = req.body;
    // Cria um novo objeto Protetor
    const novoProtetor = new Protetor({
      nome,
      endereco,
      email,
      telefone,
      espacoFisico,
      gastos,
      lotacao,
      senha,
    });

    // Salva o novo protetor no banco de dados
    const protetorSalvo = await novoProtetor.save();
    res.status(201).json(protetor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar o protetor' });
  }
}

// autenticar o login do protetor
async function autenticarLogin(req, res) {
  try {
    const { email, senha } = req.body;

    // verifica se o email do protetor existe no banco de dados
    const protetor = await Protetor.findOne({ email });
    if (!protetor) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // compara a senha fornecida com a senha armazenada no banco de dados
    const senhaCorreta = await protetor.compararSenha(senha);
    if (!senhaCorreta) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // se as credenciais estiverem corretas, retorna uma resposta de sucesso
    res.json({ message: 'Login bem-sucedido' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao autenticar o login' });
  }
}

// obter todos os protetores
async function obterProtetores(req, res) {
  try {
    const protetores = await Protetor.find();
    res.json(protetores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter os protetores' });
  }
}

// obter o protetor pelo ID
async function obterProtetorPorId(req, res) {
  try {
    const protetor = await Protetor.findById(req.params.id);
    if (!protetor) {
      return res.status(404).json({ message: 'Protetor não encontrado' });
    }
    res.json(protetor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter o protetor' });
  }
}

// atualizar o protetor pelo ID
async function atualizarProtetor(req, res) {
  try {
    const { nome, endereco, email, telefone, espacoFisico, gastos, lotacao, senha } = req.body;
    const protetorAtualizado = await Protetor.findByIdAndUpdate(
      req.params.id,
      { nome, endereco, email, telefone, espacoFisico, gastos, lotacao, senha },
      { new: true }
    );
    if (!protetorAtualizado) {
      return res.status(404).json({ message: 'Protetor não encontrado' });
    }
    res.json(protetorAtualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar o protetor' });
  }
}

// excluir o protetor pelo ID
async function excluirProtetor(req, res) {
  try {
    const protetorExcluido = await Protetor.findByIdAndDelete(req.params.id);
    if (!protetorExcluido) {
      return res.status(404).json({ message: 'Protetor não encontrado' });
    }
    res.json({ message: 'Protetor excluído com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao excluir o protetor' });
  }
}

module.exports = {
  criarProtetor,
  obterProtetores,
  obterProtetorPorId,
  atualizarProtetor,
  excluirProtetor,
  autenticarLogin
};
