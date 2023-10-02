const inquirer = require('inquirer');
const mysql = require('mysql2');

require('dotenv').config();

const PORT = process.env.PORT || 3001;

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user:'root',
        password: process.env.DB_PW,
        database: 'employee_tracker'
    },
    console.log('Connected to the Employee Tracker database.')
);

// connection.connect();

options = ['View all roles', 'View all departments', 'View all employees'];

inquirer.prompt([
    {
        type: 'list',
        name: 'userChoice',
        message: 'What would you like to do?',
        choices: options,
    }
])
.then((answers) => {
    const choice = answers.choice;
    if (choice === "View all roles"){
        db.query("SELECT * FROM roles").then((results) => {
            console.log(results)
        });
    } else if (choice === "View all departments"){
        db.query("SELECT * FROM deparments").then((results) => {
            console.log(results);
        });
    } else if (choice === "View all employees"){
        db.query("SELECT * FROM employees").then((results) => {
            console.log(results);
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });