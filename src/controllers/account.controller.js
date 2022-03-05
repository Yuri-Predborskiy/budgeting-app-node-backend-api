const AccountService = require('../services/account.service');

async function create(req, res) {
  const account = await AccountService.create(req.body);
  res.json(account);
}

// todo: pagination
async function getAll(req, res) {
  const accounts = await AccountService.getAll();
  res.json(accounts);
}

async function getById(req, res) {
  const account = await AccountService.getById(req.params.id);
  res.json(account);
}

async function updateById(req, res) {
  const account = await AccountService.updateById(req.params.id, req.body);
  res.json(account);
}

async function deleteById(req, res) {
  await AccountService.deleteById(req.params.id);
  res.status(200).send();
}

module.exports = {
  create,
  getById,
  getAll,
  updateById,
  deleteById,
};
