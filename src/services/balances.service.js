const BalanceModel = require('../db/models/balance.model');
const AccountService = require('./accounts.service');
const { NotFoundError } = require('../utils/errors');

/**
 * Create a new balance
 * @param balanceData balance fields
 * @param balanceData.accountId {number} account id
 * @param balanceData.amount {number} balance to date in account currency
 * @param balanceData.date {date} date when balance was observed
 * @returns {Promise<BalanceModel>}
 */
async function create(balanceData) {
  await AccountService.getById(balanceData.accountId);
  const dateWithoutTime = new Date(balanceData.date);
  dateWithoutTime.setUTCHours(0, 0, 0, 0);
  const balance = {
    accountId: balanceData.accountId,
    amount: balanceData.amount,
    date: dateWithoutTime
  };
  return BalanceModel.create(balance);
}

async function getAll() {
  return BalanceModel.findAll();
}

async function getAllByAccountId(accountId) {
  return BalanceModel.findAll({ where: { accountId }});
}

async function getById(id) {
  const balance = await BalanceModel.findByPk(id);
  if (!balance) {
    throw new NotFoundError(`Balance not found by id ${id}`);
  }
  return balance;
}

async function updateById(id, { date, amount }) {
  const balance = await getById(id);
  return balance.update({ date, amount });
}

async function deleteById(id) {
  await BalanceModel.destroy({ where: { id }});
}

module.exports = {
  create,
  getAll,
  getAllByAccountId,
  getById,
  updateById,
  deleteById
};
