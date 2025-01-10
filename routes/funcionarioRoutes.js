const express = require('express');
const { getFuncionarios, createFuncionario, getMe } = require('../controllers/funcionarioController.js');
const { authenticate } = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.get('/', getFuncionarios); // Rota para listar todos os funcionários
router.post('/', createFuncionario); // Rota para criar um novo funcionário
router.get("/me", authenticate, getMe); // Rota para obter informações do usuário autenticado

// Exportando o router
module.exports = router;
