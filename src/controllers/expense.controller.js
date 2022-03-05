const ExpenseService = require('../services/expense.service');

async function create(req, res) {
  const expense = await ExpenseService.create(req.body);
  res.json(expense);
}

async function getAll(req, res) {
  const expenses = await ExpenseService.getAll();
  res.json(expenses);
}

async function getById(req, res) {
  const expense = await ExpenseService.getById(req.params.id);
  res.json(expense);
}

async function updateById(req, res) {
  const expense = await ExpenseService.updateById(req.params.id, req.body);
  res.json(expense);
}

async function deleteById(req, res) {
  await ExpenseService.deleteById(req.params.id);
  res.status(200).send();
}

module.exports = {
  create,
  getById,
  getAll,
  updateById,
  deleteById,
};
