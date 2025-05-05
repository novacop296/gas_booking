const mysql = require('mysql2');
require('dotenv').config(); // Load environment variables from .env file

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',        // 'localhost' is a string, so use quotes
  user: 'root',             // 'root' is a string, so use quotes
  password: 'Novacop296@',  // 'Novacop296@' is a string, so use quotes
  database: 'gas_booking'   // 'gas_booking' is a string, so use quotes
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the MySQL database');
  }
});

// Export the connection to use in other files
module.exports = connection;
