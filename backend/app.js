// Import Express
const express = require("express");

// Import mysql module
const mysql = require("mysql2");

// Create the express app
const app = express();

//Define connection parameters for the database
const dbConfig = {
  password: "AbeGarageSarry",
  user: "root",
  database: "demo_app",
};
// create the connection to the database
let connection = mysql.createConnection(dbConfig);
// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected");
});
// Use the express.json middleware to parse the request body
app.use(express.json()); //extended is set as true by default in newer versions of expressjs and it allows us
// get request handler arrow function to send response back
app.get("/", (req, res) => {
  res.send("Test the port");
});
// Allow CORS to all
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE" // what matters here is that OPTIONS is present
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//post request handler to add a new emplouee to the database
app.post("/add-employee", (req, res) => {
  //console.log(req.body);
  //sql query to add to the database table called employee_test
  const sql = `INSERT INTO employee_test (first_name, last_name, email, password) VALUES ('${req.body.first_name}', '${req.body.last_name}','${req.body.email}', '${req.body.password}')`;

  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 Record Inserted");
  });
  const response = {
    status: "success",
    message: "Employee added succesfully",
  };
  res.status(200).json(response);
});

// Post request handler to login an employee which comes to this route
app.post("/login", (req, res) => {
  console.log(req.body);
  // write the sql query to retrieve the employee with the email and password provided by the user and compare it with the data in the database
  const sql = `SELECT * FROM employee_test WHERE email= '${req.body.email}' AND password = '${req.body.password}'`;
  // const sql = `SELECT * FROM employee_test WHERE email = '${req.body.email}' AND password = '${req.body.password}'`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    if (result.length > 0) {
      const response = {
        status: "success",
        message: "Login successful",
      };
      res.status(200).json(response);
    } else {
      const response = {
        status: "failure",
        message: "Login failed",
      };
      res.status(200).json(response);
    }
  });
});



const port = 4000;
// how to setup a listener for express port
app.listen(port, () => console.log(`Listening on port ${port}`));
