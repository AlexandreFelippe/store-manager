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

const insertSaleItems = async (insertId, saleItems) => {
  const saleDetails = await Promise.all(
    saleItems.map(({ productId, quantity }) => connection.execute(
      'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [insertId, productId, quantity],
    )),
  );
      
  return saleDetails;
};
    
const createSales = async (sales) => {
  const [{ insertId }] = await connection.execute('INSERT INTO sales () VALUES ()');
  await insertSaleItems(insertId, sales);
  return { id: insertId, itemsSold: sales };
};
    
module.exports = { 
  getAllSales,
  getSaleById,
  insertSaleItems,
  createSales,
};
