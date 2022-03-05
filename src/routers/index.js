const router = require('express').Router();

const accountsRouter = require('./accounts.router');
const balancesRouter = require('./balances.router');
// const incomesRouter = require('./incomes');
const expensesRouter = require('./expenses.router');
const expenseCategoriesRouter = require('./expense-categories.router');
const incomeCategoriesRouter = require('./income-categories.router');
const currencyRouter = require('./currencies.router');
// const plansRouter = require('./plans');

router.use('/accounts', accountsRouter);
router.use('/balances', balancesRouter);
// router.use('/incomes', incomesRouter);
router.use('/expenses', expensesRouter);
router.use('/expense-categories', expenseCategoriesRouter);
router.use('/income-categories', incomeCategoriesRouter);
router.use('/currencies', currencyRouter);
// router.use('/plans', plansRouter);

module.exports = router;
