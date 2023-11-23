const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const { mockSales } = require('../../mock/salesMock');

describe('SALES_SERVICES:', function () {
  describe('Testa a função getAllSales', function () {
    it('Testa se a função getAllSales é chamada', async function () {
      const stub = sinon.stub(salesModel, 'getAllSales').resolves(mockSales);
      await salesService.getAllSales();
      expect(stub.calledOnce).to.be.equal(true);
      stub.restore();
    });
    it('Testa se a função getAllSales retorna um array', async function () {
      const stub = sinon.stub(salesModel, 'getAllSales').resolves(mockSales);
      const result = await salesService.getAllSales();
      expect(result.status).to.be.equal('SUCCESS');
      expect(result.data).to.be.an('array');
      expect(result.data).to.be.deep.equal(mockSales);
      stub.restore();
    });
  });
  describe('Testa a função getSaleById', function () {
    it('Testa se a função getSaleById é chamada', async function () {
      const stub = sinon.stub(salesModel, 'getSaleById').resolves(mockSales[0]);
      await salesService.getSaleById(1);
      expect(stub.calledOnce).to.be.equal(true);
      stub.restore();
    });
    it('Testa se a função getSaleById retorna somente a venda listada', async function () {
      const stub = sinon.stub(salesModel, 'getSaleById').resolves(mockSales[0]);
      const result = await salesService.getSaleById(1);
      expect(result.status).to.be.equal('SUCCESS');
      expect(result.data).to.be.deep.equal(mockSales[0]);
      stub.restore();
    });
  });
});