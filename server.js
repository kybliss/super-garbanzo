const inquirer = require('inquirer');
const mysql = require('mysql');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user:'root',
        password: '',
        database: 'employee_tracker'
    },
    console.log('Connected to the Employee Tracker database.')
);

connection.connect();

const app = inquirer.prompt([
    {
        type: 'input',
        name: 'query',
        message: 'enter a sql query'
    }
]);

app.then((answer) => {
    if (err){
        console.log(err);
        return;
    }

    console.log(results);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });