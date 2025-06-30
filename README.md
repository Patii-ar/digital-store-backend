
# 🛒 Digital Store - Backend

Este é o repositório da API backend da aplicação **Digital Store**, uma loja virtual desenvolvida com Node.js e Express. 

A API fornece rotas para cadastro, autenticação de usuários e gerenciamento de produtos, carrinho e pedidos. 

Utiliza banco de dados relacional PostgreSQL com Sequelize ORM e autenticação via JWT.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT (JSON Web Token)](https://jwt.io/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Jest](https://jestjs.io/) + [Supertest](https://github.com/visionmedia/supertest) (para testes)
- [Nodemon](https://www.npmjs.com/package/nodemon)

---

## 📁 Estrutura do Projeto

```
digital-store-backend/
├── src/
│   ├── config/          # Configurações do Sequelize e dotenv
│   ├── controllers/     # Lógica das rotas
│   ├── middlewares/     # Autenticação, tratamento de erros
│   ├── models/          # Models Sequelize
│   ├── routes/          # Definição das rotas
│   ├── services/        # Lógica de negócios
│   └── app.js           # Instância principal do Express
├── tests/               # Testes com Jest e Supertest
├── .env                 # Variáveis de ambiente
├── .gitignore
├── package.json
├── README.md
└── server.js            # Início do servidor
```

---

## ⚙️ Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/Patii-ar/digital-store-backend.git
cd digital-store-backend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
PORT=3001
JWT_SECRET=sua-chave-super-secreta
JWT_EXPIRES_IN=1d
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
DB_DIALECT=postgres
```

### 4. Crie o banco e rode as migrations

```bash
npx sequelize db:create
npx sequelize db:migrate
```

### 5. Inicie o servidor

```bash
npm run dev
```

A API estará disponível em: [http://localhost:3001](http://localhost:3001)

---

## 🧪 Rodando os Testes

```bash
npm test
```

---

## 📌 Funcionalidades da API

- Cadastro e login de usuários (com senha criptografada)
- CRUD de produtos
- Carrinho de compras
- Finalização de pedido
- Autenticação com token JWT
- Middleware de proteção de rotas

---

## 📮 Rotas principais

| Método | Rota              | Descrição                         |
|--------|-------------------|-----------------------------------|
| POST   | /login            | Login do usuário                  |
| POST   | /register         | Cadastro de usuário               |
| GET    | /products         | Listar todos os produtos          |
| POST   | /products         | Criar produto (admin)             |
| GET    | /cart             | Ver carrinho do usuário           |
| POST   | /cart             | Adicionar item ao carrinho        |
| POST   | /orders           | Finalizar pedido                  |

> ⚠️ Algumas rotas exigem autenticação com JWT.

---

## 📎 Links úteis

- **Frontend (repositório):** [Digital Store - Frontend](https://github.com/Patii-ar/digital-store)
- **Deploy do frontend:** [sudobrunowoodo.github.io/digital-store](https://sudobrunowoodo.github.io/digital-store)

---


## 🧑‍💻 Desenvolvido por

[Bruno de Oliveira](https://github.com/sudobrunowoodo)

[Patricia Araujo](https://github.com/Patii-ar)
