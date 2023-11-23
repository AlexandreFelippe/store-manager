const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models');
const { mockSales } = require('../../mock/salesMock');

chai.use(sinonChai);

describe('SALES_MODEL', function () {
  describe('Testa a função getAllSales', function () {
    it('Testa se a função getAllSales é chamada', async function () {
      const stub = sinon.stub(connection, 'execute').resolves([mockSales]);
      await salesModel.getAllSales();
      expect(stub.calledOnce).to.be.equal(true);
      stub.restore();
    });
    it('Testa se a função getAllSales retorna um array', async function () {
      const stub = sinon.stub(connection, 'execute').resolves([mockSales]);
      const result = await salesModel.getAllSales();
      expect(result).to.be.an('array');
      expect(result).to.be.deep.equal(mockSales);
      stub.restore();
    });
  });
  describe('Testa a função getSaleById', function () {
    it('Testa se a função getSaleById é chamada', async function () {
      const stub = sinon.stub(connection, 'execute').resolves([[mockSales[0]]]);
      await salesModel.getSaleById(1);
      expect(stub.calledOnce).to.be.equal(true);
      stub.restore();
    });
    it('Testa se a função getSaleById retorna somente a venda listada', async function () {
      const stub = sinon.stub(connection, 'execute').resolves([[mockSales[0]]]);
      const result = await salesModel.getSaleById(1);
      expect(result).to.be.deep.equal([mockSales[0]]);
      stub.restore();
    });
  });
});