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

inquirer.prompt([
    {
        type: 'list',
        name: 'userChoice',
        message: 'What would you like to do?',
        choices: ['View all roles', 'View all departments', 'Update employee roles', 'Update department roles']
    }
])
.then((data) => {

})

// const app = inquirer.prompt([
//     {
        
//     }
// ]);

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });