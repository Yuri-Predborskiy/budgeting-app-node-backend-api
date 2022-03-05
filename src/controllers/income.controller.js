const IncomeService = require('../services/income.service');

async function create(req, res) {
  const incomeCategory = await IncomeService.create(req.body);
  res.json(incomeCategory);
}

async function getAll(req, res) {
  const incomeCategories = await IncomeService.getAll();
  res.json(incomeCategories);
}

async function getById(req, res) {
  const incomeCategory = await IncomeService.getById(req.params.id);
  res.json(incomeCategory);
}

async function updateById(req, res) {
  const incomeCategory = await IncomeService.updateById(req.params.id, req.body);
  res.json(incomeCategory);
}

async function deleteById(req, res) {
  await IncomeService.deleteById(req.params.id);
  res.status(200).send();
}

module.exports = {
  create,
  getById,
  getAll,
  updateById,
  deleteById,
};
