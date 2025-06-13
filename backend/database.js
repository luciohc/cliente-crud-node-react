const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'clientesdb',
  password: 'Al171178@',
  port: 5432,
});

module.exports = pool;
