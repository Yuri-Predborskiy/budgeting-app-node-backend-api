const { BadRequestError, NotFoundError } = require("../utils/errors");
const CurrencyModel = require("../db/models/currency.model");

function validateCurrencyCode(req, res, next) {
  const currencyCode = req.body.code || req.path.code;
  validateCodeString(currencyCode);
  next();
}

function isCodeValid(currencyCode) {
  return !(!currencyCode || typeof currencyCode !== 'string' || currencyCode.length !== 3);
}

function validateCodeString(currencyCode) {
  if (!isCodeValid(currencyCode)) {
    throw BadRequestError('Currency code not valid');
  }
}

async function getByCode(currencyCode) {
  validateCodeString(currencyCode);
  const currency = await CurrencyModel.findByPk(currencyCode.toUpperCase());
  if (!currency) {
    throw new NotFoundError(`Currency not found by code ${currencyCode}`);
  }
  return currency;
}

module.exports = {
  validateCurrencyCode,
  isCodeValid,
  getByCode
};
