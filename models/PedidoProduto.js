const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const PedidoProduto = sequelize.define('PedidoProduto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  pedido_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  produto_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'pedido_produtos',
  timestamps: false,
});

// Exportando o modelo PedidoProduto
module.exports = PedidoProduto;
