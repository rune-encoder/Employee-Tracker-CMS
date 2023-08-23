const { db } = require("../config/connection.js");
// const inquirer = require("inquirer");
const cTable = require('console.table');
// const questions = require("./questions");
const menu = require("../index.js");

function Queries() {
  this.connect = function () {
    db.query(this.query, (err, data) => {
      if (err) throw err;
      console.log(`\n=========================================`);
      console.log(`\n${cTable.getTable(data)}\n\n`);
    });
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

module.exports = {
  Queries: Queries,
  ViewAllDepartments: ViewAllDepartments,
  ViewAllRoles: ViewAllRoles,
  ViewAllEmployees: ViewAllEmployees,
};