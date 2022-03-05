const { NotFoundError } = require('../utils/errors');
const ExpenseModel = require('../db/models/expense.model');
const AccountService = require('./account.service');
const ExpenseCategoryService = require('./expense-category.service');

/**
 * Create new expense record
 * @param data {{ accountId: number, date: date, amount: number, [description]: string, categoryName: string }}
 * @returns { Promise<ExpenseModel> }
 */
async function create(data) {
  await AccountService.getById(data.accountId);
  await ExpenseCategoryService.getByName(data.categoryName);

  return ExpenseModel.create({
    accountId: data.accountId,
    date: data.date,
    amount: data.amount,
    categoryName: data.categoryName,
    description: data.description || data.categoryName
  });
}

/**
 * Get all expenses
 * @returns { Promise<ExpenseModel[]> }
 */
async function getAll() {
  return ExpenseModel.findAll();
}

/**
 * Get Expense record by id
 * @param id
 * @returns { Promise<ExpenseModel> }
 */
async function getById(id) {
  const expense = await ExpenseModel.findByPk(id);
  if (!expense) {
    throw new NotFoundError(`Expense not found by id ${id}`);
  }
  return expense;
}

/**
 * Update expense by id
 * @param id {number}
 * @param updateData {{ id: number, [date]: date, [amount]: number, [description]: string, [categoryName]: string }}
 * @returns { Promise<ExpenseModel> }
 */
async function updateById(id, updateData) {
  const expense = await getById(id);

  if (typeof updateData.date !== 'undefined') {
    expense.date = updateData.date;
  }

  if (typeof updateData.amount !== 'undefined') {
    expense.amount = updateData.amount;
  }

  if (typeof updateData.description !== 'undefined') {
    expense.description = updateData.description;
  }

  if (typeof updateData.categoryName !== 'undefined') {
    await ExpenseCategoryService.getByName(updateData.categoryName);
    expense.categoryName = updateData.categoryName;
  }

  return expense.save();
}

/**
 * Delete Expense by id
 * @param id
 * @returns {Promise<void>}
 */
async function deleteById(id) {
  await ExpenseModel.destroy({ where: id });
}

module.exports = {
  getById,
  getAll,
  create,
  updateById,
  deleteById
};
