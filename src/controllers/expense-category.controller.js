const ExpenseCategoriesService = require('../services/expense-category.service');

async function create(req, res) {
  const balance = await ExpenseCategoriesService.create(req.body);
  res.json(balance);
}

async function getAll(req, res) {
  const balances = await ExpenseCategoriesService.getAll();
  res.json(balances);
}

async function getByName(req, res) {
  const balance = await ExpenseCategoriesService.getByName(req.params.id);
  res.json(balance);
}

async function updateByName(req, res) {
  const balance = await ExpenseCategoriesService.updateByName(req.params.id, req.body);
  res.json(balance);
}

async function deleteByName(req, res) {
  await ExpenseCategoriesService.deleteByName(req.params.id);
  res.status(200).send();
}

module.exports = {
  create,
  getByName,
  getAll,
  updateByName,
  deleteByName,
};
