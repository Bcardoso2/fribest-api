const express = require('express');
const { getAllBoletos } = require('../controllers/boletoController.js');

const router = express.Router();

router.get('/', getAllBoletos);

// Exportando o router
module.exports = router;
