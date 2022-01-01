const { NotFoundError, BadRequestError} = require('../utils/errors');
const ExpenseCategoryModel = require('../db/models/expense-category.model');

/**
 * Get all expense categories
 * @returns {Promise<ExpenseCategoryModel[]>}
 */
async function getAll() {
  return ExpenseCategoryModel.findAll();
}

/**
 * Get expense category by name
 * @param name
 * @returns {Promise<ExpenseCategoryModel>}
 */
async function getByName(name) {
  const category = ExpenseCategoryModel.findByPk(name);
  if (!category) {
    throw new NotFoundError(`Category not found by name "${name}"`);
  }
  return category;
}

/**
 * Create a new expense category
 * @param data {{ name: string, [description]: string }}
 * @returns {Promise<ExpenseCategoryModel>}
 */
async function create(data) {
  await validateNameIsFree(data.name);
  return ExpenseCategoryModel.create(data);
}

/**
 * Update category by name
 * @param name {number}
 * @param updateData {{ name: string, description: string }}
 * @returns {Promise<ExpenseCategoryModel>}
 */
async function updateByName(name, updateData) {
  const category = await getByName(name);

  if (typeof updateData.name !== 'undefined') {
    await validateNameIsFree(updateData.name);
    category.name = updateData.name;
  }

  if (typeof updateData.description !== 'undefined') {
    category.description = updateData.description;
  }

  await category.save();
  return category;
}

/**
 * Delete expense category by id
 * @param name
 * @returns {Promise<void>}
 */
async function deleteByName(name) {
  await ExpenseCategoryModel.destroy({ where: { name } });
}

async function validateNameIsFree(name) {
  const category = await ExpenseCategoryModel.findByPk(name);
  if (category) {
    throw new BadRequestError('Expense category with this name already exists');
  }
}

module.exports = {
  getByName,
  getAll,
  create,
  updateByName,
  deleteByName
};
