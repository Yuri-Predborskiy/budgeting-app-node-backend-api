const router = require('express').Router();

const expenseService = require('../services/expenses.service');

// may require pagination
router.get('/', expenseService.getAll);

// may be redundant
router.get('/:id', expenseService.getById);

// todo: add validator
//  required fields: account, amount, date, description
router.post('/', expenseService.create);

// todo: add validator
//  required fields: amount, date, description
router.patch('/:id', expenseService.updateById);

router.delete('/:id', expenseService.deleteById);

module.exports = router;
