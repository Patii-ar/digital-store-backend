const request = require('supertest');
const app = require('../src/app');
const { sequelize, User } = require('../src/database');

describe('Autenticação', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
    await User.create({
      nome: 'João',
      sobrenome: 'Silva',
      email: 'joao@example.com',
      senha: '123456',
    });
  });

  it('deve retornar um token com credenciais válidas', async () => {
    const response = await request(app).post('/v1/usuario/token').send({
      email: 'joao@example.com',
      password: '123456',
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('deve falhar com credenciais inválidas', async () => {
    const response = await request(app).post('/v1/usuario/token').send({
      email: 'joao@example.com',
      password: 'errada',
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
  });
});
