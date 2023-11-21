const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { getAllProducts, getProductById } = require('../../../src/models/productsModel');
const { mockProducts } = require('../../mock/products.mock');

describe('Testa o model de produtos', function () {
  let sandbox;
  
  beforeEach(function () {
    sandbox = sinon.createSandbox();
  });
  
  afterEach(function () {
    sandbox.restore();
  });
  
  describe('Testa a função getAllProducts', function () {
    it('Testa se a função getAllProducts é chamada', async function () {
      const stub = sinon.stub(connection, 'execute').resolves([mockProducts]);
      await getAllProducts();
      expect(stub.calledOnce).to.be.equal(true);
    });
    it('Testa se a função getAllProducts retorna um object', async function () {
      const stub = sinon.stub(connection, 'execute').resolves([mockProducts]);
      const result = await getAllProducts();
      expect(result).to.be.an('object');
      expect(result.data).to.be.an('array');
      expect(result).to.be.deep.equal(mockProducts);
      stub.restore();
    });
  });
  describe('Testa a função getProductById', function () {
    it('Testa se a função getProductById é chamada', async function () {
      const stub = sinon.stub(connection, 'execute').resolves([[mockProducts[0]]]);
      await getProductById(1);
      expect(stub.calledOnce).to.be.equal(true);
    });
    it('Testa se a função getProductById retorna um objeto', async function () {
      const stub = sinon.stub(connection, 'execute').resolves([[mockProducts[0]]]);
      const result = await getProductById(1);
      expect(result).to.be.an('object');
      expect(result).to.be.deep.equal([mockProducts[0]]);
      stub.restore();
    });
  });
});