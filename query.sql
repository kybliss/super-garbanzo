SELECT * FROM departments;

SELECT * FROM roles;

SELECT * FROM employees;

INSERT INTO departments (name)
VALUES ("Department");

INSERT INTO roles (title, department_id)
VALUES ("Role", 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("First", "Last", 1 NULL);

UPDATE employees SET role_id = 2 WHERE id = 1;