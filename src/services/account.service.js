const AccountModel = require('../db/models/account.model');
const CurrencyService = require('../services/currency.service');
const { BadRequestError, NotFoundError } = require('../utils/errors');

/**
 * Create a new account
 * @param account { name: string, type: accountTypes, currencyCode: string } data for the new account
 * @returns Promise<AccountModel>
 */
async function create(account) {
  await validateAccountName(account.name);
  await validateCurrencyCode(account.currencyCode);

  return AccountModel.create(account);
}

/**
 * Get all accounts
 * @returns {Promise<AccountModel[]>}
 */
async function getAll() {
  return AccountModel.findAll();
}

async function getById(id) {
  const account = await AccountModel.findByPk(id);
  if (!account) {
    throw NotFoundError(`Account not found by id ${id}`);
  }
  return account;
}

async function updateById(id, { name, type, currencyCode }) {
  const account = await getById(id);
  await validateAccountName(name);
  await validateCurrencyCode(currencyCode);
  return account.update({
    name,
    type,
    currencyCode
  });
}

async function deleteById(id) {
  await AccountModel.destroy({ where: { id } });
}

async function validateAccountName(name) {
  if (!name) {
    return;
  }
  const existingAccount = await AccountModel.findOne({ where: { name }});
  if (existingAccount) {
    throw new BadRequestError(`Account with name ${name} already exists!`);
  }
}

async function validateCurrencyCode(code) {
  if (code) {
    return CurrencyService.getByCode(code);
  }
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById
};
