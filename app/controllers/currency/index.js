const create = require('./create');
const getById = require('./getById');
const getAll = require('./getAll');
const updateById = require('./updateById');
const deleteById = require('./deletebyId');

// todo: move controller logic into router, limit controller to calling specific service
//  controller should be limited to calling service with its parameters from body, params
//  headers are not in use because this app is intended to be used on local machine only

module.exports = {
  create,
  getById,
  getAll,
  updateById,
  deleteById,
};
