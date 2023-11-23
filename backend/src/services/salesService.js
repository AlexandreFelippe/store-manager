const { salesModel } = require('../models');

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

const createSale = async (sales) => {
  const data = await salesModel.createSales(sales);
  console.log('service:', data);
  return { status: 'CREATED', data };
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
};