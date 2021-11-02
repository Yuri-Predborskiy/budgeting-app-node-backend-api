const Currency = require('../../persistence/models/currency');
const { BadRequestError, NotFoundError } = require('../utils/errors');

/**
 * Get all currencies
 * @returns {Promise<Currency[]>}
 */
async function getAll() {
  return Currency.findAll();
}

/**
 * Get currency model by currency code
 * @param code
 * @returns {Promise<Currency>}
 */
async function getByCode(code) {
  const currency = Currency.findByPk(code);
  if (!currency) {
    throw NotFoundError(`Currency not found by code ${code}`);
  }
  return currency;
}

/**
 * Create new currency with code, name and symbol. Code should be unique
 * @param currencyData {{ code: string, name: string, symbol: string }}
 * @returns {Promise<Currency>}
 */
async function create(currencyData) {
  const code = currencyData.code.toUpperCase();
  const symbol = currencyData.symbol ? currencyData.symbol : currencyData.code

  const existingCurrency = getByCode(code);
  if (existingCurrency) {
    throw new BadRequestError('Currency with this code already exists');
  }

  return Currency.create({
    code,
    name: currencyData.name,
    symbol
  });
}

/**
 * Update currency by code
 * @param code
 * @param fields {{ name: string, symbol: string }}    object containing currency fields to update
 * @returns {Promise<void>}
 */
async function updateByCode(code, fields) {
  const currency = await getByCode(code);
  if (!currency) {
    throw NotFoundError(`Currency not found by code ${code}`);
  }

  for (const field of Object.getOwnPropertyNames(fields)) {
    currency[field] = fields[field];
  }

  currency.save();
}

/**
 * Delete currency by code
 * @param code
 * @returns {Promise<void>}
 */
async function deleteByCode(code) {
  await Currency.destroy({ where: code });
}

module.exports = {
  getByCode,
  getAll,
  create,
  updateByCode,
  deleteByCode
};
