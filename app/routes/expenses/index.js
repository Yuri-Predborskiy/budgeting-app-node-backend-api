const router = require('express').Router();

const { expenses } = require('../../controllers');



// todo: review routes according to mockups to see which routes are necessary and which can be skipped



router.get('/', expenses.getAll);

router.get('/:expenseId', expenses.getById);

// todo: add validator and schema
router.post('/', expenses.create);

// todo: add validator and schema
router.patch('/:expenseId', expenses.updateById);

// todo: add validator and schema
router.delete('/:expenseId', expenses.deleteById);

module.exports = router;
