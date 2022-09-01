const AccountModel = require('../db/models/account.model');
const CurrencyService = require('./currency.service');
const { BadRequestError, NotFoundError } = require('../utils/errors');
const AccountTypes = require('../enums/account-types');

/**
 * Create a new account
 * @param account data for creating a new account
 * @param account.name {string} account name
 * @param account.type {AccountTypes} type of account
 * @param account.currencyCode {string}
 * @returns Promise<AccountModel>
 */
async function create(account) {
  await validateAccountName(account.name);
  await validateCurrencyCode(account.currencyCode);
  validateAccountType(account.type);

  return AccountModel.create(account);
}

/**
 * Get all accounts
 * @returns {Promise<AccountModel[]>}
 */
async function getAll() {
  return AccountModel.findAll();
}

/**
 * Get account by ID
 * @returns {Promise<AccountModel>}
 */
async function getById(id) {
  const account = await AccountModel.findByPk(id);
  if (!account) {
    throw new NotFoundError(`Account not found by id ${id}`);
  }

  return account;
}

async function updateById(id, { name, type, currencyCode }) {
  const account = await getById(id);
  await validateAccountName(name);
  await validateCurrencyCode(currencyCode);
  validateAccountType(type);

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
    throw new BadRequestError(`Account name cannot be empty!`);
  }
  const existingAccount = await AccountModel.findOne({ where: { name }});
  if (existingAccount) {
    throw new BadRequestError(`Account with name ${name} already exists!`);
  }
}

/**
 * Validate that currency exists for code
 * @param code            currency code to validate
 * @returns Promise<void>
 */
async function validateCurrencyCode(code) {
  await CurrencyService.getByCode(code);
}

function validateAccountType(type) {
  if (!type || !AccountTypes[type]) {
    throw BadRequestError(`Account type "${type}" not supported!`);
  }
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById
};
