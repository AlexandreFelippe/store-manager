const addProductSchema = require('./schemas');

const validateProductAdd = ({ productId }) => {
  const { error } = addProductSchema.validate({ productId });
  if (error) {
    return { status: 'BAD_REQUEST', data: { message: '"productId" is required' },
    }; 
  }
};

module.exports = {
  validateProductAdd,
};