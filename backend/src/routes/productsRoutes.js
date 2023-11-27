const route = require('express').Router();
const { productsModel } = require('../models');
const { productController } = require('../controllers');
const validateNewProduct = require('../middlewares/newProduct.middlewares');

route.get('/', async (_req, res) => {
  const products = await productsModel.getAllProducts();
  res.status(200).json(products);
});

route.get('/:id', productController.getProductById);

route.post('/', validateNewProduct, productController.insertNewProduct);

route.put('/:id', productController.updateProduct);

module.exports = route;