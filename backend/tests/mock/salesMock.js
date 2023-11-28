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
  {
    SaleId: 2,
    productId: 2,
    quantity: 10,
    date: '2023-11-23T12:30:00',
  },
];

const mockSale = {
  id: 2,
  date: '2023-11-23T12:30:00',
};

const mockFindSaleWithSuccess = {
  status: 'SUCCESS',
  data: mockSales,
};

const mockFindSaleWithSuccessById = {
  status: 'SUCCESS',
  data: mockSale,
};

const mockSaleNotFind = {
  status: 'NOT_FOUND',
  data: { message: 'Sale not found' },
};

const mockInsertSuccessSale = {
  status: 'CREATED',
  data: { id: 4, 
    itemsSold: [{
      productId: 1,
      quantity: 5,
    },
    {
      productId: 2,
      quantity: 10,
    }] },
};

const mockSuccessfulSale = {
  status: 'CREATED',
  data: {
    id: 3,
    itemsSold: [
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 2,
        quantity: 5,
      },
    ],
  },
};

module.exports = {
  mockSales,
  mockSale,
  mockFindSaleWithSuccess,
  mockSaleNotFind,
  mockFindSaleWithSuccessById,
  mockInsertSuccessSale,
  mockSuccessfulSale,
};
