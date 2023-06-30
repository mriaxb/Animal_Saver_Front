const Protetor = require('../models/protetor');
const bcrypt = require('bcrypt');

// criar um novo protetor
async function criarProtetor(req, res) {
  try {
    const { nome, endereco, email, telefone, espacoFisico, gastos, lotacao, senha } = req.body;
    // Criptografar a senha antes de armazená-la no banco de dados
    const hashedSenha = await bcrypt.hash(senha, 10);
    // Cria um novo objeto Protetor
    const novoProtetor = await Protetor.create({
      nome,
      endereco,
      email,
      telefone,
      espacoFisico,
      gastos,
      lotacao,
      senha: hashedSenha,
    });
    res.status(201).json(novoProtetor);
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
    const protetor = await Protetor.findOne({ where: { email } });
    if (!protetor) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // compara a senha fornecida com a senha armazenada no banco de dados
    const senhaCorreta = await bcrypt.compare(senha, protetor.senha);
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
    const protetores = await Protetor.findAll();
    res.json(protetores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter os protetores' });
  }
}

// obter o protetor pelo ID
async function obterProtetorPorId(req, res) {
  try {
    const protetor = await Protetor.findByPk(req.params.id);
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
    // Criptografar a nova senha, se fornecida
    let hashedSenha;
    if (senha) {
      hashedSenha = await bcrypt.hash(senha, 10);
    }
    const protetorAtualizado = await Protetor.update(
      { nome, endereco, email, telefone, espacoFisico, gastos, lotacao, senha: hashedSenha },
      { where: { id: req.params.id }, returning: true }
    );
    if (protetorAtualizado[0] === 0) {
      return res.status(404).json({ message: 'Protetor não encontrado' });
    }
    res.json(protetorAtualizado[1][0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar o protetor' });
  }
}

// excluir o protetor pelo ID
async function excluirProtetor(req, res) {
  try {
    const protetorExcluido = await Protetor.destroy({ where: { id: req.params.id } });
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
  autenticarLogin,
};
