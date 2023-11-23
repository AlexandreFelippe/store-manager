const validateNewProduct = (req, res, next) => {
  console.log('Request Body:', req.body);
  const { name } = req.body;

  if (!name || typeof name !== 'string') {
    return res.status(400).json({
      message: '"name" is required',
    });
  }
  if (name.length < 5) {
    return res.status(422).json({
      message: '"name" length must be at least 5 characters long',
    });
  }

  next();
};

module.exports = validateNewProduct;