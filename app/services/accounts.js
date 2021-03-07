const accountModel = require('../../persistence/models/account');

async function create(account) {
  return accountModel.create(account);
}

module.exports = {
  create
};
