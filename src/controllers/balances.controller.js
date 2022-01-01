const BalancesService = require('../services/balances.service');

async function create(req, res) {
  const balance = await BalancesService.create(req.body);
  res.json(balance);
}

async function getAll(req, res) {
  const balances = await BalancesService.getAll();
  res.json(balances);
}

async function getById(req, res) {
  const balance = await BalancesService.getById(req.params.id);
  res.json(balance);
}

async function updateById(req, res) {
  const balance = await BalancesService.updateById(req.params.id, req.body);
  res.json(balance);
}

async function deleteById(req, res) {
  await BalancesService.deleteById(req.params.id);
  res.status(200).send();
}

module.exports = {
  create,
  getById,
  getAll,
  updateById,
  deleteById,
};
