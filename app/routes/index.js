const router = require('express').Router();

const walletsRouter = require('./wallets');
const balancesRouter = require('./balances');
// const expensesRouter = require('./expenses');
// const incomesRouter = require('./incomes');
// const plansRouter = require('./plans');

router.use('/wallets', walletsRouter);
router.use('/balances', balancesRouter);
// router.use('/expenses', expensesRouter);
// router.use('/incomes', incomesRouter);
// router.use('/plans', plansRouter);

module.exports = router;
