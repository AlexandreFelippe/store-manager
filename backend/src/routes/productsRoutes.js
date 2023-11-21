const route = require('express').Router();
const { productsModel } = require('../models');
const { productController } = require('../controllers');

route.get('/', async (_req, res) => {
  const products = await productsModel.getAllProducts();
  res.status(200).json(products);
});

route.get('/:id', productController.getProductById);

module.exports = route;