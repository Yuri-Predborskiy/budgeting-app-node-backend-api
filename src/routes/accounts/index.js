const router = require('express').Router();

const { accounts } = require('../../controllers');

router.get('/', accounts.getAll);

router.get('/:accountId', accounts.getById);

// todo: add validator and schema
router.post('/', accounts.create);

// todo: add validator and schema
router.patch('/:accountId', accounts.updateById);

// todo: add validator and schema
router.delete('/:accountId', accounts.deleteById);

module.exports = router;
