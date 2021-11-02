const AccountModel = require('../../db/models/account.model');

async function create(account) {
  return AccountModel.create(account);
}

async function getById(id) {
  return AccountModel.findByPk(id);
}

module.exports = {
  create,
  getById
};
