const { Pool } = require('pg')
const pool = new Pool({
    user: 'admin', // Replace with your PostgreSQL username
    host: 'db', // Replace with your Docker container name or IP address
    database: 'taskManager', // Replace with your database name
    password: 'root', // Replace with your password
    port: 5432, // PostgreSQL default port
  });

module.exports = pool;