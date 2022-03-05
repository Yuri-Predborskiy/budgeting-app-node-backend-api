const router = require('express').Router();

const incomeController = require('../controllers/income.controller');

// may require pagination
router.get('/', incomeController.getAll);

// may be redundant
router.get('/:id', incomeController.getById);

// todo: add validator
//  required fields: account, amount, date, description
router.post('/', incomeController.create);

// todo: add validator
//  required fields: amount, date, description
router.patch('/:id', incomeController.updateById);

router.delete('/:id', incomeController.deleteById);

module.exports = router;
