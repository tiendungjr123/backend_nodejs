require('dotenv').config();
const mysql = require('mysql2/promise');

//create connection
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER, // default empty
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT, //default : 3306
//   password: process.env.DB_PASSWORD
// });

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER, // default empty
  database: process.env.DB_NAME,
  port: process.env.DB_PORT, //default : 3306
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
module.exports = connection;