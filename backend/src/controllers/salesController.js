const { salesService } = require('../services');
const HTTPStatus = require('../utils/HTTPStatuts');

const getAllSales = async (_req, res) => {
  const { status, data } = await salesService.getAllSales();
  return res.status(HTTPStatus(status)).json(data);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await salesService.getSaleById(id);
  return res.status(HTTPStatus(status)).json(data);
};

const createSale = async (req, res) => {
  const sales = req.body;
  const { status, data } = await salesService.createSale(sales);
  return res.status(HTTPStatus(status)).json(data);
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
};