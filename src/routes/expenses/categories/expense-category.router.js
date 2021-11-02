const router = require('express').Router();

const categoryService = require('../../../services/expense-category.service');

router.get('/', categoryService.getAll);

router.get('/:id', categoryService.getById);

// todo: add validator
router.post('/', categoryService.create);

// todo: add validator
router.patch('/:id', categoryService.updateById);

// todo: add validator
router.delete('/:id', categoryService.deleteById);

module.exports = router;
