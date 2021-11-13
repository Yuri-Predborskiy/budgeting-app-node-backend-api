const router = require('express').Router();

const expenseCategoryService = require('../services/category.service');

router.get('/', expenseCategoryService.getAll);

router.get('/:id', expenseCategoryService.getById);

// todo: add validator
router.post('/', expenseCategoryService.create);

// todo: add validator
router.patch('/:id', expenseCategoryService.updateById);

// todo: add validator
router.delete('/:id', expenseCategoryService.deleteById);

module.exports = router;
