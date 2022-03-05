const router = require('express').Router();

const expenseController = require('../controllers/expense.controller');

// may require pagination
router.get('/', expenseController.getAll);

// may be redundant
router.get('/:id', expenseController.getById);

// todo: add validator
//  required fields: account, amount, date, description
router.post('/', expenseController.create);

// todo: add validator
//  required fields: amount, date, description
router.patch('/:id', expenseController.updateById);

router.delete('/:id', expenseController.deleteById);

module.exports = router;
