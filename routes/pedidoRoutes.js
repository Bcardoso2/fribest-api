const express = require('express');
const {
  getResumo,
  getTopClientes,
  getEstoqueProdutos,
  getUltimosPedidos,
} = require('../controllers/dashboardController.js');

const router = express.Router();

router.get('/resumo', getResumo);
router.get('/clientes/top', getTopClientes);
router.get('/produtos/estoque', getEstoqueProdutos);
router.get('/pedidos/ultimos', getUltimosPedidos);

// Exportando o router
module.exports = router;
