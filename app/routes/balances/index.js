const router = require('express').Router();

const { balances } = require('../../controllers');



// todo: review routes according to mockups to see which routes are necessary and which can be skipped



router.get('/', balances.getAll);

router.get('/:balanceId', balances.getById);

// todo: add validator and schema
router.post('/', balances.create);

// todo: add validator and schema
router.patch('/:walletId', balances.updateById);

// todo: add validator and schema
router.delete('/:walletId', balances.deleteById);

module.exports = router;
