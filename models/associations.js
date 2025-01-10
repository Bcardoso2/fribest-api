const Pedido = require('./Pedido.js');
const PedidoProduto = require('./PedidoProduto.js');
const Produto = require('./ProdutoModels.js');
const Cliente = require('./Cliente.js');
const Funcionario = require('./Funcionario.js');

function configureAssociations() {
  // Associações de Pedido
  Pedido.belongsTo(Cliente, { foreignKey: 'cliente_id', as: 'cliente' });
  Pedido.belongsTo(Funcionario, { foreignKey: 'funcionario_id', as: 'funcionario' });
  Pedido.hasMany(PedidoProduto, { foreignKey: 'pedido_id', as: 'produtosRelacionados' });

  // Associações de PedidoProduto
  PedidoProduto.belongsTo(Pedido, { foreignKey: 'pedido_id', as: 'pedidoDetalhes' });
  PedidoProduto.belongsTo(Produto, { foreignKey: 'produto_id', as: 'produto' });
}

// Exportando a função de configuração das associações
module.exports = configureAssociations;
