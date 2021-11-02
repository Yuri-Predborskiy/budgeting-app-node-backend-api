const balancesService = require('../../services/balances');

async function create(req, res) {
  const { date, accountId, amount } = req.body;
  const dateWithoutTime = new Date(Date.parse(date));
  dateWithoutTime.setUTCHours(0, 0, 0, 0);
  const newBalanceData = {
    date: dateWithoutTime,
    accountId,
    amount
  };
  const balance = await balancesService.create(newBalanceData);
  res.json(balance);
}

module.exports = create;
