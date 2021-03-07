const router = require('express').Router();

const accountsRouter = require('./accounts');
const balancesRouter = require('./balances');
// const expensesRouter = require('./expenses');
// const incomesRouter = require('./incomes');
// const plansRouter = require('./plans');

router.use('/accounts', accountsRouter);
router.use('/balances', balancesRouter);
// router.use('/expenses', expensesRouter);
// router.use('/incomes', incomesRouter);
// router.use('/plans', plansRouter);

module.exports = router;
