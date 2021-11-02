const router = require('express').Router();

const accountService = require('../services/account.service');

router.get('/', accountService.getAll);

router.get('/:id', accountService.getById);

// todo: add validator
router.post('/', accountService.create);

// todo: add validator
router.patch('/:id', accountService.updateById);

// todo: add validator
router.delete('/:id', accountService.deleteById);

module.exports = router;
