const productModel = require('../models/productsModel');

const getAllProducts = async () => {
  const products = await productModel.getAllProducts();
  return { status: 'SUCCESS', data: products };
};

const getProductById = async (productId) => {
  const product = await productModel.getProductById(productId);
  if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  return { status: 'SUCCESS', data: product };
};

const insertNewProduct = async (newProduct) => {
  const { name } = newProduct;
  console.log('service', name);
  const id = await productModel.insertNewProduct(name);
  return { status: 'CREATED', data: { id, name } };
};

module.exports = {
  getAllProducts,
  getProductById,
  insertNewProduct,
};
