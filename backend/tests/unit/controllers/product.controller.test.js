const { expect } = require('chai');
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { productService } = require('../../../src/services');
const { productController } = require('../../../src/controllers');
const { mockFindProductWithSuccess, mockProduct } = require('../../mock/productsMock');

chai.use(sinonChai);

describe('PRODUCTS_CONTROLLER', function () {
  it('Testa se a função getProductsById retorna com SUCCESS', async function () {
    const stub = await sinon.stub(productService, 'getProductById').resolves(mockFindProductWithSuccess);
    const req = {
      params: { id: 3 },
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productController.getProductById(req, res);
    expect(res.status.calledOnce).to.be.equal(true);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockProduct);
    stub.restore();
  });
});
