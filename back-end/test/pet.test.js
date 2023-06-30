const request = require('supertest');
const app = require('../app');
const { sequelize } = require('../models');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Pet Endpoints', () => {
  let petId;

  it('Criar pet', async () => {
    const response = await request(app)
      .post('/pet')
      .send({
        nome: 'Rex',
        raca: 'Labrador',
        observacao1: 'Muito brincalhão',
        observacao2: 'Gosta de correr',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    petId = response.body.id;
  });

  it('Pega todos os pets', async () => {
    const response = await request(app).get('/pet/list');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
  });

  it('Pega um pet', async () => {
    const response = await request(app).get(`/pet/${petId}`);
    expect(response.status).toBe(200);
    expect(response.body.nome).toBe('Rex');
    expect(response.body.raca).toBe('Labrador');
  });

  it('Atualiza um pet pelo id', async () => {
    const response = await request(app)
      .put(`/pet/${petId}`)
      .send({
        nome: 'Bóris',
        raca: 'Golden Retriever',
        observacao1: 'Adora nadar',
        observacao2: 'Gosta de buscar a bola',
      });

    expect(response.status).toBe(200);
    expect(response.body.nome).toBe('Max');
    expect(response.body.raca).toBe('Golden Retriever');
  });

  it('Deleta um pet pelo id', async () => {
    const response = await request(app).delete(`/pet/${petId}`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Pet excluído com sucesso');
  });
});
