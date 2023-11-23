const router = require('express').Router();
const { salesController } = require('../controllers');

router.get('/', salesController.getAllSales);
router.get('/:id', salesController.getSaleById);
router.post('/', salesController.createSale);

module.exports = router;