const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database.js'); // Conexão com o banco
const clientRoutes = require('./routes/clientRoutes.js'); // Rotas de clientes
const produtoRoutes = require('./routes/produtoRoutes.js');
const contasPagarRoutes = require('./routes/ContasPagarRoutes.js');
const pedidoRoutes = require('./routes/pedidoRoutes.js'); // Rotas de pedidos
const dashboardRoutes = require('./routes/dashboardRoutes.js');
const funcionarioRoutes = require('./routes/funcionarioRoutes.js');
const authRoutes = require('./routes/authRoutes.js'); // Rotas de autenticação
const configureAssociations = require('./models/associations.js');
const { authenticate } = require('./middlewares/authMiddleware.js'); // Middleware de autenticação

// Configuração de associações entre modelos
configureAssociations();

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware global
app.use(cors());
app.use(express.json());

// Teste de conexão com o banco
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco bem-sucedida!');
  } catch (error) {
    console.error('Erro ao conectar ao banco:', error.message);
    process.exit(1); // Finaliza o processo em caso de erro
  }
})();

app.use('/api/auth', authRoutes); // Rotas de autenticação

// Middleware para proteger rotas privadas
app.use(authenticate);

// Rotas privadas (protegidas)
app.use('/api/clientes', clientRoutes);
app.use('/api/produtos', produtoRoutes);
app.use('/api/contas-a-pagar', contasPagarRoutes);
app.use('/api/pedidos', pedidoRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/funcionarios', funcionarioRoutes);

// Rotas padrão para erros 404
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Rota não encontrada.' });
});

// Tratamento global de erros
app.use((err, req, res, next) => {
  console.error('Erro interno no servidor:', err.message);
  res.status(500).json({ success: false, message: 'Erro interno no servidor.' });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
