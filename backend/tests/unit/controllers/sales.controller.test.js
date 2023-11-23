const { expect } = require('chai');
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { salesService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');
const { mockSales, mockFindSaleWithSuccess, mockSale, mockFindSaleWithSuccessById } = require('../../mock/salesMock');

chai.use(sinonChai);

describe('SALES_CONTROLLER', function () {
  it('Testa se a função getAllSales retorna com SUCCESS', async function () {
    const stub = sinon.stub(salesService, 'getAllSales').resolves(mockFindSaleWithSuccess);
    const req = {
      params: {},
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await salesController.getAllSales(req, res);
    expect(res.status.calledOnce).to.be.equal(true);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockSales);
    stub.restore();
  });
  it('Testa se a função getSaleById retorna com SUCCESS', async function () {
    const stub = sinon.stub(salesService, 'getSaleById').resolves(mockFindSaleWithSuccessById);
    const req = {
      params: { id: 2 },
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await salesController.getSaleById(req, res);
    expect(res.status.calledOnce).to.be.equal(true);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockSale);
    stub.restore();
  });
});