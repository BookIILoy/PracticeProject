const { createPool } = require("mysql");

const pool = createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_POST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SQL,
  connectionLimit: 10
});

module.exports = pool;