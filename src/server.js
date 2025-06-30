const app = require('./app');

const PORT = process.env.PORT || 3001;

// ROTA DE TESTE
app.get('/ping', (req, res) => {
  res.json({ message: 'Pong! Backend funcionando.' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
