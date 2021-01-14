const router = require('express').Router();

const { wallets } = require('../../controllers');

router.get('/', wallets.getAll);

router.get('/:walletId', wallets.getById);

// todo: add validator and schema
router.post('/', wallets.create);

// todo: add validator and schema
router.patch('/:walletId', wallets.updateById);

// todo: add validator and schema
router.delete('/:walletId', wallets.deleteById);

module.exports = router;
