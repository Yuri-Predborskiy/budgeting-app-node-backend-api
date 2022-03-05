// todo: update to match name, currently a copy of income service

const { NotFoundError } = require('../utils/errors');
const IncomeModel = require('../db/models/income.model');
const AccountService = require('./account.service');
const IncomeCategoryService = require('./income-category.service');

/**
 * Create new income record
 * @param data {{ accountId: number, date: date, amount: number, [description]: string, categoryName: string }}
 * @returns { Promise<IncomeModel> }
 */
async function create(data) {
  await AccountService.getById(data.accountId);
  await IncomeCategoryService.getByName(data.categoryName);

  return IncomeModel.create({
    accountId: data.accountId,
    date: data.date,
    amount: data.amount,
    categoryName: data.categoryName,
    description: data.description || data.categoryName
  });
}

/**
 * Get all incomes
 * @returns { Promise<IncomeModel[]> }
 */
async function getAll() {
  return IncomeModel.findAll();
}

/**
 * Get income record by id
 * @param id
 * @returns { Promise<IncomeModel> }
 */
async function getById(id) {
  const income = await IncomeModel.findByPk(id);
  if (!income) {
    throw new NotFoundError(`Income not found by id ${id}`);
  }
  return income;
}

/**
 * Update income by id
 * @param id {number}
 * @param updateData {{ [date]: date, [amount]: number, [description]: string, [categoryName]: string }}
 * @returns { Promise<IncomeModel> }
 */
async function updateById(id, updateData) {
  const income = await getById(id);

  if (typeof updateData.date !== 'undefined') {
    income.date = updateData.date;
  }

  if (typeof updateData.amount !== 'undefined') {
    income.amount = updateData.amount;
  }

  if (typeof updateData.description !== 'undefined') {
    income.description = updateData.description;
  }

  if (typeof updateData.categoryName !== 'undefined') {
    const category = await IncomeCategoryService.getByName(updateData.categoryName);
    income.categoryName = category.name;
  }

  return income.save();
}

/**
 * Delete Income by id
 * @param id
 * @returns {Promise<void>}
 */
async function deleteById(id) {
  await IncomeModel.destroy({ where: id });
}

module.exports = {
  getById,
  getAll,
  create,
  updateById,
  deleteById
};
