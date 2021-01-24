const { getDatabasePath } = require('./utils');

module.exports = {
  development: {
    database: process.env.DB_NAME,
    storage: getDatabasePath(),
    dialect: 'sqlite'
  },
  // test: {
  //   username: 'database_test',
  //   password: null,
  //   database: 'database_test',
  //   host: '127.0.0.1',
  //   dialect: 'mysql'
  // },
};
