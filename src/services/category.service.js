const { NotFoundError } = require('../utils/errors');
const ExpenseCategoryModel = require('../db/models/expense-category.model');

// todo: consider using combined categories for expenses, incomes
//  use name and type as combined unique key
//  alternatively, skip category types altogether, use same categories for both expenses and incomes
// todo: use name for primary key

/**
 * Get all expenses
 * @returns {Promise<ExpenseCategoryModel[]>}
 */
async function getAll() {
  return ExpenseCategoryModel.findAll();
}

/**
 * Get Expense record by id
 * @param id
 * @returns {Promise<ExpenseCategoryModel>}
 */
async function getById(id) {
  const expense = ExpenseCategoryModel.findByPk(id);
  if (!expense) {
    throw NotFoundError(`Expense not found by id ${id}`);
  }
  return expense;
}

/**
 * Create new expense record
 * @param expense {{ accountId: number, date: date, amount: number, description: string, categoryId: number }}
 * @returns {Promise<ExpenseCategoryModel>}
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

  return ExpenseCategoryModel.create(expense);
}

/**
 * Update expense by id
 * @param id {number}
 * @param fields {{ id: number, date: date, amount: number, description: string, categoryId: number }}
 * @returns {Promise<void>}
 */
async function updateById(id, fields) {
  const expense = await ExpenseCategoryModel.findByPk(id);
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
  await ExpenseCategoryModel.destroy({ where: id });
}

module.exports = {
  getById,
  getAll,
  create,
  updateById,
  deleteById
};
