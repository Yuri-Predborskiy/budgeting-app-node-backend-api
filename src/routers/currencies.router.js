const router = require('express').Router();

const currenciesController = require('../controllers/currency.controller')

router.get('/', currenciesController.getAll);

router.get('/:code', currenciesController.getByCode);

// todo: add validator
router.post('/', currenciesController.create);

// todo: add validator
router.patch('/:code', currenciesController.updateByCode);

// todo: add validator
router.delete('/:code', currenciesController.deleteByCode);

module.exports = router;
