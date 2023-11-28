const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel, productsModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const { mockSales, mockSuccessfulSale } = require('../../mock/salesMock');

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
    it('Verifica inserção de vendas com sucesso', async function () {
      const stub = sinon.stub(salesModel, 'createSales').resolves(mockSuccessfulSale.data.id);
      sinon.stub(salesService, 'verifyCreateSaleId').resolves(undefined);
      sinon.stub(salesService, 'verifyCreateSaleQuantity').resolves(undefined);
      sinon.stub(productsModel, 'getAllProducts').resolves([{ id: 1 }, { id: 2 }]);
      const result = await salesService.createSale(mockSuccessfulSale.data.itemsSold);
      expect(result.status).to.equal('CREATED');
      expect(result.data).to.deep.equal(mockSuccessfulSale.data);
      stub.restore();
    });
  });
});