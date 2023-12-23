const router = require('express').Router();
const { validateCurrencyCode } = require('../middlewares/currency-validator');

const currenciesController = require('../controllers/currency.controller')

router.get('/', currenciesController.getAll);

router.get('/:code', validateCurrencyCode, currenciesController.getByCode);

// todo: check if validator works correctly
router.post('/', validateCurrencyCode, currenciesController.create);

// todo: check if validator works correctly
router.patch('/:code', validateCurrencyCode, currenciesController.updateByCode);

// todo: check if validator works correctly
router.delete('/:code', validateCurrencyCode, currenciesController.deleteByCode);

module.exports = router;
