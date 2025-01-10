const express = require('express');
const { getAllClientes, createCliente } = require('../controllers/clienteController.js');

const router = express.Router();

router.get('/', getAllClientes);
router.post('/', createCliente);
// router.get('/funcionario/:id', findClientsByEmployerId);

// Exportando o router
module.exports = router;
