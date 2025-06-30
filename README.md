
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

## Instale o PostgreSQL 
PASSOS:

1 - Copie e cole no seu navegador e clique em fazer download segundo o seu dispositivo: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

2 - Durante a instação vai solicitar a criação de uma senha, salve a senha. 

Após instalação, dentro do PostgreSQL você clica no **databases** com o botão direito do mouse seleciona o **create** depois **database**  

Crie um NOME e salve. 

3 - Após isso faça esse passo a passo:

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
Altere o DB_NAME para o nome criado no postgreSQL
Altere o DB_PASSWORD para a senha criada durante a instalação do postgreSQL
No JWT_SECRET Crie uma senha com ao menos uma letra maiuscula e minuscula, um caractere e numeral. 


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
