const CurrencyService = require('../services/currency.service');

async function create(req, res) {
  const currency = await CurrencyService.create(req.body);
  res.json(currency);
}

async function getAll(req, res) {
  const currencies = await CurrencyService.getAll();
  res.json(currencies);
}

async function getByCode(req, res) {
  const currency = await CurrencyService.getByCode(req.params.id);
  res.json(currency);
}

async function updateByCode(req, res) {
  const currency = await CurrencyService.updateByCode(req.params.id, req.body);
  res.json(currency);
}

async function deleteByCode(req, res) {
  await CurrencyService.deleteByCode(req.params.id);
  res.status(200).send();
}

module.exports = {
  create,
  getByCode,
  getAll,
  updateByCode,
  deleteByCode,
};
