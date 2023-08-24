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
WHERE id = 2;

-- Update employee managers.
UPDATE employee SET manager_id = 4 
WHERE id = 4;

-- View employees by manager.
SELECT 
CONCAT(manager.first_name, ' ', manager.last_name) AS manager ,
CONCAT(employee.first_name, ' ', employee.last_name) AS employee,
employee.id AS employee_id, 
department.name AS department,
role.title AS role
FROM employee 
LEFT JOIN role ON employee.role_id = role.id 
LEFT JOIN department ON role.department_id = department.id 
LEFT JOIN employee manager ON manager.id = employee.manager_id 
ORDER BY manager;

-- View employees by department.
SELECT 
department.name AS department, 
role.title AS role, 
CONCAT(employee.first_name, ' ', employee.last_name) AS employee,
employee.id AS employee_id
FROM employee 
LEFT JOIN role ON employee.role_id = role.id 
LEFT JOIN department ON role.department_id = department.id 
WHERE department.name = 'Sales'
ORDER BY role.title ASC;

-- Delete departments, roles, and employees.
DELETE FROM employee WHERE id = 1
DELETE FROM role WHERE id = 1
DELETE FROM department WHERE id = 9

-- View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.
SELECT department.name AS department, 
SUM(role.salary) AS utilized_budget FROM employee 
LEFT JOIN role ON employee.role_id = role.id 
LEFT JOIN department ON role.department_id = department.id 
GROUP BY department.id
ORDER BY utilized_budget DESC;
