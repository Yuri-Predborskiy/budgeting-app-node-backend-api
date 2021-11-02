const router = require('express').Router();

const expenseService = require('../services/expense.service');

router.get('/', expenseService.getAll);

router.get('/:id', expenseService.getById);

// todo: add validator
router.post('/', expenseService.create);

// todo: add validator
router.patch('/:id', expenseService.updateById);

// todo: add validator
router.delete('/:id', expenseService.deleteById);

module.exports = router;
