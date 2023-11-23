const mockSales = [
  {
    SaleId: 1,
    productId: 1,
    quantity: 5,
    date: '2023-11-22T12:30:00',
  },
  {
    SaleId: 1,
    productId: 1,
    quantity: 5,
    date: '2023-11-22T12:30:00',
  },
];

const mockSale = {
  id: 2,
  date: '2023-11-23T12:30:00',
};

const mockFindSaleWithSuccess = {
  status: 'SUCCESS',
  data: mockSale,
};

const mockSaleNotFind = {
  status: 'NOT_FOUND',
  data: { message: 'Sale not found' },
};

module.exports = {
  mockSales,
  mockSale,
  mockFindSaleWithSuccess,
  mockSaleNotFind,
};
