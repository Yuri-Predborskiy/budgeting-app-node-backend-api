const router = require('express').Router();

const accountsController = require('../controllers/accounts.controller');

router.get('/', accountsController.getAll);

router.get('/:id', accountsController.getById);

// todo: add validator
router.post('/', accountsController.create);

// todo: add validator
router.patch('/:id', accountsController.updateById);

// todo: add validator
router.delete('/:id', accountsController.deleteById);

module.exports = router;
