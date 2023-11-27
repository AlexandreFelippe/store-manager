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

const verifyUpdateProduct = async (id, update) => {
  const { name } = update;
  if (!name) return { status: 'BAD_REQUEST', data: { message: '"name" is required' } };
  await productModel.updateProduct(id, update);
  if (name.length < 5) { 
    return { status: 'INVALID_VALUE',
      data: { message: '"name" length must be at least 5 characters long' } };
  }
  const products = await productModel.getAllProducts();
  const product = products.find((item) => item.id === Number(id));
  if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
};

const updateProduct = async (id, update) => {
  const error = await verifyUpdateProduct(id, update);
  if (error) return error;
  const { name } = update;
  await productModel.updateProduct(id, update);
  return { status: 'SUCCESS', data: { id, name } };
};

module.exports = {
  getAllProducts,
  getProductById,
  insertNewProduct,
  updateProduct,
  verifyUpdateProduct,
};
