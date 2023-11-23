const camelize = require('camelize');
const connection = require('./connection');

const getAllSales = async () => {
  const [sales] = await connection.execute(
    `SELECT sp.sale_id, sp.product_id, sp.quantity, s.date
     FROM sales_products sp
     INNER JOIN sales s
     ON sp.sale_id = s.id`,
  );
  return camelize(sales);
};

const getSaleById = async (id) => {
  const [sale] = await connection.execute(
    `SELECT sp.product_id, sp.quantity, s.date
     FROM sales_products sp
     INNER JOIN sales s
     ON sp.sale_id = s.id
     WHERE s.id = ?`,
    [id],
  );
  return camelize(sale);
};

module.exports = { 
  getAllSales,
  getSaleById,
};
