const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/models/connection');
const { productsModel } = require('../../../src/models');
const { mockProducts, insertId } = require('../../mock/productsMock');

chai.use(sinonChai);

describe('PRODUCTS_MODEL', function () {
  describe('Testa a função getAllProducts', function () {
    it('Testa se a função getAllProducts é chamada', async function () {
      const stub = sinon.stub(connection, 'execute').resolves([mockProducts]);
      await productsModel.getAllProducts();
      expect(stub.calledOnce).to.be.equal(true);
      stub.restore();
    });
    it('Testa se a função getAllProducts retorna um array', async function () {
      const stub = sinon.stub(connection, 'execute').resolves([mockProducts]);
      const result = await productsModel.getAllProducts();
      expect(result).to.be.an('array');
      expect(result).to.be.deep.equal(mockProducts);
      stub.restore();
    });
  });
  describe('Testa a função getProductById', function () {
    it('Testa se a função getProductById é chamada', async function () {
      const stub = sinon.stub(connection, 'execute').resolves([[mockProducts[0]]]);
      await productsModel.getProductById(1);
      expect(stub.calledOnce).to.be.equal(true);
      stub.restore();
    });
    it('Testa se a função getProductById retorna um objeto', async function () {
      const stub = sinon.stub(connection, 'execute').resolves([[mockProducts[0]]]);
      const result = await productsModel.getProductById(1);
      expect(result).to.be.an('object');
      expect(result).to.be.deep.equal(mockProducts[0]);
      stub.restore();
    });
  });
  describe('Testa a função insertNewProduct', function () {
    it('Insere novo produto', async function () {
      const stub = sinon.stub(connection, 'execute').resolves([insertId]);
      const result = await productsModel.insertNewProduct({ name: 'Produto Teste' });
      expect(result).to.be.a('number');
      expect(result).to.be.equal(1);
      stub.restore();
    });
  });
});