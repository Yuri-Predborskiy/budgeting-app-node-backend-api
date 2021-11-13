const router = require('express').Router();

const accountsRouter = require('./accounts.router');
const balancesRouter = require('./balances.router');
// const incomesRouter = require('./incomes');
const expensesRouter = require('./expenses.router');
const categoriesRouter = require('./categories.router');
const currencyRouter = require('./currencies.router');
// const plansRouter = require('./plans');

router.use('/accounts', accountsRouter);
router.use('/balances', balancesRouter);
// router.use('/incomes', incomesRouter);
router.use('/expenses', expensesRouter);
router.use('/categories', categoriesRouter);
router.use('/currencies', currencyRouter);
// router.use('/plans', plansRouter);

module.exports = router;
