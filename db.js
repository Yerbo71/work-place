const { Pool } = require('pg');

const db = new Pool({
  user: 'admin', // Replace with your PostgreSQL username
  host: 'db', // Replace with your Docker container name or IP address
  database: 'workplace', // Replace with your database name
  password: 'root', // Replace with your password
  port: 5432, // PostgreSQL default port
});



module.exports = db;