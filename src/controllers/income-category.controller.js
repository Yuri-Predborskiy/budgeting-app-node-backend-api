const IncomeCategoryService = require('../services/income-category.service');

async function create(req, res) {
  const incomeCategory = await IncomeCategoryService.create(req.body);
  res.json(incomeCategory);
}

async function getAll(req, res) {
  const incomeCategories = await IncomeCategoryService.getAll();
  res.json(incomeCategories);
}

async function getByName(req, res) {
  const incomeCategory = await IncomeCategoryService.getByName(req.params.id);
  res.json(incomeCategory);
}

async function updateByName(req, res) {
  const incomeCategory = await IncomeCategoryService.updateByName(req.params.id, req.body);
  res.json(incomeCategory);
}

async function deleteByName(req, res) {
  await IncomeCategoryService.deleteByName(req.params.id);
  res.status(200).send();
}

module.exports = {
  create,
  getByName,
  getAll,
  updateByName,
  deleteByName,
};
