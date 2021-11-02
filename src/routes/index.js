const router = require('express').Router();

const accountsRouter = require('./accounts');
const balancesRouter = require('./balances');
const expensesRouter = require('./expense.router');
// const incomesRouter = require('./incomes');
// const plansRouter = require('./plans');

// todo: move expenses, balances, incomes, plans into accounts so that they are added to a specific account by ID

router.use('/accounts', accountsRouter);
router.use('/balances', balancesRouter);
router.use('/expenses', expensesRouter);
// router.use('/incomes', incomesRouter);
// router.use('/plans', plansRouter);

module.exports = router;
