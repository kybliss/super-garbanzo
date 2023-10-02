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
.then( function (answers) {
    const choice = answers.userChoice;
    switch (choice) {
        case "View all roles": {
        db.promise().query("SELECT * FROM roles").then(([data]) => {
            console.log(data);
        });
        break;
    } case "View all departments":
        db.promise().query("SELECT * FROM departments").then(([data]) => {
            console.log(data);
        })
        break;
     case "View all employees": {
        db.promise().query("SELECT * FROM employees").then(([data]) => {
            console.log(data);
        });
        break;
    }
    }
});

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });