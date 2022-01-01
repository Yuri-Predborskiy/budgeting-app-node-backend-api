const balancesService = require('../../services/balances.service');

async function create(req, res) {
  const { date, categoryName, description, accountId, amount } = req.body;
  const dateWithoutTime = new Date(Date.parse(date));
  dateWithoutTime.setUTCHours(0, 0, 0, 0);
  const newExpense = {
    date: dateWithoutTime,
    categoryName,
    description,
    accountId,
    amount
  };
  const expense = await balancesService.create(newExpense);
  res.json(expense);
}

module.exports = create;
