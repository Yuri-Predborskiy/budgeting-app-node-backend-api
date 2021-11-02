const router = require('express').Router();

const accountsRouter = require('./account.router');
const balancesRouter = require('./balance.router');
const categoriesRouter = require('./expenses/categories/expense-category.router');
const currencyRouter = require('./currency.router');
const expensesRouter = require('./expenses/expense.router');
// const incomesRouter = require('./incomes');
// const plansRouter = require('./plans');

// todo: move expenses, balances, incomes, plans into accounts so that they are added to a specific account by ID

router.use('/accounts', accountsRouter);
router.use('/balances', balancesRouter);
router.use('/categories', categoriesRouter);
router.use('/currencies', currencyRouter);
router.use('/expenses', expensesRouter);
// router.use('/incomes', incomesRouter);
// router.use('/plans', plansRouter);

module.exports = router;
