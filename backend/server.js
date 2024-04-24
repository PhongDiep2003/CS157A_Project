const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());


// Configure MySQL connection
const db = mysql.createConnection({
  host: 'edusparkdbinstance.cnsky8qa0161.us-west-1.rds.amazonaws.com',
  user: 'admin',
  password: 'admin123',
  database: ''
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected to database successfully');
  selectDB()
});

// Define routes
app.post('/login', (req, res) => {
  // db.query('SELECT * FROM my_table', (err, results) => {
  //   if (err) throw err;
  //   res.json(results);
  // });
  const username = req.body.username
  const password = req.body.password
  //check whether the username is already exists or not
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (results) {
      if (results.length < 1) {
        res.json({'msg' : "Username or password is incorrect or does not exist", success: false})
      }
      else {
        res.json({'msg': "Login successfully", 'success': true})
      }
    }
    else {
        res.json({'msg': err.message})
    }
  })
});

const selectDB = () => {
  db.query("USE edusparkDB", (error, results) => {
    if (results) {
      console.log('Selected eduspark database')
    }
    else {
      console.log('Failed to select database', error.message)
    }
  })
}
// Additional routes to interact with the database would go here

// Start the server
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
