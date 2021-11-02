const balanceModel = require('../../persistence/models/balance');

async function create(balance) {
  return balanceModel.create(balance);
}

module.exports = {
  create
};
