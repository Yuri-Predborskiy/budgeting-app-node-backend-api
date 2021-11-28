const AccountModel = require('../db/models/account.model');
const CurrencyModel = require('../db/models/currency.model');
const { BadRequestError, NotFoundError } = require('../utils/errors');
const accountTypes = require('../enums/account-types');

/**
 * Create a new account
 * @param account { name: string, type: accountTypes, currencyCode: string } data for the new account
 * @returns Promise<AccountModel>
 */
async function create(account) {
  await validateAccountName(account.name);
  validateAccountType(account.type);
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
  return AccountModel.findByPk(id);
}

async function updateById(id, { name, type, currencyCode }) {
  const account = await AccountModel.findByPk(id);
  if (!account) {
    throw new NotFoundError(`Account not found by id ${id}`);
  }
  await validateAccountName(name);
  validateAccountType(type);
  await validateCurrencyCode(currencyCode);
  account.name = name;
  account.type = type;
  account.currencyCode = currencyCode;
  account.save();
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

function validateAccountType(type) {
  if (!type) {
    return;
  }
  const isValid = accountTypes.hasOwnProperty(type);
  if (!isValid) {
    throw new BadRequestError(`Account type ${type} is not supported!`);
  }
}

async function validateCurrencyCode(code) {
  if (!code) {
    return;
  }
  const currency = await CurrencyModel.findOne({ where: { code }});
  if (!currency) {
    throw new BadRequestError(`Currency code ${code} is not valid! Create new currency to use this code`);
  }
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById
};
