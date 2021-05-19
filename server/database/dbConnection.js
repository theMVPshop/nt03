require('dotenv').config();
const mysql = require('mysql');

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('[⚡️database] mysql is connected...');
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DEFAULT_SCHEMA,
      });
      return this.pool;
    }
    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;
