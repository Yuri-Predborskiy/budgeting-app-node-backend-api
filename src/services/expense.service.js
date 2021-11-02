const { BadRequestError, NotFoundError } = require('../utils/errors');
const ExpenseModel = require('../../db/models/expense.model');
const AccountModel = require('../../db/models/account.model');
const CategoryModel = require('../../db/models/category.model');

/**
 * Get all expenses
 * @returns {Promise<ExpenseModel[]>}
 */
async function getAll() {
  return ExpenseModel.findAll();
}


/**
 * Get all expenses for account
 * @param accountId {number}
 * @returns {Promise<ExpenseModel[]>}
 */
async function getAllForAccount(accountId) {
  return ExpenseModel.findAll({ where: accountId });
}

/**
 * Get Expense record by id
 * @param id
 * @returns {Promise<ExpenseModel>}
 */
async function getById(id) {
  const expense = ExpenseModel.findByPk(id);
  if (!expense) {
    throw NotFoundError(`Expense not found by id ${id}`);
  }
  return expense;
}

/**
 * Create new expense record
 * @param expense {{ accountId: number, date: date, amount: number, description: string, categoryId: number }}
 * @returns {Promise<ExpenseModel>}
 */
async function create(expense) {
  const account = await AccountModel.findByPk(expense.accountId);
  if (!account) {
    throw NotFoundError(`Account not found by id ${expense.accountId}`);
  }
  const category = await CategoryModel.findByPk(expense.categoryId);
  if (!category) {
    throw NotFoundError(`Category not found by id ${expense.categoryId}`);
  }

  return ExpenseModel.create(expense);
}

/**
 * Update expense by id
 * @param id {number}
 * @param fields {{ id: number, date: date, amount: number, description: string, categoryId: number }}
 * @returns {Promise<void>}
 */
async function updateById(id, fields) {
  const expense = await ExpenseModel.findByPk(id);
  if (!expense) {
    throw NotFoundError(`Expense not found by id ${id}`);
  }

  for (const field of Object.getOwnPropertyNames(fields)) {
    expense[field] = fields[field];
  }

  expense.save();
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
  getAllForAccount,
  create,
  updateById,
  deleteById
};
