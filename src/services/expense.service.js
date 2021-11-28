const { NotFoundError } = require('../utils/errors');
const ExpenseModel = require('../db/models/expense.model');
const AccountService = require('../services/account.service');
const ExpenseCategoryModel = require('../db/models/expense-category.model');

/**
 * Create new expense record
 * @param expense {{ accountId: number, date: date, amount: number, description: string, categoryId: number }}
 * @returns { Promise<ExpenseModel> }
 */
async function create(expense) {
  await validateAccountId(expense.accountId);
  // todo: update validation for category, reuse "get by id"
  const category = await ExpenseCategoryModel.findByPk(expense.categoryId);
  if (!category) {
    throw NotFoundError(`Category not found by id ${expense.categoryId}`);
  }

  return ExpenseModel.create(expense);
}

/**
 * Get all expenses
 * @returns { Promise<ExpenseModel[]> }
 */
async function getAll() {
  return ExpenseModel.findAll();
}

/**
 * Get all expenses for account
 * @param accountId {number}
 * @returns { Promise<ExpenseModel[]> }
 */
async function getAllForAccount(accountId) {
  return ExpenseModel.findAll({ where: accountId });
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
 * @param fields {{ id: number, date: date, amount: number, description: string, categoryId: number }}
 * @returns { Promise<ExpenseModel> }
 */
async function updateById(id, {date, description, amount, categoryId}) {
  const expense = await ExpenseModel.findByPk(id);
  if (!expense) {
    throw NotFoundError(`Expense not found by id ${id}`);
  }

  return expense.update({
    date,
    description,
    amount,
    categoryId
  });
}

/**
 * Delete Expense by id
 * @param id
 * @returns {Promise<void>}
 */
async function deleteById(id) {
  await ExpenseModel.destroy({ where: id });
}

async function validateAccountId(id) {
  return AccountService.getById(id);
}

module.exports = {
  getById,
  getAll,
  getAllForAccount,
  create,
  updateById,
  deleteById
};
