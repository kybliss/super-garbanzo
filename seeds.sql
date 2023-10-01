INSERT INTO departments (name)
VALUES ('Sales'),
('Marketing'),
('Engineering'),
('Human Resources');

INSERT INTO roles (title, department_id)
VALUES ('Sales Representative', 1),
('Marketing Coordinartor', 2),
("Electrical Engineer", 3),
("HR Agent", 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("John", "Lennon", 1, NULL),
("Paul", "McCartney", 2, NULL),
("George", "Harrison", 3, NULL),
("Ringo", "Starr", 4, NULL);