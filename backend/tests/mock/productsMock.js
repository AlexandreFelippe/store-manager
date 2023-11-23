const mockProducts = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const mockProduct = {
  id: 3,
  name: 'Escudo do Capitão América',
};

const mockFindProductWithSuccess = {
  status: 'SUCCESS',
  data: mockProduct,
};

const insertId = { insertId: 1 };

module.exports = {
  mockProducts,
  mockProduct,
  mockFindProductWithSuccess,
  insertId,
};