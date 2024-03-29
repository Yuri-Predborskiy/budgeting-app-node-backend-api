const CurrencyModel = require('../db/models/currency.model');
const { BadRequestError, NotFoundError } = require('../utils/errors');

/**
 * Get all currencies
 * @returns {Promise<CurrencyModel[]>}
 */
async function getAll() {
  return CurrencyModel.findAll();
}

/**
 * Get currency model by currency code
 * @param code
 * @returns {Promise<CurrencyModel>}
 */
async function getByCode(code) {
  const validCode = getValidCurrencyCode(code);
  const currency = await CurrencyModel.findByPk(validCode);
  if (!currency) {
    throw new NotFoundError(`Currency not found by code ${code}`);
  }
  return currency;
}

/**
 * Create new currency with code, name and symbol. Code should be unique
 * @param currency {{ code: string, name: string, symbol: string }}
 * @returns {Promise<CurrencyModel>}
 */
async function create(currency) {
  const existingCurrency = await getByCode(currency.code);
  if (existingCurrency) {
    throw new BadRequestError('Currency with this code already exists');
  }

  const code = getValidCurrencyCode(currency.code);
  return CurrencyModel.create({
    code,
    name: currency.name,
    symbol: currency.symbol || code
  });
}

/**
 * Update currency by code
 * @param code
 * @param fields {{ name: string, symbol: string }}    object containing currency fields to update
 * @returns {Promise<CurrencyModel>}
 */
async function updateByCode(code, { name, symbol }) {
  const currency = await getByCode(code);
  return currency.update({
    name,
    symbol
  });
}

/**
 * Delete currency by code
 * @param code
 * @returns {Promise<void>}
 */
async function deleteByCode(code) {
  await CurrencyModel.destroy({ where: { code: getValidCurrencyCode(code) } });
}

function getValidCurrencyCode(code) {
  if (!code || typeof code !== 'string') {
    throw new BadRequestError(`Currency code not supported: "${code}"`);
  }
  return code.toUpperCase();
}

module.exports = {
  getByCode,
  getAll,
  create,
  updateByCode,
  deleteByCode
};
