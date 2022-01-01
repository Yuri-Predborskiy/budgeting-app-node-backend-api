const router = require('express').Router();

const currencyService = require('../services/currencies.service');

router.get('/', currencyService.getAll);

router.get('/:code', currencyService.getByCode);

// todo: add validator
router.post('/', currencyService.create);

// todo: add validator
router.patch('/:code', currencyService.updateByCode);

// todo: add validator
router.delete('/:code', currencyService.deleteByCode);

module.exports = router;
