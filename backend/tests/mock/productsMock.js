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

const mockUpdateProduct = {
  id: 1,
  name: 'Saco de dormir',
};

const mockUpdateProductWithSuccess = {
  status: 'SUCCESS',
  data: mockUpdateProduct,
};

module.exports = {
  mockProducts,
  mockProduct,
  mockFindProductWithSuccess,
  insertId,
  mockUpdateProduct,
  mockUpdateProductWithSuccess,
};