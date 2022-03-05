const { NotFoundError, BadRequestError} = require('../utils/errors');
const IncomeCategoryModel = require('../db/models/income-category.model');

/**
 * Get all expense categories
 * @returns {Promise<IncomeCategoryModel[]>}
 */
async function getAll() {
  return IncomeCategoryModel.findAll();
}

/**
 * Get expense category by name
 * @param name
 * @returns {Promise<IncomeCategoryModel>}
 */
async function getByName(name) {
  const category = await IncomeCategoryModel.findByPk(name);
  if (!category) {
    throw new NotFoundError(`Category not found by name "${name}"`);
  }
  return category;
}

/**
 * Create a new expense category
 * @param data {{ name: string, [description]: string }}
 * @returns {Promise<IncomeCategoryModel>}
 */
async function create(data) {
  await validateNameIsFree(data.name);
  return IncomeCategoryModel.create(data);
}

/**
 * Update category by name
 * @param name {number}
 * @param updateData {{ name: string, description: string }}
 * @returns {Promise<IncomeCategoryModel>}
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
  await IncomeCategoryModel.destroy({ where: { name } });
}

async function validateNameIsFree(name) {
  const category = await IncomeCategoryModel.findByPk(name);
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
