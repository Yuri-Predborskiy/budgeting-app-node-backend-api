const router = require('express').Router();

const expenseCategoryController = require('../controllers/expense-category.controller')

router.get('/', expenseCategoryController.getAll);

router.get('/:name', expenseCategoryController.getByName);

// todo: add validator
router.post('/', expenseCategoryController.create);

// todo: add validator
router.patch('/:name', expenseCategoryController.updateByName);

// todo: add validator
router.delete('/:name', expenseCategoryController.deleteByName);

module.exports = router;
