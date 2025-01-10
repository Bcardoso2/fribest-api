const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo deu errado!' });
};

// Exportando o middleware de erro
module.exports = errorMiddleware;
