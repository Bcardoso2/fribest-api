const express = require('express');
const {
  getAllContasPagar,
  getContaPagarById,
  createContaPagar,
  updateContaPagar,
  deleteContaPagar,
} = require('../controllers/ContasPagarController.js');

const router = express.Router();

router.get('/', getAllContasPagar); // Para listar todas as contas a pagar
router.get('/:id', getContaPagarById); // Para buscar uma conta específica por ID
router.post('/', createContaPagar); // Para criar uma nova conta
router.put('/:id', updateContaPagar); // Para atualizar uma conta existente
router.delete('/:id', deleteContaPagar); // Para excluir uma conta

// Exportando o router
module.exports = router;
