const BalanceService = require('../services/balance.service');

async function create(req, res) {
  const balance = await BalanceService.create(req.body);
  res.json(balance);
}

async function getAll(req, res) {
  const balances = await BalanceService.getAll();
  res.json(balances);
}

async function getById(req, res) {
  const balance = await BalanceService.getById(req.params.id);
  res.json(balance);
}

async function updateById(req, res) {
  const balance = await BalanceService.updateById(req.params.id, req.body);
  res.json(balance);
}

async function deleteById(req, res) {
  await BalanceService.deleteById(req.params.id);
  res.status(200).send();
}

module.exports = {
  create,
  getById,
  getAll,
  updateById,
  deleteById,
};
