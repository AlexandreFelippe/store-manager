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

module.exports = {
  mockProducts,
  mockProduct,
  mockFindProductWithSuccess,
};