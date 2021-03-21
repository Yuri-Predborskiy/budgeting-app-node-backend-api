const { getDatabasePath } = require('../config/utils');

module.exports = {
  development: {
    database: process.env.DB_NAME,
    storage: getDatabasePath(),
    dialect: 'sqlite',
    timestamps: true, // required for paranoid
    paranoid: true, // set deleted at instead of actually deleting a record
    logging: false,
  },
  // test: {
  //   username: 'database_test',
  //   password: null,
  //   database: 'database_test',
  //   host: '127.0.0.1',
  //   dialect: 'mysql'
  // },
};
