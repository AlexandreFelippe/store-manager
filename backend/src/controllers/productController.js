const { productService } = require('../services');
const mapStatusHTTP = require('../utils/HTTPStatuts');

const getAllProducts = async (_req, res) => {
  const { status, data } = await productService.getAllProducts();
  res.status(mapStatusHTTP(status)).json(data);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productService.getProductById(id);
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  getAllProducts,
  getProductById,
};