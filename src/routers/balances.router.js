const router = require('express').Router();

const balanceService = require('../services/balance.service');

router.get('/', balanceService.getAll);

router.get('/:id', balanceService.getById);

// todo: add validator
router.post('/', balanceService.create);

// todo: add validator
router.patch('/:id', balanceService.updateById);

// todo: add validator
router.delete('/:id', balanceService.deleteById);

module.exports = router;
