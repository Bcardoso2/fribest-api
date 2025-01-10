const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Cargo = sequelize.define(
  'Cargo',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'cargos',
    timestamps: false,
  }
);

// Exportando o modelo Cargo
module.exports = Cargo;
