const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');
const { productService } = require('../../../src/services');
const { mockProducts, mockUpdateProduct, mockUpdateProductWithSuccess, mockUpdateProductWithInvalidName, mockUpdateInvalidName } = require('../../mock/productsMock');

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
    const stubUpdateProduct = sinon.stub(productsModel, 'updateProduct').resolves(mockUpdateProductWithSuccess);
    const stubVerifyUpdateProduct = sinon.stub(productService, 'verifyUpdateProduct').resolves(undefined);
    const stubGetAllProducts = sinon.stub(productsModel, 'getAllProducts').resolves(mockProducts);
    // action
    const result = await productService.updateProduct(1, mockUpdateProduct);
    // assertion
    expect(result.status).to.equal('SUCCESS');
    expect(result.data).to.deep.equal(mockUpdateProduct);
    // restore
    stubUpdateProduct.restore();
    stubVerifyUpdateProduct.restore();
    stubGetAllProducts.restore();
  });
  it('Verfica se o nome do produto tem mais de 5 caracteres', async function () {
    // arrange
    const stub = sinon.stub(productsModel, 'updateProduct').resolves(mockUpdateProductWithInvalidName);
    sinon.stub(productService, 'verifyUpdateProduct').resolves(mockUpdateProductWithInvalidName);
    // action
    const result = await productService.updateProduct(1, mockUpdateInvalidName);
    // assertion
    expect(result.status).to.equal('INVALID_VALUE');
    expect(result).to.deep.equal(mockUpdateProductWithInvalidName);
    stub.restore();
  });
});