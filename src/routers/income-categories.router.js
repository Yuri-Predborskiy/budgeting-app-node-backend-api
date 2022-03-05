const router = require('express').Router();

const incomeCategoriesController = require('../controllers/income-category.controller')

router.get('/', incomeCategoriesController.getAll);

router.get('/:name', incomeCategoriesController.getByName);

// todo: add validator
router.post('/', incomeCategoriesController.create);

// todo: add validator
router.patch('/:name', incomeCategoriesController.updateByName);

// todo: add validator
router.delete('/:name', incomeCategoriesController.deleteByName);

module.exports = router;
