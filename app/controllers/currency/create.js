const currenciesService = require('../../services/currency.service');

async function create(req, res) {
  const currency = await currenciesService.create(req.body);
  res.json(currency);
}

module.exports = create;
