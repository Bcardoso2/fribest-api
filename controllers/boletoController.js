const Boleto = require('../models/Boleto.js');

const getAllBoletos = async (req, res) => {
  try {
    const boletos = await Boleto.findAll();
    res.json(boletos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Exportando a função getAllBoletos
module.exports = { getAllBoletos };
