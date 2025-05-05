const express = require('express');
const app = express();
const port = 3000; // You can use any port number you want
const connection = require('./db'); // Import the database connection

app.use(express.json()); // Middleware to parse JSON request bodies

// Sample route to get data from the database
app.get('/data', (req, res) => {
  connection.query('SELECT * FROM yourTable', (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching data', error: err });
    }
    res.json(results); // Send the data back to the client
  });
});

// Sample route to insert data into the database
app.post('/data', (req, res) => {
  const { name, age } = req.body; // Expecting 'name' and 'age' to be sent in the body

  connection.query(
    'INSERT INTO yourTable (name, age) VALUES (?, ?)', 
    [name, age], 
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Error inserting data', error: err });
      }
      res.status(201).json({ message: 'Data inserted successfully', results });
    }
  );
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
