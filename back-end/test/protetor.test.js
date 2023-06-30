const request = require('supertest');
const app = require('../app');
const { sequelize } = require('../models');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Protetor Endpoints', () => {
  let protetorId;

  it('Cria um Protetor', async () => {
    const response = await request(app)
      .post('/protetor')
      .send({
        nome: 'Maria',
        endereco: 'Rua A, 123',
        email: 'maria@teste.com',
        telefone: '123456789',
        espacoFisico: 'Casa',
        gastos: 500,
        lotacao: 10,
        senha: 'senha123',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    protetorId = response.body.id;
  });

  it('Busca todos Protetores', async () => {
    const response = await request(app).get('/protetor/list');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
  });

  it('Busca um protetor por Id', async () => {
    const response = await request(app).get(`/protetor/${protetorId}`);
    expect(response.status).toBe(200);
    expect(response.body.nome).toBe('Maria');
    expect(response.body.email).toBe('maria@teste.com');
  });

  it('Atualiza Protetor por Id', async () => {
    const response = await request(app)
      .put(`/protetor/${protetorId}`)
      .send({
        nome: 'Maria',
        endereco: 'Rua A, 123',
        email: 'maria@teste.com',
        telefone: '123456789',
        espacoFisico: 'Casa',
        gastos: 500,
        lotacao: 10,
        senha: 'senha1234',
      });

    expect(response.status).toBe(200);
    expect(response.body.nome).toBe('Maria');
    expect(response.body.email).toBe('maria@teste.com');
  });

  it('Deleta Protetor por Id', async () => {
    const response = await request(app).delete(`/protetor/${protetorId}`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Protetor excluído com sucesso');
  });
});
