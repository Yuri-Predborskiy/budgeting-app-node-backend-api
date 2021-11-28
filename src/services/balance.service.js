const BalanceModel = require('../db/models/balance.model');
const AccountModel = require('../db/models/account.model');
const { NotFoundError } = require('../utils/errors');

async function create(balance) {
  const account = await AccountModel.findByPk(balance.accountId);
  if (!account) {
    throw new NotFoundError(`Account not found by id ${balance.accountId}`);
  }

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
