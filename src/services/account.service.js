const AccountModel = require('../db/models/account.model');
const { BadRequestError } = require('../utils/errors');

/**
 * Create a new account
 * @param account<AccountModel> data for the new account
 * @returns Promise<AccountModel>
 */
async function create({ name, type, currencyCode }) {
  const isNameTaken = AccountModel.findOne({ where: { name } });
  if (isNameTaken) {
    throw new BadRequestError('Account with this name already exists! Account names should be unique!');
  }
  // check if type matches type enum
  // check if currencyCode exists
  return AccountModel.create({ name, type, currencyCode });
}

async function getById(id) {
  return AccountModel.findByPk(id);
}

module.exports = {
  create,
  getById
};
