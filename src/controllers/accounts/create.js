const accountsService = require('../../services/accounts');

async function create(req, res) {
  const { name, type, currencyCode } = req.body;
  const newAccountData = {
    name,
    type,
    currencyCode
  };
  const account = await accountsService.create(newAccountData);
  res.json(account);
}

module.exports = create;
