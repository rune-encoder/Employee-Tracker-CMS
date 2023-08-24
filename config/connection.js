// Import mysql module. 
const mysql = require("mysql2");
// Module loads environment variables from a .env file for our passwords.
require("dotenv").config();

// Create a connection to the database.
const db = mysql
  .createConnection(
    {
      host: "localhost",
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    console.log(`Connected to the Employee CMS Database.`)
  )
  .promise();

module.exports = db;
