-- USE cms_db;
-- SELECT DATABASE();

-- View All Departments
SELECT department.id AS department_id,
department.name
FROM department;

-- View All Roles
SELECT role.id AS role_id,
role.title AS title,
department.name AS department,
role.salary
FROM role
LEFT JOIN department ON role.department_id = department.id;

-- View All Employees
SELECT employee.id AS employee_id,
employee.first_name,
employee.last_name,
role.title, 
department.name AS department, 
role.salary, 
CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
FROM employee 
LEFT JOIN role ON 
employee.role_id = role.id 
LEFT JOIN department ON role.department_id = department.id 
LEFT JOIN employee manager ON manager.id = employee.manager_id;

-- Add Department
INSERT INTO department(name)
VALUES ("TEST DEPARTMENT");

-- Add Role
INSERT INTO role(title, salary, department_id)
VALUES ("TEST ROLE", 99999, 8);

-- Add Employee
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("TEST FIRST_N", "TEST LAST_N", 23, 71);

-- Update Employee Role
UPDATE employee SET role_id = 24 
WHERE first_name = 'Nova' AND last_name = 'Mueller';
