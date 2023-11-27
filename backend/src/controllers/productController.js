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

const insertNewProduct = async (req, res) => {
  const newProduct = req.body;
  const { status, data } = await productService.insertNewProduct(newProduct);
  res.status(mapStatusHTTP(status)).json(data);
};

const updateProduct = async (req, res) => {
  const update = req.body;
  const { id } = req.params;
  const { status, data } = await productService.updateProduct(Number(id), update);
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  getAllProducts,
  getProductById,
  insertNewProduct,
  updateProduct,
};