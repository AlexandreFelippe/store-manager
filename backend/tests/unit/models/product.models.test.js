const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/models/connection');
const { getAllProducts, getProductById } = require('../../../src/models/productsModel');
const { mockProducts } = require('../../mock/products.mock');

chai.use(sinonChai);

describe('Testa o model de produtos', function () {
  describe('Testa a função getAllProducts', function () {
    it('Testa se a função getAllProducts é chamada', async function () {
      const stub = sinon.stub(connection, 'execute').resolves([mockProducts]);
      await getAllProducts();
      expect(stub.calledOnce).to.be.equal(true);
      stub.restore();
    });
    it('Testa se a função getAllProducts retorna um array', async function () {
      const stub = sinon.stub(connection, 'execute').resolves([mockProducts]);
      const result = await getAllProducts();
      console.log(result);
      expect(result).to.be.an('array');
      expect(result).to.be.deep.equal(mockProducts);
      stub.restore();
    });
  });
  describe('Testa a função getProductById', function () {
    it('Testa se a função getProductById é chamada', async function () {
      const stub = sinon.stub(connection, 'execute').resolves([[mockProducts[0]]]);
      await getProductById(1);
      expect(stub.calledOnce).to.be.equal(true);
      stub.restore();
    });
    it('Testa se a função getProductById retorna um objeto', async function () {
      const stub = sinon.stub(connection, 'execute').resolves([[mockProducts[0]]]);
      const result = await getProductById(1);
      expect(result).to.be.an('object');
      expect(result).to.be.deep.equal(mockProducts[0]);
      stub.restore();
    });
  });
});