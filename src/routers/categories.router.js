const router = require('express').Router();

const expenseCategoryService = require('../services/expense-category.service');

// todo: add controller layer, accepting req, res, using req.params and returning via res.json

router.get('/', expenseCategoryService.getAll);

router.get('/:name', expenseCategoryService.getByName);

// todo: add validator
router.post('/', expenseCategoryService.create);

// todo: add validator
router.patch('/:name', expenseCategoryService.updateByName);

// todo: add validator
router.delete('/:name', expenseCategoryService.deleteByName);

module.exports = router;
