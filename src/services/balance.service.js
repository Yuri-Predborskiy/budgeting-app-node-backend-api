const balanceModel = require('../../db/models/balance.model');

async function create(balance) {
  return balanceModel.create(balance);
}

module.exports = {
  create
};
