const db = require("../config/connection.js");

function Queries() {
  this.list = [];
  this.connect = async function () {
    let result = await db.query(this.query);
    return result;
  };
  this.departmentList = async function () {
    let list = [];
    let result = await db.query(`SELECT department.id AS value,
      department.name
      FROM department;`);
    for (let i = 0; i < result[0].length; i++) {
      list.push(await result[0][i]);
    }
    return list;
  };
}

function ViewAllDepartments() {
  Queries.call(this);
  this.query = `SELECT department.id AS department_id,
    department.name
    FROM department;`;
}

function ViewAllRoles() {
  Queries.call(this);
  this.query = `SELECT role.id AS role_id,
    role.title AS title,
    department.name AS department,
    role.salary
    FROM role
    LEFT JOIN department ON role.department_id = department.id;`;
}

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

function AddDepartment(name) {
  Queries.call(this);
  this.connect = async function () {
    let result = await db.query(this.query, this.name);
    return result;
  };
  this.name = name;
  this.query = `INSERT INTO department(name)
  VALUES (?)`;
}

function AddRole(title, salary, departmentID) {
  Queries.call(this);
  this.connect = async function () {
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

module.exports = {
  Queries: Queries,
  ViewAllDepartments: ViewAllDepartments,
  ViewAllRoles: ViewAllRoles,
  ViewAllEmployees: ViewAllEmployees,
  AddDepartment: AddDepartment,
  AddRole: AddRole,
};
