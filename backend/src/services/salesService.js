const { salesModel, productsModel } = require('../models');

const getAllSales = async () => {
  const sales = await salesModel.getAllSales();
  if (!sales) return { status: 'NOT_FOUND', data: { message: 'Sales Not found' } };
  return { status: 'SUCCESS', data: sales };
};

const getSaleById = async (id) => {
  const sale = await salesModel.getSaleById(id);
  if (sale.length === 0) return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  return { status: 'SUCCESS', data: sale };
};

const verifyCreateSaleId = async (sales) => {
  if (!Array.isArray(sales)) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid sales data' } };
  }
  const products = await productsModel.getAllProducts();
  const productsIds = sales.some((sale) => (!sale.productId));
  if (productsIds) return { status: 'BAD_REQUEST', data: { message: '"productId" is required' } };
  const productFind = products.filter((product) => {
    const productSale = sales.find((sale) => sale.productId === product.id);
    return productSale;
  });
  if (productFind.length !== sales.length) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
};

const verifyCreateSaleQuantity = async (sales) => {
  if (!Array.isArray(sales)) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid sales data' } };
  }
  const noQuantity = sales.some((sale) => (sale.quantity === undefined));
  const quantityValue = sales.some((sale) => (sale.quantity <= 0));
  if (noQuantity) return { status: 'BAD_REQUEST', data: { message: '"quantity" is required' } };
  if (quantityValue) {
    return {
      status: 'INVALID_VALUE',
      data: { message: '"quantity" must be greater than or equal to 1' },
    };
  }
};

const createSale = async (sales) => {
  const quantity = await verifyCreateSaleQuantity(sales);
  if (quantity) return quantity;
  const productId = await verifyCreateSaleId(sales);
  if (productId) return productId;
  const insertId = await salesModel.createSales(sales);
  return { status: 'CREATED', data: { id: insertId, itemsSold: sales } };
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
  verifyCreateSaleId,
  verifyCreateSaleQuantity,
};