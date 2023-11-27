const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM products');
  return result;
};

const getProductById = async (id) => {
  const [[result]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return result;
};

const insertNewProduct = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [name],
  );
  return insertId;
};

const updateProduct = async (id, update) => {
  const { name } = update;
  if (name !== undefined) {
    await connection.execute(
      'UPDATE products SET name = ? WHERE id = ?',
      [name, id],
    );
  }
  return { id, name };
};

module.exports = {
  getAllProducts,
  getProductById,
  insertNewProduct,
  updateProduct,
};
