require('dotenv').config();
const os = require('os');
const path = require('path');

function getDatabasePath() {
  const homedir = os.homedir();
  const dbFolder = process.env.DB_PATH || 'data';
  const dbFileName = process.env.DB_FILENAME || 'sqlite.db';
  return path.join(homedir, dbFolder, dbFileName);
}

module.exports = {
  getDatabasePath,
};
