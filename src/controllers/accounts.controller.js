const AccountsService = require('../services/accounts.service');

async function create(req, res) {
  const account = await AccountsService.create(req.body);
  res.json(account);
}

async function getAll(req, res) {
  const accounts = await AccountsService.getAll();
  res.json(accounts);
}

async function getById(req, res) {
  const account = await AccountsService.getById(req.params.id);
  res.json(account);
}

async function updateById(req, res) {
  const account = await AccountsService.updateById(req.params.id, req.body);
  res.json(account);
}

async function deleteById(req, res) {
  await AccountsService.deleteById(req.params.id);
  res.status(200).send();
}

module.exports = {
  create,
  getById,
  getAll,
  updateById,
  deleteById,
};
