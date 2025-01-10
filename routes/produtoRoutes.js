const express = require('express');
const {
  getAllProdutos,
  createProduto,
  updateProduto,
  deleteProduto,
} = require('../controllers/produtoController.js');

const router = express.Router();

router.get('/', getAllProdutos);
router.post('/', createProduto);
router.put('/:id', updateProduto);
router.delete('/:id', deleteProduto);

// Exportando o router
module.exports = router;
