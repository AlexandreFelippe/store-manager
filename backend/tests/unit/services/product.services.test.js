const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');
const { productService } = require('../../../src/services');
const { mockProducts, mockUpdateProduct, mockUpdateProductWithSuccess } = require('../../mock/productsMock');

describe('PRODUCTS_SERVICES:', function () {
  it('Verifica retorno de getById com sucesso', async function () {
    const stub = sinon.stub(productsModel, 'getProductById').resolves(mockProducts);
    const result = await productService.getProductById(1);
    expect(result.status).to.equal('SUCCESS');
    expect(result.data).to.deep.equal(mockProducts);
    stub.restore();
  });
  it('Verifica não ser possível retornar um produto inexistente', async function () {
    // arranje
    const stub = sinon.stub(productsModel, 'getProductById').resolves();
    // action
    const result = await productService.getProductById(4);
    // assert
    expect(result.status).to.equal('NOT_FOUND');
    expect(result.data).to.deep.equal({ message: 'Product not found' });
    stub.restore();
  });
  it('Verifica a atualização de product com sucesso', async function () {
    // arranje
    const stub = sinon.stub(productsModel, 'updateProduct').resolves(mockUpdateProductWithSuccess);
    sinon.stub(productService, 'verifyUpdateProduct').resolves(undefined);
    // action
    const result = await productService.updateProduct(1, mockUpdateProduct);
    // assertion
    expect(result.status).to.equal('SUCCESS');
    expect(result.data).to.deep.equal(mockUpdateProduct);
    stub.restore();
  });
});