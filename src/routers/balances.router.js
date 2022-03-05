const router = require('express').Router();

const balancesController = require('../controllers/balance.controller');

router.get('/', balancesController.getAll);

router.get('/:id', balancesController.getById);

// todo: add validator
router.post('/', balancesController.create);

// todo: add validator
router.patch('/:id', balancesController.updateById);

// todo: add validator
router.delete('/:id', balancesController.deleteById);

module.exports = router;
