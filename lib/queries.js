// Import database connection to query SQL statements. 
const db = require("../config/connection.js");

// Constructor function contains re-usable code to print table without additional input. 
function Queries() {
  this.result = async function () {
    let result = await db.query(this.query);
    return result;
  };
}

// Constructor function creates empty array for department lists, role lists, and employee lists.
function CreateLists() {
  Queries.call(this);
  this.getDepartmentList = [];
  this.getRoleList = [];
  this.getEmployeeList = [];
}

// Saves department list from SQL database as a prototype. 
CreateLists.prototype.getDepartmentList = (async function () {
  let list = [];
  let result = await db.query(`SELECT department.id AS value,
    department.name
    FROM department;`);
  for (let i = 0; i < result[0].length; i++) {
    list.push(await result[0][i]);
  }
  return list;
})();

// Saves role list from SQL database as a prototype. 
CreateLists.prototype.getRoleList = (async function () {
  let list = [];
  let result = await db.query(`SELECT role.id AS value,
      role.title AS name
      FROM role;`);
  for (let i = 0; i < result[0].length; i++) {
    list.push(await result[0][i]);
  }
  return list;
})();

// Saves employee list from SQL database as a prototype. 
CreateLists.prototype.getEmployeeList = (async function () {
  let list = [];
  let result = await db.query(`SELECT employee.id AS value,
      CONCAT(employee.first_name, ' ', employee.last_name) AS name
      FROM employee;`);
  for (let i = 0; i < result[0].length; i++) {
    list.push(await result[0][i]);
  }
  return list;
})();

// Constructor used to house query to view department table. 
function ViewAllDepartments() {
  Queries.call(this);
  this.query = `SELECT department.id AS department_id,
    department.name
    FROM department;`;
}

// Constructor used to house query to view role table. 
function ViewAllRoles() {
  Queries.call(this);
  this.query = `SELECT role.id AS role_id,
    role.title AS title,
    department.name AS department,
    role.salary
    FROM role
    LEFT JOIN department ON role.department_id = department.id;`;
}

// Constructor used to house query to view employee table. 
function ViewAllEmployees() {
  Queries.call(this);
  this.query = `SELECT employee.id AS employee_id,
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
    LEFT JOIN employee manager ON manager.id = employee.manager_id;`;
}

// Constructor houses a query to add department passing in our choices. 
function AddDepartment(name) {
  Queries.call(this);
  this.result = async function () {
    let result = await db.query(this.query, this.name);
    return result;
  };
  this.name = name;
  this.query = `INSERT INTO department(name)
  VALUES (?)`;
}

// Constructor houses a query to add role passing in our choices. 
function AddRole(title, salary, departmentID) {
  Queries.call(this);
  this.result = async function () {
    let result = await db.query(this.query, [
      this.title,
      this.salary,
      this.departmentID,
    ]);
    return result;
  };
  this.title = title;
  this.salary = salary;
  this.departmentID = departmentID;
  this.query = `INSERT INTO role(title, salary, department_id) VALUES (?, ?, ?);`;
}

// Constructor houses a query to add employee passing in our choices. 
function AddEmployee(firstName, lastName, roleID, managerID) {
  Queries.call(this);
  this.result = async function () {
    let result = await db.query(this.query, [
      this.firstName,
      this.lastName,
      this.roleID,
      this.managerID,
    ]);
    return result;
  };
  this.firstName = firstName;
  this.lastName = lastName;
  this.roleID = roleID;
  this.managerID = managerID;
  this.query = `INSERT INTO employee(first_name, last_name, role_id, manager_id)
  VALUES (?, ?, ?, ?);`;
}

// Constructor houses a query to update employee's role by passing in our choices. 
function UpdateEmployeeRole(roleID, employee) {
  Queries.call(this);
  this.result = async function () {
    let result = await db.query(this.query, [this.roleID, this.employee]);
    return result;
  };
  this.roleID = roleID;
  this.employee = employee;
  this.query = `UPDATE employee SET role_id = ? 
  WHERE id = ?`;
}

// Constructor houses a query to update employee's manager by passing in our choices. 
function UpdateEmployeeManager(managerID, employeeID) {
  Queries.call(this);
  this.result = async function () {
    let result = await db.query(this.query, [this.managerID, this.employeeID]);
    return result;
  };
  this.managerID = managerID;
  this.employeeID = employeeID;
  this.query = `UPDATE employee SET manager_id = ? 
  WHERE id = ?;`;
}

// Constructor houses a query to view employees by manager. 
function ViewEmployeesbyManager() {
  Queries.call(this);
  this.query = `SELECT 
  CONCAT(manager.first_name, ' ', manager.last_name) AS manager ,
  CONCAT(employee.first_name, ' ', employee.last_name) AS employee,
  employee.id AS employee_id, 
  department.name AS department,
  role.title AS role
  FROM employee 
  LEFT JOIN role ON employee.role_id = role.id 
  LEFT JOIN department ON role.department_id = department.id 
  LEFT JOIN employee manager ON manager.id = employee.manager_id 
  ORDER BY manager;`;
}

// Constructor houses a query to view employees by department by passing in our choices. 
function ViewEmployeesbyDepartment(department) {
  Queries.call(this);
  this.result = async function () {
    let result = await db.query(this.query, this.department);
    return result;
  };
  this.department = department;
  this.query = `SELECT 
  department.name AS department, 
  role.title AS role, 
  CONCAT(employee.first_name, ' ', employee.last_name) AS employee,
  employee.id AS employee_id
  FROM employee 
  LEFT JOIN role ON employee.role_id = role.id 
  LEFT JOIN department ON role.department_id = department.id 
  WHERE department.id = ?
  ORDER BY role.title ASC;`;
}

// Constructor houses a query to delete based on our choices a role, department, or employee. 
function Delete(group, item) {
  Queries.call(this);
  this.group = group;
  this.item = item;
  this.query = `DELETE FROM ${this.group} WHERE id = ?`;
  this.result = async function () {
    let result = await db.query(this.query, this.item);
    return result;
  };
}

// Constructor houses a query to view total utilized budget. 
function ViewTotalUtilizedBudget() {
  Queries.call(this);
  this.query = `SELECT department.name AS department, 
  SUM(role.salary) AS utilized_budget FROM employee 
  LEFT JOIN role ON employee.role_id = role.id 
  LEFT JOIN department ON role.department_id = department.id 
  GROUP BY department.id
  ORDER BY utilized_budget DESC;`;
}

module.exports = {
  Queries: Queries,
  CreateLists: CreateLists,
  ViewAllDepartments: ViewAllDepartments,
  ViewAllRoles: ViewAllRoles,
  ViewAllEmployees: ViewAllEmployees,
  AddDepartment: AddDepartment,
  AddRole: AddRole,
  AddEmployee: AddEmployee,
  UpdateEmployeeRole: UpdateEmployeeRole,
  UpdateEmployeeManager: UpdateEmployeeManager,
  ViewEmployeesbyManager: ViewEmployeesbyManager,
  ViewEmployeesbyDepartment: ViewEmployeesbyDepartment,
  Delete: Delete,
  ViewTotalUtilizedBudget: ViewTotalUtilizedBudget,
};
